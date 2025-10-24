"use client";
import Lottie from "lottie-react";
import animationData from "../../public/Tomato plant.json";

export default function Animation() {
  return <Lottie animationData={animationData} loop={true} />;
}