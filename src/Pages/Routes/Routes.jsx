import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/Layout/MainLayout";
import LoveLetter from "@/Pages/LoveLetter/LoveLetter";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <LoveLetter/>,
      },
    ],
  },
]);
