import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import api from '.';
import axios from './axios';

const requestInterseptors = (config: AxiosRequestConfig) => {
  const accessToken = localStorage.getItem('accessToken') || '';

  config.headers.Authorization = `Bearer ${accessToken}`;
  return (config);
};

const responseInterseptors = (response: AxiosResponse) => {
  return (response);
};

interface IResponseConfig extends AxiosRequestConfig {
  _isRetry: boolean;
}

const responseErrors = async (e: AxiosError) => {
  const originalRequest = e.config as IResponseConfig;

  if (e.response && e.response.status === 401 && originalRequest && !originalRequest._isRetry) {
    try {
      originalRequest._isRetry = true;
      const user = await api.Auth.refresh();

      if (user) {
        localStorage.setItem('accessToken', user.accessToken);
      }
      return (axios.request(originalRequest));
    } catch (e) {
      console.error(e);
    }
  }
};

const interseptors = (axios: AxiosInstance) => {
  axios.interceptors.request.use(requestInterseptors);
  axios.interceptors.response.use(responseInterseptors, responseErrors);
};

export default interseptors;
