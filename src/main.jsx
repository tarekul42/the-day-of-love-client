import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Pages/Routes/Routes";
import AuthProvider from "./Providers/AuthProvider";
import ErrorBoundary from "./components/ErrorBoundary.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary>
      <AuthProvider>
        <main className="flex-grow">
          <RouterProvider router={router} />
        </main>
      </AuthProvider>
    </ErrorBoundary>
  </StrictMode>
);
