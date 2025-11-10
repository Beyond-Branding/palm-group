"use client";
import Lottie from "lottie-react";
import animationData from "../../public/Tomato plant.json";

export default function Animation() {
  return (
    <div className="flex justify-center items-center py-12 md:py-16 bg-white">
      <Lottie
        animationData={animationData}
        loop
        style={{
          width: "100%",
          maxWidth: "800px",
          height: "auto",
        }}
      />
    </div>
  );
}
