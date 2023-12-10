import React, { useState, useEffect } from "react";

import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="flex flex-col gap-5">
      
      <Outlet />
    </div>
  );
};

export default App;
