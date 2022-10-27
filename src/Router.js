import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import ErrorPage from "./ErrorPage";
import Blog from "./components/Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);

export default router;
