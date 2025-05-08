import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URI, CERTIFICATE_QUERY } from "constants/apiBaseURI";

export const certificateAPI = createApi({
	reducerPath: "certificateAPI",
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URI }),
	endpoints: (builder) => ({
		getAllCertificates: builder.query<void, void>({
			query: () => `${CERTIFICATE_QUERY}/all`,
		}),
		getCertificateById: builder.query<void, string>({
			query: (id) => `${CERTIFICATE_QUERY}/${id}`,
		}),
	}),
});

export const { useGetAllCertificatesQuery, useGetCertificateByIdQuery } =
	certificateAPI;
