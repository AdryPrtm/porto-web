import { createBrowserRouter } from "react-router-dom";

export const createRouter = () =>
	createBrowserRouter([
		{
			path: "",
		},
		{
			path: "user",
			lazy: async () => {
				const { UserRoute } = await import("./modules/user");
				return { Component: UserRoute };
			},
			children: [
				{
					index: true,
					lazy: async () => {
						const { HomeRoute } = await import("./modules/user/pages/home");
						return { Component: HomeRoute };
					},
				},
				{
					path: "profile",
					lazy: async () => {
						const { ProfileRoute } = await import(
							"./modules/user/pages/profile"
						);
						return { Component: ProfileRoute };
					},
				},
			],
		},
		{
			path: "dashboard",
			lazy: async () => {
				const { DashboardRoute } = await import("./modules/dashboard");
				return { Component: DashboardRoute };
			},
			children: [
				{
					index: true,
					lazy: async () => {
						const { DashboardHome } = await import(
							"./modules/dashboard/pages/home"
						);
						return { Component: DashboardHome };
					},
				},
			],
		},
	]);
