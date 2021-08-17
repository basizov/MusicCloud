import { AxiosInstance, AxiosRequestConfig } from 'axios';

const requestInterseptors = (config: AxiosRequestConfig) => {
  const accessToken = localStorage.getItem('accessToken') || '';

  config.headers.Authorization = `Bearer ${accessToken}`;
  return (config);
};

const interseptors = (axios: AxiosInstance) => {
  axios.interceptors.request.use(requestInterseptors);
};

export default interseptors;
