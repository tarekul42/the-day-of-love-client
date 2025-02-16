import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/Layout/MainLayout";
import LoveLetter from "@/Pages/LoveLetter/LoveLetter";
import Login from "../Auth/Login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <LoveLetter/>,
      },{
        path: "authentication",
        element: <Login />
      }
    ],
  },
]);
