"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export function VisionMission() {
  const textRef1 = useRef<HTMLDivElement | null>(null);
  const imgRef1 = useRef<HTMLDivElement | null>(null);
  const textRef2 = useRef<HTMLDivElement | null>(null);
  const imgRef2 = useRef<HTMLDivElement | null>(null);

  const [textShown1, setTextShown1] = useState(false);
  const [imgShown1, setImgShown1] = useState(false);
  const [textShown2, setTextShown2] = useState(false);
  const [imgShown2, setImgShown2] = useState(false);

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      setTextShown1(true);
      setImgShown1(true);
      setTextShown2(true);
      setImgShown2(true);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          if (e.target === textRef1.current) setTextShown1(true);
          if (e.target === imgRef1.current) setImgShown1(true);
          if (e.target === textRef2.current) setTextShown2(true);
          if (e.target === imgRef2.current) setImgShown2(true);
        });
      },
      { threshold: 0.15 }
    );

    if (textRef1.current) obs.observe(textRef1.current);
    if (imgRef1.current) obs.observe(imgRef1.current);
    if (textRef2.current) obs.observe(textRef2.current);
    if (imgRef2.current) obs.observe(imgRef2.current);

    return () => obs.disconnect();
  }, []);

  return (
    <>
      <section className="relative bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 md:px-0 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-10 md:gap-12">
            <div
              ref={textRef1}
              className={[
                "order-2 md:order-1 md:col-span-6 md:pl-10 lg:pl-12",
                textShown1 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6",
                "transition-all duration-700 ease-out will-change-transform",
              ].join(" ")}
            >
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
                Nurturing Those Who{" "}
                <span className="text-green-600">Nurture the Earth</span>
              </h2>
              <p className="mt-5 text-gray-700 text-sm md:text-base leading-7 md:leading-8 max-w-prose">
                At Palm Group, we believe farmers are the backbone of agriculture.
                That’s why we empower them with innovative, organic, and non-toxic
                solutions designed to improve crop yield, quality, and soil health.
                Our goal is to support farmers in making informed, sustainable
                choices that strengthen their livelihoods and the land they
                cultivate.
              </p>
            </div>

            <div className="order-1 md:order-2 md:col-span-6 flex items-center">
              <div
                ref={imgRef1}
                className={[
                  "w-full max-w-none md:max-w-[520px] h-[300px] sm:h-[340px] md:h-[400px] lg:h-[440px] overflow-hidden relative",
                  imgShown1 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6",
                  "transition-all duration-700 ease-out will-change-transform ml-auto",
                ].join(" ")}
              >
                <Image
                  src="https://res.cloudinary.com/dmrylz6pc/image/upload/v1781598573/kekvlrraoppjhvcdx7eh.jpg"
                  alt="Farmers in the field"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  style={{ objectFit: "cover", objectPosition: "right center" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
