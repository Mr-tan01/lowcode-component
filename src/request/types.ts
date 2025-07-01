import {
    AxiosRequestConfig,
    ResponseType,
    AxiosInstance,
    CancelTokenSource,
} from 'axios'

export type HttpMethod =
    | 'get'
    | 'post'
    | 'put'
    | 'delete'
    | 'patch'
    | 'head'
    | 'options'

export interface RequestConfig extends AxiosRequestConfig {
    retry?: number // 重试次数
    cache?: boolean | number // 是否缓存，或缓存时间(ms)
    withToken?: boolean // 是否自动携带token
    responseType?: ResponseType
}

export interface ResponseData<T = any> {
    data: T // 响应数据
    status: number // HTTP状态码
    statusText: string // 状态消息
    headers: any // 响应头
    config: RequestConfig // 请求配置
}

export interface RequestInstance {
    <T = any>(config: RequestConfig): Promise<ResponseData<T>>
    get<T = any>(
        url: string,
        data?: any,
        config?: RequestConfig,
    ): Promise<ResponseData<T>>
    post<T = any>(
        url: string,
        data?: any,
        config?: RequestConfig,
    ): Promise<ResponseData<T>>
    put<T = any>(
        url: string,
        data?: any,
        config?: RequestConfig,
    ): Promise<ResponseData<T>>
    delete<T = any>(
        url: string,
        config?: RequestConfig,
    ): Promise<ResponseData<T>>
    cancelRequest: (source: CancelTokenSource) => void
    setToken: (token: string) => void
    clearToken: () => void
    axiosInstance: AxiosInstance
}
