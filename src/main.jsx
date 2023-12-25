import "./index.css";
import React from "react";
import router from "./router";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import FallBack from "./components/FallBack";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <React.Suspense fallback={<FallBack />}>
      <RouterProvider router={router} />
    </React.Suspense>
  </React.StrictMode>
);
