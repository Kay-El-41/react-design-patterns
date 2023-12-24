import { createBrowserRouter, Outlet } from "react-router-dom";
import App from "./App";
import LayoutComponents from "./routes/LayoutComponents";
import ContainerComponents from "./routes/ContainerComponents";
import SplitScreenPattern from "./routes/layout-routes/SplitScreenPattern";
import ListDisplay from "./routes/layout-routes/ListDisplay";
import Modal from "./routes/layout-routes/Modal";
import CCurrentUserLoader from "./routes/container-routes/CCurrentUserLoader";
import CUserLoader from "./routes/container-routes/CUserLoader";
import CResourceLoader from "./routes/container-routes/CResourceLoader";
import CDataSource from "./routes/container-routes/CDataSource";
import CLocalStorage from "./routes/container-routes/CLocalStorage";

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
        path: "current-user-loader",
        element: <CCurrentUserLoader />,
      },
      {
        path: "user-loader",
        element: <CUserLoader />,
      },
      {
        path: "resource-loader",
        element: <CResourceLoader />,
      },
      {
        path: "data-source-loader",
        element: <CDataSource />,
      },
      {
        path: "local-storage-loader",
        element: <CLocalStorage />,
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
