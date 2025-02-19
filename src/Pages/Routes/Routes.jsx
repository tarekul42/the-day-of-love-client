import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/Layout/MainLayout";
import LoveLetter from "@/Pages/LoveLetter/LoveLetter";
import Authentication from "../Auth/Authentication";
import PrivateRoute from "./Privetroute";
import UserHome from "../Dashboard/UserHome/UserHome";
import Dashboard from "../Dashboard/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <LoveLetter />,
      },
      {
        path: "authentication",
        element: <Authentication />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      // normal user routes
      {
        path: "userhome",
        element: <UserHome/>,
      },
    ],
  },
]);
