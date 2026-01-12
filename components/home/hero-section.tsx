"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1767878514/Gemini_Generated_Image_34yq8r34yq8r34yq_wolyv0.png",
    title: "Science Behind Every Successful Harvest",
    description:
      "Delivering high-efficiency nutrition products that boost crop health, enhance productivity, and maximize potential.",
  },
  {
    src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1767879402/Gemini_Generated_Image_azmjtkazmjtkazmj_vpfyjt.png",
    title: "Empowering Farmers, Driving Progress",
    description:
      "Partnering with farmers through reliable solutions and continuous support to help them achieve greater success every season.",
  },
  {
    src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1767956832/Gemini_Generated_Image_17d4mw17d4mw17d4_jo3cvb.png",
    title: "Excellence in Every Molecule",
    description:
      "Palm Pharmachem delivers high-quality APIs and excipients backed by decades of expertise and strong global partnerships.",
  },
];

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any | null>(null);

  const BG_COLOR = "#00712D";
  const FADE_POINT = 40;
  const GREEN = "7,113,45";

  return (
    <section className="w-full relative" style={{ backgroundColor: BG_COLOR }}>
      {/* LEFT / RIGHT ARROWS placed relative to the whole section so they sit at the extreme sides */}
      <button
        type="button"
        onClick={() => swiperRef.current?.slidePrev()}
        aria-label="Previous slide"
        className="absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 z-50 flex items-center justify-center h-12 w-12 rounded-full bg-black/40 hover:bg-black/60 transition shadow-lg border border-white/20"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>

      <button
        type="button"
        onClick={() => swiperRef.current?.slideNext()}
        aria-label="Next slide"
        className="absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 z-50 flex items-center justify-center h-12 w-12 rounded-full bg-black/40 hover:bg-black/60 transition shadow-lg border border-white/20"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* HERO LAYOUT */}
      <div className="relative w-full min-h-[520px] lg:min-h-[720px] flex flex-col-reverse lg:flex-row">
        {/* TEXT (left column) */}
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

        {/* IMAGE / SWIPER (right column) */}
        <div className="relative w-full lg:w-[60%] h-[300px] sm:h-[420px] lg:h-auto">
          <div className="relative w-full h-full">
<div
  aria-hidden
  className="absolute inset-0 z-10 pointer-events-none hidden lg:block"
>
  {/* main fade */}
  <div
    className="absolute inset-0"
    style={{
      background: `linear-gradient(90deg,
        rgba(${GREEN},1) 0%,
        rgba(${GREEN},0.9) 18%,
        rgba(${GREEN},0.6) 32%,
        rgba(${GREEN},0.3) 45%,
        rgba(${GREEN},0.12) 55%,
        transparent 70%
      )`,
    }}
  />

  <div
    className="absolute inset-0"
    style={{
      background: `linear-gradient(90deg,
        rgba(${GREEN},0.35) 25%,
        rgba(${GREEN},0.15) 45%,
        transparent 70%
      )`,
      filter: "blur(28px)",
      transform: "translateX(20px)",
    }}
  />
</div>


            {/* Swiper instance */}
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              loop
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              className="w-full h-full"
            >
              {slides.map((s, i) => (
                <SwiperSlide key={i}>
                  <div className="w-full h-full">
                    <img
  src={s.src}
  alt={s.title}
  className="w-full h-full object-cover"
  style={{
    filter: "brightness(1.03)",
    objectPosition: "80% center",
  }}
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
