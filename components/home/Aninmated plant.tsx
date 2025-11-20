// PlantWithProducts.tsx
"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Lottie from "lottie-react";
import animationData from "../../public/Tomato plant.json";

/* ------------------ USER TUNABLE CONSTANTS ------------------ */
// Desktop default sticker size (unchanged)
const DEFAULT_DESKTOP_SIZE = 160; // px (desktop)
// Much smaller mobile size so pills/images don't overlap
const DEFAULT_MOBILE_SIZE = 60; // px (mobile width < 768)

// Per-product sizes (px).
// NOTE: set null so responsive size is used. If you set numbers here, they'll override responsive sizing.
// Previously you had numbers here (200) which forced large images on mobile.
const PRODUCT_SIZES: (number | null)[] = [
  null, // product 0
  null, // product 1
  null, // product 2
  null, // product 3
  null, // product 4
  null, // product 5
  null, // product 6
  null, // product 7
];

// Desktop positions for each product (8 items). Use percent strings.
const POSITIONS_DESKTOP: { left: string; top: string }[] = [
  { left: "38%", top: "75%" }, // product 0
  { left: "22%", top: "58%" }, // product 1
  { left: "36%", top: "0%" },  // product 2
  { left: "22%", top: "8%" },  // product 3
  { left: "65%", top: "75%" }, // product 4
  { left: "78%", top: "58%" }, // product 5
  { left: "65%", top: "0%" },  // product 6
  { left: "78%", top: "8%" },  // product 7
];

// Mobile-specific positions (tuned to push pills lower / away from center plant)
const POSITIONS_MOBILE: { left: string; top: string }[] = [
  { left: "22%", top: "90%" }, // GOLDEN DROP
  { left: "10%", top: "45%" }, // AG-F
  { left: "32%", top: "-20%" },  // AG-F SUPER PLUS
  { left: "10%", top: "-2%" }, // CROP GIANT
  { left: "78%", top: "90%" }, // PALM SULF
  { left: "90%", top: "45%" }, // CROPPER
  { left: "65%", top: "-20%" }, // CROPPER PLUS
  { left: "90%", top: "-2%" }, // SILICOSE
];


// Product image paths (order must match the above arrays)
const PRODUCTS = [
  "/golden drop-Photoroom shadow.png",
  "/agf-Photoroom (1).png",
  "/AG-F Superplus-Photoroom shadow.png",
  "/crop giant (1).png",
  "/palmsulfnew.png",
  "/croppernew.png",
  "/cropperplusnew.png",
  "/silicosenew.png",
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

/* Timing & animation */
const SHOW_GROUP_TIMINGS = [0.05, 0.10, 0.25, 0.35];
const GROUP_STAGGER_MS = 80;
const GROUP_VISIBLE_MS_EXTRA = 80;

/* ---------------------- helper hooks ------------------------ */
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

/* -------------------- component ----------------------------- */
export default function PlantWithProducts() {
  const STICKER_SIZE_RESPONSIVE = useStickerSize();
  const isMobile = useIsMobile();
  const [visibleMap, setVisibleMap] = useState<Record<number, boolean>>({});
  const timersRef = useRef<number[]>([]);
  const intervalRef = useRef<number | null>(null);

  // compute lottie loop duration in ms (from animation data)
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

  // schedule groups (pairs) to appear each loop
  useEffect(() => {
    const clearTimers = () => {
      timersRef.current.forEach((t) => clearTimeout(t));
      timersRef.current = [];
    };

    const scheduleCycle = () => {
      clearTimers();
      setVisibleMap({}); // hide at cycle start

      // exact pair order
      const pairs = [
        [0, 4], // first
        [1, 5], // then
        [3, 7], // then
        [2, 6], // last
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

      // hide after the loop restarts
      const hideT = window.setTimeout(() => {
        setVisibleMap({});
      }, durationMs + GROUP_VISIBLE_MS_EXTRA);
      timersRef.current.push(hideT);
    };

    // start repeating schedule
    scheduleCycle();
    intervalRef.current = window.setInterval(scheduleCycle, durationMs);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      clearTimers();
    };
  }, [durationMs]);

  // cleanup on unmount
  useEffect(() => {
    return () => {
      timersRef.current.forEach((t) => clearTimeout(t));
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // helper: get size for product i (per-product size or responsive fallback)
  const getSizeFor = (i: number) => {
    const s = PRODUCT_SIZES[i];
    if (typeof s === "number" && s > 0) return s;
    return STICKER_SIZE_RESPONSIVE;
  };

  // choose positions depending on mobile/desktop
  const positions = isMobile ? POSITIONS_MOBILE : POSITIONS_DESKTOP;

  return (
    <div className="relative w-full flex justify-center items-center py-8 bg-white">
      <div className="relative w-full max-w-[1100px] flex justify-center items-center">
        {/* Lottie plant */}
        <div style={{ width: "100%", maxWidth: 820 }}>
          <Lottie animationData={animationData} loop autoplay style={{ width: "100%", height: "auto" }} />
        </div>

        {/* stickers layer */}
        <div aria-hidden className="absolute inset-0 z-30">
          {positions.map((pos, i) => {
            const visible = Boolean(visibleMap[i]);
            const size = getSizeFor(i);

            // container height includes extra space for the caption under the sticker
            // on mobile we reserve slightly less vertical room
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
              pointerEvents: "none", // keep stickers non-interactive
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

                {/* caption pill: green background and white text */}
                <div
                  style={{
                    marginTop: isMobile ? 8 : 8,
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
                    transform: isMobile ? "translateY(0)" : undefined,
                  }}
                  title={PRODUCT_NAMES[i]}
                >
                  {PRODUCT_NAMES[i]}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* extra small inline mobile CSS to ensure pills are smaller and centered on narrow screens */}
      <style>{`
        @media (max-width: 420px) {
          .absolute[aria-hidden] { /* no-op: just conservative selector to keep build happy */ }
        }
      `}</style>
    </div>
  );
}
