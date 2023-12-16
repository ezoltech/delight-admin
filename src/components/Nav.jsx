import React from "react";
import { Button, Navbar } from "flowbite-react";
import { useNavigate } from "react-router-dom";
export const Nav = () => {
  const navigate = new useNavigate();

  return (
    <div className="flex justify-center items-center top-0 sticky z-10">
      <Navbar fluid rounded>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="#content">content data</Navbar.Link>
          <Navbar.Link href="#contact">contact data</Navbar.Link>
          <Navbar.Link href="#services">services data</Navbar.Link>
          <Navbar.Link href="#gallery">gallery data</Navbar.Link>
          <Navbar.Link href="#admin">admin data </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
