"use client";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

export default function BusinessAreas() {
  const CARD_WIDTH = 300;
  const CARD_HEIGHT = 400;

  // base image size (you set these)
  const IMAGE_WIDTH = 400;
  const IMAGE_HEIGHT = 520;

  // fraction of image height that will sit outside the card.
  const OUTSIDE_FRACTION = 0.30;

  // reserve extra bottom space so the overflow isn't clipped
  const EXTRA_BOTTOM = Math.round(IMAGE_HEIGHT * OUTSIDE_FRACTION + 48);

  const perProductOverrides: Record<string, { scale?: number; offsetPx?: number }> = {
    "CROP GIANT": { scale: 1, offsetPx: -25 },
    "CROPPER PLUS": { scale: 1, offsetPx: -15 },
    "GOLDEN DROP": { scale: 1, offsetPx: 0 },
    "AG-F": { scale: 1, offsetPx: -10 },
    "PALM SULF": { scale: 1, offsetPx: 1.50 },
    "CROPPER": { scale: 1, offsetPx: 2 },
    "SILICOSE": { scale: 1, offsetPx: 0 },
    "AG-F SUPER PLUS": { scale: 0.60, offsetPx: -65 },
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
      image: "/crop giant (1).png",
      dotColor: "rgba(255,255,255,0.07)",
      overlayColor: "rgba(0,0,0,0.25)",
    },
    {
      name: "PALM SULF",
      color: "bg-[#E65100]",
      icon: "/farm1.svg",
      image: "/palmsulfnew.png",
      dotColor: "rgba(255,255,255,0.06)",
      overlayColor: "rgba(0,0,0,0.25)",
    },
    {
      name: "CROPPER",
      color: "bg-[#4E342E]",
      icon: "/farm6.svg",
      image: "/croppernew.png",
      dotColor: "rgba(255,255,255,0.06)",
      overlayColor: "rgba(0,0,0,0.25)",
    },
    {
      name: "CROPPER PLUS",
      color: "bg-[#D97706]",
      icon: "/farm7.svg",
      image: "/cropperplusnew.png",
      dotColor: "rgba(255,255,255,0.07)",
      overlayColor: "rgba(0,0,0,0.24)",
    },
    {
      name: "SILICOSE",
      color: "bg-[#2563EB]",
      icon: "/farm8.svg",
      image: "/silicosenew.png",
      dotColor: "rgba(255,255,255,0.05)",
      overlayColor: "rgba(0,0,0,0.24)",
    },
  ];

  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const TRAIN_SPEED = 8000;

  // navigation refs for Swiper (desktop)
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  // helper to build a slug — replace with actual product links if available
  const slugify = (s: string) =>
    s
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9\-]/g, "");

  // Re-bind navigation once swiper instance and refs are available.
  useEffect(() => {
    if (!swiperInstance) return;
    if (!prevRef.current || !nextRef.current) return;

    try {
      // ensure params contain the DOM elements
      // @ts-ignore mutate internal params
      swiperInstance.params.navigation = {
        ...(swiperInstance.params?.navigation || {}),
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      };

      // if navigation exists, destroy it first so init picks up the new elements
      if (swiperInstance.navigation) {
        swiperInstance.navigation.destroy();
      }

      // init and update navigation safely
      swiperInstance.navigation?.init?.();
      swiperInstance.navigation?.update?.();
    } catch (err) {
      // log instead of throwing to avoid runtime crash
      // eslint-disable-next-line no-console
      console.warn("Swiper navigation initialization failed:", err);
    }
  }, [swiperInstance]);

  return (
    <section
      className="relative bg-white overflow-x-hidden"
      style={{ paddingBottom: `${EXTRA_BOTTOM}px`, overflowX: "hidden" }}
    >
      {/* full-bleed wave (positioned behind container) */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "120vw",
          maxWidth: "1600px",
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
          <path
            d="M-80,200 Q320,140 720,240 T1520,240 L1520,0 L-80,0 Z"
            fill="#00712D"
            opacity="0.8"
          />
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
          {/* LEFT ARROW (desktop) - green accent */}
          <button
            ref={prevRef}
            aria-label="Previous"
            className="hidden md:flex items-center justify-center absolute left-2 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white hover:scale-105 transition-transform focus:outline-none"
            style={{
              border: "2px solid #0B8A44",
              boxShadow: "0 6px 22px rgba(11,138,68,0.12)",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M15 6L9 12l6 6" stroke="#0B8A44" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* RIGHT ARROW (desktop) - green accent */}
          <button
            ref={nextRef}
            aria-label="Next"
            className="hidden md:flex items-center justify-center absolute right-2 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white hover:scale-105 transition-transform focus:outline-none"
            style={{
              border: "2px solid #0B8A44",
              boxShadow: "0 6px 22px rgba(11,138,68,0.12)",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M9 6l6 6-6 6" stroke="#0B8A44" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* ===== MOBILE ARROWS: centered below (bigger, green-accented) ===== */}
          <div className="flex md:hidden items-center justify-center gap-4 absolute left-1/2 -translate-x-1/2 -bottom-20 z-50">
            <button
              aria-label="Previous mobile"
              onClick={() => swiperInstance?.slidePrev()}
              className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg focus:outline-none"
              style={{
                border: "3px solid #0B8A44",
                boxShadow: "0 8px 28px rgba(11,138,68,0.14), 0 0 18px rgba(11,138,68,0.06) inset",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M15 6L9 12l6 6" stroke="#0B8A44" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <button
              aria-label="Next mobile"
              onClick={() => swiperInstance?.slideNext()}
              className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg focus:outline-none"
              style={{
                border: "3px solid #0B8A44",
                boxShadow: "0 8px 28px rgba(11,138,68,0.14), 0 0 18px rgba(11,138,68,0.06) inset",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M9 6l6 6-6 6" stroke="#0B8A44" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <Swiper
            className="product-swiper !overflow-visible"
            modules={[Autoplay, FreeMode, Navigation]}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            freeMode={true}
            speed={TRAIN_SPEED}
            loop={true}
            slidesPerGroup={1}
            spaceBetween={16}
            observer={true}
            observeParents={true}
            breakpoints={{
              320: { slidesPerView: 1.05, spaceBetween: 12 },
              640: { slidesPerView: 2.1, spaceBetween: 12 },
              1024: { slidesPerView: 3.2, spaceBetween: 16 },
              1280: { slidesPerView: 4.1, spaceBetween: 18 },
            }}
            navigation={{
              // these will be bound after mount in useEffect
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onSwiper={(s) => {
              setSwiperInstance(s);
            }}
          >
            {products.map((product, i) => {
              const ov = perProductOverrides[product.name] ?? {};
              const scale = ov.scale ?? 1;
              const extraOffsetPx = ov.offsetPx ?? 0;

              const imageWidth = Math.round(IMAGE_WIDTH * scale);
              const imageHeight = Math.round(IMAGE_HEIGHT * scale);

              const imageOutsidePx = Math.round(imageHeight * OUTSIDE_FRACTION) + extraOffsetPx;

              const cssVars = {
                "--dot-color": product.dotColor,
                "--overlay-color": product.overlayColor,
              } as React.CSSProperties;

              // NOTE: changed to link to products page with product= query param
              // so product-grid.tsx can read `product` search param and open the correct product
              const productLink = `/products?product=${encodeURIComponent(product.name)}`;

              return (
                <SwiperSlide key={i} className="!flex !justify-center overflow-visible">
                  <Link href={productLink} className="block no-underline" aria-label={`Open ${product.name}`} style={{ textDecoration: "none" }}>
                    <div
                      className={`relative group product-card overflow-visible rounded-xl ${product.color} text-white p-6 flex flex-col justify-between transition-transform duration-500`}
                      style={{
                        width: `${CARD_WIDTH}px`,
                        height: `${CARD_HEIGHT}px`,
                        // removed minWidth to avoid forcing horizontal overflow
                        minHeight: `${CARD_HEIGHT}px`,
                        ...cssVars,
                        cursor: "pointer",
                      }}
                    >
                      {/* dotted background (brought above overlay so it's visible) */}
                      <div
                        className="card-dots pointer-events-none"
                        aria-hidden
                        style={{
                          position: "absolute",
                          inset: 0,
                          zIndex: 22,
                          backgroundImage: `radial-gradient(circle, var(--dot-color, rgba(255,255,255,0.12)) 3px, transparent 3px)`,
                          backgroundSize: "24px 24px",
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
                      <div className="w-full text-left z-30">
                        <div className="flex items-center gap-3 mb-3">
                          <div style={{ width: 40, height: 40 }} className="relative">
                            <Image src={product.icon} alt={`${product.name} icon`} fill sizes="40px" />
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold">{product.name}</h3>
                      </div>

                      <div className="flex-grow" />

                      {/* product image */}
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
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            style={{ objectFit: "contain" }}
                            priority={i < 4}
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
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
        .product-card:hover {
          transform: translateY(-10px) rotateX(4deg) scale(1.03);
          box-shadow: 0 20px 60px rgba(0,0,0,0.18);
        }
        /* keep slides overflow visible so the product image can spill out */
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
        /* keyboard focus for arrow buttons */
        button:focus {
          outline: none;
          box-shadow: 0 0 0 4px rgba(11,138,68,0.14);
        }
      `}</style>
    </section>
  );
}
