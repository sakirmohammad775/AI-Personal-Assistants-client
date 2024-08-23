import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Navbar from "../Shared/Navbar/Navbar";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar></Navbar>,
    },
  ]);