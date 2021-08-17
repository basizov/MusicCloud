import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import authReducer from './authStore/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({
  auth: authReducer
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export type RootState = ReturnType<typeof reducer>;
export type RootDispatch = typeof store.dispatch;

export default store;
