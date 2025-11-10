"use client";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import Image from "next/image";
import { useState } from "react";

export default function BusinessAreas() {
  const CARD_WIDTH = 300;
  const CARD_HEIGHT = 400;

  // base image size (you set these)
  const IMAGE_WIDTH = 400;
  const IMAGE_HEIGHT = 520;

  // fraction of image height that will sit outside the card.
  // this is multiplied by the final (possibly scaled) imageHeight.
  const OUTSIDE_FRACTION = 0.30;

  // reserve extra bottom space so the overflow isn't clipped
  const EXTRA_BOTTOM = Math.round(IMAGE_HEIGHT * OUTSIDE_FRACTION + 48);

  // Per-product overrides: set scale and vertical offset (px)
  // - scale: multiplies IMAGE_WIDTH/IMAGE_HEIGHT for that product
  // - offsetPx: added to computed imageOutsidePx (positive => more outside / pulled down,
  //                                     negative => pulled up / more inside)
  // I left Crop Giant, Cropper Plus, Golden Drop and AG-F untouched (scale 1, offset 0)
  const perProductOverrides: Record<
    string,
    { scale?: number; offsetPx?: number }
  > = {
    // unchanged (examples — explicitly keeping them at default)
    "CROP GIANT": { scale: 1, offsetPx: 0 },
    "CROPPER PLUS": { scale: 1, offsetPx: 0 },
    "GOLDEN DROP": { scale: 1, offsetPx: 0 },
    "AG-F": { scale: 1, offsetPx: 0 },

    // increase size and bring down slightly:
    "PALM SULF": { scale: 1.12, offsetPx: 25 },
    "CROPPER": { scale: 1.12, offsetPx: 18 },

    // decrease size and pull up (more inside the card):
    "SILICOSE": { scale: 0.55, offsetPx: -40 },
    "AG-F SUPER PLUS": { scale: 0.60, offsetPx: -45 },
  };

  const products = [
    {
      name: "GOLDEN DROP",
      color: "bg-[#0B5D3E]",
      icon: "/farm1.svg",
      image: "/golden drop-Photoroom shadow.png",
      dotColor: "rgba(255,255,255,0.06)",
      overlayColor: "rgba(0,0,0,0.25)",
    },
    {
      name: "AG-F",
      color: "bg-[#F5C400]",
      icon: "/farm2.svg",
      image: "/agf-Photoroom (1).png",
      dotColor: "rgba(255,255,255,0.08)",
      overlayColor: "rgba(0,0,0,0.22)",
    },
    {
      name: "AG-F SUPER PLUS",
      color: "bg-[#0057B7]",
      icon: "/farm3.svg",
      image: "/AG-F Superplus-Photoroom shadow.png",
      dotColor: "rgba(255,255,255,0.07)",
      overlayColor: "rgba(0,0,0,0.25)",
    },
    {
      name: "CROP GIANT",
      color: "bg-[#C81E1E]",
      icon: "/farm4.svg",
      image: "/crop giant shadow.png",
      dotColor: "rgba(255,255,255,0.07)",
      overlayColor: "rgba(0,0,0,0.25)",
    },
    {
      name: "PALM SULF",
      color: "bg-[#E65100]",
      icon: "/farm1.svg",
      image: "/palm sulf-Photoroom shadow.png",
      dotColor: "rgba(255,255,255,0.06)",
      overlayColor: "rgba(0,0,0,0.25)",
    },
    {
      name: "CROPPER",
      color: "bg-[#4E342E]",
      icon: "/farm6.svg",
      image: "/cropper shadow.png",
      dotColor: "rgba(255,255,255,0.06)",
      overlayColor: "rgba(0,0,0,0.25)",
    },
    {
      name: "CROPPER PLUS",
      color: "bg-[#D97706]",
      icon: "/farm7.svg",
      image: "/copperplus-Photoroom shadow.png",
      dotColor: "rgba(255,255,255,0.07)",
      overlayColor: "rgba(0,0,0,0.24)",
    },
    {
      name: "SILICOSE",
      color: "bg-[#2563EB]",
      icon: "/farm8.svg",
      image: "/silicose-Photoroom shadow.png",
      dotColor: "rgba(255,255,255,0.05)",
      overlayColor: "rgba(0,0,0,0.24)",
    },
  ];

  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const TRAIN_SPEED = 8000;

  return (
    <section
      className="relative bg-white"
      style={{ paddingBottom: `${EXTRA_BOTTOM}px`, overflow: "visible" }}
    >
      {/* full-bleed wave (positioned behind container) */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "140vw",
          height: 220,
          overflow: "hidden",
          zIndex: 0,
        }}
      >
        <svg
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ width: "100%", height: "100%", display: "block" }}
        >
          <path d="M-80,200 Q200,100 820,200 T1520,200 L1520,0 L-80,0 Z" fill="#059c5b" />
          <path d="M-80,200 Q320,140 720,240 T1520,240 L1520,0 L-80,0 Z" fill="#00712D" opacity="0.8" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative" style={{ zIndex: 10 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative mb-10 pt-10 pb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-left">Our Products</h2>
        </div>

        <div
          onMouseEnter={() => swiperInstance?.autoplay?.stop()}
          onMouseLeave={() => swiperInstance?.autoplay?.start()}
          className="relative z-20 mt-24 md:mt-28"
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
            slidesPerGroup={1}
            spaceBetween={2}
            observer={true}
            observeParents={true}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 2 },
              640: { slidesPerView: 2, spaceBetween: 2 },
              1024: { slidesPerView: 3, spaceBetween: 2 },
              1280: { slidesPerView: 4, spaceBetween: 2 },
            }}
            onSwiper={(s) => setSwiperInstance(s)}
          >
            {products.map((product, i) => {
              // determine overrides (or defaults)
              const ov = perProductOverrides[product.name] ?? {};
              const scale = ov.scale ?? 1;
              const extraOffsetPx = ov.offsetPx ?? 0;

              // compute size per product
              const imageWidth = Math.round(IMAGE_WIDTH * scale);
              const imageHeight = Math.round(IMAGE_HEIGHT * scale);

              // base outside px (fraction of scaled height) + per-product offsetPx
              const imageOutsidePx = Math.round(imageHeight * OUTSIDE_FRACTION) + extraOffsetPx;

              const cssVars = {
                "--dot-color": product.dotColor,
                "--overlay-color": product.overlayColor,
              } as React.CSSProperties;

              return (
                <SwiperSlide key={i} className="!flex !justify-center overflow-visible">
                  <div
                    className={`relative group product-card overflow-visible rounded-xl ${product.color} text-white p-6 flex flex-col justify-between transition-transform duration-500`}
                    style={{
                      width: `${CARD_WIDTH}px`,
                      height: `${CARD_HEIGHT}px`,
                      minWidth: `${CARD_WIDTH}px`,
                      minHeight: `${CARD_HEIGHT}px`,
                      ...cssVars,
                    }}
                  >
                    {/* dotted background */}
                    <div
                      className="card-dots pointer-events-none"
                      aria-hidden
                      style={{
                        position: "absolute",
                        inset: 0,
                        zIndex: 12,
                        backgroundImage: `radial-gradient(circle, var(--dot-color, rgba(255,255,255,0.05)) 2px, transparent 2px)`,
                        backgroundSize: "20px 20px",
                        mixBlendMode: "overlay",
                      }}
                    />

                    {/* overlay */}
                    <div
                      className="card-overlay pointer-events-none"
                      aria-hidden
                      style={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        bottom: 0,
                        height: "60%",
                        zIndex: 18,
                        background:
                          "linear-gradient(to top, var(--overlay-color, rgba(0,0,0,0.28)) 0%, rgba(0,0,0,0.12) 30%, rgba(0,0,0,0.04) 60%, transparent 100%)",
                        filter: "blur(0.3px)",
                      }}
                    />

                    {/* content */}
                    <div className="w-full text-left z-20">
                      <div className="flex items-center gap-3 mb-3">
                        <div style={{ width: 40, height: 40 }} className="relative">
                          <Image src={product.icon} alt={`${product.name} icon`} fill sizes="40px" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold">{product.name}</h3>
                    </div>

                    <div className="flex-grow" />

                    {/* product image — this is what overflows below the card */}
                    <div
                      className="absolute-image absolute left-1/2 transform -translate-x-1/2 pointer-events-none transition-transform duration-500 ease-out group-hover:scale-105 group-hover:-translate-y-1"
                      style={{
                        bottom: `${-imageOutsidePx}px`,
                        zIndex: 30,
                        width: `${imageWidth}px`,
                        height: `${imageHeight}px`,
                      }}
                    >
                      <div style={{ width: "100%", height: "100%" }} className="relative">
                        <Image src={product.image} alt={product.name} fill style={{ objectFit: "contain" }} priority={i < 4} />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>

      <style>{`
        .product-card {
          box-shadow: 0 10px 34px rgba(0,0,0,0.10);
          transform-origin: center bottom;
          transition: transform 0.5s ease, box-shadow 0.5s ease;
          position: relative;
          z-index: 30;
          overflow: visible; /* keep small spill visible */
        }
        /* gentler hover so image doesn't overshoot */
        .product-card:hover {
          transform: translateY(-10px) rotateX(4deg) scale(1.03);
          box-shadow: 0 20px 60px rgba(0,0,0,0.18);
        }
        .product-swiper :global(.swiper-slide) {
          overflow: visible;
          display: flex;
          justify-content: center;
        }
        .absolute-image {
          will-change: transform;
        }
        .product-card, .product-card * {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
}
