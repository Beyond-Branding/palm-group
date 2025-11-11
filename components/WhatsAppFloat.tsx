"use client";

import React from "react";

type Props = {
  number?: string;
  message?: string;
  size?: number; // image size in px
  hideOnMobile?: boolean;
};

export default function WhatsAppFloat({
  number = "919876543210",
  message = "Hi! I would like to know more.",
  size = 200, 
  hideOnMobile = false,
}: Props) {
  const href = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  const dimension = `${size}px`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={`fixed right-1 bottom-0.5 z-[9999] flex items-center justify-center 
        ${hideOnMobile ? "hidden sm:flex" : "flex"}
        group`}
      style={{ width: dimension, height: dimension }}
    >
      <img
        src="/whatsapp-Photoroom.png" // 👈 make sure it's in /public
        alt="WhatsApp Chat"
        className="object-contain w-full h-full hover:scale-110 transition-transform duration-200 drop-shadow-lg"
      />
    </a>
  );
}
