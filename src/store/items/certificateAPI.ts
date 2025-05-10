import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URI, CERTIFICATE_QUERY } from "constants/apiBaseURI";
import { AllCertificateResponse, Certificate } from "types/certificateTypes";

export const certificateAPI = createApi({
	reducerPath: "certificateAPI",
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URI }),
	endpoints: (builder) => ({
		getAllCertificates: builder.query<AllCertificateResponse, void>({
			query: () => `${CERTIFICATE_QUERY}/all`,
		}),
		getCertificateById: builder.query<Certificate, string>({
			query: (id) => `${CERTIFICATE_QUERY}/${id}`,
		}),
	}),
});

export const { useGetAllCertificatesQuery, useGetCertificateByIdQuery } =
	certificateAPI;
