import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URI, LOGIN_QUERY } from "constants/apiBaseURI";
import { LoginCredentials, LoginResponse } from "types/userTypes";
import { saveCurrentToken } from "./userSlice";

export const userLoginAPI = createApi({
	reducerPath: "userLoginAPI",
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URI,
	}),
	endpoints: (builder) => ({
		loginUser: builder.mutation<LoginResponse, LoginCredentials>({
			query: (credentials) => ({
				url: LOGIN_QUERY,
				method: "POST",
				body: credentials,
			}),
			async onQueryStarted(_, { dispatch, queryFulfilled }) {
				try {
					const { data } = await queryFulfilled;
					console.log(data);
					dispatch(saveCurrentToken(data.token));
				} catch (error) {
					console.error("Login failed:", error);
				}
			},
		}),
	}),
});

export const { useLoginUserMutation } = userLoginAPI;
