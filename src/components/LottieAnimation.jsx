import React from "react";
import Lottie from "react-lottie-player";
import lottieJson from "./nodata.json";
export const LottieAnimation = () => {
  return (
    <div className="flex flex-col gap-3 items-center justify-center">
      <Lottie
        loop
        animationData={lottieJson}
        play
        style={{ width: 500, height: 500 }}
      />
      <h2>No data in here </h2>
    </div>
  );
};
