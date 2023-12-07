import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Session from "./pages/Session";
import AdminData from "./pages/adminData";
import Main from "./pages/Main";
import ContentData from "./pages/contentData";
import ContactData from "./pages/contactData";
import ServicesData from "./pages/servicesData";

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
        path: "/",
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
