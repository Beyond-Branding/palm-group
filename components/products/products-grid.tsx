// /components/ProductGrid.tsx
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { Facebook, Instagram, Share2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import products from "@/lib/products";
import type { CropProduct } from "@/lib/products";

const WHATSAPP_NUMBER = "918779083022";

const BOLD_PHRASES = [
  "Golden Drop is ideal for a wide range of crops including:",
  "Crop Giant is ideal for a wide range of crops including:",
  "Palm Sulf is ideal for a wide range of crops including:",
  "Cropper is ideal for a wide range of crops including:",
  "Cropper Plus is ideal for a wide range of crops including:",
  "Silicose is ideal for a wide range of crops including:",
  "high-performance, protein hydrolysate-based biostimulant",
  "essential amino acids",
  "bioactive peptides",
  "higher yields, superior produce, enhanced fruit size and a significant reduction in losses from flower and fruit drop",
  "Accelerated Plant Development",
  "Photosynthetic Efficiency",
  "Advanced Protein Nutrition",
  "Enhanced Flowering, Fruit Set & Fruit Sizes",
  "specialized, high-performance ionic & non-ionic activator",
  "reducing the surface tension",
  "absorbed faster",
  "12x Efficacy Boost",
  "Superior Rainfastness",
  "50% Herbicide Cost Reduction",
  "Rapid Knockdown Action",
  "Optimized Nutrient Uptake",
  "Enhanced Soil Binding & Nutrient Retention",
  "premium silicone-based spreader, sticker, activator, penetrator and pH regulator",
  "40x Superior Spreading Power",
  "Stomatal Infiltration (Faster Action)",
  "Integrated pH Balancing",
  "Unmatched Rainfastness",
  "Synergistic Efficiency",
  "Economic Optimization",
  "pH Regulation",
  "sophisticated organic formulation",
  "Carbohydrate Theory",
  "high-quality fruit tissue",
  "premium, high quality produce with exceptional flavor and shelf life",
  "Structural Integrity & Cracking Prevention",
  "Reduced Premature Drop",
  "BRIX & Sweetness Optimization",
  "Essential Nutrient Enrichment",
  "Superior Pulp & Keeping Quality",
  "Induces Early Harvest",
  "100% organic liquid sulfur",
  "Controls Powdery Mildew & Red Mites",
  "No Residue",
  "Corrects Sulfur Deficiency",
  "Heat Safe",
  "Improves Soil Temperature",
  "humic acid",
  "soil structure, fertility, and water retention for healthier crops",
  "Boosts Plant Growth",
  "Improves Soil Structure",
  "Retains Nutrients",
  "Improves Water-Holding Capacity",
  "highly concentrated humic and fulvic acid",
  "root growth and soil fertility",
  "Promotes Root & Shoot Growth",
  "Enhances Microbial Activity",
  "Reduces Nutrient Loss",
  "Fulvate-Powered Nutrient Transport",
  "silica-rich soil and foliar supplement",
  "strengthens plants and protects them against stress",
  "Supplies Soluble Silica",
  "Enhances Disease Resistance",
  "Blocks Nematode Entry",
  "Improves Water Retention",
  "Increases Lodging Resistance",
  "high-performance organic soil amendment",
  "stimulate vigorous root systems",
  "Triggers White Root Growth",
  "Boosts Nutrient Efficiency",
  "Enhances Drought Tolerance",
  "Supports Seed Germination",
  "Cropper Granules is ideal for a wide range of crops including:",
  "integrated pest management",
  "soil health improvement",
  "high-density metabolic bio-stimulant",
  "powers your crops to their maximum potential",
  "Phosphorus Uptake & Nutrient Unlock",
  "Powerful Root System",
  "Stress Resilience",
  "Bud Differentiation & Cane Maturity",
  "Breaks April Dormancy",
  "Improved Photosynthesis",
  "Grapes",
  "Other Crops (Via Drip)",
];

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function highlightPhrases(text: string, phrases: string[]) {
  if (!text) return "";

  let html = escapeHtml(text);

  // Convert line breaks to HTML breaks
  html = html.replace(/\n/g, "<br />");

  phrases.forEach((phrase) => {
    const escapedPhrase = escapeHtml(phrase);
    const escRegex = escapedPhrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    const regex = new RegExp(escRegex, "g");
    html = html.replace(regex, `<strong>${escapedPhrase}</strong>`);
  });

  return html;
}

const ProductCards: React.FC<{ products: CropProduct[] }> = ({ products }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selectedProduct = selectedIndex !== null ? products[selectedIndex] : null;
  const [zoomed, setZoomed] = useState(false);

  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const raw = searchParams?.get("product") || "";
    if (!raw) return;

    const decoded = decodeURIComponent(raw).trim().toLowerCase();
    if (!decoded) return;

    const foundIndex = products.findIndex((p) => p.name.trim().toLowerCase() === decoded);
    if (foundIndex !== -1) {
      setSelectedIndex(foundIndex);
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 50);
    } else {
      const found = products.findIndex((p) => p.name.trim().toLowerCase().includes(decoded));
      if (found !== -1) {
        setSelectedIndex(found);
        setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 50);
      }
    }
  }, [searchParams, products]);

  useEffect(() => {
    if (selectedIndex === null) {
      try {
        const url = new URL(window.location.href);
        url.searchParams.delete("product");
        router.replace(url.pathname + url.search, { scroll: false });
      } catch {}
    }
  }, [selectedIndex]);

  function shareTo(platform: "facebook" | "whatsapp" | "instagram", title: string) {
    const url = typeof window !== "undefined" ? window.location.href : "";
    const text = `${title} — check this out: ${url}`;
    const encURL = encodeURIComponent(url);
    const encText = encodeURIComponent(text);
    if (platform === "facebook") window.open(`https://www.facebook.com/sharer/sharer.php?u=${encURL}`, "_blank");
    else if (platform === "whatsapp") window.open(`https://wa.me/?text=${encText}`, "_blank");
    else {
      if ((navigator as any).share) {
        (navigator as any).share({ title, text, url }).catch(() => {});
      } else {
        alert("Instagram sharing isn’t available via web links. Copy the URL to share.");
      }
    }
  }

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
            <div className="md:w-1/2">
              <div className="relative rounded-lg p-4 w-full h-[320px] md:h-[380px] lg:h-[440px] flex items-center justify-center bg-neutral-50 shadow-inner overflow-hidden group">
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
            

<div className="mt-6 flex flex-col items-center gap-6">

  <div className="flex items-center justify-center gap-4">
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-7 py-3 bg-[#1b5e20] hover:bg-[#155a32] text-white font-semibold rounded-full shadow-md transition"
    >
      <FaWhatsapp className="h-5 w-5" />
      <span>Buy Now</span>
    </a>

  
  </div>

  <div className="flex flex-col items-center gap-3">
    <div className="text-sm font-semibold text-neutral-800">
      Share now
    </div>

    <div className="flex items-center justify-center gap-3">
      <button
        onClick={() => shareTo("facebook", selectedProduct.name)}
        className="rounded-full border border-[#1f6f3d] p-2 text-[#1f6f3d] hover:bg-[#e8f5e9] transition"
      >
        <Facebook className="h-4 w-4" />
      </button>

      <button
        onClick={() => shareTo("instagram", selectedProduct.name)}
        className="rounded-full border border-[#1f6f3d] p-2 text-[#1f6f3d] hover:bg-[#e8f5e9] transition"
      >
        <Instagram className="h-4 w-4" />
      </button>

      <button
        onClick={() => shareTo("whatsapp", selectedProduct.name)}
        className="rounded-full border border-[#1f6f3d] p-2 text-[#1f6f3d] hover:bg-[#e8f5e9] transition"
      >
        <FaWhatsapp className="h-4 w-4" />
      </button>

      <button
        onClick={() => {
          navigator.clipboard?.writeText(window.location.href);
          alert("Link copied!");
        }}
        className="rounded-full border border-[#1f6f3d] p-2 text-[#1f6f3d] hover:bg-[#e8f5e9] transition"
      >
        <Share2 className="h-4 w-4" />
      </button>
    </div>
  </div>

</div>
              </div>

            <div className="md:w-1/2">
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-green-800">
                {selectedProduct.name}
              </h1>
            
            <p className="mt-0 mb-3 text-base text-gray-700 leading-7 font-semibold">
  {selectedProduct.tagline}
</p>

              <p
  className="mb-6 text-base text-gray-700 leading-7 font-normal"
  style={{ textAlign: "justify" }}
  dangerouslySetInnerHTML={{
  __html: highlightPhrases(
    selectedProduct.detailedDescription ?? "",
    BOLD_PHRASES
  ),
}}
/>

              {selectedProduct.benefits && (
  <div className="mb-6">
    <h2 className="text-xl font-bold text-gray-800 mb-3">
      Key Benefits
    </h2>

    <ul
      className="list-disc list-inside space-y-1 text-base text-gray-700 leading-7 font-normal pl-4"
      style={{ textAlign: "justify" }}
    >
      {selectedProduct.benefits.map((benefit, index) => (
        <li
          key={index}
          dangerouslySetInnerHTML={{
            __html: highlightPhrases(benefit, BOLD_PHRASES),
          }}
        />
      ))}
    </ul>
  </div>
)}



              <div className="mt-6 overflow-hidden rounded-xl border border-[#1f6f3d]/30">
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-[#1f6f3d]/20">
                    <tr>
                      <td className="w-28 p-3 font-semibold text-[#1f6f3d]">Dosage</td>
                      <td
  className="p-3 text-base text-neutral-800 leading-7 font-normal"
  dangerouslySetInnerHTML={{
    __html: selectedProduct.targetPests,
  }}
/>
                    </tr>
                    <tr className="bg-[#e8f5e9]">
  <td className="w-28 p-3 font-semibold text-[#1f6f3d]">
    Crops
  </td>

  <td
    className="p-3 text-base text-neutral-800 leading-7 font-normal"
    dangerouslySetInnerHTML={{
      __html: highlightPhrases(
        selectedProduct.dosePerAcre,
        BOLD_PHRASES
      ),
    }}
  />
</tr>

{selectedProduct.applicationSchedule && (
  <tr>
    <td className="w-28 p-3 font-semibold text-[#1f6f3d] align-top">
      Timing & Application Schedule
    </td>

    <td
      className="p-3 text-base text-neutral-800 leading-8"
      dangerouslySetInnerHTML={{
        __html: selectedProduct.applicationSchedule,
      }}
    />
  </tr>
)}
                  </tbody>
                </table>
              </div>

              
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="w-full px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {products.map((product, index) => (
          <div key={product.name} className="w-full max-w-[360px]">
            <div
              onClick={() => {
                try {
                  const url = new URL(window.location.href);
                  url.searchParams.set("product", product.name);
                  window.history.replaceState({}, "", url.pathname + url.search);
                } catch {}
                setSelectedIndex(index);
                setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 50);
              }}
              className="w-full cursor-pointer transition-all duration-300 rounded-lg border border-neutral-200 bg-transparent shadow-[0_2px_10px_rgba(0,0,0,0.05)] hover:border-neutral-900 hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 overflow-hidden"
            >
              <div className="relative">
                <div style={{ width: "100%", paddingBottom: product.imageStyle?.paddingBottom || "115%" }} className="relative">
                  <div className="absolute inset-0 rounded-lg" style={{ backgroundColor: product.backgroundHex }}>
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
                    <div
                      aria-hidden
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(to top, ${product.overlayColor}, rgba(0,0,0,0.06) 45%, rgba(0,0,0,0) 75%)`,
                        zIndex: 2,
                        pointerEvents: "none",
                      }}
                    />
                    <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="object-contain"
                        style={{
                          maxWidth: product.imageStyle?.maxWidth ?? "120%",
                          maxHeight: product.imageStyle?.maxHeight ?? "120%",
                          filter: "drop-shadow(0 10px 18px rgba(0,0,0,0.18))",
                          objectPosition: product.imageStyle?.objectPosition ?? "center",
                          width: "auto",
                          height: "auto",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 text-center">
              <h3 className="text-[20px] md:text-[22px] leading-tight font-extrabold tracking-tight text-neutral-900">
                {product.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export function ProductsGrid() {
  return (
    <section className="py-16 bg-white min-h-[75vh]">
      <ProductCards products={products} />
    </section>
  );
}

