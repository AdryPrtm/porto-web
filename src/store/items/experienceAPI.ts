import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URI, EXPERIENCE_QUERY } from "constants/apiBaseURI";
import {
	AllExperienceResponse,
	ExperienceRequest,
	ExperienceResponse,
} from "types/experienceTypes";

export const experienceAPI = createApi({
	reducerPath: "experienceAPI",
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URI }),
	endpoints: (builder) => ({
		getAllExperiences: builder.query<AllExperienceResponse, void>({
			query: () => `${EXPERIENCE_QUERY}/all`,
		}),
		getExperienceById: builder.query<ExperienceResponse, string>({
			query: (id) => `${EXPERIENCE_QUERY}/${id}`,
		}),
		postExperience: builder.mutation<ExperienceResponse, ExperienceRequest>({
			query: (experience) => ({
				url: `${EXPERIENCE_QUERY}/create`,
				method: "POST",
				body: experience,
			}),
		}),
		updateExperience: builder.mutation<
			ExperienceResponse,
			{ id: string; experience: ExperienceRequest }
		>({
			query: ({ id, experience }) => ({
				url: `${EXPERIENCE_QUERY}/update/${id}`,
				method: "PUT",
				body: experience,
			}),
		}),
		deleteExperience: builder.mutation<
			{ success: boolean; message: string },
			string
		>({
			query: (id) => ({
				url: `${EXPERIENCE_QUERY}/delete/${id}`,
				method: "DELETE",
			}),
		}),
	}),
});

export const {
	useGetAllExperiencesQuery,
	useGetExperienceByIdQuery,
	usePostExperienceMutation,
	useUpdateExperienceMutation,
	useDeleteExperienceMutation,
} = experienceAPI;
