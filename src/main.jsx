import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Blog from "./Components/Blog";
import Home from "./Components/Home";
import Quiz from "./Components/Quiz";
import Statistic from "./Components/Statistic";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () =>
          await fetch("https://openapi.programming-hero.com/api/quiz/"),
      },
      { path: "/home", element: <Home /> },
      {
        path: "/statistic",
        element: <Statistic />,
        loader: async () =>
          await fetch("https://openapi.programming-hero.com/api/quiz/"),
      },
      { path: "/blog", element: <Blog /> },
      {
        path: "/quiz/:id",
        element: <Quiz />,
        loader: async ({ params }) =>
          await fetch(
            `https://openapi.programming-hero.com/api/quiz/${params.id}`
          ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
