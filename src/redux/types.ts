import store from "./store";
import {useDispatch,useSelector} from "react-redux";

export type RootState = ReturnType<typeof store.getState>//
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector = (selector: (state: RootState) => any) => useSelector(selector)