import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { profileReducer } from "./slices/user/profileSlice";
import { certificateReducer } from "./slices/user/certificateSlice";
import { projectReducer } from "./slices/user/projectSlice";

const store = configureStore({
	reducer: {
		user: profileReducer,
		certificate: certificateReducer,
		project: projectReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
