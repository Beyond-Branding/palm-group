export const dynamic = "force-dynamic";
import type React from "react";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import WhatsAppFloat from "@/components/WhatsAppFloat";
import ComingSoon from "@/components/ComingSoon";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Palm Group - Sustainable Agriculture & Innovation",
  description:
    "At Palm Group, we are passionate agri-innovators committed to transforming farming into a sustainable, productive, and farmer-first experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const goLiveDate = new Date(2026, 0, 13, 23, 11, 0);
  const now = new Date();

  const isLive = now >= goLiveDate;

  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="font-sans bg-background text-foreground">
        {isLive ? (
          <>
            {children}
            <WhatsAppFloat />
          </>
        ) : (
          <ComingSoon />
        )}
      </body>
    </html>
  );
}
