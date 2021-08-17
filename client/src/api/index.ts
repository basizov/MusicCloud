import axios from './axios';
import { AxiosResponse } from 'axios';
import { IAuthUser, IUserResponse } from '../models/IUser';

enum ERoutes {
  REGISTER = '/auth/register',
  LOGIN = '/auth/login',
  LOGOUT = '/auth/logout',
  REFRESH = '/auth/refresh'
};

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: <T>(url: string, urlParams?: URLSearchParams) => axios.get<T>(url, { params: urlParams }).then(responseBody),
  post: <T>(url: string, body = {}) => axios.post<T>(url, body).then(responseBody)
};

const Auth = {
  register: (payload: IAuthUser) => requests.post<IUserResponse>(ERoutes.REGISTER, payload),
  login: (payload: IAuthUser) => requests.post<IUserResponse>(ERoutes.LOGIN, payload),
  logout: () => requests.post(ERoutes.LOGOUT),
  refresh: () => requests.get<IUserResponse>(ERoutes.REFRESH)
};

export default {
  Auth
};
