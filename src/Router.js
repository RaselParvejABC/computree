import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import ErrorPage from "./ErrorPage";
import Banner from "./components/Banner/Banner";
import Blog from "./components/Blog/Blog";
import FAQ from "./components/FAQ/FAQ";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Purchase from "./components/Purchase/Purchase";
import Courses, { loader as coursesLoader } from "./components/Courses/Courses";
import { Alert } from "@material-tailwind/react";
import Course, { loader as CourseLoader } from "./components/Course/Course";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Banner />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/purchase",
        element: <Purchase />,
      },
      {
        path: "/courses",
        element: <Courses />,
        loader: coursesLoader,
        children: [
          {
            index: true,
            element: (
              <Alert className="bg-white text-black text-2xl mx-auto mt-5 text-center">
                Select a Course to see Details.
              </Alert>
            ),
          },
          {
            path: "course/:courseID",
            loader: CourseLoader,
            element: <Course />,
          },
        ],
      },
    ],
  },
]);

export default router;
