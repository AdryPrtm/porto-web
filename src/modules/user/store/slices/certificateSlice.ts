import { createSlice } from "@reduxjs/toolkit";
import { fetchCertificates } from "../thunks/certificateThunk";

interface Certificate {
	_id: string;
	title: string;
	description: string;
	link: string;
	year: number;
	createdAt: string;
	updatedAt: string;
	__v: number;
}

interface CertificateState {
	certificates: Certificate[];
	loading: boolean;
	error: string | null;
}

const initialState: CertificateState = {
	certificates: [],
	loading: false,
	error: null,
};

const certificateSlice = createSlice({
	name: "certificate",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchCertificates.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchCertificates.fulfilled, (state, action) => {
				state.loading = false;
				state.certificates = action.payload;
			})
			.addCase(fetchCertificates.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload as string;
			});
	},
});

export const certificateReducer = certificateSlice.reducer;
