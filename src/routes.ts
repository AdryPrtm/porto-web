import { createBrowserRouter } from "react-router-dom";

export const createRouter = () =>
	createBrowserRouter([
		{
			path: "/",
			children: [
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
								const { Projects } = await import(
									"./modules/dashboard/pages/project"
								);
								return { Component: Projects };
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
