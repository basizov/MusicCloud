import { IUser } from "../../models/IUser";

export interface IAuthState {
  user: IUser | null;
  isAuth: boolean;
};

export const defaultAuthState: IAuthState = {
  user: null,
  isAuth: false
};
