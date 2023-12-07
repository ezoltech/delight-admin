import React from "react";
import { Navbar } from "flowbite-react";
export const Nav = () => {
  return (
    <div className="flex justify-center items-center">
      <Navbar fluid rounded>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/">content data</Navbar.Link>
          <Navbar.Link href="/contact">contact data</Navbar.Link>
          <Navbar.Link href="/services">services data</Navbar.Link>
          <Navbar.Link href="/admin">admin data </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
