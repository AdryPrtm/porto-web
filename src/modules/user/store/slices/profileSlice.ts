import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "../thunks/profileThunk";

interface ProfileState {
	profile: {
		cv: {
			download: number;
			url: string | null;
		};
		name: string;
		bio: string;
		image: string;
		social: {
			appname: string;
			link: string;
		}[];
	} | null;
	loading: "idle" | "pending" | "succeeded" | "failed";
	error: string | null;
}

const initialState: ProfileState = {
	profile: null,
	loading: "idle",
	error: null,
};

const profileSlice = createSlice({
	name: "user",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchUser.pending, (state) => {
				state.loading = "pending";
				state.error = null;
			})
			.addCase(fetchUser.fulfilled, (state, action) => {
				state.loading = "succeeded";
				state.profile = action.payload;
			})
			.addCase(fetchUser.rejected, (state, action) => {
				state.loading = "failed";
				state.error = action.payload as string;
			});
	},
});

export const profileReducer = profileSlice.reducer;
