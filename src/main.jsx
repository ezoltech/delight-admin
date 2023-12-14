import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import AdminData from "./pages/adminData";
// import Main from "./pages/Home";
import ContentData from "./pages/contentData";
import ContactData from "./pages/contactData";
import ServicesData from "./pages/servicesData";
import Login from "./components/Login";
import Signup from "./components/Signup";
import MainAdminPage from "./pages/MainAdminPage";
import Notfound from "./pages/Notfound";
// import Home from "./pages/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Signup />,
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/main",
        element: <MainAdminPage />,
      },
      {
        path: "/service",
        element: <ServicesData />,
      },
      {
        path: "/*",
        element: <Notfound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
