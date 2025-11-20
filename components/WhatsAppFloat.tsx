"use client";

import React from "react";

type Props = {
  number?: string;
  message?: string;
  size?: number; // default desktop size in px
  hideOnMobile?: boolean;
};

export default function WhatsAppFloat({
  number = "918779083022",
  message = "Hi! I would like to know more about palm group.",
  size = 200, // desktop size
  hideOnMobile = false,
}: Props) {
  const href = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={`fixed z-[9999] flex items-center justify-center
        ${hideOnMobile ? "hidden sm:flex" : "flex"}
        group
        right-4 bottom-4 sm:right-6 sm:bottom-6
      `}
    >
      <img
        src="/whatsapp-Photoroom.png"
        alt="WhatsApp Chat"
        className="object-contain hover:scale-110 transition-transform duration-200 drop-shadow-lg
          w-[150px] h-[150px] sm:w-[190px] sm:h-[190px]" // smaller on mobile
      />
    </a>
  );
}
