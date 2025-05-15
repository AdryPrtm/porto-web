import { useSelector } from "react-redux";
import { RootState } from "store";

// Selector utility (for non-component usage)
export const selectToken = (state: RootState) => state.user.token;

// Custom hook (for React components)
export function useToken() {
	return useSelector(selectToken);
}
