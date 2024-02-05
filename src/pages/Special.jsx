import React from "react";
import { GoldCommands } from "../components/GoldCommands";
import { PlatinumCommands } from "../components/PlatinumCommands";
import GoldData from "./GoldData";
import PlatinumData from "./PlatinumData";

const Special = () => {
  return (
    <div className="flex flex-col gap-7">
      <div className="flex flex-col gap-3">
        <h2 className="flex justify center items-center justify-center text-2xl">
          Gold Data
        </h2>
        {/* <GoldCommands /> */}
        <GoldData />
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="flex justify center items-center justify-center text-2xl">
          Platnium Data
        </h2>
        {/* <PlatinumCommands /> */}
        <PlatinumData />
      </div>
    </div>
  );
};

export default Special;
