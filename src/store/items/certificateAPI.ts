import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URI, CERTIFICATE_QUERY } from "constants/apiBaseURI";
import {
	AllCertificateResponse,
	CertificateRequest,
	CertificateResponse,
} from "types/certificateTypes";

export const certificateAPI = createApi({
	reducerPath: "certificateAPI",
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URI }),
	endpoints: (builder) => ({
		getAllCertificates: builder.query<AllCertificateResponse, void>({
			query: () => `${CERTIFICATE_QUERY}/all`,
		}),
		getCertificateById: builder.query<CertificateResponse, string>({
			query: (id) => `${CERTIFICATE_QUERY}/${id}`,
		}),
		postCertificate: builder.mutation<CertificateResponse, CertificateRequest>({
			query: (certificate) => ({
				url: `${CERTIFICATE_QUERY}/create`,
				method: "POST",
				body: certificate,
			}),
		}),
		updateCertificate: builder.mutation<
			CertificateResponse,
			{ id: string; certificate: CertificateRequest }
		>({
			query: ({ id, certificate }) => ({
				url: `${CERTIFICATE_QUERY}/update/${id}`,
				method: "PUT",
				body: certificate,
			}),
		}),
		deleteCertificate: builder.mutation<
			{ success: boolean; message: string },
			string
		>({
			query: (id) => ({
				url: `${CERTIFICATE_QUERY}/delete/${id}`,
				method: "DELETE",
			}),
		}),
	}),
});

export const {
	useGetAllCertificatesQuery,
	useGetCertificateByIdQuery,
	usePostCertificateMutation,
	useUpdateCertificateMutation,
	useDeleteCertificateMutation,
} = certificateAPI;
