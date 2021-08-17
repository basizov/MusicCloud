import { ThunkAction } from "redux-thunk";
import api from "../../api";
import { IAuthUser, IUser } from "../../models/IUser";
import AuthActionsType, { setUser } from "./action";

type AuthThunkType = ThunkAction<Promise<void>, IUser | null, unknown, AuthActionsType>;

export const loginAsyncHandler = (
  credentials: IAuthUser
): AuthThunkType => {
  return async (dispatch) => {
    try {
      const user = await api.Auth.login(credentials);

      console.log(user);
      localStorage.setItem('accessToken', user.accessToken);
      dispatch(setUser(user.user));
    } catch (e) {
      console.error(e as Error);
    }
  }
};
