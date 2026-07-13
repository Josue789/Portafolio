import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "@heroui/react/styles";
import "./index.css";

import App from "./App.jsx";
import ProjectViewWrapper from "./pages/ProjectViewWrapper.jsx";
import NotFound from "./pages/notfound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: "/project/:projectName",
    element: <ProjectViewWrapper />,
  },
]);

createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);