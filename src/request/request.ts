import axios, { AxiosRequestConfig, AxiosResponse, CancelTokenSource } from "axios";
import { RequestConfig, ResponseData, RequestInstance } from "./types";

const cacheStore = new Map<string, { expire: number; data: any }>();
const pendingRequests = new Map<CancelTokenSource, boolean>();

export function createRequest(baseConfig: RequestConfig = {}): RequestInstance {
    let token: string | null = null;

    // 创建axios实例
    const instance = axios.create({
        baseURL: baseConfig.baseURL,
        timeout: 30000,
        ...baseConfig,
    });

    // 请求拦截器
    instance.interceptors.request.use(
        (config) => {
            // 自动添加token
            if (token && (config as RequestConfig).withToken !== false) {
                config.headers = config.headers || {};
                config.headers["Authorization"] = `Bearer ${token}`;
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    // 响应拦截器
    instance.interceptors.response.use(
        (response) => {
            return response;
        },
        async (error) => {
            const config = error.config as RequestConfig;

            // 请求取消错误不重试
            if (axios.isCancel(error)) {
                return Promise.reject(error);
            }

            // 重试逻辑
            if (config.retry && config.retry > 0) {
                config.retry--;

                // 指数退避
                const delay = Math.pow(2, config.retry || 0) * 1000;
                await new Promise((resolve) => setTimeout(resolve, delay));

                return instance(config);
            }

            return Promise.reject(error);
        }
    );

    // 核心请求方法
    async function request<T = any>(config: RequestConfig): Promise<ResponseData<T>> {
        // 合并配置
        const mergedConfig: RequestConfig = {
            method: "get",
            withToken: true,
            ...baseConfig,
            ...config,
            headers: {
                ...baseConfig.headers,
                ...config.headers,
            },
        };

        if (mergedConfig.method?.toLowerCase() === "get") {
            mergedConfig.params = {
                ...mergedConfig.params,
                ...(mergedConfig.data || {}), // 将data合并到params
            };
            delete mergedConfig.data; // 删除data，避免冲突
        }

        // 检查缓存
        const cacheKey = JSON.stringify({
            url: mergedConfig.url,
            method: mergedConfig.method,
            params: mergedConfig.params,
            data: mergedConfig.data,
        });

        if (mergedConfig.cache) {
            const cache = cacheStore.get(cacheKey);
            const now = Date.now();
            if (cache && (mergedConfig.cache === true || cache.expire > now)) {
                return cache.data;
            }
        }

        // 创建取消令牌
        const source = axios.CancelToken.source();
        mergedConfig.cancelToken = source.token;
        pendingRequests.set(source, true);

        try {
            const response = await instance.request(mergedConfig);

            const responseData: ResponseData<T> = {
                data: response.data,
                status: response.status,
                statusText: response.statusText,
                headers: response.headers,
                config: mergedConfig,
            };

            // 缓存响应
            if (mergedConfig.cache) {
                const expireTime = typeof mergedConfig.cache === "number" ? Date.now() + mergedConfig.cache : Number.MAX_SAFE_INTEGER;
                cacheStore.set(cacheKey, { expire: expireTime, data: responseData });
            }

            return responseData;
        } finally {
            pendingRequests.delete(source);
        }
    }

    // 添加快捷方法
    request.get = function <T = any>(url: string, data?: any, config?: RequestConfig) {
        return request<T>({ ...config, url, data, method: "get", params: { ...config?.data, ...data } });
    };

    request.post = function <T = any>(url: string, data?: any, config?: RequestConfig) {
        return request<T>({ ...config, url, data, method: "post" });
    };

    request.put = function <T = any>(url: string, data?: any, config?: RequestConfig) {
        return request<T>({ ...config, url, data, method: "put" });
    };

    request.delete = function <T = any>(url: string, config?: RequestConfig) {
        return request<T>({ ...config, url, method: "delete" });
    };

    // 取消请求
    request.cancelRequest = function (source: CancelTokenSource) {
        if (pendingRequests.has(source)) {
            source.cancel("Request canceled by user");
            pendingRequests.delete(source);
        }
    };

    // Token管理
    request.setToken = function (newToken: string) {
        token = newToken;
    };

    request.clearToken = function () {
        token = null;
    };

    // 暴露axios实例
    request.axiosInstance = instance;

    return request as RequestInstance;
}

// 默认实例
const defaultInstance = createRequest({
    baseURL: "",
    headers: {
        "Content-Type": "application/json",
    },
});

export default defaultInstance;
