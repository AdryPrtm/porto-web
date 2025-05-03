import { RouterProvider } from "react-router-dom";
// import { Provider } from "react-redux";
import { createRouter } from "./routes";
// import store from "./modules/user/store";

const AppRouter = () => {
	const router = createRouter();

	return <RouterProvider router={router} />;
};

const App = () => {
	return (
		// <Provider store={store}>
		<AppRouter />
		// </Provider>
	);
};

export default App;
