import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { routeTree } from "./routeTree.gen.ts";
import { createRouter, Navigate, RouterProvider } from "@tanstack/react-router";

import "./index.css";

const router = createRouter({
  routeTree,
  defaultNotFoundComponent: () => (
    <Navigate to="/" replace />
  ),
});

declare module "@tanstack/react-router" {
  interface RegisterRouter {
    router: typeof router;
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
