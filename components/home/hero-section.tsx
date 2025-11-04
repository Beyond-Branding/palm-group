"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const slides = [
  {
    src: "/farmer.avif",
    bgColor: "#5AA7E8",
  },
  {
    src: "/hero section.jpg",
    bgColor: "#44A17B",
  },
  {
    src: "/farmer in green crop.jpg",
    bgColor: "#67A3E0",
  },
];

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full flex flex-col lg:flex-row items-stretch overflow-hidden min-h-[600px] lg:min-h-[700px]">
      {/* LEFT SECTION - TEXT AREA */}
      <div
        className="relative flex flex-col justify-center px-10 lg:px-24 py-20 text-white w-full lg:w-[50%] transition-colors duration-700 ease-in-out"
        style={{ backgroundColor: slides[activeIndex].bgColor }}
      >
        <div className="max-w-lg z-10">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Welcome to <br /> Palm Group!
          </h1>
          <p className="text-lg lg:text-xl mb-8">
            Helping you from seed to fruit.
          </p>
          <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-200 transition">
            Learn More
          </button>
        </div>

        {/* RIGHT CURVED SHAPE OVERLAY */}
        <svg
          className="absolute top-0 right-[-1px] h-full w-[200%] hidden lg:block"
          viewBox="0 0 1600 800"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          {/* This curve blends beautifully into the right side */}
          <path
            d="M0,0 C950,150 950,650 0,800 L1600,800 L1600,0 Z"
            fill={slides[activeIndex].bgColor}
          />
        </svg>
      </div>

      {/* RIGHT SECTION - IMAGE SLIDER */}
      <div className="relative w-full lg:w-[60%] overflow-hidden">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="w-full h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[400px] lg:h-[700px]">
                <Image
                  src={slide.src}
                  alt={`Farm image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 ease-in-out scale-100 hover:scale-105"
                  priority={index === 0}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* BOTTOM WHITE WAVE */}
      <div className="absolute bottom-0 left-0 w-full h-[90px] overflow-hidden z-20">
        <svg
          viewBox="0 0 1728 100"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path d="M0 70C220 140 1480 -20 1729 70V100H0V70Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}
