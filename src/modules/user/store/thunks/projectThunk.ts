import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

export const fetchProjects = createAsyncThunk(
	"project/fetchProjects",
	async (_, { rejectWithValue }) => {
		try {
			const response = await axios.get(
				"https://porto.ngeengz.eu/api/v1/project/all"
			);
			if (response.status === 200) {
				return response.data.data;
			} else {
				return rejectWithValue("Failed to fetch projects");
			}
		} catch (error) {
			if (axios.isAxiosError(error)) {
				const axiosError = error as AxiosError;
				return rejectWithValue(axiosError.response?.data || "Axios error");
			}
			return rejectWithValue("Unexpected error");
		}
	}
);

export const fetchProjectById = createAsyncThunk(
	"project/fetchProjectById",
	async (id, { rejectWithValue }) => {
		try {
			const response = await axios.get(
				`https://porto.ngeengz.eu/api/v1/project/${id}`
			);
			if (response.status === 200) {
				return response.data.data;
			} else {
				return rejectWithValue("Failed to fetch projects");
			}
		} catch (error) {
			if (axios.isAxiosError(error)) {
				const axiosError = error as AxiosError;
				return rejectWithValue(axiosError.response?.data || "Axios error");
			}
			return rejectWithValue("Unexpected error");
		}
	}
);
