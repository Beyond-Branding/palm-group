"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const slides = [
  {
    src: "/farmer.avif",
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
  const BG_COLOR = "#00712D"; // solid green background

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
            {/* Gradient overlay (desktop only) */}
            <div className="hidden lg:block absolute left-0 top-0 w-[300px] h-full bg-gradient-to-r from-[#00712D] via-[#00712D]/95 to-transparent z-10"></div>

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
