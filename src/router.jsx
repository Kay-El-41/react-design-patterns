import { createBrowserRouter, Outlet } from "react-router-dom";
import App from "./App";
import LayoutComponents from "./routes/LayoutComponents";
import SplitScreenPattern from "./routes/SplitScreenPattern";
import ListDisplay from "./routes/ListDisplay";
import Modal from "./routes/Modal";
import ContainerComponents from "./routes/ContainerComponents";
import SimpleUserLoader from "./routes/SimpleUserLoader";

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
        path: "split-screen-pattern",
        element: <SplitScreenPattern />,
      },
      {
        path: "displaying-lists",
        element: <ListDisplay />,
      },
      {
        path: "modal",
        element: <Modal />,
      },
    ],
  },
  // Container Components
  {
    path: "/container-components",
    element: <Outlet />,
    children: [
      { path: "", element: <ContainerComponents /> },
      {
        path: "simple-user-loader",
        element: <SimpleUserLoader />,
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
