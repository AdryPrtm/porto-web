import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URI, FILE_QUERY } from "constants/apiBaseURI";
import { FileResponse } from "types/fileTypes";

export const fileAPI = createApi({
	reducerPath: "fileAPI",
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URI }),
	endpoints: (builder) => ({
		uploadFile: builder.mutation<
			FileResponse,
			{ id: string; files: Record<string, File> }
		>({
			query: ({ id, files }) => {
				const formData = new FormData();

				formData.append("id", id);
				Object.entries(files).forEach(([fieldName, file]) => {
					formData.append(fieldName, file);
				});

				return {
					url: `${FILE_QUERY}`,
					method: "POST",
					body: formData,
				};
			},
		}),
	}),
});

export const { useUploadFileMutation } = fileAPI;
