"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Facebook, Instagram, Share2 } from "lucide-react";

// ---- CONFIG: set your WhatsApp number (international format, no +, no spaces) ----
const WHATSAPP_NUMBER = "919876543210"; // ← replace with your number

// --- Simple WhatsApp icon (lucide doesn't include one) ---
const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 32 32"
    aria-hidden="true"
    className={className}
    fill="currentColor"
  >
    <path d="M19.11 17.07c-.27-.13-1.58-.78-1.82-.87-.24-.09-.42-.13-.61.13-.18.27-.7.87-.86 1.05-.16.18-.32.2-.59.07-.27-.13-1.15-.42-2.2-1.34-.81-.72-1.36-1.61-1.52-1.88-.16-.27-.02-.41.12-.54.12-.12.27-.32.4-.49.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.06-.13-.61-1.47-.83-2.02-.22-.53-.45-.46-.61-.46-.16 0-.34-.02-.52-.02-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.27 0 1.34.97 2.63 1.1 2.81.13.18 1.91 3.04 4.64 4.26 2.73 1.22 2.73.81 3.23.76.5-.04 1.58-.65 1.81-1.29.22-.63.22-1.18.16-1.29-.05-.11-.22-.18-.49-.31zM26.6 5.38A12.52 12.52 0 0016 1.33 12.65 12.65 0 003.33 14c0 2.22.59 4.38 1.71 6.28L3 30.67l10.6-2.79A12.51 12.51 0 0016 26.67C22.95 26.67 28.67 20.95 28.67 14c0-3.16-1.23-6.12-3.4-8.62zM16 24.8c-1.87 0-3.65-.49-5.22-1.43l-.38-.22-6.22 1.64 1.66-6.05-.25-.39A10.64 10.64 0 015.2 14c0-5.94 4.86-10.8 10.8-10.8 2.88 0 5.58 1.12 7.62 3.16A10.66 10.66 0 0126.8 14c0 5.94-4.86 10.8-10.8 10.8z" />
  </svg>
);

// --- PRODUCT DATA (only the requested fields) ---
type CropProduct = {
  name: string; // main title
  technicalName: string;
  modeOfAction: string;
  majorCrops: string;
  targetPests: string;
  dosePerAcre: string; // Dose/Acre
  image: string;
};

const cropProtectionProducts: CropProduct[] = [
  {
    name: "GOLDEN DROP",
    technicalName: "Protein Hydrolysate Biostimulant",
    modeOfAction: "Contact & Systemic (Biostimulant activity)",
    majorCrops: "Grapes, Mango, Citrus, Vegetables",
    targetPests: "—",
    dosePerAcre: "0.5–0.75 ml/L water",
    image: "/golden drop-Photoroom.png",
  },
  {
    name: "AG-F",
    technicalName: "Non-ionic Spreader / Activator",
    modeOfAction: "Spreader & Sticker (Enhances uptake)",
    majorCrops: "All Crops",
    targetPests: "— (Improves pesticide efficacy)",
    dosePerAcre: "1 ml/L water",
    image: "/agf-Photoroom.png",
  },
  {
    name: "AG-F SUPER PLUS",
    technicalName: "Silicone-based Spreader / Activator",
    modeOfAction: "Ultra-wet & penetrate for faster uptake",
    majorCrops: "All Crops",
    targetPests: "— (Improves pesticide efficacy)",
    dosePerAcre: "1 ml / 8 L water",
    image: "/AG-F Superplus-Photoroom.png",
  },
  {
    name: "CROP GIANT",
    technicalName: "Organic Plant Extract (Carbohydrate Theory)",
    modeOfAction: "Foliar action to improve fruit quality",
    majorCrops: "Grapes, Strawberry, Citrus, Apple, Mango",
    targetPests: "—",
    dosePerAcre: "1.5 ml/L water",
    image: "/crop giant-Photoroom.png",
  },
  {
    name: "PALM SULF",
    technicalName: "Organic Liquid Sulphur",
    modeOfAction: "Contact (fungistatic/miticidal) & soil health",
    majorCrops: "Wheat, Rice, Grapes, Citrus, Mango, Chilli",
    targetPests: "Powdery Mildew, Red Mites",
    dosePerAcre: "3 ml/L (foliar) / 7.5 L/Ha (drip)",
    image: "/palm sulf-Photoroom.png",
  },
  {
    name: "CROPPER",
    technicalName: "Humic Acid 6%",
    modeOfAction: "Soil conditioner & chelation support",
    majorCrops: "Maize, Wheat, Rice, Sunflower, Potato",
    targetPests: "—",
    dosePerAcre: "7.5 L/Ha (soil) / 2 ml/L (foliar)",
    image: "/cropper-Photoroom.png",
  },
  {
    name: "CROPPER PLUS",
    technicalName: "Humic Acid 12% (Concentrated)",
    modeOfAction: "Soil conditioner & chelation support",
    majorCrops: "Wheat, Rice, Maize, Sunflower, Potato",
    targetPests: "—",
    dosePerAcre: "2.5–4 L/Ha (soil) / 1 ml/L (foliar)",
    image: "/copperplus-Photoroom.png",
  },
  {
    name: "SILICOSE",
    technicalName: "Silica-based Organic Supplement",
    modeOfAction: "Strengthens cell walls; stress tolerance",
    majorCrops: "Rice, Wheat, Maize, Grapes, Mango, Citrus",
    targetPests: "Helps block nematode entry; disease resilience",
    dosePerAcre: "3 ml/L (foliar) / 5–7.5 L/Ha (drip)",
    image: "/silicose-Photoroom.png",
  },
];

// ---------- Helpers ----------
const openNew = (url: string) => window.open(url, "_blank", "noopener,noreferrer");

function shareTo(platform: "facebook" | "whatsapp" | "instagram", title: string) {
  const url = typeof window !== "undefined" ? window.location.href : "";
  const text = `${title} — check this out: ${url}`;
  const encURL = encodeURIComponent(url);
  const encText = encodeURIComponent(text);

  if (platform === "facebook") openNew(`https://www.facebook.com/sharer/sharer.php?u=${encURL}`);
  else if (platform === "whatsapp") openNew(`https://wa.me/?text=${encText}`);
  else {
    if (navigator.share) {
      navigator.share({ title, text, url }).catch(() => {});
    } else {
      alert("Instagram sharing isn’t available via web links. You can copy the URL and share it in Instagram.");
    }
  }
}

// ---------- LIST + DETAIL ----------
const ProductCards: React.FC<{ products: CropProduct[] }> = ({ products }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selectedProduct = selectedIndex !== null ? products[selectedIndex] : null;

  // Smooth zoom in the left panel
  const [zoomed, setZoomed] = useState(false);

  // DETAIL VIEW
  if (selectedProduct) {
    const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      `Hi, I'm interested in ${selectedProduct.name}. Please share details.`
    )}`;

    return (
      <main className="w-full px-4">
        <section className="pt-0 pb-10 md:pt-0 bg-white max-w-7xl mx-auto">
          <button
            onClick={() => {
              setSelectedIndex(null);
              setZoomed(false);
            }}
            className="mb-8 px-4 py-2 text-[#1f6f3d] border border-[#1f6f3d] rounded-lg hover:bg-[#e8f5e9] transition font-semibold"
          >
            &larr; Back to products
          </button>

          <div className="flex flex-col md:flex-row gap-10">
            {/* IMAGE SIDE */}
            <div className="md:w-1/2">
              <div
                className="relative rounded-lg p-4 w-full h-[320px] md:h-[380px] lg:h-[440px] flex items-center justify-center bg-neutral-50 shadow-inner overflow-hidden group"
              >
                <img
                  src={selectedProduct.image || "/placeholder.svg"}
                  alt={selectedProduct.name}
                  onClick={() => setZoomed((z) => !z)}
                  className={`max-w-[520px] w-full h-full object-contain transition-transform duration-500 ease-[cubic-bezier(.2,.8,.2,1)] ${
                    zoomed ? "scale-[1.35]" : "scale-100 group-hover:scale-[1.05]"
                  } cursor-zoom-in`}
                />
              </div>
              <p className="mt-2 text-xs text-neutral-500">
                Click the image to smoothly zoom.
              </p>
            </div>

            {/* DETAILS SIDE */}
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900">
                {selectedProduct.name}
              </h1>

              {/* Light green table */}
              <div className="mt-6 overflow-hidden rounded-xl border border-[#1f6f3d]/30">
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-[#1f6f3d]/20">
                    <tr className="bg-[#e8f5e9]">
                      <td className="w-48 p-3 font-semibold text-[#1f6f3d]">Technical Name</td>
                      <td className="p-3 text-neutral-800">{selectedProduct.technicalName}</td>
                    </tr>
                    <tr>
                      <td className="w-48 p-3 font-semibold text-[#1f6f3d]">Mode of Action</td>
                      <td className="p-3 text-neutral-800">{selectedProduct.modeOfAction}</td>
                    </tr>
                    <tr className="bg-[#e8f5e9]">
                      <td className="w-48 p-3 font-semibold text-[#1f6f3d]">Major Crops</td>
                      <td className="p-3 text-neutral-800">{selectedProduct.majorCrops}</td>
                    </tr>
                    <tr>
                      <td className="w-48 p-3 font-semibold text-[#1f6f3d]">Target Pests</td>
                      <td className="p-3 text-neutral-800">{selectedProduct.targetPests}</td>
                    </tr>
                    <tr className="bg-[#e8f5e9]">
                      <td className="w-48 p-3 font-semibold text-[#1f6f3d]">Dose/Acre</td>
                      <td className="p-3 text-neutral-800">{selectedProduct.dosePerAcre}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* ACTIONS: Book Now + Explore More (above), Share icons (below) */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1f6f3d] text-white font-semibold hover:bg-[#155a32] transition"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Book Now
                </a>

                <a
                  href="/products" // change if needed
                  className="inline-block px-5 py-2.5 rounded-full border border-[#1f6f3d] text-[#1f6f3d] font-semibold hover:bg-[#e8f5e9] transition"
                >
                  Explore More →
                </a>
              </div>

              {/* Share block below */}
              <div className="mt-6">
                <div className="text-sm font-semibold text-neutral-800 mb-2">Share now</div>
                <div className="flex items-center gap-3">
                  <button
                    className="rounded-full border border-[#1f6f3d] p-2 text-[#1f6f3d] hover:bg-[#e8f5e9] transition"
                    onClick={() => shareTo("facebook", selectedProduct.name)}
                    title="Share on Facebook"
                  >
                    <Facebook className="h-4 w-4" />
                  </button>

                  <button
                    className="rounded-full border border-[#1f6f3d] p-2 text-[#1f6f3d] hover:bg-[#e8f5e9] transition"
                    onClick={() => shareTo("instagram", selectedProduct.name)}
                    title="Share on Instagram"
                  >
                    <Instagram className="h-4 w-4" />
                  </button>

                  <button
                    className="rounded-full border border-[#1f6f3d] p-2 text-[#1f6f3d] hover:bg-[#e8f5e9] transition"
                    onClick={() => shareTo("whatsapp", selectedProduct.name)}
                    title="Share on WhatsApp"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                  </button>

                  <button
                    className="ml-1 rounded-full border border-[#1f6f3d] p-2 text-[#1f6f3d] hover:bg-[#e8f5e9] transition"
                    onClick={() => {
                      const url = typeof window !== "undefined" ? window.location.href : "";
                      if (navigator.share) {
                        navigator.share({ title: selectedProduct.name, url }).catch(() => {});
                      } else {
                        navigator.clipboard?.writeText(url);
                        alert("Link copied!");
                      }
                    }}
                    title="Share"
                  >
                    <Share2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  // LIST VIEW
  return (
    <main className="w-full px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {products.map((product, index) => (
          <div key={product.name} className="w-full max-w-[360px]">
            <Card
              onClick={() => setSelectedIndex(index)}
              className="w-full rounded-lg border border-neutral-200 bg-white
                         shadow-[0_2px_10px_rgba(0,0,0,0.05)]
                         hover:border-neutral-900
                         hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)]
                         hover:-translate-y-0.5
                         transition-all duration-300 cursor-pointer"
            >
              <CardContent className="p-0">
                <div className="rounded-lg m-0 flex items-center justify-center aspect-square bg-white">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-[200%] h-[100%] object-contain"
                  />
                </div>
              </CardContent>
            </Card>

            <div className="pt-4">
              <h3 className="text-[18px] md:text-[20px] leading-tight font-extrabold tracking-tight text-neutral-900">
                {product.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

// ---------- MAIN WRAPPER ----------
export function ProductsGrid() {
  return (
    <section className="py-16 bg-white min-h-[75vh]">
      <ProductCards products={cropProtectionProducts} />
    </section>
  );
}
