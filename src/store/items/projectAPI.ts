import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URI, PROJECT_QUERY } from "constants/apiBaseURI";
import { ProjectRequest, ProjectResponse } from "types/projectTypes";

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
		postProject: builder.mutation<ProjectResponse, ProjectRequest>({
			query: (project) => ({
				url: `${PROJECT_QUERY}/create`,
				method: "POST",
				body: project,
			}),
		}),
		updateProject: builder.mutation<
			ProjectResponse,
			{ id: string; project: ProjectRequest }
		>({
			query: ({ id, project }) => ({
				url: `${PROJECT_QUERY}/update/${id}`,
				method: "PUT",
				body: project,
			}),
		}),
		deleteProject: builder.mutation<
			{ success: boolean; message: string },
			string
		>({
			query: (id) => ({
				url: `${PROJECT_QUERY}/delete/${id}`,
				method: "DELETE",
			}),
		}),
	}),
});

export const { useGetAllProjectsQuery, useGetProjectByIdQuery } = projectAPI;
