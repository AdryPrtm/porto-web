import { createBrowserRouter } from "react-router-dom";

export const createRouter = () =>
  createBrowserRouter([
    {
      path: "/",
      lazy: async () => {
        const { HomeRoute } = await import("./pages/home");
        return { Component: HomeRoute };
      },
    },
  ]);
