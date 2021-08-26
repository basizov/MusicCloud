import { IUser } from "../../models/IUser";

export enum EAuthActions {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT'
};

export const setUser = (payload: IUser | null): LoginType => ({ type: EAuthActions.LOGIN, payload });
export const logout = (): LogoutType => ({ type: EAuthActions.LOGOUT });

export type LoginType = {
  type: EAuthActions.LOGIN,
  payload: IUser | null
};
export type LogoutType = {
  type: EAuthActions.LOGOUT
};
export type AuthActionsType = LoginType | LogoutType;
