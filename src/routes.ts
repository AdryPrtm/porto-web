import { createBrowserRouter } from "react-router-dom";

export const createRouter = () =>
	createBrowserRouter([
		{
			path: "/",
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
				{
					path: "auth",
					lazy: async () => {
						const { AuthRoute } = await import("./modules/login");
						return { Component: AuthRoute };
					},
					children: [
						{
							path: "login",
							lazy: async () => {
								const { LoginPage } = await import(
									"./modules/login/pages/login"
								);
								return { Component: LoginPage };
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
								const { Dashboard } = await import(
									"./modules/dashboard/pages/dashboard"
								);
								return { Component: Dashboard };
							},
						},
						{
							path: "profile",
							lazy: async () => {
								const { Profile } = await import(
									"./modules/dashboard/pages/profile"
								);
								return { Component: Profile };
							},
						},
						{
							path: "experience",
							lazy: async () => {
								const { Experiences } = await import(
									"./modules/dashboard/pages/experience"
								);
								return { Component: Experiences };
							},
						},
						{
							path: "project",
							lazy: async () => {
								const { ProjectForm } = await import(
									"./modules/dashboard/pages/project"
								);
								return { Component: ProjectForm };
							},
						},
						{
							path: "certificate",
							lazy: async () => {
								const { Certificates } = await import(
									"./modules/dashboard/pages/certif"
								);
								return { Component: Certificates };
							},
						},
					],
				},
			],
		},
	]);
