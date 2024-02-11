/**
 * Interceptors for the axios instance
 */
import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

export const requestInterceptor = (config: InternalAxiosRequestConfig) => Promise.resolve(config);

export const responseInterceptor = (response: AxiosResponse) => Promise.resolve(response);

export const errorInterceptor = async (error: AxiosError) => Promise.reject(error.response?.data);
