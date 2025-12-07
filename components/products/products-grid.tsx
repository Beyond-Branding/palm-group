// /components/ProductGrid.tsx
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { Facebook, Instagram, Share2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import cropProtectionProducts, { CropProduct } from "@/lib/products";

const WHATSAPP_NUMBER = "918779083022";

const BOLD_PHRASES = [
  "Golden Drop is ideal for a wide range of crops including:",
  "Crop Giant is ideal for a wide range of crops including:",
  "Palm Sulf is ideal for a wide range of crops including:",
  "Cropper is ideal for a wide range of crops including:",
  "Cropper Plus is ideal for a wide range of crops including:",
  "Silicose is ideal for a wide range of crops including:",
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
  phrases.forEach((phrase) => {
    const esc = phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(esc, "g");
    html = html.replace(regex, `<strong>${escapeHtml(phrase)}</strong>`);
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
            </div>

            <div className="md:w-1/2">
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-green-800">
                {selectedProduct.name}
              </h1>

              <div className="mt-6 overflow-hidden rounded-xl border border-[#1f6f3d]/30">
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-[#1f6f3d]/20">
                    <tr>
                      <td className="w-28 p-3 font-semibold text-[#1f6f3d]">Dosage</td>
                      <td className="p-3 text-neutral-800">{selectedProduct.targetPests}</td>
                    </tr>
                    <tr className="bg-[#e8f5e9]">
                      <td className="w-28 p-3 font-semibold text-[#1f6f3d]">Usage/Crops</td>
                      <td
                        className="p-3 text-neutral-800"
                        dangerouslySetInnerHTML={{
                          __html: highlightPhrases(selectedProduct.dosePerAcre, BOLD_PHRASES),
                        }}
                      />
                    </tr>
                  </tbody>
                </table>
              </div>

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

                <Link
                  href={`/crop-nutrition?product=${encodeURIComponent(selectedProduct.name)}`}
                  className="inline-flex items-center gap-2 ml-1 px-6 py-3 rounded-full border border-[#1f6f3d] text-[#1f6f3d] font-semibold hover:bg-[#e8f5e9] transition"
                >
                  <span>Explore More →</span>
                </Link>
              </div>

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
                      if ((navigator as any).share) {
                        (navigator as any).share({ title: selectedProduct.name, url }).catch(() => {});
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
                <div style={{ width: "100%", paddingBottom: product.imageSize?.paddingBottom || "115%" }} className="relative">
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
                          maxWidth: product.imageSize?.maxWidth ?? "120%",
                          maxHeight: product.imageSize?.maxHeight ?? "120%",
                          filter: "drop-shadow(0 10px 18px rgba(0,0,0,0.18))",
                          objectPosition: product.imageSize?.objectPosition ?? "center",
                          width: "auto",
                          height: "auto",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

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

export function ProductsGrid() {
  return (
    <section className="py-16 bg-white min-h-[75vh]">
      <ProductCards products={cropProtectionProducts} />
    </section>
  );
}
