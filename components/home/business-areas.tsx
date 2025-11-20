// BusinessAreas.tsx
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

  // base image size
  const IMAGE_WIDTH = 400;
  const IMAGE_HEIGHT = 520;

  const OUTSIDE_FRACTION = 0.3;
  const EXTRA_BOTTOM = Math.round(IMAGE_HEIGHT * OUTSIDE_FRACTION + 48);

  const perProductOverrides: Record<string, { scale?: number; offsetPx?: number }> = {
    "CROP GIANT": { scale: 1, offsetPx: -18 },
    "CROPPER PLUS": { scale: 1, offsetPx: -10 },
    "GOLDEN DROP": { scale: 1, offsetPx: 0 },
    "AG-F": { scale: 1, offsetPx: 1.3 },
    "PALM SULF": { scale: 1, offsetPx: 1.5 },
    "CROPPER": { scale: 1, offsetPx: 7.5 },
    "SILICOSE": { scale: 1, offsetPx: 0 },
    "AG-F SUPER PLUS": { scale: 0.6, offsetPx: -65 },
  };

  const products = [
    { name: "GOLDEN DROP", color: "bg-[#0B5D3E]", icon: "/farm1.svg", image: "/golden drop-Photoroom shadow.png", dotColor: "rgba(255,255,255,0.06)", overlayColor: "rgba(0,0,0,0.25)" },
    { name: "AG-F", color: "bg-[#F5C400]", icon: "/farm2.svg", image: "/agf-Photoroom (1).png", dotColor: "rgba(255,255,255,0.08)", overlayColor: "rgba(0,0,0,0.22)" },
    { name: "AG-F SUPER PLUS", color: "bg-[#0057B7]", icon: "/farm3.svg", image: "/AG-F Superplus-Photoroom shadow.png", dotColor: "rgba(255,255,255,0.07)", overlayColor: "rgba(0,0,0,0.25)" },
    { name: "CROP GIANT", color: "bg-[#C81E1E]", icon: "/farm4.svg", image: "/crop giant (1).png", dotColor: "rgba(255,255,255,0.07)", overlayColor: "rgba(0,0,0,0.25)" },
    { name: "PALM SULF", color: "bg-[#E65100]", icon: "/farm1.svg", image: "/palmsulfnew.png", dotColor: "rgba(255,255,255,0.06)", overlayColor: "rgba(0,0,0,0.25)" },
    { name: "CROPPER", color: "bg-[#4E342E]", icon: "/farm6.svg", image: "/croppernew.png", dotColor: "rgba(255,255,255,0.06)", overlayColor: "rgba(0,0,0,0.25)" },
    { name: "CROPPER PLUS", color: "bg-[#D97706]", icon: "/farm7.svg", image: "/cropperplusnew.png", dotColor: "rgba(255,255,255,0.07)", overlayColor: "rgba(0,0,0,0.24)" },
    { name: "SILICOSE", color: "bg-[#2563EB]", icon: "/farm8.svg", image: "/silicosenew.png", dotColor: "rgba(255,255,255,0.05)", overlayColor: "rgba(0,0,0,0.24)" },
  ];

  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const TRAIN_SPEED = 8000;
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  // match testimonial behavior: pause duration after manual click
  const PAUSE_MS = 5000;

  // manual pause timer ref (like testimonial's pauseTimeoutRef)
  const pauseTimeoutRef = useRef<number | null>(null);

  // lock while manual transition running (like manualAnimatingRef in testimonial)
  const manualAnimatingRef = useRef<boolean>(false);

  // attach navigation once swiper is ready
  useEffect(() => {
    if (!swiperInstance) return;
    if (!prevRef.current || !nextRef.current) return;
    try {
      // @ts-ignore
      swiperInstance.params.navigation = { ...(swiperInstance.params?.navigation || {}), prevEl: prevRef.current, nextEl: nextRef.current };

      if (swiperInstance.navigation) {
        swiperInstance.navigation.destroy();
      }

      swiperInstance.navigation?.init?.();
      swiperInstance.navigation?.update?.();
    } catch (err) {
      // ignore navigation init errors
      // eslint-disable-next-line no-console
      console.warn("Swiper navigation initialization failed:", err);
    }

    // Ensure autoplay doesn't wait for transitions (prevents pause at loop boundaries)
    try {
      swiperInstance.params.autoplay = { ...(swiperInstance.params.autoplay || {}), waitForTransition: false, delay: 0, disableOnInteraction: false, pauseOnMouseEnter: false };
      // Set freeMode options (no momentum/sticky) for a natural continuous motion
      swiperInstance.params.freeMode = { enabled: true, sticky: false, momentum: false };
    } catch (e) {
      // non-critical
    }
  }, [swiperInstance]);

  const clearPauseTimer = () => {
    if (pauseTimeoutRef.current) {
      window.clearTimeout(pauseTimeoutRef.current);
      pauseTimeoutRef.current = null;
    }
  };

  /**
   * manualNavigate
   * - direction: "next" | "prev"
   * - performs one slide navigation
   * - stops autoplay and schedules resume after PAUSE_MS
   * - ignores clicks while manualAnimatingRef is true (same as testimonial)
   */
  const manualNavigate = (direction: "next" | "prev") => {
    if (!swiperInstance) return;
    if (manualAnimatingRef.current) {
      return; // ignore clicks while animating
    }

    manualAnimatingRef.current = true;

    // stop autoplay immediately
    try {
      swiperInstance.autoplay?.stop?.();
    } catch (e) {}

    // clear old pause timer and schedule fresh resume
    clearPauseTimer();

    // perform single navigation (this triggers normal sliding behavior)
    try {
      if (direction === "next") swiperInstance.slideNext();
      else swiperInstance.slidePrev();
    } catch (e) {}

    // listen for transition end and release lock
    const finishHandler = () => {
      try {
        swiperInstance.off?.("transitionEnd", finishHandler);
        swiperInstance.off?.("slideChangeTransitionEnd", finishHandler);
      } catch (e) {}
      manualAnimatingRef.current = false;
    };

    try {
      // prefer once() if available
      swiperInstance.once?.("transitionEnd", finishHandler);
      swiperInstance.once?.("slideChangeTransitionEnd", finishHandler);
    } catch (e) {
      // fallback: release lock after reasonable timeout (close to swiper speed)
      window.setTimeout(() => {
        manualAnimatingRef.current = false;
      }, Math.max(420, swiperInstance.params?.speed ?? 420));
    }

    // schedule autoplay resume after PAUSE_MS
    pauseTimeoutRef.current = window.setTimeout(() => {
      try {
        swiperInstance.autoplay?.start?.();
      } catch (e) {}
      pauseTimeoutRef.current = null;
    }, PAUSE_MS);
  };

  const onPrevClick = () => manualNavigate("prev");
  const onNextClick = () => manualNavigate("next");

  // cleanup pause timer on unmount
  useEffect(() => {
    return () => {
      clearPauseTimer();
    };
  }, []);

  return (
    <section className="relative bg-white overflow-x-hidden" style={{ paddingBottom: `${EXTRA_BOTTOM}px`, overflowX: "hidden" }}>
      {/* decorative wave behind */}
      <div aria-hidden style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "120vw", maxWidth: "1600px", height: 220, overflow: "hidden", zIndex: 0 }}>
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: "100%", height: "100%", display: "block" }}>
          <path d="M-80,200 Q200,100 820,200 T1520,200 L1520,0 L-80,0 Z" fill="#059c5b" />
          <path d="M-80,200 Q320,140 720,240 T1520,240 L1520,0 L-80,0 Z" fill="#00712D" opacity="0.8" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative" style={{ zIndex: 10 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative mb-10 pt-10 pb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-left">Our Products</h2>
        </div>

        <div
          onMouseEnter={() => {
            // pause autoplay on hover and clear manual pause because user is reading
            try { swiperInstance?.autoplay?.stop?.(); } catch (e) {}
            clearPauseTimer();
          }}
          onMouseLeave={() => {
            // only resume autoplay immediately if there is no manual pause in flight
            if (!pauseTimeoutRef.current) {
              try { swiperInstance?.autoplay?.start?.(); } catch (e) {}
            }
            // if a manual pause timer is scheduled, let it resume when it fires
          }}
          className="relative z-20 mt-24 md:mt-28"
        >
          {/* Prev button - visible on all screen sizes and vertically centered */}
          <button
            ref={prevRef}
            aria-label="Previous"
            onClick={onPrevClick}
            className="flex items-center justify-center absolute left-2 md:left-2 top-1/2 -translate-y-1/2 z-50 rounded-full bg-white hover:scale-105 transition-transform focus:outline-none"
            style={{ width: 44, height: 44, border: "2px solid #0B8A44", boxShadow: "0 6px 22px rgba(11,138,68,0.12)" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M15 6L9 12l6 6" stroke="#0B8A44" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>

          {/* Next button - visible on all screen sizes and vertically centered */}
          <button
            ref={nextRef}
            aria-label="Next"
            onClick={onNextClick}
            className="flex items-center justify-center absolute right-2 md:right-2 top-1/2 -translate-y-1/2 z-50 rounded-full bg-white hover:scale-105 transition-transform focus:outline-none"
            style={{ width: 44, height: 44, border: "2px solid #0B8A44", boxShadow: "0 6px 22px rgba(11,138,68,0.12)" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M9 6l6 6-6 6" stroke="#0B8A44" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>

          <Swiper
            className="product-swiper !overflow-visible"
            modules={[Autoplay, FreeMode, Navigation]}
            // continuous autoplay: no delay, don't wait for transitions
            autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: false, waitForTransition: false }}
            // freeMode as an object disables sticky/momentum for smoother continuous flow
            freeMode={{ enabled: true, sticky: false, momentum: false }}
            speed={TRAIN_SPEED}
            loop={true}
            slidesPerGroup={1}
            spaceBetween={16}
            observer={true}
            observeParents={true}
            breakpoints={{ 320: { slidesPerView: 1.05, spaceBetween: 12 }, 640: { slidesPerView: 2.1, spaceBetween: 12 }, 1024: { slidesPerView: 3.2, spaceBetween: 16 }, 1280: { slidesPerView: 4.1, spaceBetween: 18 } }}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            onSwiper={(s) => setSwiperInstance(s)}
          >
            {products.map((product, i) => {
              const ov = perProductOverrides[product.name] ?? {};
              const scale = ov.scale ?? 1;
              const extraOffsetPx = ov.offsetPx ?? 0;
              const imageWidth = Math.round(IMAGE_WIDTH * scale);
              const imageHeight = Math.round(IMAGE_HEIGHT * scale);
              const imageOutsidePx = Math.round(imageHeight * OUTSIDE_FRACTION) + extraOffsetPx;
              const cssVars = { "--dot-color": product.dotColor, "--overlay-color": product.overlayColor } as React.CSSProperties;

              // link to products page with product= query param
              const productLink = `/products?product=${encodeURIComponent(product.name)}`;

              return (
                <SwiperSlide key={i} className="!flex !justify-center overflow-visible">
                  <Link href={productLink} prefetch={false} className="block no-underline" aria-label={`Open ${product.name}`} style={{ textDecoration: "none" }}>
                    <div className={`relative group product-card overflow-visible rounded-xl ${product.color} text-white p-6 flex flex-col justify-between transition-transform duration-500`} style={{ width: `${CARD_WIDTH}px`, height: `${CARD_HEIGHT}px`, minHeight: `${CARD_HEIGHT}px`, ...cssVars, cursor: "pointer" }}>
                      <div className="card-dots pointer-events-none" aria-hidden style={{ position: "absolute", inset: 0, zIndex: 22, backgroundImage: `radial-gradient(circle, var(--dot-color, rgba(255,255,255,0.12)) 3px, transparent 3px)`, backgroundSize: "24px 24px", mixBlendMode: "overlay" }} />
                      <div className="card-overlay pointer-events-none" aria-hidden style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: "60%", zIndex: 18, background: "linear-gradient(to top, var(--overlay-color, rgba(0,0,0,0.28)) 0%, rgba(0,0,0,0.12) 30%, rgba(0,0,0,0.04) 60%, transparent 100%)", filter: "blur(0.3px)" }} />

                      <div className="w-full text-left z-30">
                        <div className="flex items-center gap-3 mb-3">
                          <div style={{ width: 40, height: 40 }} className="relative">
                            <Image src={product.icon} alt={`${product.name} icon`} fill sizes="40px" />
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold">{product.name}</h3>
                      </div>

                      <div className="flex-grow" />

                      <div className="absolute-image absolute left-1/2 transform -translate-x-1/2 pointer-events-none transition-transform duration-500 ease-out group-hover:scale-105 group-hover:-translate-y-1" style={{ bottom: `${-imageOutsidePx}px`, zIndex: 30, width: `${imageWidth}px`, height: `${imageHeight}px` }}>
                        <div style={{ width: "100%", height: "100%" }} className="relative">
                          <Image src={product.image} alt={product.name} fill style={{ objectFit: "contain" }} priority={i < 4} />
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
        .product-card { box-shadow: 0 10px 34px rgba(0,0,0,0.10); transform-origin: center bottom; transition: transform 0.5s ease, box-shadow 0.5s ease; position: relative; z-index: 30; overflow: visible; }
        .product-card:hover { transform: translateY(-10px) rotateX(4deg) scale(1.03); box-shadow: 0 20px 60px rgba(0,0,0,0.18); }
        .product-swiper :global(.swiper-slide) { overflow: visible; display: flex; justify-content: center; }
        .absolute-image { will-change: transform; }
        .product-card, .product-card * { backface-visibility: hidden; -webkit-backface-visibility: hidden; }
        button:focus { outline: none; box-shadow: 0 0 0 4px rgba(11,138,68,0.14); }
      `}</style>
    </section>
  );
}
