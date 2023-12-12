import React from "react";
import { Button } from "flowbite-react";
const Notfound = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-5">
      <h2>404 not found</h2>
      <Button href="/">Take Me Home</Button>
    </div>
  );
};

export default Notfound;
