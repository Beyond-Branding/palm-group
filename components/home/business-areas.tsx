"use client";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function BusinessAreas() {
  const CARD_WIDTH = 300;
  const CARD_HEIGHT = 420;
  const IMAGE_WIDTH = 360;
  const IMAGE_HEIGHT = 420;

  const products = [
    { name: "GOLDEN DROP", color: "bg-[#6A4B3B]", icon: "/grapes.svg", image: "/golden drop-Photoroom shadow.png" },
    { name: "AG-F", color: "bg-[#000000]", icon: "/icons/insecticide-icon.svg", image: "/agf-Photoroom (1).png" },
    { name: "AG-F SUPER PLUS", color: "bg-[#006D43]", icon: "/icons/fungicide-icon.svg", image: "/AG-F Superplus-Photoroom shadow.png" },
    { name: "CROP GIANT", color: "bg-[#F59E0B]", icon: "/icons/harvest-icon.svg", image: "/crop giant shadow.png" },
    { name: "PALM SULF", color: "bg-[#7E22CE]", icon: "/icons/nematicide-icon.svg", image: "/palm sulf-Photoroom shadow.png" },
    { name: "CROPPER", color: "bg-[#0D9488]", icon: "/icons/plant-icon.svg", image: "/cropper shadow.png" },
    { name: "CROPPER PLUS", color: "bg-[#DC2626]", icon: "/icons/seed-icon.svg", image: "/copperplus-Photoroom shadow.png" },
    { name: "SILICOSE", color: "bg-[#2563EB]", icon: "/icons/nutrition-icon.svg", image: "/silicose-Photoroom shadow.png" },
  ];

  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const TRAIN_SPEED = 8000; // slow, smooth

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Products</h2>
          <p className="text-gray-600">Discover solutions to simplify your farming</p>
        </div>

        {/* Swiper */}
        <div
          onMouseEnter={() => swiperInstance?.autoplay?.stop()}
          onMouseLeave={() => swiperInstance?.autoplay?.start()}
        >
          <Swiper
            className="product-swiper !overflow-visible"
            modules={[Autoplay, FreeMode]}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            freeMode={true}
            speed={TRAIN_SPEED}
            loop={true}
            loopedSlides={products.length}
            slidesPerGroup={1}
            spaceBetween={8}
            observer={true}
            observeParents={true}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 8 },
              640: { slidesPerView: 2, spaceBetween: 8 },
              1024: { slidesPerView: 3, spaceBetween: 8 },
              1280: { slidesPerView: 4, spaceBetween: 8 },
            }}
            onSwiper={(s) => setSwiperInstance(s)}
          >
            {products.map((product, i) => {
              const isSmaller = product.name === "AG-F SUPER PLUS" || product.name === "SILICOSE";
              const imageWidth = isSmaller ? IMAGE_WIDTH * 0.8 : IMAGE_WIDTH;
              const imageHeight = isSmaller ? IMAGE_HEIGHT * 0.8 : IMAGE_HEIGHT;
              const imageHalfOutside = imageHeight / 2;

              return (
                <SwiperSlide key={i} className="!flex !justify-center overflow-visible">
                  <div
                    className={`relative group product-card overflow-visible rounded-xl ${product.color} text-white p-6 flex flex-col justify-between transition-transform duration-500`}
                    style={{
                      width: `${CARD_WIDTH}px`,
                      height: `${CARD_HEIGHT}px`,
                      minWidth: `${CARD_WIDTH}px`,
                      minHeight: `${CARD_HEIGHT}px`,
                    }}
                  >
                    <div className="w-full text-left z-20">
                      <div className="flex items-center gap-3 mb-3">
                        <div style={{ width: 40, height: 40 }} className="relative">
                          <Image src={product.icon} alt={`${product.name} icon`} fill sizes="40px" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold">{product.name}</h3>
                    </div>

                    <div className="flex-grow" />

                    {/* Product Image */}
                    <div
                      className="absolute-image absolute left-1/2 transform -translate-x-1/2 pointer-events-none transition-transform duration-500 ease-out group-hover:scale-110 group-hover:translate-y-[-10px]"
                      style={{
                        bottom: `${-imageHalfOutside}px`,
                        zIndex: 30,
                        width: `${imageWidth}px`,
                        height: `${imageHeight}px`,
                      }}
                    >
                      <div style={{ width: "100%", height: "100%" }} className="relative">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          style={{ objectFit: "contain" }}
                          priority={i < 4}
                        />
                      </div>
                    </div>

                    {/* Background dots pattern */}
                    <div
                      aria-hidden
                      className="absolute bottom-0 left-0 w-full h-1/2 opacity-10 pointer-events-none"
                      style={{
                        background:
                          "radial-gradient(circle, rgba(255,255,255,0.15) 20%, transparent 20%)",
                        backgroundSize: "18px 18px",
                      }}
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>

      {/* CSS */}
      <style>{`
        .product-card {
          box-shadow: 0 10px 34px rgba(0,0,0,0.10);
          transform-origin: center bottom;
          transition: transform 0.5s ease, box-shadow 0.5s ease;
        }

        .product-card:hover {
          transform: translateY(-14px) rotateX(6deg) scale(1.05);
          box-shadow: 0 24px 70px rgba(0,0,0,0.2);
        }

        .product-swiper :global(.swiper-slide) {
          overflow: visible;
          display: flex;
          justify-content: center;
        }

        .product-card, .product-card * {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
}
