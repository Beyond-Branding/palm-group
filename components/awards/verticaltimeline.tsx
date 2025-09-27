"use client";
import { useEffect, useRef } from "react";

const timelineData = [
  {
    year: 2020,
    title: "New decade, new beginnings",
    description:
      "In 2000, a new global agriculture leader was formed. Novartis' and Astra Zeneca's Agribusinesses merged to create our modern-day Syngenta brand. We listed on the New York Stock Exchange and launched our very own website – a new product at the time!",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Syngenta_logo.svg/2560px-Syngenta_logo.svg.png", // Replace with your actual image URL or local image path
  },
  {
    year: 2021,
    title: "HIGHLIGHT OF 2021",
    description:
      "In 2020, a new global agriculture leader was formed. Novartis' and Astra Zeneca's Agribusinesses merged to create our modern-day Syngenta brand. We listed on the New York Stock Exchange and launched our very own website – a new product at the time!",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Syngenta_logo.svg/2560px-Syngenta_logo.svg.png", // Replace with your actual image URL or local image path
  },
  {
    year: 2022,
    title: "HIGHLIGHT OF 2022",
    description:
      "In 2000, a new global agriculture leader was formed. Novartis' and Astra Zeneca's Agribusinesses merged to create our modern-day Syngenta brand. We listed on the New York Stock Exchange and launched our very own website – a new product at the time!",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Syngenta_logo.svg/2560px-Syngenta_logo.svg.png", // Replace with your actual image URL or local image path
  },
  {
    year: 2023,
    title: "HIGHLIGHT OF 2023",
    description:
      "In 2000, a new global agriculture leader was formed. Novartis' and Astra Zeneca's Agribusinesses merged to create our modern-day Syngenta brand. We listed on the New York Stock Exchange and launched our very own website – a new product at the time!",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Syngenta_logo.svg/2560px-Syngenta_logo.svg.png", // Replace with your actual image URL or local image path
  },
  {
    year: 2024,
    title: "HIGHLIGHT OF 2024",
    description:
      "In 2000, a new global agriculture leader was formed. Novartis' and Astra Zeneca's Agribusinesses merged to create our modern-day Syngenta brand. We listed on the New York Stock Exchange and launched our very own website – a new product at the time!",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Syngenta_logo.svg/2560px-Syngenta_logo.svg.png", // Replace with your actual image URL or local image path
  },
  {
    year: 2025,
    title: "HIGHLIGHT OF 2025",
    description:
      "In 2000, a new global agriculture leader was formed. Novartis' and Astra Zeneca's Agribusinesses merged to create our modern-day Syngenta brand. We listed on the New York Stock Exchange and launched our very own website – a new product at the time!",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Syngenta_logo.svg/2560px-Syngenta_logo.svg.png", // Replace with your actual image URL or local image path
  },
];

export default function VerticalTimeline() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    refs.current.forEach((el) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("opacity-100", "translate-y-0");
            }
          });
        },
        { threshold: 0.2 }
      );
      observer.observe(el);
      return () => observer.disconnect();
    });
  }, []);

  return (
    <section className="py-20 px-6 max-w-5xl mx-auto relative bg-white">
      <div className="relative pl-24">
        {/* Vertical timeline line */}
        <div
          className="absolute left-16 top-0 bottom-0 w-1 bg-orange-500 rounded"
          aria-hidden="true"
        />
        {timelineData.map((item, i) => (
          <div
            key={item.year}
            ref={(el) => { refs.current[i] = el; }}
            className="flex items-start gap-10 mb-24 opacity-0 translate-y-10 transition-all duration-700"
          >
            <div className="flex flex-col items-center" style={{ minWidth: 90 }}>
              <span className="text-4xl font-extrabold text-orange-600">
                {item.year}
              </span>
              <div className="mt-2 w-5 h-5 rounded-full bg-orange-500 border-4 border-white shadow" />
            </div>
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold mb-3">{item.title}</h2>
              <p className="text-gray-700 mb-6">{item.description}</p>
              <img
                src={item.imageUrl}
                alt={item.title}
                className="rounded-md border border-gray-300 shadow-md max-w-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
