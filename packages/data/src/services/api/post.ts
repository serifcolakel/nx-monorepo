import { POST_API_URL } from './libs/constants';
import {
  errorInterceptor,
  requestInterceptor,
  responseInterceptor,
} from './libs/interceptors';
import api from '.';

export const postApi = api.create({ baseURL: POST_API_URL });

postApi.interceptors.request.use(requestInterceptor, (error) => Promise.reject(error));

postApi.interceptors.response.use(responseInterceptor, errorInterceptor);
