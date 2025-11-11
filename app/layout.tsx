import type React from "react";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppFloat from "@/components/WhatsAppFloat"; 

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Palm Group - Sustainable Agriculture & Innovation",
  description:
    "At Palm Group, we are passionate agri-innovators committed to transforming farming into a sustainable, productive, and farmer-first experience.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="font-sans bg-background text-foreground">
        {children}
        <WhatsAppFloat /> 
      </body>
    </html>
  );
}
