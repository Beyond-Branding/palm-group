"use client"

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from 
'swiper/react'
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const slides = [
  {
    src: "/farmer.avif",
    bgColor: "#08A84B"
  },
  {
    src: "/hero section.jpg",
    bgColor: "#44a17bff"
  },
  {
    src: "/farmer in green crop.jpg",
    bgColor: "#67a3e0ff"
  }
];

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    // Main container: Keep relative and flex-col for mobile, auto-adapting for desktop
    <section className="relative flex flex-col min-h-[500px] lg:min-h-0 pb-2">
      
      {/* LEFT PANEL (COLOR BLOB - now with a lower z-index than the slider on desktop) */}
      {/* On mobile, it acts as a full-width background below the slider.
          On desktop, it takes its original width and curve.
          Adjusted z-index for desktop.
      */}
      <div
        className="relative z-0 w-full pt-[37vw] min-h-[500px] flex flex-col justify-end pb-20 px-8 
                   lg:z-20 lg:w-[80vw] lg:h-[40vw] lg:rounded-br-[80vw] lg:pl-18 lg:pr-5 lg:pb-0 lg:justify-center lg:pt-0
                   transition-colors duration-500"
        style={{ backgroundColor: slides[activeIndex].bgColor }}
      > 
        <div className="max-w-md">
          <h1 className="text-white text-4xl lg:text-5xl font-bold leading-tight mb-3">
            Welcome to<br />Palm Group!
          </h1>
          <p className="text-white text-lg mb-7">Helping you from seed to fruit.</p>
        </div>
      </div>

      {/* RIGHT IMAGE SLIDER (ON TOP FOR BOTH MOBILE AND DESKTOP) */}
      {/* Increased z-index to ensure it sits above the green blob. */}
      {/* ⚠️ NOTE: This original absolute layout will cause horizontal overflow on mobile screens. */}
      <div className="absolute top-0 right-0 w-2/3 h-[37vw] z-30 rounded-bl-[80vw] overflow-hidden">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="w-full h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <Image
                src={slide.src}
                alt={`Farm image ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Bottom SVG curve */}
      <div className="absolute left-0 bottom-0 w-full h-[65px] overflow-hidden z-30">
        <svg viewBox="0 0 1728 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M0 70C220 140 1480 -20 1729 70V90H0V70Z" fill="#ffffff"/>
        </svg>
      </div>
    </section>
  )
}