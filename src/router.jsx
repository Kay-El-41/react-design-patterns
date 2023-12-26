import { createBrowserRouter, Outlet } from "react-router-dom";
import React from "react";
import App from "./App";
import lazyComponentLoader from "./utils/lazyComponentLoader";

const CustomHookComponents = lazyComponentLoader(
  () => import("./routes/CustomHookComponents")
);
const CHFetchingUser = lazyComponentLoader(
  () => import("./routes/custom-hooks/CHFetchingUser")
);
const CHFetchingUsers = lazyComponentLoader(
  () => import("./routes/custom-hooks/CHFetchingUsers")
);
const CHFetchingResource = lazyComponentLoader(
  () => import("./routes/custom-hooks/CHFetchingResource")
);
const CHGenericHook = lazyComponentLoader(
  () => import("./routes/custom-hooks/CHGenericHook")
);

const FunctionalComponents = lazyComponentLoader(
  () => import("./routes/FunctionalComponents")
);
const FRecursive = lazyComponentLoader(
  () => import("./routes/functional-programming/FRecursive")
);
const FComposition = lazyComponentLoader(
  () => import("./routes/functional-programming/FComposition")
);
const FPartial = lazyComponentLoader(
  () => import("./routes/functional-programming/FPartial")
);

const HigherOrderComponents = lazyComponentLoader(
  () => import("./routes/HigherOrderComponents")
);
const HBuildingForms = lazyComponentLoader(
  () => import("./routes/higher-order-routes/HBuildingForms")
);
const HCheckingProps = lazyComponentLoader(
  () => import("./routes/higher-order-routes/HCheckingProps")
);
const HDataLoading = lazyComponentLoader(
  () => import("./routes/higher-order-routes/HDataLoading")
);
const HEnhancingHOC = lazyComponentLoader(
  () => import("./routes/higher-order-routes/HEnhancingHOC")
);
const HUpdatingData = lazyComponentLoader(
  () => import("./routes/higher-order-routes/HUpdatingData")
);

const LayoutComponents = lazyComponentLoader(
  () => import("./routes/LayoutComponents")
);
const SplitScreenPattern = lazyComponentLoader(
  () => import("./routes/layout-routes/SplitScreenPattern")
);
const ListDisplay = lazyComponentLoader(
  () => import("./routes/layout-routes/ListDisplay")
);
const Modal = lazyComponentLoader(() => import("./routes/layout-routes/Modal"));

const ContainerComponents = lazyComponentLoader(
  () => import("./routes/ContainerComponents")
);
const CCurrentUserLoader = lazyComponentLoader(
  () => import("./routes/container-routes/CCurrentUserLoader")
);
const CUserLoader = lazyComponentLoader(
  () => import("./routes/container-routes/CUserLoader")
);
const CResourceLoader = lazyComponentLoader(
  () => import("./routes/container-routes/CResourceLoader")
);
const CDataSource = lazyComponentLoader(
  () => import("./routes/container-routes/CDataSource")
);
const CLocalStorage = lazyComponentLoader(
  () => import("./routes/container-routes/CLocalStorage")
);

const CAndUnComponents = lazyComponentLoader(
  () => import("./routes/CAndUnComponents")
);
const CUncontrolled = lazyComponentLoader(
  () => import("./routes/controlled-uncontrolled-routes/CUncontrolled")
);
const CControlled = lazyComponentLoader(
  () => import("./routes/controlled-uncontrolled-routes/CControlled")
);
const CUncontrolledFlows = lazyComponentLoader(
  () => import("./routes/controlled-uncontrolled-routes/CUncontrolledFlows")
);
const CControlledModal = lazyComponentLoader(
  () => import("./routes/controlled-uncontrolled-routes/CControlledModal")
);
const CCollectingData = lazyComponentLoader(
  () => import("./routes/controlled-uncontrolled-routes/CCollectingData")
);
const CControlledFlows = lazyComponentLoader(
  () => import("./routes/controlled-uncontrolled-routes/CControlledFlows")
);

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
      {
        path: "",
        element: <CAndUnComponents />,
      },
      {
        path: "uncontrolled",
        element: <CUncontrolled />,
      },
      {
        path: "controlled",
        element: <CControlled />,
      },
      {
        path: "controlled-modal",
        element: <CControlledModal />,
      },
      {
        path: "uncontrolled-flows",
        element: <CUncontrolledFlows />,
      },
      {
        path: "collecting-data",
        element: <CCollectingData />,
      },
      {
        path: "controlled-flows",
        element: <CControlledFlows />,
      },
    ],
  },
  // Higher Order Components
  {
    path: "/higher-order-components",
    element: <Outlet />,
    children: [
      { path: "", element: <HigherOrderComponents /> },
      {
        path: "checking-props",
        element: <HCheckingProps />,
      },
      {
        path: "data-loading",
        element: <HDataLoading />,
      },
      {
        path: "updating-data",
        element: <HUpdatingData />,
      },
      {
        path: "building-forms",
        element: <HBuildingForms />,
      },
      {
        path: "enhancing-hoc",
        element: <HEnhancingHOC />,
      },
    ],
  },
  // Custom Hook Components
  {
    path: "/custom-hooks-components",
    element: <Outlet />,
    children: [
      { path: "", element: <CustomHookComponents /> },
      {
        path: "fetching-user",
        element: <CHFetchingUser />,
      },
      {
        path: "fetching-users",
        element: <CHFetchingUsers />,
      },
      {
        path: "fetching-resource",
        element: <CHFetchingResource />,
      },
      {
        path: "generic-hook",
        element: <CHGenericHook />,
      },
    ],
  },
  // Functional Programming Components
  {
    path: "/functional-programming-components",
    element: <Outlet />,
    children: [
      { path: "", element: <FunctionalComponents /> },
      {
        path: "recursive",
        element: <FRecursive />,
      },
      {
        path: "composition",
        element: <FComposition />,
      },
      {
        path: "partial",
        element: <FPartial />,
      },
    ],
  },
]);

export default router;
