import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/Layout/MainLayout";
import LoveLetter from "@/Pages/LoveLetter/LoveLetter";
import Authentication from "../Auth/Authentication";

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
        element: <Authentication />
      }
    ],
  },
]);
