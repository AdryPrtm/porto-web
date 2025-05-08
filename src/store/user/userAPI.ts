import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URI, USER_QUERY } from "constants/apiBaseURI";

export const userAPI = createApi({
	reducerPath: "userAPI",
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URI }),
	endpoints: (builder) => ({
		getProfile: builder.query<void, void>({
			query: () => `${USER_QUERY}`,
		}),
	}),
});

export const { useGetProfileQuery } = userAPI;
