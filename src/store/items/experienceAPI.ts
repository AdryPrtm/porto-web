import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URI, EXPERIENCE_QUERY } from "constants/apiBaseURI";
import { AllExperienceResponse, Experience } from "types/experienceTypes";

export const experienceAPI = createApi({
	reducerPath: "experienceAPI",
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URI }),
	endpoints: (builder) => ({
		getAllExperiences: builder.query<AllExperienceResponse, void>({
			query: () => `${EXPERIENCE_QUERY}/all`,
		}),
		getExperienceById: builder.query<Experience, string>({
			query: (id) => `${EXPERIENCE_QUERY}/${id}`,
		}),
		postExperience: builder.mutation<void, void>({}),
	}),
});

export const { useGetAllExperiencesQuery, useGetExperienceByIdQuery } =
	experienceAPI;
