import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { projectAPI } from "./items/projectAPI";
import { experienceAPI } from "./items/experienceAPI";
import { certificateAPI } from "./items/certificateAPI";
import { userAPI } from "./user/userAPI";
import { userLoginAPI } from "./user/userLoginAPI";
import userReducer from "./user/userSlice";

// Combine all reducers
const rootReducer = combineReducers({
	user: userReducer,
	[experienceAPI.reducerPath]: experienceAPI.reducer,
	[projectAPI.reducerPath]: projectAPI.reducer,
	[certificateAPI.reducerPath]: certificateAPI.reducer,
	[userAPI.reducerPath]: userAPI.reducer,
	[userLoginAPI.reducerPath]: userLoginAPI.reducer,
});

// Configure redux-persist
const persistConfig = {
	key: "root",
	storage,
	whitelist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create store with persisted reducer
const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false, // Required by redux-persist
		})
			.concat(experienceAPI.middleware)
			.concat(projectAPI.middleware)
			.concat(certificateAPI.middleware)
			.concat(userAPI.middleware)
			.concat(userLoginAPI.middleware),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;

export default store;
