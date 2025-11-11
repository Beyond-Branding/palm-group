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
  const BG_COLOR = "#00712D";
  const FADE_POINT = 60;
  const GREEN = "7,113,45";

  return (
    <section className="w-full relative" style={{ backgroundColor: BG_COLOR }}>
      <div className="relative w-full min-h-[520px] lg:min-h-[720px] flex flex-col-reverse lg:flex-row">
        {/* LEFT TEXT SECTION */}
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

        {/* RIGHT IMAGE SECTION */}
        <div className="relative w-full lg:w-[60%] h-[300px] sm:h-[420px] lg:h-auto">
          <div className="relative w-full h-full">
            {/* ✅ Gradient only visible on desktop */}
            <div
              aria-hidden
              className="absolute inset-0 z-10 pointer-events-none hidden lg:block"
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
                      style={{ filter: "brightness(1.03)" }}
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
