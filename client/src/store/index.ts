import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import { authReducer } from "./authStore/reducer";

const reducer = combineReducers({
  auth: authReducer
});

export type RootState = ReturnType<typeof reducer>;
export type RootDispatch = typeof store.dispatch;

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
