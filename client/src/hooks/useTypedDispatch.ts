import { useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { IUser } from "../models/IUser";
import { RootDispatch } from "../store";
import AuthActionsType from "../store/authStore/action";

export const useTypedDispatch = () => useDispatch<RootDispatch>();

export const useTypedThunkDispatch = () => useDispatch<ThunkDispatch<IUser | null, unknown, AuthActionsType>>();
