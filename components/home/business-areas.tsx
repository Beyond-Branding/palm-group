// BusinessAreas.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect, useMemo } from "react";

export default function BusinessAreas() {
  const CARD_WIDTH = 300;
  const CARD_HEIGHT = 400;

  // base image size
  const IMAGE_WIDTH = 400;
  const IMAGE_HEIGHT = 520;

  const OUTSIDE_FRACTION = 0.3;
  const EXTRA_BOTTOM = Math.round(IMAGE_HEIGHT * OUTSIDE_FRACTION + 48);

  const isMobile =
  typeof window !== "undefined" && window.innerWidth < 640;

  const perProductOverrides: Record<string, { scale?: number; offsetPx?: number }> = {
    "CROP GIANT": { scale: 1, offsetPx: -18 },
    "CROPPER PLUS": { scale: 1, offsetPx: -10 },
    "GOLDEN DROP": { scale: 1, offsetPx: 0 },
    "AG-F": { scale: 1, offsetPx: 1.3 },
    "PALM SULF": { scale: 1, offsetPx: 1.5 },
    "CROPPER": { scale: 1, offsetPx: 7.5 },
    "SILICOSE": { scale: 1, offsetPx: 0 },
    "AG-F SUPER PLUS": { scale: 0.6, offsetPx: -65 },
    "CROPPER GRANULES": { scale: 0.6, offsetPx: -45 },
  };
  
  const products = [
    { name: "GOLDEN DROP", color: "bg-[#DFF2EA]", icon: "/farm1.svg", image: "https://res.cloudinary.com/daoju0r3c/image/upload/v1764173725/golden_drop-Photoroom_shadow_m9aigy.png", dotColor: "rgba(255,255,255,0.06)", overlayColor: "rgba(0,0,0,0.25)" },
    { name: "AG-F", color: "bg-[#FFF3C4]", icon: "/farm2.svg", image: "https://res.cloudinary.com/daoju0r3c/image/upload/v1764173812/agf-Photoroom_1_cmpcyy.png", dotColor: "rgba(255,255,255,0.08)", overlayColor: "rgba(0,0,0,0.22)" },
    { name: "AG-F SUPER PLUS", color: "bg-[#D6E8FF]", icon: "/farm3.svg", image: "https://res.cloudinary.com/daoju0r3c/image/upload/v1764173861/AG-F_Superplus-Photoroom_shadow_kdb8m9.png", dotColor: "rgba(255,255,255,0.07)", overlayColor: "rgba(0,0,0,0.25)" },
    { name: "CROP GIANT", color: "bg-[#FADDDD]", icon: "/farm4.svg", image: "https://res.cloudinary.com/daoju0r3c/image/upload/v1764173895/crop_giant_1_cs6nnn.png", dotColor: "rgba(255,255,255,0.07)", overlayColor: "rgba(0,0,0,0.25)" },
    { name: "PALM SULF", color: "bg-[#FFE3D1]", icon: "/farm1.svg", image: "https://res.cloudinary.com/daoju0r3c/image/upload/v1764173960/palmsulfnew_ntrjwo.png", dotColor: "rgba(255,255,255,0.06)", overlayColor: "rgba(0,0,0,0.25)" },
    { name: "CROPPER", color: "bg-[#E8DAD6]", icon: "/farm6.svg", image: "https://res.cloudinary.com/daoju0r3c/image/upload/v1764174014/croppernew_qydobw.png", dotColor: "rgba(255,255,255,0.06)", overlayColor: "rgba(0,0,0,0.25)" },
    { name: "CROPPER PLUS", color: "bg-[#FFE8C7]", icon: "/farm7.svg", image: "https://res.cloudinary.com/daoju0r3c/image/upload/v1764174140/cropperplusnew_gxqz3w.png", dotColor: "rgba(255,255,255,0.07)", overlayColor: "rgba(0,0,0,0.24)" },
    { name: "SILICOSE", color: "bg-[#E0E9FF]", icon: "/farm8.svg", image: "https://res.cloudinary.com/daoju0r3c/image/upload/v1764174176/silicosenew_t2zou5.png", dotColor: "rgba(255,255,255,0.05)", overlayColor: "rgba(0,0,0,0.24)" },
    { name: "CROPPER GRANULES", color: "bg-[#E6F8EC]", icon: "/farm9.svg", image: "https://res.cloudinary.com/daoju0r3c/image/upload/v1766901717/Screenshot_2025-12-28_112823-removebg-preview_hgnhjc.png", dotColor: "rgba(255,255,255,0.05)", overlayColor: "rgba(0,0,0,0.24)" },
  ];

  const CARD_GAP = 16; 
  const STEP = isMobile
  ? CARD_WIDTH + CARD_GAP // exactly one card
  : CARD_WIDTH + CARD_GAP;
  
  const doubledProducts = useMemo(() => [...products, ...products], [products]);

  const trackRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const lastRef = useRef<number | null>(null);
  const loopWidthRef = useRef<number>(0);
  const offsetRef = useRef<number>(0);
  const manualAnimatingRef = useRef<boolean>(false);
  const pauseTimeoutRef = useRef<number | null>(null);

  const SPEED_PX_PER_SEC = 60;

  useEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (!track) return;
      const items = track.querySelectorAll<HTMLElement>(".product-slide");
      const secondStart = items[products.length];
      if (secondStart) {
        loopWidthRef.current = secondStart.offsetLeft;
      } else {
        loopWidthRef.current = products.length * (CARD_WIDTH + CARD_GAP);
      }
    };

    measure();
    const t = window.setTimeout(measure, 200);
    window.addEventListener("resize", measure);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", measure);
    };
  }, [products, CARD_WIDTH]);

  const applyTransform = (x: number) => {
  const track = trackRef.current;
  const wrapper = wrapperRef.current;
  if (!track || !wrapper) return;

  if (isMobile) {
    const centerOffset =
      (wrapper.offsetWidth - CARD_WIDTH) / 2;
    track.style.transform = `translate3d(${
      -(x - centerOffset)
    }px, 0, 0)`;
  } else {
    track.style.transform = `translate3d(${-x}px, 0, 0)`;
  }
};


  useEffect(() => {
    lastRef.current = performance.now();

    const tick = (now: number) => {
      const track = trackRef.current;
      if (!track) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }

      const last = lastRef.current ?? now;
      const dt = (now - last) / 1000;
      lastRef.current = now;

      if (!manualAnimatingRef.current && !pauseTimeoutRef.current) {
        const delta = SPEED_PX_PER_SEC * dt;
        let next = offsetRef.current + delta;
        const loopPoint = loopWidthRef.current || products.length * (CARD_WIDTH + CARD_GAP);

        if (next >= loopPoint) next -= loopPoint;

        offsetRef.current = next;
        applyTransform(next);
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [products.length]);

  const clearPauseTimer = () => {
    if (pauseTimeoutRef.current) {
      window.clearTimeout(pauseTimeoutRef.current);
      pauseTimeoutRef.current = null;
    }
  };

  const moveByStep = (direction: "left" | "right") => {
    const track = trackRef.current;
    if (!track) return;

    manualAnimatingRef.current = true;
    clearPauseTimer();

    const loopPoint = loopWidthRef.current || products.length * (CARD_WIDTH + CARD_GAP);
    const delta = direction === "left" ? -STEP : STEP;
    let target = offsetRef.current + delta;

    while (target < 0) target += loopPoint;
    while (target >= loopPoint) target -= loopPoint;

    track.style.transition = "";
    applyTransform(offsetRef.current);
    track.offsetHeight;
    track.style.transition = "transform 420ms cubic-bezier(.22,.9,.26,1)";

    const directDist = Math.abs(target - offsetRef.current);
    const wrapDist = loopPoint - directDist;
    let visualTarget = target;
    if (wrapDist < directDist) {
      if (target > offsetRef.current) visualTarget = target - loopPoint;
      else visualTarget = target + loopPoint;
    }

    applyTransform(visualTarget);

    const onTransEnd = () => {
      track.removeEventListener("transitionend", onTransEnd);
      track.style.transition = "";
      offsetRef.current = target;
      applyTransform(offsetRef.current);
      manualAnimatingRef.current = false;

      clearPauseTimer();
      pauseTimeoutRef.current = window.setTimeout(() => {
        pauseTimeoutRef.current = null;
      }, 5000);
    };

    track.addEventListener("transitionend", onTransEnd);

    window.setTimeout(() => {
      if (manualAnimatingRef.current) {
        track.removeEventListener("transitionend", onTransEnd);
        track.style.transition = "";
        offsetRef.current = target;
        applyTransform(offsetRef.current);
        manualAnimatingRef.current = false;
        clearPauseTimer();
        pauseTimeoutRef.current = window.setTimeout(() => {
          pauseTimeoutRef.current = null;
        }, 5000);
      }
    }, 700);
  };

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      clearPauseTimer();
    };
  }, []);

  useEffect(() => {
    const prev = document.documentElement.style.overflowX;
    document.documentElement.style.overflowX = "hidden";
    return () => {
      document.documentElement.style.overflowX = prev || "";
    };
  }, []);

  return (
    <section className="relative bg-white overflow-hidden md:overflow-visible"
  style={{ paddingBottom: `${EXTRA_BOTTOM}px` }}>
      <div aria-hidden style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "120vw", maxWidth: "1600px", height: 220, overflow: "visible", zIndex: 0 }}>
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
          ref={wrapperRef}
          onMouseEnter={() => {
            clearPauseTimer();
            pauseTimeoutRef.current = window.setTimeout(() => {}, 1_000_000);
          }}
          onMouseLeave={() => {
            if (pauseTimeoutRef.current) {
              window.clearTimeout(pauseTimeoutRef.current);
              pauseTimeoutRef.current = null;
            }
          }}
          className="relative z-20 mt-24 md:mt-28"
        >
          <button
            aria-label="Previous"
            onClick={() => moveByStep("left")}
            className="flex items-center justify-center absolute left-2 md:left-2 top-1/2 -translate-y-1/2 z-50 rounded-full bg-white hover:scale-105 transition-transform focus:outline-none"
            style={{ width: 44, height: 44, border: "2px solid #0B8A44", boxShadow: "0 6px 22px rgba(11,138,68,0.12)" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M15 6L9 12l6 6" stroke="#0B8A44" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>

          <button
            aria-label="Next"
            onClick={() => moveByStep("right")}
            className="flex items-center justify-center absolute right-2 md:right-2 top-1/2 -translate-y-1/2 z-50 rounded-full bg-white hover:scale-105 transition-transform focus:outline-none"
            style={{ width: 44, height: 44, border: "2px solid #0B8A44", boxShadow: "0 6px 22px rgba(11,138,68,0.12)" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M9 6l6 6-6 6" stroke="#0B8A44" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>

          <div style={{ overflow: "visible" }}>
            <div
  ref={trackRef}
  className="flex items-stretch"
  style={{
    gap: `${CARD_GAP}px`,
    padding: isMobile ? "0" : "0 1rem",
    willChange: "transform",
  }}
>
              {doubledProducts.map((product, i) => {
                const ov = perProductOverrides[product.name] ?? {};
                const scale = ov.scale ?? 1;
                const extraOffsetPx = ov.offsetPx ?? 0;
                const imageWidth = Math.round(IMAGE_WIDTH * scale);
                const imageHeight = Math.round(IMAGE_HEIGHT * scale);
                const imageOutsidePx = Math.round(imageHeight * OUTSIDE_FRACTION) + extraOffsetPx;
                const cssVars = { "--dot-color": product.dotColor, "--overlay-color": product.overlayColor } as React.CSSProperties;

                const productLink = `/crop-nutrition?product=${encodeURIComponent(product.name)}`;

                return (
                  <div key={`${product.name}-${i}`} className="product-slide" style={{ flex: "0 0 auto" }}>
                    <Link href={productLink} prefetch={false} className="block no-underline" aria-label={`Open ${product.name}`} style={{ textDecoration: "none" }}>
                      <div className={`relative group product-card overflow-visible rounded-xl ${product.color} text-gray-800 p-6 flex flex-col justify-between transition-transform duration-500`} style={{ width: `${CARD_WIDTH}px`, height: `${CARD_HEIGHT}px`, minHeight: `${CARD_HEIGHT}px`, ...cssVars, cursor: "pointer" }}>
                        <div className="card-dots pointer-events-none" aria-hidden style={{ position: "absolute", inset: 0, zIndex: 22, backgroundImage: `radial-gradient(circle, var(--dot-color, rgba(255,255,255,0.12)) 3px, transparent 3px)`, backgroundSize: "24px 24px", mixBlendMode: "overlay" }} />
                        <div className="card-overlay pointer-events-none" aria-hidden style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: "60%", zIndex: 18, background: "linear-gradient(to top, var(--overlay-color, rgba(0,0,0,0.28)) 0%, rgba(0,0,0,0.12) 30%, rgba(0,0,0,0.04) 60%, transparent 100%)", filter: "blur(0.3px)" }} />

                        <div className="w-full text-left z-30">
                          <div className="flex items-center gap-3 mb-3">
                            <div style={{ width: 40, height: 40, filter: "brightness(0)" }} className="relative">
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
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .product-card { box-shadow: 0 10px 34px rgba(0,0,0,0.10); transform-origin: center bottom; transition: transform 0.5s ease, box-shadow 0.5s ease; position: relative; z-index: 30; overflow: visible; }
        .product-card:hover { transform: translateY(-10px) rotateX(4deg) scale(1.03); box-shadow: 0 20px 60px rgba(0,0,0,0.18); }
        .absolute-image { will-change: transform; }
        .product-card, .product-card * { backface-visibility: hidden; -webkit-backface-visibility: hidden; }
        button:focus { outline: none; box-shadow: 0 0 0 4px rgba(11,138,68,0.14); }

        /* ensure duplicated content lines up */
        .product-slide { margin-right: ${CARD_GAP}px; }

        /* small screens adjustments */
        @media (max-width: 640px) {
          .product-slide { margin-right: 12px; }
        }
        @media (max-width: 640px) {
  .product-card {
    margin-left: auto;
    margin-right: auto;
  }
}
      `}</style>
    </section>
  );
}
