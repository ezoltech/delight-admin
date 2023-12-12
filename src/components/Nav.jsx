import React from "react";
import { Button, Navbar } from "flowbite-react";
import { useNavigate } from "react-router-dom";
export const Nav = () => {
  const navigate = new useNavigate();

  return (
    <div className="flex justify-center items-center">
      <Navbar fluid rounded>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link><Button onClick={navigate('/')}>content data</Button></Navbar.Link>
          <Navbar.Link href="/main/contact">contact data</Navbar.Link>
          <Navbar.Link href="/main/services">services data</Navbar.Link>
          <Navbar.Link href="/main/admin">admin data </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
