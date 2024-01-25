import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Skills from "./Skills";
import Hero from "../Pages/Hero";
import Project from "../Pages/Project";
import Contact from "../Pages/Contact";
const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Hero />,
        },
        {
          path: "/skills",
          element: <Skills />,
        },
        {
          path: "/Projects",
          element: <Project />,
        },
        {
          path: "/contact Me",
          element: <Contact />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
