import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import AdminData from "./pages/adminData";
import Main from "./pages/Home";
import ContentData from "./pages/contentData";
import ContactData from "./pages/contactData";
import ServicesData from "./pages/servicesData";
import Login from "./components/Login";
import Signup from "./components/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/admin",
        element: <AdminData />,
      },
      {
        path: "/contents",
        element: <ContentData />,
      },
      {
        path: "/contact",
        element: <ContactData />,
      },
      {
        path: "/services",
        element: <ServicesData />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
