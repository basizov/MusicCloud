import AuthActionsType, { EAuthActions } from "./action";
import { defaultAuthState, IAuthState } from "./state";

const authReducer = (state = defaultAuthState, action: AuthActionsType): IAuthState => {
  switch (action.type) {
    case EAuthActions.LOGIN:
      return ({ ...state, isAuth: true, user: action.payload });
    default:
      return (state);
  }
};

export default authReducer;
