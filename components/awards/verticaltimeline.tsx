"use client";
import { useEffect, useRef } from "react";

// --- UPDATED timelineData with Professional Narrative ---
const timelineData = [
  {
    year: 2020,
    title: "Founding and Initial Vision",
    description:
      "Palm International was established in 2020 in the heart of Vile Parle, marking the beginning of a new chapter in the regional industry. Our focus was placed squarely on specialized services, underpinned by a strong client-first philosophy that quickly took root and defined our initial market approach.",
    // imageUrl:
    //   "/images/palm-international-milestone-2020.jpg", // Placeholder - Update with your actual image
  },
  {
    year: 2021,
    title: "Strategic Digital Advancement",
    description:
      "The year 2021 saw the execution of our first major strategic advancement with the launch of a comprehensive digital client portal. This technology significantly streamlined operations, contributing to a rapid local growth that expanded our client base and solidified our reputation as a reliable business partner in Vile Parle.",
    // imageUrl:
    //   "/images/palm-international-milestone-2021.jpg", // Placeholder - Update with your actual image
  },
  {
    year: 2022,
    title: "Service Diversification and Expansion",
    description:
      "Building on our foundation, 2022 was characterized by crucial service diversification. Palm International successfully introduced specialized financial advisory and professional training verticals, strategically broadening our market reach across the wider Mumbai business community.",
    // imageUrl:
    //   "/images/palm-international-milestone-2022.jpg", // Placeholder - Update with your actual image
  },
  {
    year: 2023,
    title: "Community Commitment and Outreach",
    description:
      "Our focus extended beyond business, deepening our commitment to the Vile Parle community in 2023. We successfully launched the 'Vile Parle Skills Development' program, an initiative that provided valuable mentorship and internships, underscoring the company's core values of social responsibility.",
    // imageUrl:
    //   "/images/palm-international-milestone-2023.jpg", // Placeholder - Update with your actual image
  },
  {
    year: 2024,
    title: "Relocation and Operational Upgrade",
    description:
      "The necessity of continued growth led to a significant internal upgrade in 2024. The company relocated to a modern, state-of-the-art office within Vile Parle (East) to better accommodate our expanding team and foster an environment built on collaboration and innovation.",
    // imageUrl:
    //   "/images/palm-international-milestone-2024.jpg", // Placeholder - Update with your actual image
  },
  {
    year: 2025,
    title: "Regional Recognition and Global Outlook",
    description:
      "By 2025, Palm International achieved notable regional industry recognition, securing a prestigious award for 'Best Emerging Consultant.' This success now serves as a strong foundation for our future vision, which includes establishing our first international partnership on the global stage.",
    // imageUrl:
    //   "/images/palm-international-milestone-2025.jpg", // Placeholder - Update with your actual image
  },
];

export default function VerticalTimeline() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Intersection Observer logic for fade-in animation
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
            // Animation classes: start hidden, transition to visible/no translation
            className="flex items-start gap-10 mb-24 opacity-0 translate-y-10 transition-all duration-700"
          >
            {/* Year and timeline dot column */}
            <div className="flex flex-col items-center" style={{ minWidth: 90 }}>
              <span className="text-4xl font-extrabold text-orange-600">
                {item.year}
              </span>
              <div className="mt-2 w-5 h-5 rounded-full bg-orange-500 border-4 border-white shadow" />
            </div>
            
            {/* Content column */}
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold mb-3">{item.title}</h2>
              <p className="text-gray-700 mb-6">{item.description}</p>
              {/* Image is kept, but you must replace the src */}
              <img
                // src={item.imageUrl}
                // alt={item.title}
                className="rounded-md border border-gray-300 shadow-md max-w-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}