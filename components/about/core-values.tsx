"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export function CoreValues() {
  const card1Ref = useRef<HTMLElement | null>(null);
  const card2Ref = useRef<HTMLElement | null>(null);
  const [card1Shown, setCard1Shown] = useState(false);
  const [card2Shown, setCard2Shown] = useState(false);

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      setCard1Shown(true);
      setCard2Shown(true);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          if (e.target === card1Ref.current) setCard1Shown(true);
          if (e.target === card2Ref.current) setCard2Shown(true);
        });
      },
      { threshold: 0.18 }
    );

    if (card1Ref.current) obs.observe(card1Ref.current);
    if (card2Ref.current) obs.observe(card2Ref.current);

    return () => obs.disconnect();
  }, []);

  return (
    <section className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <article
            ref={card1Ref}
            className={[
              card1Shown ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8",
              "transform transition-all duration-700 ease-out will-change-transform",
              "bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1",
              "overflow-hidden",
            ].join(" ")}
          >
            <div className="h-1 bg-[#00A651]" />

            <div className="relative w-full h-56 sm:h-64 md:h-56 lg:h-64">
              <Image
                src="https://res.cloudinary.com/dmrylz6pc/image/upload/v1781598574/hrrp418lot6mqiiolnvx.jpg"
                alt="Seedling / sprout symbolizing growth"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                style={{ objectFit: "cover", objectPosition: "center" }}
                className="block"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-black-800">
                Sowing the Seeds of a Sustainable Future
              </h3>

              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                To build a world where sustainable agriculture supports thriving rural
                communities and resilient ecosystems. We are committed to offering
                farmer-centric, organic, and non-toxic bio-products that improve both
                crop yield and quality, while nurturing the health of the soil and
                environment.
              </p>
            </div>
          </article>

          <article
            ref={card2Ref}
            className={[
              card2Shown ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8",
              "transform transition-all duration-700 ease-out will-change-transform",
              "bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1",
              "overflow-hidden",
            ].join(" ")}
          >
            <div className="h-1 bg-[#00A651]" />

            <div className="relative w-full h-56 sm:h-64 md:h-56 lg:h-64">
              <Image
                src="https://res.cloudinary.com/dmrylz6pc/image/upload/v1781598574/dals8jkrezeta2zjysf3.jpg"
                alt="Rows of healthy green crops"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                style={{ objectFit: "cover", objectPosition: "center" }}
                className="block"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-black-800">
                Transforming Agriculture, Organic Innovation for Every Farmer
              </h3>

              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                At The Palm Group, our mission is to empower farmers by promoting
                organic farming and the use of next-generation, eco-friendly solutions.
                Through innovative, non-toxic agricultural inputs, we aim to help
                farmers boost productivity and enhance the overall quality of their
                harvests, sustainably and responsibly.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
