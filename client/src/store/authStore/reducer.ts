import { AuthActionsType, EAuthActions } from "./action";
import { defaultAuthState, IAuthState } from "./state";

export const authReducer = (state = defaultAuthState, action: AuthActionsType): IAuthState => {
  switch (action.type) {
    case EAuthActions.LOGIN:
      return ({ ...state, isAuth: true, user: action.payload });
    case EAuthActions.LOGOUT:
      return ({ ...state, isAuth: false, user: null });
    default:
      return (state);
  }
};
