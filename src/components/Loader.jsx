import { Spinner } from "flowbite-react";
import React from "react";

export const Loader = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <Spinner className="w-[70px] h-[70px] " />
      </div>
    </>
  );
};
