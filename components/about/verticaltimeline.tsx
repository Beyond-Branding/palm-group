"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";

type Section = {
  id: string;
  year: string;
  title: string;
  body: React.ReactNode;
  image?: string;
  imageAlt?: string;
};

const SECTIONS: Section[] = [
  {
    id: "today",
    year: "Today",
    title: "55+ Years of Trust & Growth",
    body: (
      <>
        <p>
          Palm Group today stands as a diversified enterprise across chemicals,
          pharmaceuticals, and agriculture, serving industries and farmers with
          the same values it was founded on – quality, innovation, and trust.
          With over five decades of excellence, the Group continues to focus on
          sustainable solutions, global partnerships, and farmer prosperity,
          reinforcing its position as a trusted name in India and overseas.
        </p>
      </>
    ),
    image: "https://res.cloudinary.com/daoju0r3c/image/upload/v1764225209/Time_park_vvrkvi.jpg",
    imageAlt: "Palm Group today",
  },
  {
    id: "2010s",
    year: "2010s",
    title: "Global Expansion",
    body: (
      <>
        <p>
          Palm International began expanding its footprint globally. Its
          products gained recognition and trust not only across India but also
          in international markets such as South Korea, South Africa, Sri Lanka,
          UK, Indonesia, Malaysia, Singapore, Ireland, Wales, and Ghana. This
          expansion reflected the universal acceptance of Palm’s commitment to
          quality and innovation.
        </p>
      </>
    ),
    image: "https://res.cloudinary.com/daoju0r3c/image/upload/v1764223471/shivrajtesti_vlpaat.jpg",
    imageAlt: "Global expansion in the 2010s",
  },
  {
    id: "2000s",
    year: "2000s",
    title: "Innovation & Farmer-Centric Solutions",
    body: (
      <>
        <p>
          Palm International introduced a portfolio of specialized agri-inputs
          designed to solve specific crop challenges and improve farmer
          profitability. Each product combines innovation with sustainability:
        </p>
        <p>
          Golden Drop – a protein hydrolysate–based organic biostimulant that
          boosts flowering, reduces flower drop.
        </p>
        <p>
          AG-F – a premium non-ionic sticker, spreader, activator, and adjuvant
          that enhances the performance of pesticides, micronutrients, and plant
          growth regulators.
        </p>
        <p>
          AG-F Super Plus – an advanced silicon-based sticker, spreader,
          activator, and adjuvant, delivering superior spreading, rain
          resistance, and enhanced nutrient absorption.
        </p>
        <p>
          Crop Giant – a plant nutrient solution developed based on the
          carbohydrate theory to prevent berry dropping and fruit cracking,
          while improving sugar content, storage quality, and improves fruit
          set.
        </p>
        <p>
          Palm Sulf – an organic liquid sulfur, effective in controlling mites
          and fungal diseases while correcting sulfur deficiencies in crops.
        </p>
        <p>
          Silicose – a concentrated secondary plant nutrient source for silica,
          which strengthens plant cell walls, improves disease resistance, and
          enhances stress tolerance.
        </p>
        <p>
          Cropper 6%, Cropper Plus 12%, and Cropper Granules – humic acid-based
          soil health solutions that improve soil fertility, water-holding
          capacity, and nutrient uptake.
        </p>
        <p>
          Each product was carefully researched and developed to address
          specific crop challenges, ensuring better yield, crop quality, and
          profitability for farmers.
        </p>
      </>
    ),
    image: "https://res.cloudinary.com/daoju0r3c/image/upload/v1764225698/innovationagri_xf2p69.jpg",
    imageAlt: "Innovation & farmer-centric solutions in the 2000s",
  },
  {
    id: "1998",
    year: "1998",
    title: "Entry into Organic Agri-Solutions",
    body: (
      <>
        <p>
          With a strong commitment to sustainability and farmer welfare, Palm
          Group launched Palm International, its agri-division. The focus was on
          biostimulants, silicon-based foliar sprays, organic crop care
          solutions, and adjuvants, offering eco-friendly and effective
          alternatives for modern agriculture.
        </p>
      </>
    ),
    image: "https://res.cloudinary.com/daoju0r3c/image/upload/v1764225752/organicagri_brd0m4.jpg",
    imageAlt: "Entry into organic agri-solutions",
  },
  {
    id: "1994",
    year: "1994",
    title: "Expansion into Pharmaceuticals",
    body: (
      <>
        <p>
          Recognizing the growing healthcare needs of India, Palm Group diversified into the pharmaceutical sector through its dedicated division, Palm Pharmachem, focusing on the supply of Pharmaceutical APIs, intermediates, and C&F agency services. By partnering with leading domestic and international pharma companies, the Group built a reputation for reliability, timely supply, and uncompromising quality standards.
        </p>
      </>
    ),
    image: "https://res.cloudinary.com/daoju0r3c/image/upload/v1764225787/expansionpharma_xww8av.jpg",
    imageAlt: "Expansion into pharmaceuticals",
  },
  {
    id: "1969",
    year: "1969",
    title: "Foundation of Palm Group",
    body: (
      <>
        <p>
          Palm Group was established in Mumbai with Shah Scientific (India), dedicated to Laboratory and Fine Chemicals catering to the growing needs of research institutions, universities, and industries.This marked the beginning of a journey rooted in quality, innovation, and service.
        </p>
      </>
    ),
    image: "https://res.cloudinary.com/daoju0r3c/image/upload/v1764225829/Found_thwkfk.jpg",
    imageAlt: "Foundation of Palm Group",
  },
];

export default function PalmVerticalTimelineExact() {
  const ordered = useMemo(() => [...SECTIONS].slice().reverse(), []);

  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imgRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(0);

  const [textShown, setTextShown] = useState<boolean[]>(
    () => Array(ordered.length).fill(false)
  );
  const [imgShown, setImgShown] = useState<boolean[]>(
    () => Array(ordered.length).fill(false)
  );

  function getActiveIndexByTop(refs: (HTMLDivElement | null)[]) {
    if (typeof window === "undefined") return 0;
    const trigger = window.innerWidth >= 768 ? window.innerHeight * 0.20 : window.innerHeight * 0.18;
    let lastIndex = 0;
    for (let i = 0; i < refs.length; i++) {
      const el = refs[i];
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      if (rect.top <= trigger) {
        lastIndex = i;
      } else {
        break;
      }
    }
    return lastIndex;
  }

  useEffect(() => {
    const onScroll = () => setActive(getActiveIndexByTop(itemRefs.current));
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ordered.length]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        setTextShown((prev) => {
          const next = [...prev];
          entries.forEach((e) => {
            if (e.isIntersecting) {
              const idx = Number((e.target as HTMLElement).dataset.index);
              if (!Number.isNaN(idx)) next[idx] = true;
            }
          });
          return next;
        });
      },
      { threshold: 0.5, rootMargin: "0px 0px -25% 0px" }
    );
    textRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, [ordered.length]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        setImgShown((prev) => {
          const next = [...prev];
          entries.forEach((e) => {
            if (e.isIntersecting) {
              const idx = Number((e.target as HTMLElement).dataset.index);
              if (!Number.isNaN(idx)) next[idx] = true;
            }
          });
          return next;
        });
      },
      { threshold: 0.35, rootMargin: "0px 0px -10% 0px" }
    );
    imgRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, [ordered.length]);

  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  return (
    <section className="relative bg-white">
      <div
  aria-hidden
  className="hidden md:block pointer-events-none absolute left-[5.75rem] md:left-[9.55rem] top-0 bottom-0 w-[2px] bg-green-500/60"
/>


      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-[8.5rem_1fr] gap-6 md:gap-12 px-6 md:px-8">
        <aside className="relative hidden md:block">
          <div className="sticky top-20 md:top-20">
            <div
  className="text-green-600 font-extrabold leading-none pl-1.5"
  style={{
    fontSize:
      ordered[active]?.year === "2000s"
        ? "clamp(1.45rem, 3.9vw, 2.2rem)"
        : "clamp(1.5rem, 4vw, 2.4rem)",
  }}
>
  {ordered[active]?.year}
</div>

          </div>
        </aside>

        <div className="relative">
          {ordered.map((s, i) => {
            const textVisible = prefersReduced || textShown[i];
            const imgVisible = prefersReduced || imgShown[i];

            return (
              <div
                key={s.id}
                ref={(el) => (itemRefs.current[i] = el)}
                className={[
                  "relative pl-6 pr-2 py-8 md:pl-14 md:pr-0",
                  i === 0
                    ? "md:min-h-[20vh] md:items-start md:pt-2"
                    : "md:min-h-[80vh]",
                  "md:flex",
                ].join(" ")}
              >
                <article className="max-w-3xl w-full">
                  <div className="md:hidden mb-2 text-green-600 font-extrabold text-2xl">
                    {s.year}
                  </div>

                  <div
                    ref={(el) => (textRefs.current[i] = el)}
                    data-index={i}
                    className={[
                      textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
                      prefersReduced ? "" : "transition-all duration-500 ease-out",
                    ].join(" ")}
                    style={i === 0 ? { marginTop: "-0.8rem" } : undefined}
                  >
                    <h3 className="text-xl md:text-3xl font-bold">{s.title}</h3>
                    <div className="mt-2 space-y-2 text-gray-700 md:text-base">
                      {s.body}
                    </div>
                  </div>

                  <div className="mt-4 md:mt-6">
                    <div
                      ref={(el) => (imgRefs.current[i] = el)}
                      data-index={i}
                      className={[
                        "relative w-full max-w-3xl border border-green-100 bg-white overflow-hidden",
                        "aspect-video",
                        imgVisible ? "opacity-100 translate-y-0 shadow-lg" : "opacity-0 translate-y-2 shadow-none",
                        prefersReduced ? "" : "transition-all duration-600 ease-out",
                      ].join(" ")}
                      style={{
                        boxShadow:
                          imgVisible && !prefersReduced
                            ? "0 8px 18px rgba(16,185,129,0.12), 0 2px 6px rgba(0,0,0,0.05)"
                            : undefined,
                      }}
                    >
                      {s.image ? (
                        <img
                          src={s.image}
                          alt={s.imageAlt || s.title}
                          loading="lazy"
                          className="h-full w-full object-cover select-none"
                          draggable={false}
                        />
                      ) : (
                        <div className="h-full w-full flex items-center justify-center text-sm text-gray-400">
                          Insert image for “{s.year}”
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
