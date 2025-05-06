import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

export const fetchUser = createAsyncThunk(
	"user/fetchUser",
	async (_, { rejectWithValue }) => {
		try {
			const response = await axios.get("https://porto.ngeengz.eu/api/v1/user");
			if (response.status === 200) {
				return response.data.data[0];
			} else {
				return rejectWithValue("Failed to fetch profile");
			}
		} catch (error) {
			if (axios.isAxiosError(error)) {
				const axiosError = error as AxiosError;
				console.error("Axios error:", axiosError.message);
				if (axiosError.response) {
					console.error("Status:", axiosError.response.status);
					console.error("Data:", axiosError.response.data);
					return rejectWithValue(axiosError.response.data);
				} else if (axiosError.request) {
					console.error("No response received:", axiosError.request);
					return rejectWithValue("No response received from the server");
				}
			} else {
				console.error("An unexpected error occurred:", error);
				return rejectWithValue("An unexpected error occurred");
			}
		}
	}
);
