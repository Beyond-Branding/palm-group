"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Lottie from "lottie-react";
import animationData from "../../public/Tomato plant.json";

const DEFAULT_DESKTOP_SIZE = 190; 
const DEFAULT_MOBILE_SIZE = 130; 

const PRODUCT_SIZES: (number | null)[] = [
  null, 
  null, 
  null, 
  null, 
  null, 
  null, 
  null, 
  null, 
];

const POSITIONS_DESKTOP: { left: string; top: string }[] = [
  { left: "28%", top: "75%" }, // product 0 GOLDEN DROP
  { left: "12%", top: "58%" }, // product 1 AG-F
  { left: "28%", top: "-10%" },  // product 2 AG-F SUPER PLUS
  { left: "12%", top: "8%" },  // product 3 CROP GIANT
  { left: "75%", top: "75%" }, // product 4 PALM SULF
  { left: "88%", top: "58%" }, // product 5 CROPPER
  { left: "75%", top: "-5%" },  // product 6 CROPPER PLUS
  { left: "88%", top: "8%" },  // product 7 SILICOSE
];

const POSITIONS_MOBILE = [
  { left: "28%", top: "72%" }, // GOLDEN DROP
  { left: "12%", top: "40%" }, // AG-F
  { left: "32%", top: "-30%" }, // AG-F SUPER PLUS
  { left: "12%", top: "2%" }, // CROP GIANT
  { left: "72%", top: "72%" }, // PALM SULF
  { left: "88%", top: "40%" }, // CROPPER
  { left: "66%", top: "-26%" }, // CROPPER PLUS
  { left: "88%", top: "2%" }, // SILICOSE
];

const LABEL_OFFSET_DESKTOP: number[] = [
  -30, // GOLDEN DROP
  -25,  // AG-F
  -10, // AG-F SUPER PLUS
  -20, // CROP GIANT
  -30, // PALM SULF
  -30,  // CROPPER
  -30, // CROPPER PLUS
  -25, // SILICOSE
];

const LABEL_OFFSET_MOBILE: number[] = [
  -20, // GOLDEN DROP
  -18, // AG-F
  -12, // AG-F SUPER PLUS
  -18, // CROP GIANT
  -20, // PALM SULF
  -20, // CROPPER
  -25, // CROPPER PLUS
  -18, // SILICOSE
];

const LABEL_OFFSET_X_MOBILE: number[] = [
  1, // GOLDEN DROP → left
 -5,  // AG-F
  0,   // AG-F SUPER PLUS
  1, // CROP GIANT
  1,  // PALM SULF → right
  8,   // CROPPER
  1,  // CROPPER PLUS
  6,   // SILICOSE
];

const PRODUCTS = [
  "https://res.cloudinary.com/daoju0r3c/image/upload/v1764173725/golden_drop-Photoroom_shadow_m9aigy.png",
  "https://res.cloudinary.com/daoju0r3c/image/upload/v1764173812/agf-Photoroom_1_cmpcyy.png",
  "https://res.cloudinary.com/daoju0r3c/image/upload/v1764173861/AG-F_Superplus-Photoroom_shadow_kdb8m9.png",
  "https://res.cloudinary.com/daoju0r3c/image/upload/v1764173895/crop_giant_1_cs6nnn.png",
  "https://res.cloudinary.com/daoju0r3c/image/upload/v1764173960/palmsulfnew_ntrjwo.png",
  "https://res.cloudinary.com/daoju0r3c/image/upload/v1764174014/croppernew_qydobw.png",
  "https://res.cloudinary.com/daoju0r3c/image/upload/v1764174140/cropperplusnew_gxqz3w.png",
  "https://res.cloudinary.com/daoju0r3c/image/upload/v1764174176/silicosenew_t2zou5.png",
];

const PRODUCT_NAMES = [
  "GOLDEN DROP",
  "AG-F",
  "AG-F SUPER PLUS",
  "CROP GIANT",
  "PALM SULF",
  "CROPPER",
  "CROPPER PLUS",
  "SILICOSE",
];

const SHOW_GROUP_TIMINGS = [0.05, 0.10, 0.25, 0.35];
const GROUP_STAGGER_MS = 80;
const GROUP_VISIBLE_MS_EXTRA = 80;

function useStickerSize() {
  const [size, setSize] = useState(() =>
    typeof window !== "undefined" && window.innerWidth < 768 ? DEFAULT_MOBILE_SIZE : DEFAULT_DESKTOP_SIZE
  );
  useEffect(() => {
    const onResize = () =>
      setSize(window.innerWidth < 768 ? DEFAULT_MOBILE_SIZE : DEFAULT_DESKTOP_SIZE);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return size;
}

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(typeof window !== "undefined" && window.innerWidth < breakpoint);
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [breakpoint]);
  return isMobile;
}

export default function PlantWithProducts() {
  
  const isMobile = useIsMobile();
  const [visibleMap, setVisibleMap] = useState<Record<number, boolean>>({});
  const timersRef = useRef<number[]>([]);
  const intervalRef = useRef<number | null>(null);
  const [mounted, setMounted] = useState(false);


  const durationMs = useMemo(() => {
    try {
      const fr = (animationData as any).fr ?? 30;
      const ip = (animationData as any).ip ?? 0;
      const op = (animationData as any).op ?? 60;
      const sec = (op - ip) / fr;
      return Math.max(700, Math.round(sec * 1000));
    } catch {
      return 4200;
    }
  }, []);

    useEffect(() => {
    setMounted(true);
  }, []);


  useEffect(() => {
    const clearTimers = () => {
      timersRef.current.forEach((t) => clearTimeout(t));
      timersRef.current = [];
    };

    const scheduleCycle = () => {
      clearTimers();
      setVisibleMap({}); 

      const pairs = [
        [0, 4], 
        [1, 5], 
        [3, 7], 
        [2, 6], 
      ];

      for (let groupIdx = 0; groupIdx < pairs.length; groupIdx++) {
        const pair = pairs[groupIdx];
        const timingFraction = SHOW_GROUP_TIMINGS[groupIdx] ?? 0.8;
        const showAt = Math.round(durationMs * timingFraction);

        for (let j = 0; j < pair.length; j++) {
          const idx = pair[j];
          const t = window.setTimeout(() => {
            setVisibleMap((prev) => ({ ...prev, [idx]: true }));
          }, showAt + j * GROUP_STAGGER_MS);
          timersRef.current.push(t);
        }
      }

      const hideT = window.setTimeout(() => {
        setVisibleMap({});
      }, durationMs + GROUP_VISIBLE_MS_EXTRA);
      timersRef.current.push(hideT);
    };

    scheduleCycle();
    intervalRef.current = window.setInterval(scheduleCycle, durationMs);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      clearTimers();
    };
  }, [durationMs]);

  useEffect(() => {
    return () => {
      timersRef.current.forEach((t) => clearTimeout(t));
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const getSizeFor = (i: number) => {
  const custom = PRODUCT_SIZES[i];
  if (typeof custom === "number" && custom > 0) return custom;

  // HARD LOCK
  return isMobile ? 130 : 190;
};

  const positions = isMobile ? POSITIONS_MOBILE : POSITIONS_DESKTOP;
  
  if (!mounted) {
  return null;
}

  return (
    <div className="relative w-full flex justify-center 
  items-start sm:items-center
  py-2 sm:py-12 bg-white
  overflow-visible">
      <div className="relative w-full max-w-[1100px] flex justify-center items-center
  min-h-[340px] sm:min-h-auto">
        <div className="relative w-full h-[300px] sm:h-auto">
          <Lottie
  animationData={animationData}
  loop
  autoplay
  style={{
    width: "100%",
    height: isMobile ? 300 : undefined,
    maxHeight: isMobile ? 300 : undefined,
  }}
/>
        </div>
                            
        <div aria-hidden className="absolute inset-0 z-30">
          {positions.map((pos, i) => {
            const visible = Boolean(visibleMap[i]);
            const size = getSizeFor(i);

            const containerHeight = size + (isMobile ? 34 : 40);

            const baseStyle: React.CSSProperties = {
              position: "absolute",
              left: pos.left,
              top: pos.top,
              transform: `translate(-50%,-50%) ${visible ? "translateY(0) scale(1)" : "translateY(10px) scale(0.9)"}`,
              opacity: visible ? 1 : 0,
              transition: `transform 360ms cubic-bezier(.18,.95,.32,1), opacity 260ms ease`,
              transitionDelay: visible ? `${(i % 2) * 40}ms` : "0ms",
              zIndex: 40,
              width: size,
              height: containerHeight,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              pointerEvents: "none",
            };

            return (
              <div key={i} style={baseStyle}>
                <div
                  style={{
                    width: size,
                    height: size,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 8,
                  }}
                >
                  <img
                    src={PRODUCTS[i]}
                    alt={PRODUCT_NAMES[i] ?? `product-${i}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      display: "block",
                      borderRadius: 8,
                      filter: visible ? "drop-shadow(0 12px 26px rgba(0,0,0,0.16))" : "none",
                      pointerEvents: "none",
                      background: "transparent",
                    }}
                  />
                </div>

                <div
  style={{
    marginTop: isMobile ? 6 : 4,
    minWidth: Math.max(92, size * 0.6),
    padding: isMobile ? "6px 10px" : "6px 12px",
    background: "#0B5D3E",
    borderRadius: 999,
    boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
    textAlign: "center",
    fontSize: isMobile ? 12 : 13,
    fontWeight: 700,
    color: "#ffffff",
    pointerEvents: "auto",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
   transform: isMobile
  ? `translate(${LABEL_OFFSET_X_MOBILE[i] ?? 0}px, ${LABEL_OFFSET_MOBILE[i] ?? 0}px)`
  : `translateY(${LABEL_OFFSET_DESKTOP[i] ?? 0}px)`,
  }}
>                
                  {PRODUCT_NAMES[i]}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 420px) {
          .absolute[aria-hidden] { /* no-op: just conservative selector to keep build happy */ }
        }
        @supports (padding: env(safe-area-inset-bottom)) {
    body {
      padding-bottom: env(safe-area-inset-bottom);
    }
  }
      `}</style>
    </div>
  );
}
