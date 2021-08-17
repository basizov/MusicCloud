export interface IUser {
  id: string;
  email: string;
  isEmailActivated: boolean;
};

export interface IUser {
  id: string;
  email: string;
  isEmailActivated: boolean;
};

export interface IUserResponse {
  user: IUser;
  accessToken: string;
  refreshToken: string;
};

export interface IAuthUser {
  email: string;
  password: string;
};
