import React, { useState, useEffect } from "react";
import { Nav } from "../components/Nav";
import { Outlet } from "react-router-dom";
import ContentData from "./pages/contentData";
import AdminData from "./pages/adminData";

const MainAdminPage = () => {
  const [route, setRoute] = useState("/content");

  useEffect(() => {
    // Code to fetch the current route from the server or browser history
    // and update the route state variable
    setRoute(window.location.pathname);
    console.log(window.location.pathname);
  }, []);

  const pageContent = () => {
    switch (route) {
      case "/content":
        return <ContentData />
      case "/b":
        return <AdminData />
    }
  };

  return (
    <div>
      <ul>
        <li>Content Data <a onClick={setRoute("/a")} /></li>
        <li>Contact Data<a onClick={setRoute("/b")} /></li>
        <li>Service Data <a onClick={setRoute("/c")} /></li>
        <li>Admin Data <a onClick={setRoute("/d")} /></li>
      </ul>
      {/*       <Navbar fluid rounded>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/main/contents">content data</Navbar.Link>
          <Navbar.Link href="/main/contact">contact data</Navbar.Link>
          <Navbar.Link href="/main/services">services data</Navbar.Link>
          <Navbar.Link href="/main/admin">admin data </Navbar.Link>
        </Navbar.Collapse>
      </Navbar> */}
    </div>
  );
};

export default MainAdminPage;
