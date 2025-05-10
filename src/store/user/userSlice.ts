import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TokenState } from "types/userTypes";

const initialState = {
	token: "",
};

const userSlice = createSlice({
	name: "userSlice",
	initialState,
	reducers: {
		saveCurrentToken: (state: TokenState, action: PayloadAction<string>) => {
			const token = action.payload;
			state.token = token;
		},
		removeCurrentToken: (state: TokenState) => {
			state.token = "";
		},
	},
});

export const { saveCurrentToken, removeCurrentToken } = userSlice.actions;
export default userSlice.reducer;
