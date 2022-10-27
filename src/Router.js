import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import ErrorPage from "./ErrorPage";
import Banner from "./components/Banner/Banner";
import Blog from "./components/Blog/Blog";
import FAQ from "./components/FAQ/FAQ";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Purchase from "./components/Purchase/Purchase";

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
    ],
  },
]);

export default router;
