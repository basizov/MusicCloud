import { ThunkAction } from "redux-thunk";
import api from "../../api";
import { IAuthUser, IUser } from "../../models/IUser";
import { AuthActionsType, logout, setUser } from "./action";

type AuthThunkType = ThunkAction<Promise<void>, IUser | null, unknown, AuthActionsType>;

export const loginAsyncHandler = (
  credentials: IAuthUser
): AuthThunkType => {
  return async (dispatch) => {
    try {
      const user = await api.Auth.login(credentials);

      if (user) {
        console.log(user);
        localStorage.setItem('accessToken', user.accessToken);
        dispatch(setUser(user.user));
      }
    } catch (e) {
      console.error(e as Error);
    }
  }
};

export const logoutAsyncHandler = (): AuthThunkType => {
  return async (dispatch) => {
    try {
      await api.Auth.logout();
      localStorage.removeItem('accessToken');
      dispatch(logout());
    } catch (e) {
      console.error(e as Error);
    }
  }
};

export const authAsyncHandler = (): AuthThunkType => {
  return async (dispatch) => {
    try {
      const user = await api.Auth.refresh();

      if (user) {
        console.log(user);
        localStorage.setItem('accessToken', user.accessToken);
        dispatch(setUser(user.user));
      }
    } catch (e) {
      console.error(e as Error);
    }
  }
};
