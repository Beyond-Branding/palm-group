"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Lottie from "lottie-react";
import animationData from "../../public/Tomato plant.json";

const DEFAULT_DESKTOP_SIZE = 190; 
const DEFAULT_MOBILE_SIZE = 130; 

const PRODUCT_SIZES: number[] = [
  150, // 0 AG-F SUPER PLUS
  180, // 1 AG-F
  130, // 2 CROPPER GRANULES
  180, // 3 CROP GIANT
  180, // 4 PALM SULF
  180, // 5 CROPPER
  180, // 6 CROPPER PLUS
  180, // 7 SILICOSE
  180, // 8 GOLDEN DROP
];

const PRODUCT_SIZES_MOBILE: number[] = [
  95, // 0 AG-F SUPER PLUS
  130, // 1 AG-F
  100, // 2 CROPPER GRANULES
  130, // 3 CROP GIANT
  130, // 4 PALM SULF
  130, // 5 CROPPER
  130, // 6 CROPPER PLUS
  130, // 7 SILICOSE
  130, // 8 GOLDEN DROP
];


const POSITIONS_DESKTOP = [
  { left: "28%", top: "75%" }, // 0 AG-F SUPER PLUS
  { left: "12%", top: "58%" }, // 1 AG-F
  { left: "28%", top: "-3%" }, // 2 CROPPER GRANULES
  { left: "12%", top: "8%" }, // 3 CROP GIANT
  { left: "75%", top: "79%" }, // 4 PALM SULF
  { left: "88%", top: "58%" }, // 5 CROPPER
  { left: "75%", top: "-5%" }, // 6 CROPPER PLUS
  { left: "88%", top: "12%" }, // 7 SILICOSE
  { left: "50%", top: "-15%" }, // 8 GOLDEN DROP
];


const POSITIONS_MOBILE = [
  { left: "28%", top: "76%" },
  { left: "12%", top: "44%" },
  { left: "32%", top: "-30%" },
  { left: "12%", top: "2%" },
  { left: "72%", top: "79%" },
  { left: "88%", top: "44%" },
  { left: "66%", top: "-32%" },
  { left: "88%", top: "5%" },
  { left: "50%", top: "5%" },
];


const LABEL_OFFSET_DESKTOP: number[] = [
   1, // 0 AG-F SUPER PLUS
  -18, // 1 AG-F
  -12, // 2 CROPPER GRANULES
  -16, // 3 CROP GIANT
  -29, // 4 PALM SULF
  -22, // 5 CROPPER
  -24, // 6 CROPPER PLUS
  -27, // 7 SILICOSE
  -20, // 8 GOLDEN DROP
];

const LABEL_OFFSET_MOBILE: number[] = [
  2,  // 0 AG-F SUPER PLUS
  -18, // 1 AG-F
  -10, // 2 CROPPER GRANULES
  -12, // 3 CROP GIANT
  -23, // 4 PALM SULF
  -20, // 5 CROPPER
  -16, // 6 CROPPER PLUS
  -22, // 7 SILICOSE
  -20, // 8 GOLDEN DROP
];

const LABEL_OFFSET_X_MOBILE: number[] = [
   0, // 0 AG-F SUPER PLUS
  -5, // 1 AG-F
  -5, // 2 CROPPER GRANULES
   1, // 3 CROP GIANT
   1, // 4 PALM SULF
   6, // 5 CROPPER
   4, // 6 CROPPER PLUS
   5, // 7 SILICOSE
   0, // 8 GOLDEN DROP
];


const PRODUCTS = [
  // 0 → AG-F SUPER PLUS (replaces Golden Drop position)
  "https://res.cloudinary.com/daoju0r3c/image/upload/v1764173861/AG-F_Superplus-Photoroom_shadow_kdb8m9.png",

  // 1 → AG-F
  "https://res.cloudinary.com/daoju0r3c/image/upload/v1764173812/agf-Photoroom_1_cmpcyy.png",

  // 2 → CROPPER GRANULES (NEW)
  "https://res.cloudinary.com/daoju0r3c/image/upload/v1767960406/croppergranules-removebg-preview_rzxnek.png",

  // 3 → CROP GIANT
  "https://res.cloudinary.com/daoju0r3c/image/upload/v1764173895/crop_giant_1_cs6nnn.png",

  // 4 → PALM SULF
  "https://res.cloudinary.com/daoju0r3c/image/upload/v1764173960/palmsulfnew_ntrjwo.png",

  // 5 → CROPPER
  "https://res.cloudinary.com/daoju0r3c/image/upload/v1764174014/croppernew_qydobw.png",

  // 6 → CROPPER PLUS
  "https://res.cloudinary.com/daoju0r3c/image/upload/v1764174140/cropperplusnew_gxqz3w.png",

  // 7 → SILICOSE
  "https://res.cloudinary.com/daoju0r3c/image/upload/v1764174176/silicosenew_t2zou5.png",

  // 8 → GOLDEN DROP (moved to right side)
  "https://res.cloudinary.com/daoju0r3c/image/upload/v1764173725/golden_drop-Photoroom_shadow_m9aigy.png",
];

const PRODUCT_NAMES = [
  "AG-F SUPER PLUS",
  "AG-F",
  "CROPPER GRANULES",
  "CROP GIANT",
  "PALM SULF",
  "CROPPER",
  "CROPPER PLUS",
  "SILICOSE",
  "GOLDEN DROP",
];


const SHOW_GROUP_TIMINGS = [0.05, 0.10, 0.25, 0.35, 0.55];
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
  [0, 4], // AG-F SUPER PLUS + PALM SULF
  [1, 5], // AG-F + CROPPER
  [3, 7], // CROP GIANT + SILICOSE
  [2, 6], // CROPPER GRANULES + CROPPER PLUS
  [8],    // ✅ GOLDEN DROP (alone)
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
  if (isMobile) {
    return PRODUCT_SIZES_MOBILE[i] ?? DEFAULT_MOBILE_SIZE;
  }

  return PRODUCT_SIZES[i] ?? DEFAULT_DESKTOP_SIZE;
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
