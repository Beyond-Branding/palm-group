// PlantWithProducts.tsx
"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Lottie from "lottie-react";
import animationData from "../../public/Tomato plant.json";

/**
 * PlantWithProducts
 * - Manual POSITIONS: edit the POSITIONS array below to place each product exactly (left/top %).
 * - Per-product sizes: PRODUCT_SIZES array (px). If an index missing -> fallback to responsive STICKER_SIZE.
 * - Timing controls: SHOW_GROUP_TIMINGS & GROUP_STAGGER_MS
 */

/* ------------------ USER TUNABLE CONSTANTS ------------------ */

// Global (responsive) default sticker size (used if PRODUCT_SIZES[i] is not set)
const DEFAULT_DESKTOP_SIZE = 120; // px (desktop)
const DEFAULT_MOBILE_SIZE = 64; // px (mobile width < 768)

// Per-product sizes (px). Set value for each product you want custom size for.
// If you prefer uniform sizes, leave array empty or set all equal.
const PRODUCT_SIZES: (number | null)[] = [
  250, // product 0
  250, // product 1
  250, // product 2
  250, // product 3
  250, // product 4
  250, // product 5
  250, // product 6
  250, // product 7
];

// Manual positions for each product (8 items). Use percent strings.
// left/top are relative to the animation container (50%/50% is center).
// Edit these values to place stickers exactly where you want.
const POSITIONS: { left: string; top: string }[] = [
  { left: "5%", top: "35%" }, // product 0
  { left: "15%", top: "5%" }, // product 1
  { left: "32%", top: "68%" }, // product 2
  { left: "12%", top: "74%" }, // product 3
  { left: "86%", top: "36%" }, // product 4
  { left: "72%", top: "10%" }, // product 5
  { left: "69%", top: "75%" }, // product 6
  { left: "85%", top: "78%" }, // product 7
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

/* Timing & animation */
const SHOW_GROUP_TIMINGS = [0.05, 0.20, 0.30, 0.40]; // when each pair appears as fraction of lottie loop
const GROUP_STAGGER_MS = 80; // delay between two items in pair (ms)
const GROUP_VISIBLE_MS_EXTRA = 80; // tiny buffer to hide after loop restarts

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

/* -------------------- component ----------------------------- */
export default function PlantWithProducts() {
  const STICKER_SIZE_RESPONSIVE = useStickerSize();
  const [visibleMap, setVisibleMap] = useState<Record<number, boolean>>({});
  const timersRef = useRef<number[]>([]);
  const intervalRef = useRef<number | null>(null);

  // compute lottie loop duration in ms (fr/ip/op) — fallback if missing
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

      // reveal pairs: [0,4],[1,5],[2,6],[3,7]
      const pairs = [
        [0, 4],
        [1, 5],
        [2, 6],
        [3, 7],
      ];
      pairs.forEach((pair, groupIdx) => {
        const showAt = Math.round(durationMs * (SHOW_GROUP_TIMINGS[groupIdx] ?? 0.8));
        pair.forEach((idx, j) => {
          const t = window.setTimeout(() => {
            setVisibleMap((prev) => ({ ...prev, [idx]: true }));
          }, showAt + j * GROUP_STAGGER_MS);
          timersRef.current.push(t);
        });
      });

      // hide after loop restarts
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

  return (
    <div className="relative w-full flex justify-center items-center py-8 bg-white">
      <div className="relative w-full max-w-[980px] flex justify-center items-center">
        {/* Lottie plant */}
        <div style={{ width: "100%", maxWidth: 820 }}>
          <Lottie animationData={animationData} loop autoplay style={{ width: "100%", height: "auto" }} />
        </div>

        {/* stickers layer */}
        <div aria-hidden className="pointer-events-none absolute inset-0 z-30">
          {POSITIONS.map((pos, i) => {
            const visible = Boolean(visibleMap[i]);
            const size = getSizeFor(i);

            const baseStyle: React.CSSProperties = {
              position: "absolute",
              left: pos.left,
              top: pos.top,
              transform: `translate(-50%,-50%) ${visible ? "translateY(0) scale(1)" : "translateY(10px) scale(0.88)"}`,
              opacity: visible ? 1 : 0,
              transition: `transform 320ms cubic-bezier(.18,.95,.32,1), opacity 260ms ease`,
              transitionDelay: visible ? `${(i % 2) * 40}ms` : "0ms",
              zIndex: 40,
              width: size,
              height: size,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "none",
              filter: visible ? "drop-shadow(0 12px 26px rgba(0,0,0,0.16))" : "none",
            };

            return (
              <div key={i} style={baseStyle}>
                <img
                  src={PRODUCTS[i]}
                  alt={`product-${i}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    display: "block",
                    borderRadius: 8,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
