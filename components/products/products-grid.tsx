"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Facebook, Instagram, Share2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";

// ---- CONFIG: set your WhatsApp number (international format, no +, no spaces) ----
const WHATSAPP_NUMBER = "918779083022"; // ← replace with your number

// --- PRODUCT DATA (includes background / dotted / overlay fields) ---
type CropProduct = {
  name: string; // main title
  targetPests: string;
  dosePerAcre: string; // Dose/Acre or usage crops
  image: string;
  // styling fields
  backgroundHex: string; // e.g. "#0B5D3E"
  dotColor: string; // rgba(255,255,255,0.06)
  overlayColor: string; // rgba(0,0,0,0.25)
};

const cropProtectionProducts: CropProduct[] = [
  {
    name: "GOLDEN DROP",
    targetPests:
      "0.5–0.75 ml per litre of water. Spray during flowering and early fruiting stages every 12–15 days for best results.",
    dosePerAcre:
      "Golden Drop is ideal for a wide range of crops including: Grapes, Tomato, Mango, Paddy, Onion, Chilli, Citrus Fruits, Vegetables, Strawberries, Capsicum, Pomegranate, Sugarcane, Tea, Coffee, Cashew, Banana.",
    image: "/golden drop-Photoroom shadow.png",
    backgroundHex: "#0B5D3E",
    dotColor: "rgba(255,255,255,0.06)",
    overlayColor: "rgba(0,0,0,0.25)",
  },
  {
    name: "AG-F",
    targetPests:
      "1 ml per litre of water to reduce herbicide dosage by 50%. Use with herbicides, insecticides, fungicides, micronutrients & foliar fertilizers.",
    dosePerAcre: "Ideal for all crops.",
    image: "/agf-Photoroom (1).png",
    backgroundHex: "#F5C400",
    dotColor: "rgba(255,255,255,0.08)",
    overlayColor: "rgba(0,0,0,0.22)",
  },
  {
    name: "AG-F SUPER PLUS",
    targetPests:
      "1 ml per 8 litres of water. Use with herbicides, insecticides, fungicides, micronutrients & foliar sprays.",
    dosePerAcre:
      "Perfect for all crops where complete coverage and high spray efficiency are crucial.",
    image: "/AG-F Superplus-Photoroom (1).png",
    backgroundHex: "#0057B7",
    dotColor: "rgba(255,255,255,0.07)",
    overlayColor: "rgba(0,0,0,0.25)",
  },
  {
    name: "CROP GIANT",
    targetPests:
      "Spray: 1.5 ml per litre of water when berries reach pea size. Repeat after 7 days for maximum effectiveness.",
    dosePerAcre:
      "Crop Giant is ideal for a wide range of crops including: Grapes, Strawberry, Citrus, Apple, Mango, Tomato, Capsicum, Watermelon, Cucumbers, Brinjal, Chilli, Pomegranate.",
    image: "/crop giant (1).png",
    backgroundHex: "#C81E1E",
    dotColor: "rgba(255,255,255,0.07)",
    overlayColor: "rgba(0,0,0,0.25)",
  },
  {
    name: "PALM SULF",
    targetPests: "Foliar Spray: 3 ml per litre of water. Drip Application: 7.5 litres per hectare.",
    dosePerAcre:
      "Palm Sulf is ideal for a wide range of crops including:: Wheat, Rice, Grapes, Citrus, Mango, Chilli, Onion, Spinach, Potato, Tomato, Capsicum, Carrot.",
    image: "/palmsulfnew.png",
    backgroundHex: "#E65100",
    dotColor: "rgba(255,255,255,0.06)",
    overlayColor: "rgba(0,0,0,0.25)",
  },
  {
    name: "CROPPER",
    targetPests:
      "Soil Application: 7.5 L/Ha. Foliar Spray: 2 ml per litre. Seed Treatment: 2.5 L per MT of seed. With Fertilizers: 7.5 L/Ha.",
    dosePerAcre:
      "Cropper is ideal for a wide range of crops including: Maize, Wheat, Rice, Sunflower, Potato, Tomato, Garlic, Onion, Spinach, Coconut, Citrus, Mango.",
    image: "/croppernew.png",
    backgroundHex: "#4E342E",
    dotColor: "rgba(255,255,255,0.06)",
    overlayColor: "rgba(0,0,0,0.25)",
  },
  {
    name: "CROPPER PLUS",
    targetPests:
      "Soil Application: 2.5–4 L/Ha. Foliar Spray: 1 ml per litre. Seed Treatment: 1.5 L per MT of seed. With Fertilizers: 2.5–4 L/Ha.",
    dosePerAcre:
      "Cropper Plus is ideal for a wide range of crops including: Wheat, Rice, Maize, Sunflower, Potato, Leafy Greens, Coconut, Grapes, Citrus, Mango, Tomato, Chilli.",
    image: "/cropperplusnew.png",
    backgroundHex: "#D97706",
    dotColor: "rgba(255,255,255,0.07)",
    overlayColor: "rgba(0,0,0,0.24)",
  },
  {
    name: "SILICOSE",
    targetPests: "Foliar Spray: 3 ml per litre of water. Drip Application: 5–7.5 L/Ha.",
    dosePerAcre:
      "Silicose is ideal for a wide range of crops including: Rice, Wheat, Maize, Grapes, Mango, Citrus, Potato, Chilli, Tomato, Onion, Spinach, Strawberry, Sugarcane.",
    image: "/silicosenew.png",
    backgroundHex: "#2563EB",
    dotColor: "rgba(255,255,255,0.05)",
    overlayColor: "rgba(0,0,0,0.24)",
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

/* -------------------------
   HIGHLIGHTING helper
   ------------------------- */

// list of exact phrases you wanted bolded
const BOLD_PHRASES = [
  "Golden Drop is ideal for a wide range of crops including:",
  "Crop Giant is ideal for a wide range of crops including:",
  "Palm Sulf is ideal for a wide range of crops including:",
  "Cropper is ideal for a wide range of crops including:",
  "Cropper Plus is ideal for a wide range of crops including:",
  "Silicose is ideal for a wide range of crops including:",
];

// escape html to avoid accidental injection
function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// replace phrases (case-sensitive exact matches) with bolded HTML
function highlightPhrases(text: string, phrases: string[]) {
  if (!text) return "";
  // start from escaped text
  let html = escapeHtml(text);

  // replace each phrase in the escaped text with a bolded version
  phrases.forEach((phrase) => {
    // escape phrase for regex
    const esc = phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(esc, "g");
    html = html.replace(regex, `<strong>${escapeHtml(phrase)}</strong>`);
  });

  return html;
}

// ---------- LIST + DETAIL ----------
const ProductCards: React.FC<{ products: CropProduct[] }> = ({ products }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selectedProduct = selectedIndex !== null ? products[selectedIndex] : null;
  const [zoomed, setZoomed] = useState(false);

  const searchParams = useSearchParams();
  const router = useRouter();

  // On mount / when query param changes: if ?product=... exists, open matching product
  useEffect(() => {
    const raw = searchParams?.get("product") || "";
    if (!raw) return;

    const decoded = decodeURIComponent(raw).trim().toLowerCase();
    if (!decoded) return;

    const foundIndex = products.findIndex((p) => p.name.trim().toLowerCase() === decoded);
    if (foundIndex !== -1) {
      setSelectedIndex(foundIndex);
      // scroll to top so the top of the detail view is visible
      if (typeof window !== "undefined") {
        // small timeout to allow layout changes
        setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 50);
      }
    } else {
      // try a relaxed match: includes
      const found = products.findIndex((p) => p.name.trim().toLowerCase().includes(decoded));
      if (found !== -1) {
        setSelectedIndex(found);
        setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 50);
      }
    }
  }, [searchParams, products]);

  // If we close the detail view, remove the query param for cleanliness
  useEffect(() => {
    if (selectedIndex === null) {
      // remove product query param from URL without navigation (shallow)
      try {
        const url = new URL(window.location.href);
        url.searchParams.delete("product");
        router.replace(url.pathname + url.search, { scroll: false });
      } catch {
        // fallback: do nothing
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedIndex]);

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
              <p className="mt-2 text-xs text-neutral-500">Click the image to smoothly zoom.</p>
            </div>

            {/* DETAILS SIDE */}
            <div className="md:w-1/2">
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-green-800">
                {selectedProduct.name}
              </h1>

              {/* Light green table */}
              <div className="mt-6 overflow-hidden rounded-xl border border-[#1f6f3d]/30">
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-[#1f6f3d]/20">
                    <tr>
                      <td className="w-48 p-3 font-semibold text-[#1f6f3d]">Dosage</td>
                      <td className="p-3 text-neutral-800">{selectedProduct.targetPests}</td>
                    </tr>
                    <tr className="bg-[#e8f5e9]">
                      <td className="w-48 p-3 font-semibold text-[#1f6f3d]">Usage/Crops</td>
                      {/* Render bolded phrases by injecting safe HTML */}
                      <td
                        className="p-3 text-neutral-800"
                        // dangerouslySetInnerHTML is required to render <strong> tags
                        dangerouslySetInnerHTML={{
                          __html: highlightPhrases(selectedProduct.dosePerAcre, BOLD_PHRASES),
                        }}
                      />
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* ACTIONS: Book Now (aligned) + Explore More */}
              <div className="mt-5 flex items-center gap-3">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#1b5e20] hover:bg-[#155a32] text-white font-semibold rounded-full shadow-md transition"
                >
                  <FaWhatsapp className="h-5 w-5" />
                  <span>Buy Now</span>
                </a>

                {/* Explore More: goes to crop-nutrition for further details (unchanged) */}
                <Link
                  href={`/crop-nutrition?product=${encodeURIComponent(selectedProduct.name)}`}
                  className="inline-flex items-center gap-2 ml-1 px-6 py-3 rounded-full border border-[#1f6f3d] text-[#1f6f3d] font-semibold hover:bg-[#e8f5e9] transition"
                >
                  <span>Explore More →</span>
                </Link>
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

  // LIST VIEW - replaced card markup uses full-bleed colored block with no internal text
  return (
    <main className="w-full px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {products.map((product, index) => (
          <div key={product.name} className="w-full max-w-[360px]">
            {/* full-bleed card-like wrapper (plain div so inner white from UI Card doesn't show) */}
            <div
              onClick={() => {
                // update URL with ?product=NAME and open product
                try {
                  const url = new URL(window.location.href);
                  url.searchParams.set("product", product.name);
                  window.history.replaceState({}, "", url.pathname + url.search);
                } catch {
                  // ignore
                }
                setSelectedIndex(index);
                // scroll to top to reveal detail
                setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 50);
              }}
              className="w-full cursor-pointer transition-all duration-300 rounded-lg border border-neutral-200 bg-transparent shadow-[0_2px_10px_rgba(0,0,0,0.05)] hover:border-neutral-900 hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 overflow-hidden"
            >
              <div className="relative">
                {/* responsive square using padding-bottom trick */}
                <div style={{ width: "100%", paddingBottom: "115%" }} className="relative">
                  {/* full-bleed colored surface */}
                  <div
                    className="absolute inset-0 rounded-lg"
                    style={{ backgroundColor: product.backgroundHex }}
                  >
                    {/* dotted pattern */}
                    <div
                      aria-hidden
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `radial-gradient(circle, ${product.dotColor} 1px, transparent 1px)`,
                        backgroundSize: "18px 18px",
                        zIndex: 1,
                        pointerEvents: "none",
                      }}
                    />

                    {/* bottom->top gradient overlay (darker bottom to lighter top) */}
                    <div
                      aria-hidden
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(to top, ${product.overlayColor}, rgba(0,0,0,0.06) 45%, rgba(0,0,0,0) 75%)`,
                        zIndex: 2,
                        pointerEvents: "none",
                      }}
                    />

                    {/* product image on top */}
                    <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="max-w-[120%] max-h-[120%] object-contain"
                        style={{ filter: "drop-shadow(0 10px 18px rgba(0,0,0,0.18))" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* product name outside the coloured card */}
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
