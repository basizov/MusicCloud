import { IUser } from "../../models/IUser";

export enum EAuthActions {
  LOGIN = 'LOGIN'
};

export interface ILogin {
  type: EAuthActions.LOGIN,
  payload: IUser
};

type AuthActionsType = ILogin;

export const setUser = (payload: IUser) => ({ type: EAuthActions.LOGIN, payload });

export default AuthActionsType;
