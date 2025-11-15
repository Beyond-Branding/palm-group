"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Facebook, Instagram, Share2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

// ---- CONFIG: set your WhatsApp number (international format, no +, no spaces) ----
const WHATSAPP_NUMBER = "918779083022"; // ← replace with your number

// --- PRODUCT DATA (only the requested fields) ---
type CropProduct = {
  name: string; // main title
  modeOfAction: string;
  majorCrops: string;
  targetPests: string;
  dosePerAcre: string; // Dose/Acre
  image: string;
};

const cropProtectionProducts: CropProduct[] = [
  {
    name: "GOLDEN DROP",
    modeOfAction: "Protein Hydrolysate Biostimulant",
    majorCrops: "Grapes, Mango, Citrus, Vegetables",
    targetPests: "0.5–0.75 ml per litre of water. Spray during flowering and early fruiting stages every 12–15 days for best results.",
    dosePerAcre: "Grapes, Tomato, Mango, Paddy, Onion, Chilli, Citrus Fruits, Vegetables, Strawberries, Capsicum, Pomegranate, Sugarcane, Tea, Coffee, Cashew, Banana.",
    image: "/Pic1 1 (2).png",
  },
  {
    name: "AG-F",
    modeOfAction: "Spreader, Sticker, Activator",
    majorCrops: "All Crops",
    targetPests: "1 ml per litre of water to reduce herbicide dosage by 50%. Use with herbicides, insecticides, fungicides, micronutrients & foliar fertilizers.",
    dosePerAcre: "Ideal for all crops.",
    image: "/agf-Photoroom.png",
  },
  {
    name: "AG-F SUPER PLUS",
    
    modeOfAction: "Silicone-Based Spreading & Activating",
    majorCrops: "All Crops",
    targetPests: "1 ml per 8 litres of water. Use with herbicides, insecticides, fungicides, micronutrients & foliar sprays.",
    dosePerAcre: " Perfect for all crops where complete coverage and high spray efficiency are crucial.",
    image: "/AG-F Superplus-Photoroom.png",
  },
  {
    name: "CROP GIANT",
    
    modeOfAction: "Foliar Spray for Fruit Quality",
    majorCrops: "Grapes, Strawberry, Citrus, Apple, Mango",
    targetPests: "Spray: 1.5 ml per litre of water when berries reach pea size. Repeat after 7 days for maximum effectiveness.",
    dosePerAcre: "Grapes, Strawberry, Citrus, Apple, Mango, Tomato, Capsicum, Watermelon, Cucumbers, Brinjal, Chilli, Pomegranate.",
    image: "/crop giant-Photoroom.png",
  },
  {
    name: "PALM SULF",
    
    modeOfAction: "Foliar Spray and Drip Application",
    majorCrops: "Wheat, Rice, Grapes, Citrus, Mango, Chilli",
    targetPests: "Foliar Spray: 3 ml per litre of water. Drip Application: 7.5 litres per hectare.",
    dosePerAcre: "Wheat, Rice, Grapes, Citrus, Mango, Chilli, Onion, Spinach, Potato, Tomato, Capsicum, Carrot.",
    image: "/palm sulf-Photoroom.png",
  },
  {
    name: "CROPPER",
    
    modeOfAction: "Soil and Foliar Application",
    majorCrops: "Maize, Wheat, Rice, Sunflower, Potato",
    targetPests: "Soil Application: 7.5 L/Ha. Foliar Spray: 2 ml per litre. Seed Treatment: 2.5 L per MT of seed. With Fertilizers: 7.5 L/Ha.",
    dosePerAcre: "Maize, Wheat, Rice, Sunflower, Potato, Tomato, Garlic, Onion, Spinach, Coconut, Citrus, Mango.",
    image: "/cropper-Photoroom.png",
  },
  {
    name: "CROPPER PLUS",
    
    modeOfAction: "Soil and Foliar Application (Concentrated)",
    majorCrops: "Wheat, Rice, Maize, Sunflower, Potato",
    targetPests: "Soil Application: 2.5–4 L/Ha. Foliar Spray: 1 ml per litre. Seed Treatment: 1.5 L per MT of seed. With Fertilizers: 2.5–4 L/Ha.",
    dosePerAcre: "Wheat, Rice, Maize, Sunflower, Potato, Leafy Greens, Coconut, Grapes, Citrus, Mango, Tomato, Chilli.",
    image: "/copperplus-Photoroom.png",
  },
  {
    name: "SILICOSE",
    
    modeOfAction: "Foliar Spray and Drip Application",
    majorCrops: "Rice, Wheat, Maize, Grapes, Mango, Citrus",
    targetPests: "Foliar Spray: 3 ml per litre of water. Drip Application: 5–7.5 L/Ha.",
    dosePerAcre: "Rice, Wheat, Maize, Grapes, Mango, Citrus, Potato, Chilli, Tomato, Onion, Spinach, Strawberry, Sugarcane.",
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

                    <tr>
                      <td className="w-48 p-3 font-semibold text-[#1f6f3d]">Mode of Action</td>
                      <td className="p-3 text-neutral-800">{selectedProduct.modeOfAction}</td>
                    </tr>
                    <tr className="bg-[#e8f5e9]">
                      <td className="w-48 p-3 font-semibold text-[#1f6f3d]">Major Crops</td>
                      <td className="p-3 text-neutral-800">{selectedProduct.majorCrops}</td>
                    </tr>
                    <tr>
                      <td className="w-48 p-3 font-semibold text-[#1f6f3d]">Dosage</td>
                      <td className="p-3 text-neutral-800">{selectedProduct.targetPests}</td>
                    </tr>
                    <tr className="bg-[#e8f5e9]">
                      <td className="w-48 p-3 font-semibold text-[#1f6f3d]">Usage/Crops</td>
                      <td className="p-3 text-neutral-800">{selectedProduct.dosePerAcre}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* ACTIONS: Book Now (aligned) + Explore More */}
              <div className="mt-5 flex items-center gap-3">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi! I want to book this product ${encodeURIComponent(
                    selectedProduct.name
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#1b5e20] hover:bg-[#155a32] text-white font-semibold rounded-full shadow-md transition"
                >
                  <FaWhatsapp className="h-5 w-5" />
                  <span>Book Now</span>
                </a>

                <a
                  href="/products"
                  className="inline-flex items-center gap-2 ml-1 px-6 py-3 rounded-full border border-[#1f6f3d] text-[#1f6f3d] font-semibold hover:bg-[#e8f5e9] transition"
                >
                  <span>Explore More →</span>
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
                    <FaWhatsapp className="h-4 w-4" />
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
