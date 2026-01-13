"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useState } from "react";
import { Facebook, Youtube, Linkedin, Instagram } from "lucide-react";

const ComingSoonPage = () => {
  const [mounted, setMounted] = useState(false);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useLayoutEffect(() => {
    setMounted(true);

    // 🔥 MUST MATCH layout.tsx goLiveDate
    const targetDate = new Date(2026, 0, 13, 23, 11, 0);

    const timer = setInterval(() => {
      const now = Date.now();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(timer);

        // ✅ THIS IS THE KEY LINE
        // Automatically reload to fetch LIVE site
        window.location.reload();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen relative flex flex-col overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/daoju0r3c/image/upload/v1767878514/Gemini_Generated_Image_34yq8r34yq8r34yq_wolyv0.png')",
        }}
      />
      <div className="absolute inset-0 bg-black/75" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.03)_1px,transparent_0)] bg-[size:18px_18px]" />

      <div className="relative z-10 flex flex-col min-h-screen text-white">
        {/* HEADER */}
        <header className="grid grid-cols-3 mx-auto px-8 py-6 container">
          <div />
          <Link className="h-10 mx-auto" href="/">
            <Image
              src="/newlogobg.png"
              alt="Palm Group"
              width={2294}
              height={656}
              className="h-full w-auto object-contain"
              priority
            />
          </Link>
          <div />
        </header>

        {/* MAIN */}
        <main className="flex-1 flex items-center justify-center px-6">
          <div className="text-center max-w-3xl mx-auto animate-fadeUp">
            <p className="uppercase tracking-[0.35em] text-xs text-white/70 mb-6">
              Growing Trust with Every Crop
            </p>

            <h1 className="text-[3.2rem] md:text-[4.6rem] font-semibold leading-[1.05] mb-6">
              Nurturing farms,
              <span className="block italic font-light text-white/80">
                harvesting success
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 mb-12 leading-relaxed">
              Premium agricultural inputs crafted to improve soil health,
              boost crop yield, and support sustainable farming practices.
            </p>

            {/* COUNTDOWN */}
            <div className="mt-12 flex justify-center">
              <div className="flex gap-8 px-10 py-6 rounded-2xl border border-white/20 bg-black/40 backdrop-blur-md">
                <TimeBlock label="DAYS" value={timeLeft.days} />
                <TimeBlock label="HOURS" value={timeLeft.hours} />
                <TimeBlock label="MINUTES" value={timeLeft.minutes} />
                <TimeBlock label="SECONDS" value={timeLeft.seconds} />
              </div>
            </div>
          </div>
        </main>

        {/* FOOTER */}
        <footer className="pb-10">
          <div className="mt-10 flex justify-center">
            <div className="flex items-center gap-4">
              <SocialIcon href="https://www.facebook.com/profile.php?id=100077642690727" label="Facebook" Icon={Facebook} />
              <SocialIcon href="https://www.youtube.com/@palminternational5717" label="YouTube" Icon={Youtube} />
              <SocialIcon href="https://www.linkedin.com/company/palm-internationalagri/?viewAsMember=true" label="LinkedIn" Icon={Linkedin} />
              <SocialIcon href="https://www.instagram.com/palminternational1998/" label="Instagram" Icon={Instagram} />
            </div>
          </div>

          <p className="mt-6 text-[11px] tracking-wide text-center text-white/60">
            © 2026 Palm Group® All rights reserved. Site designed and developed by Beyond Branding
          </p>
        </footer>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeUp {
          animation: fadeUp 1.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

function TimeBlock({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex flex-col items-center min-w-[70px]">
      <span className="text-4xl md:text-5xl font-semibold tracking-tight">
        {String(value).padStart(2, "0")}
      </span>
      <span className="mt-2 text-[10px] uppercase tracking-[0.3em] opacity-70">
        {label}
      </span>
    </div>
  );
}

function SocialIcon({
  href,
  label,
  Icon,
}: {
  href: string;
  label: string;
  Icon: any;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      target="_blank"
      className="bg-[#119152] hover:bg-[#0f7b45] text-white p-3 rounded-full shadow-md transition"
    >
      <Icon className="h-4 w-4" />
    </Link>
  );
}

export default ComingSoonPage;
