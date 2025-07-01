import request from './request'
import type { AxiosResponse } from 'axios'

// 定义统一响应结构
interface ApiResponse<T = any> {
    status: number
    data: T
    message?: string
}

// 定义错误结构
interface ApiError {
    status: number
    message: string
    response?: AxiosResponse
}

/**
 * 封装GET请求
 * @param url 请求地址
 * @param params 请求参数
 * @returns Promise<ApiResponse>
 */
export const getResponse = <T = any>(
    url: string,
    params?: Record<string, any>,
): Promise<ApiResponse<T>> => {
    return new Promise((resolve, reject) => {
        request
            .get<T>(url, params)
            .then((response) => {
                // 根据状态码处理
                if (response.status >= 200 && response.status < 300) {
                    resolve({
                        status: response.status,
                        data: response.data,
                    })
                } else {
                    reject({
                        status: response.status,
                        message: '请求失败',
                        response,
                    })
                }
            })
            .catch((error) => {
                const err: ApiError = {
                    status: error.response?.status || 500,
                    message: error.message || '网络错误',
                    response: error.response,
                }
                reject(err)
            })
    })
}

/**
 * 封装POST请求
 * @param url 请求地址
 * @param data 请求体数据
 * @returns Promise<ApiResponse>
 */
export const postResponse = <T = any>(
    url: string,
    data?: Record<string, any>,
): Promise<ApiResponse<T>> => {
    return new Promise((resolve, reject) => {
        request
            .post<T>(url, data)
            .then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    resolve({
                        status: response.status,
                        data: response.data,
                    })
                } else {
                    reject({
                        status: response.status,
                        message: '请求失败',
                        response,
                    })
                }
            })
            .catch((error) => {
                const err: ApiError = {
                    status: error.response?.status || 500,
                    message: error.message || '网络错误',
                    response: error.response,
                }
                reject(err)
            })
    })
}

/**
 * 设置认证Token
 * @param token 认证令牌
 */
export const setToken = (token: string): void => {
    request.setToken(token)
}

/**
 * 获取认证Token
 * @param token 认证令牌
 */
export const getToken = getResponse<{ id: string; secret: string }>(
    '/jysl/oauth/token',
    {
        client_id: '74109f7095974ab1a5e930c8e998580d',
        client_secret: 'JqvrFbO!',
    },
).then((res: any) => {
    if (res.status === 200 && res.data.access_token) {
        localStorage.setItem('access_token', res.data.access_token)
    } else console.log('获取token失败, 请检查密钥信息')
})
