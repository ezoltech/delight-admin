import React from "react";
import { Nav } from "../components/Nav";
import { Commands } from "../components/Commands";
import ContentData from "./contentData";

const Main = () => {
  return (
    <div className="flex flex-col gap-5">
      <Nav />
      <Commands />
      <ContentData />
    </div>
  );
};

export default Main;
