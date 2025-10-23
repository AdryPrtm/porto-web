import { createApi, BaseQueryFn } from "@reduxjs/toolkit/query/react";

import {
  Certificate,
  Experience,
  LocalQueryArgs,
  LocalQueryError,
  Profile,
  Project,
} from "types";

import profileData from "../data/profile.json";
import projectsData from "../data/projects.json";
import experiencesData from "../data/experiences.json";
import certificatesData from "../data/certificates.json";

const localBaseQuery: BaseQueryFn<LocalQueryArgs, unknown, LocalQueryError> = (
  args
) => {
  switch (args) {
    case "profile":
      return { data: profileData };
    case "projects":
      return { data: projectsData };
    case "experiences":
      return { data: experiencesData };
    case "certificates":
      return { data: certificatesData };
    default:
      return { error: { status: 404, data: "Not Found" } };
  }
};

export const portfolioApi = createApi({
  reducerPath: "portfolioApi",
  baseQuery: localBaseQuery,
  endpoints: (builder) => ({
    getProfile: builder.query<Profile[], void>({
      query: () => "profile",
    }),
    getProjects: builder.query<Project[], void>({
      query: () => "projects",
    }),
    getExperiences: builder.query<Experience[], void>({
      query: () => "experiences",
    }),
    getCertificates: builder.query<Certificate[], void>({
      query: () => "certificates",
    }),
  }),
});

export const {
  useGetProfileQuery,
  useGetProjectsQuery,
  useGetExperiencesQuery,
  useGetCertificatesQuery,
} = portfolioApi;
