"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const slides = [
  {
    src: "/farmer.png",
    title: "Innovating Growth at Every Stage",
    description:
      "From soil to harvest, our advanced formulations ensure stronger crops, better yields, and consistent performance.",
  },
  {
    src: "/hero.jpg",
    title: "Science Behind Every Successful Harvest",
    description:
      "Delivering high-efficiency nutrition products that boost crop health, enhance productivity, and maximize potential.",
  },
  {
    src: "/farmer in green crop.jpg",
    title: "Empowering Farmers, Driving Progress",
    description:
      "Partnering with farmers through reliable solutions and continuous support to help them achieve greater success every season.",
  },
];

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const BG_COLOR = "#00712D"; // base left background (text column)

  // Tweak these values to control where and how the green fades:
  // FADE_POINT controls where the color becomes mostly transparent (in percent)
  // You can set 40 for fade to start near text edge; lower = earlier fade, higher = later fade.
  const FADE_POINT = 60; // percent across the section where green → transparent
  const GREEN = "7,113,45"; // rgb for #00712D — used in rgba(...) below

  return (
    <section className="w-full relative" style={{ backgroundColor: BG_COLOR }}>
      <div className="relative w-full min-h-[520px] lg:min-h-[720px] flex flex-col-reverse lg:flex-row">
        {/* LEFT: text column (bottom on mobile, left on desktop) */}
        <div className="w-full lg:w-[40%] px-6 md:px-12 lg:px-16 py-12 md:py-20 lg:py-44 z-20 relative flex items-center justify-center">
          <div className="max-w-[520px] text-white text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-5">
              {slides[activeIndex].title}
            </h1>
            <p className="text-base sm:text-lg lg:text-xl opacity-95 leading-relaxed">
              {slides[activeIndex].description}
            </p>
          </div>
        </div>

        {/* RIGHT: image area (top on mobile, right on desktop) */}
        <div className="relative w-full lg:w-[60%] h-[300px] sm:h-[420px] lg:h-auto">
          <div className="relative w-full h-full">
            {/* Smooth full-width gradient overlay:
                - starts fully opaque (matches the left BG) and gradually becomes transparent
                - adjust FADE_POINT to control where transparency reaches (in %)
            */}
            <div
              aria-hidden
              className="absolute inset-0 z-10 pointer-events-none"
              style={{
                background: `linear-gradient(90deg,
                  rgba(${GREEN},1) 0%,
                  rgba(${GREEN},0.98) 10%,
                  rgba(${GREEN},0.85) 25%,
                  rgba(${GREEN},0.55) ${Math.max(20, FADE_POINT - 15)}%,
                  rgba(${GREEN},0.25) ${Math.max(30, FADE_POINT)}%,
                  rgba(${GREEN},0.08) ${Math.min(FADE_POINT + 10, 70)}%,
                  transparent 100%
                )`,
                // optional subtle mix-blend to help colors blend nicely:
                mixBlendMode: "normal",
              }}
            />

            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              loop
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              className="w-full h-full"
            >
              {slides.map((s, i) => (
                <SwiperSlide key={i}>
                  <div className="w-full h-full">
                    <img
                      src={s.src}
                      alt={s.title}
                      className="w-full h-full object-cover"
                      style={{ filter: "brightness(1.03)" }} // small boost if needed
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
