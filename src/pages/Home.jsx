import React from "react";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col gap-5">
      <Nav />
      <Outlet />
    </div>
  );
};

export default Home;
