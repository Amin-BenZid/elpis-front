import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Cart from "./pages/Cart";
import AdminLogin from "./pages/AdminLogin";
import logo from "./img/white - Copy.png";
import AdminPage from "./pages/AdminPage";
import axios from "axios";
axios.defaults.baseURL = "https://api.elpis.tn/api/";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/admin/login",
    element: <AdminLogin />,
  },
  {
    path: "/admin",
    element: <AdminPage />,
  },
  {
    path: "/*",
    element: (
      <div className="flex h-[100vh] flex-col items-center justify-center ">
        <img className="w-32 p-2" alt="logo" src={logo} />
        <div className="bg-black text-white w-96 h-72 flex flex-col items-center justify-center gap-2 rounded-2xl">
          <h1 className="">EROR 404 !</h1>
          <p>This page is not available</p>
          <a
            className="bg-white text-black rounded flex items-center justify-center p-2 hover:bg-gray-200 transition-all duration-200"
            href="/"
          >
            go back home
          </a>
        </div>
      </div>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
