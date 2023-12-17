import { createBrowserRouter, Outlet } from "react-router-dom";
import App from "./App";
import LayoutComponents from "./routes/LayoutComponents";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  // Layout Components
  {
    path: "/layout-components",
    element: <Outlet />,
    children: [
      { path: "", element: <LayoutComponents /> },
      {
        path: "screen-splitter",
        element: <h1>Screen Split</h1>,
      },
      {
        path: "lists",
        element: <h1>Lists</h1>,
      },
      {
        path: "modal",
        element: <h1>Modal</h1>,
      },
    ],
  },
  // Container Components
  {
    path: "/container-components",
    element: <Outlet />,
    children: [
      { path: "", element: <h1>Hi</h1> },
      {
        path: "path",
        element: <h1>Path</h1>,
      },
    ],
  },
  // Controlled and Uncontrolled Components
  {
    path: "/controlled-uncontrolled-components",
    element: <Outlet />,
    children: [
      { path: "", element: <h1>Hi</h1> },
      {
        path: "path",
        element: <h1>Path</h1>,
      },
    ],
  },
  // Higher Order Components
  {
    path: "/higher-order-components",
    element: <Outlet />,
    children: [
      { path: "", element: <h1>Hi</h1> },
      {
        path: "path",
        element: <h1>Path</h1>,
      },
    ],
  },
  // Custom Hook Components
  {
    path: "/custom-hooks-components",
    element: <Outlet />,
    children: [
      { path: "", element: <h1>Hi</h1> },
      {
        path: "path",
        element: <h1>Path</h1>,
      },
    ],
  },
  // Functional Programming Components
  {
    path: "/functional-programming-components",
    element: <Outlet />,
    children: [
      { path: "", element: <h1>Hi</h1> },
      {
        path: "path",
        element: <h1>Path</h1>,
      },
    ],
  },
]);

export default router;
