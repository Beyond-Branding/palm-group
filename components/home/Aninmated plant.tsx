"use client";
import Lottie from "lottie-react";
import animationData from "../../public/Tomato plant.json";

export default function Animation() {
  
return (
    <div className="flex justify-center items-center h-screen">
      <Lottie
        animationData={animationData} loop style={{ width: 1000, height: 1000 }} />
    </div>
  );
}