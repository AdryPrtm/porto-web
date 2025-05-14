import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URI, USER_QUERY } from "constants/apiBaseURI";
import { UserRequest, UserResponse } from "types/userTypes";

export const userAPI = createApi({
	reducerPath: "userAPI",
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URI }),
	endpoints: (builder) => ({
		getProfile: builder.query<UserResponse, void>({
			query: () => `${USER_QUERY}`,
		}),
		updateProfile: builder.mutation<UserResponse, { profile: UserRequest }>({
			query: ({ profile }) => ({
				url: `${USER_QUERY}`,
				method: "PUT",
				body: profile,
			}),
		}),
	}),
});

export const { useGetProfileQuery } = userAPI;
