import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URI, EXPERIENCE_QUERY } from "constants/apiBaseURI";

export const experienceAPI = createApi({
	reducerPath: "experienceAPI",
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URI }),
	endpoints: (builder) => ({
		getAllExperiences: builder.query<void, void>({
			query: () => `${EXPERIENCE_QUERY}/all`,
		}),
		getExperienceById: builder.query<void, string>({
			query: (id) => `${EXPERIENCE_QUERY}/${id}`,
		}),
	}),
});

export const { useGetAllExperiencesQuery, useGetExperienceByIdQuery } =
	experienceAPI;
