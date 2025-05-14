import { RouterProvider } from "react-router-dom";
import { createRouter } from "./routes";

const AppRouter = () => {
	const router = createRouter();

	return <RouterProvider router={router} />;
};

const App = () => {
	return <AppRouter />;
};

export default App;
