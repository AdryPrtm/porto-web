import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URI, PROJECT_QUERY } from "constants/apiBaseURI";

export const projectAPI = createApi({
	reducerPath: "projectAPI",
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URI }),
	endpoints: (builder) => ({
		getAllProjects: builder.query<void, void>({
			query: () => `${PROJECT_QUERY}/all`,
		}),
		getProjectById: builder.query<void, string>({
			query: (id) => `${PROJECT_QUERY}/${id}`,
		}),
	}),
});

export const { useGetAllProjectsQuery, useGetProjectByIdQuery } = projectAPI;
