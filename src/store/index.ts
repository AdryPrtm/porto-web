import { configureStore } from "@reduxjs/toolkit";
// import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { projectAPI } from "./items/projectAPI";
import { experienceAPI } from "./items/experienceAPI";
import { certificateAPI } from "./items/certificateAPI";
import { userAPI } from "./user/userAPI";
import { userLoginAPI } from "./user/userLoginAPI";
import userReducer from "./user/userSlice";

const store = configureStore({
	reducer: {
		[experienceAPI.reducerPath]: experienceAPI.reducer,
		[projectAPI.reducerPath]: projectAPI.reducer,
		[certificateAPI.reducerPath]: certificateAPI.reducer,
		[userAPI.reducerPath]: userAPI.reducer,
		[userLoginAPI.reducerPath]: userLoginAPI.reducer,
		user: userReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware()
			.concat(experienceAPI.middleware)
			.concat(projectAPI.middleware)
			.concat(certificateAPI.middleware)
			.concat(userAPI.middleware)
			.concat(userLoginAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

// export type AppDispatch = typeof store.dispatch;

// export const useAppDispatch = () => useDispatch<AppDispatch>();
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
