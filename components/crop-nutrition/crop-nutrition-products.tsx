"use client";

import { useMemo, useState, useEffect } from "react";
import { Search as SearchIcon } from "lucide-react";
import { FaWhatsapp as WhatsAppIcon } from "react-icons/fa";
import { useSearchParams } from "next/navigation";

/* ------------------ DATA (now includes styling fields) ------------------ */
const products = [
  {
    name: "GOLDEN DROP",
    category: "Premium Organic Biostimulant",
    description:
      "Next-generation, protein hydrolysate-based biostimulant for improved flowering, enhanced fruit quality, and boosted overall plant health.",
    detailedDescription:
      "Golden Drop is a next-generation, protein hydrolysate-based biostimulant designed to improve flowering, enhance fruit quality, and boost overall plant health. Trusted by progressive farmers across India, Golden Drop helps you get higher yields, better quality produce, and reduced losses from flower and fruit drop.",
    benefits: [
      "Speeds Up Plant Growth – Activates natural plant processes, promoting faster flowering and uniform fruit development.",
      "Improves Flowering & Fruiting – Reduces flower drop and encourages better fruit setting for a higher yield.",
      "Boosts Chlorophyll & Photosynthesis – Ensures greener, healthier plants with improved energy production.",
      "Protein-Rich Nutrition – Enriches plants with essential amino acids and peptides for better growth and stress tolerance.",
      "Better Fruit Quality – Enhances size, weight, and appearance of fruits for improved market value.",
    ],
    dosage:
      "0.5–0.75 ml per litre of water. Spray during flowering and early fruiting stages every 12–15 days for best results.",
    usage:
      "Golden Drop is ideal for a wide range of crops including: Grapes, Tomato, Mango, Paddy, Onion, Chilli, Citrus Fruits, Vegetables, Strawberries, Capsicum, Pomegranate, Sugarcane, Tea, Coffee, Cashew, Banana.",
    image: "/golden drop-Photoroom shadow.png",
    secondaryImage: "/golden-drop-side.png",

    // styling
    backgroundHex: "#0B5D3E",
    dotColor: "rgba(255,255,255,0.06)",
    overlayColor: "rgba(0,0,0,0.25)",
  },
  {
    name: "AG-F",
    category: "Premium Activator, Spreader & Sticker",
    description:
      "Specialized non-ionic activator designed to maximize the effectiveness of crop protection agents and fertilizers.",
    detailedDescription:
      "AG-F is a specialized non-ionic activator designed to maximize the effectiveness of pesticides, plant growth regulators, micronutrients, and water-soluble fertilizers. It ensures superior coverage, faster absorption, and longer rain persistence, helping farmers get the best results with lower agrochemical usage.",
    benefits: [
      "Enhances Agrochemical Performance – Improves penetration, spreading, and absorption of pesticides, PGRs, and fertilizers.",
      "Excellent Rainfastness – Keeps chemicals active even after rainfall for maximum protection.",
      "Boosts Efficacy Up to 12X – Ensures uniform coverage and faster action for better results.",
      "Reduces Herbicide Costs – Cuts Glyphosate and Paraquat usage by up to 50%, reducing input cost per acre.",
      "Faster Pest & Disease Control – Promotes quick knockdown of insects and faster fungal control when tank-mixed with pesticides.",
    ],
    dosage:
      "1 ml per litre of water to reduce herbicide dosage by 50%. Use with herbicides, insecticides, fungicides, micronutrients & foliar fertilizers.",
    usage: "Ideal for all crops.",
    image: "/agf-Photoroom (1).png",
    secondaryImage: "/copperplus.png",

    // styling
    backgroundHex: "#F5C400",
    dotColor: "rgba(255,255,255,0.08)",
    overlayColor: "rgba(0,0,0,0.22)",
  },
  {
    name: "AG-F SUPER PLUS",
    category: "Advanced Silicone-Based Activator",
    description:
      "Silicone-based spreader, sticker, and activator for maximum coverage, rainfastness and spray efficiency.",
    detailedDescription:
      "AG-F Super Plus is a premium silicone-based spreader, sticker, and activator that ensures exceptional coverage, faster absorption, and unmatched rainfastness. Its advanced formulation provides complete leaf surface coverage, maximizing the performance of every spray.",
    benefits: [
      "Superior Spreading Power – Spreads up to 40 times more than conventional activators for uniform leaf coverage.",
      "Maximizes Agrochemical Efficiency – Enhances the performance of pesticides, PGRs, micronutrients, and foliar fertilizers.",
      "Balances pH for Better Uptake – Improves nutrient absorption and chemical stability.",
      "Rain Resistant – Maintains effectiveness even after rainfall.",
      "Quick Action Formula – Ensures faster insect knockdown and rapid fungus control when tank-mixed with pesticides.",
      "Cost-Effective – Delivers higher results with smaller doses, saving input costs.",
    ],
    dosage: "1 ml per 8 litres of water. Use with herbicides, insecticides, fungicides, micronutrients & foliar sprays.",
    usage:
      "Perfect for all crops where complete coverage and high spray efficiency are crucial.",
    image: "/AG-F Superplus-Photoroom (1).png",
    secondaryImage: "/ag-f-super-side.jpg",

    // styling
    backgroundHex: "#0057B7",
    dotColor: "rgba(255,255,255,0.07)",
    overlayColor: "rgba(0,0,0,0.25)",
  },
  {
    name: "CROP GIANT",
    category: "Organic Plant Extract (Carbohydrate Theory)",
    description:
      "Crop Giant is an organic plant extract formulated using the carbohydrate theory to enhance fruit quality, prevent cracking, and increase sugar accumulation.",
    detailedDescription:
      "Crop Giant is an organic plant extract formulated using the carbohydrate theory to enhance fruit quality, prevent cracking, and increase sugar accumulation.",
    benefits: [
      "Prevents Berry Drop & Cracking – Maintains berry integrity during growth.",
      "Nutrient Enrichment – Supplies vital Phosphorus & Potash for healthy fruit development.",
      "Controls Sugar Dilution – Ensures concentrated sweetness and better taste.",
      "Improves Pulp Quality – Develops firmer, juicier, and more marketable produce.",
    ],
    dosage:
      "Spray: 1.5 ml per litre of water when berries reach pea size. Repeat after 7 days for maximum effectiveness.",
    usage:
      "Crop Giant is ideal for a wide range of crops including: Grapes, Strawberry, Citrus, Apple, Mango, Tomato, Capsicum, Watermelon, Cucumbers, Brinjal, Chilli, Pomegranate.",
    image: "/crop giant (1).png",
    secondaryImage: "/crop giant.png",

    // styling
    backgroundHex: "#C81E1E",
    dotColor: "rgba(255,255,255,0.07)",
    overlayColor: "rgba(0,0,0,0.25)",
  },
  {
    name: "PALM SULF",
    category: "Organic Liquid Sulphur",
    description: "100% organic spray for integrated pest management and soil health.",
    detailedDescription:
      "Palm Sulf is a 100% organic liquid sulfur formulation, ideal for integrated pest management and soil health improvement.",
    benefits: [
      "Controls Powdery Mildew & Red Mites – Naturally suppresses fungal and mite infestations.",
      "No Residue – Completely safe for consumers and export compliance.",
      "Corrects Sulfur Deficiency – Improves soil fertility and crop vigor.",
      "Heat Safe – Non-scorching even at high temperatures.",
      "Improves Soil Temperature – Maintains root-zone warmth in cooler months.",
    ],
    dosage: "Foliar Spray: 3 ml per litre of water. Drip Application: 7.5 litres per hectare.",
    usage:
      "Palm Sulf is ideal for a wide range of crops including: Wheat, Rice, Grapes, Citrus, Mango, Chilli, Onion, Spinach, Potato, Tomato, Capsicum, Carrot.",
    image: "/palmsulfnew.png",
    secondaryImage: "/palm-sulf-side.jpg",

    // styling
    backgroundHex: "#E65100",
    dotColor: "rgba(255,255,255,0.06)",
    overlayColor: "rgba(0,0,0,0.25)",
  },
  {
    name: "CROPPER",
    category: "Humic Acid Solution (6%)",
    description:
      "Humic acid-based soil conditioner that improves soil structure, fertility, and water retention for healthier crops.",
    detailedDescription:
      "Cropper 6% is a humic acid-based soil conditioner that improves soil structure, fertility, and water retention for healthier crops.",
    benefits: [
      "Boosts Plant Growth – Acts as a natural catalyst for cell division and root elongation.",
      "Improves Soil Structure – Enhances aeration and microbial activity.",
      "Retains Nutrients – Reduces leaching and keeps fertilizers near the root zone.",
      "Improves Water-Holding Capacity – Critical during dry spells.",
    ],
    dosage:
      "Soil Application: 7.5 L/Ha. Foliar Spray: 2 ml per litre. Seed Treatment: 2.5 L per MT of seed. With Fertilizers: 7.5 L/Ha.",
    usage:
      "Cropper is ideal for a wide range of crops including: Maize, Wheat, Rice, Sunflower, Potato, Tomato, Garlic, Onion, Spinach, Coconut, Citrus, Mango.",
    image: "/croppernew.png",
    secondaryImage: "/cropper-side.jpg",

    // styling
    backgroundHex: "#4E342E",
    dotColor: "rgba(255,255,255,0.06)",
    overlayColor: "rgba(0,0,0,0.25)",
  },
  {
    name: "CROPPER PLUS",
    category: "Concentrated Humic Acid Solution",
    description:
      "Highly concentrated humic acid solution designed for maximum impact on root growth and soil fertility.",
    detailedDescription:
      "Cropper Plus 12% is a highly concentrated humic acid solution designed for maximum impact on root growth and soil fertility.",
    benefits: [
      "Double Strength Formula – Works faster than Cropper 6%",
      "Promotes Root & Shoot Growth – Leads to stronger plants and higher yields.",
      "Enhances Microbial Activity – Improves soil ecosystem.",
      "Reduces Nutrient Loss – Keeps nutrients available longer.",
    ],
    dosage:
      "Soil Application: 2.5–4 L/Ha. Foliar Spray: 1 ml per litre. Seed Treatment: 1.5 L per MT of seed. With Fertilizers: 2.5–4 L/Ha.",
    usage:
      "Cropper Plus is ideal for a wide range of crops including: Wheat, Rice, Maize, Sunflower, Potato, Leafy Greens, Coconut, Grapes, Citrus, Mango, Tomato, Chilli.",
    image: "/cropperplusnew.png",
    secondaryImage: "/cropper-plus-side.png",

    // styling
    backgroundHex: "#D97706",
    dotColor: "rgba(255,255,255,0.07)",
    overlayColor: "rgba(0,0,0,0.24)",
  },
  {
    name: "SILICOSE",
    category: "Silica-Based Organic Supplement",
    description:
      "Silica-rich soil and foliar supplement that strengthens plants and protects them against stress.",
    detailedDescription:
      "Silicose is a silica-rich soil and foliar supplement that strengthens plants and protects them against stress.",
    benefits: [
      "Supplies Soluble Silica – Improves structural strength of plant cells.",
      "Enhances Disease Resistance – Protects against fungal and bacterial pathogens.",
      "Blocks Nematode Entry – Acts as a natural physical barrier at root level.",
      "Improves Water Retention – Increases drought tolerance and yield.",
      "Increases Lodging Resistance – Stronger stems withstand wind and rain.",
    ],
    dosage: "Foliar Spray: 3 ml per litre of water. Drip Application: 5–7.5 L/Ha.",
    usage:
      "Silicose is ideal for a wide range of crops including: Rice, Wheat, Maize, Grapes, Mango, Citrus, Potato, Chilli, Tomato, Onion, Spinach, Strawberry, Sugarcane.",
    image: "/silicosenew.png",
    secondaryImage: "/silicose-side.png",

    // styling
    backgroundHex: "#2563EB",
    dotColor: "rgba(255,255,255,0.05)",
    overlayColor: "rgba(0,0,0,0.24)",
  },
];

type Product = typeof products[number];

/* ------------------ HELPERS ------------------ */
function normalize(text: string) {
  return (text || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}
function productMatchesQuery(p: Product, q: string) {
  if (!q) return true;
  const n = normalize(q);
  const haystack = normalize(
    [
      p.name,
      p.category,
      p.description,
      p.detailedDescription,
      p.dosage,
      p.usage,
      ...(p.benefits || []),
    ]
      .filter(Boolean)
      .join(" | ")
  );
  return haystack.includes(n);
}
function splitCrops(usage?: string) {
  if (!usage) return [];
  return usage.split(",").map((s) => s.trim()).filter(Boolean);
}

/** Crop groups (for the filter) */
const CROPS_BY_GROUP: Record<string, string[]> = {
  Fruits: ["Apple","Banana","Citrus","Grapes","Mango","Pomegranate","Strawberry","Watermelon"],
  Vegetables: ["Brinjal","Capsicum","Carrot","Cucumber","Garlic","Onion","Potato","Spinach","Leafy Greens","Tomato"],
  "Cereals & Grains": ["Rice","Wheat","Maize"],
  Oilseeds: ["Sunflower"],
  "Plantation & Tree Crops": ["Coconut","Coffee","Tea","Cashew"],
  Industrial: ["Sugarcane"],
};

/** Synonyms / plurals → canonical crop */
const CROP_ALIASES: Record<string, string> = {
  paddy: "Rice",
  "citrus fruits": "Citrus",
  cucumbers: "Cucumber",
  strawberries: "Strawberry",
  vegetable: "Vegetables",
  vegetables: "Vegetables",
};

function canonicalCrop(label: string): string {
  const raw = label.trim();
  const key = normalize(raw);
  if (CROP_ALIASES[key]) return CROP_ALIASES[key];

  if (/ies$/i.test(raw)) return raw.replace(/ies$/i, "y");
  if (/s$/i.test(raw) && !/Grapes|Citrus|Leafy Greens/i.test(raw)) return raw.replace(/s$/i, "");
  return raw;
}
function productCropsCanonical(p: Product): string[] {
  return splitCrops(p.usage).map(canonicalCrop);
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

/* ------------------ COMPONENT ------------------ */
export default function ProductListingAndDetails() {
  const searchParams = useSearchParams();
  const productQuery = searchParams?.get("product") ?? null;

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // search + crops filter state
  const [query, setQuery] = useState("");
  const [cropsOpen, setCropsOpen] = useState(false);
  const [selectedCrops, setSelectedCrops] = useState<string[]>([]);
  const [groupOpen, setGroupOpen] = useState<Record<string, boolean>>(
    Object.keys(CROPS_BY_GROUP).reduce(
      (acc, g) => ((acc[g] = false), acc),
      {} as Record<string, boolean>
    )
  );

  const selectedProduct = selectedIndex !== null ? products[selectedIndex] : null;

  // If a product query param exists, auto-open the product on mount / when param changes
  useEffect(() => {
    if (!productQuery) return;
    try {
      const decoded = decodeURIComponent(productQuery);
      const foundIndex = products.findIndex((p) => p.name.toLowerCase() === decoded.toLowerCase());
      if (foundIndex >= 0) {
        setSelectedIndex(foundIndex);
        // scroll top so the top of the detail is visible
        setTimeout(() => {
          if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
        }, 50);
      }
    } catch (e) {
      // ignore malformed param
    }
  }, [productQuery]);

  // scroll to top when opening a product detail — ensures top is visible on manual opens as well
  useEffect(() => {
    if (selectedProduct) {
      setTimeout(() => {
        if (typeof window !== "undefined") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 50);
    }
  }, [selectedProduct]);

  // Apply search + crop filters (crops are canonicalized)
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      if (!productMatchesQuery(p, query)) return false;
      if (selectedCrops.length === 0) return true;

      const pCrops = productCropsCanonical(p).map((c) => normalize(c));
      return selectedCrops.some((c) => pCrops.includes(normalize(c)));
    });
  }, [query, selectedCrops]);

  const clearFilters = () => {
    setSelectedCrops([]);
    setQuery("");
  };

  /* ---------- DETAIL VIEW (SIMPLIFIED) ---------- */
  if (selectedProduct) {
    return (
      <section className="pt-6 pb-12 md:pb-16 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => setSelectedIndex(null)}
            className="mb-6 px-4 py-2 text-[#1b5e20] border border-[#1b5e20] rounded hover:bg-[#e8f5e9] transition font-semibold"
          >
            &larr; Back to Products
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Image */}
            <div className="flex flex-col items-center">
              <div className="w-full rounded-xl bg-neutral-50 ring-1 ring-gray-200 overflow-hidden shadow-inner">
                <img
                  src={selectedProduct.image || "/placeholder.svg"}
                  alt={selectedProduct.name}
                  className="w-full h-[420px] object-contain"
                />
              </div>

              <div className="mt-5">
                <a
                  href={`https://wa.me/918779083022?text=Hi! I want to book this product ${encodeURIComponent(
                    selectedProduct.name
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#1b5e20] hover:bg-[#155a32] text-white font-semibold rounded-full shadow-md transition"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Buy Now
                </a>
              </div>
            </div>

            {/* Details: only the requested sections */}
            <div className="text-sm md:text-base"> {/* reduced text size for content area */}
              {/* Heading */}
              <h1 className="text-3xl md:text-4xl font-extrabold text-[#1b5e20] mb-4">
                {selectedProduct.name}
              </h1>

              {/* Paragraph (detailedDescription) */}
              <p className="text-gray-700 mb-6" style={{ textAlign: "justify" }}>
                {selectedProduct.detailedDescription}
              </p>

              {/* Key Benefits */}
              <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-800 mb-3">Key Benefits</h2>
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 pl-4" style={{ textAlign: "justify" }}>
                  {selectedProduct.benefits.map((b, i) => (
                    <li key={i} className="font-medium">{b}</li>
                  ))}
                </ul>
              </div>

              {/* Recommended Dosage */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Recommended Dosage</h3>
                <p className="text-gray-700" style={{ textAlign: "justify" }}>
                  {selectedProduct.dosage}
                </p>
              </div>

              {/* Where to Use */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Where to Use</h3>
                {/* render usage with bolded phrases */}
                <p
                  className="text-gray-700"
                  style={{ textAlign: "justify" }}
                  dangerouslySetInnerHTML={{
                    __html: highlightPhrases(selectedProduct.usage, BOLD_PHRASES),
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  /* ---------- LIST VIEW ---------- */
  return (
    <section className="bg-gray-50">
      {/* ---- HERO (same as before) ---- */}
      <div className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg aria-hidden className="w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="none">
            <defs>
              <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="1"></circle>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)"></rect>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-0 pb-10 md:pt-0 md:pb-14 -mt-1 md:-mt-1">
  <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
    {/* IMAGE: show first on mobile, second on desktop */}
    <div className="md:col-span-5 order-1 md:order-2">
      <div className="relative h-72 md:h-96 bg-white rounded-2xl md:rounded-2xl ring-1 ring-gray-200 shadow-sm overflow-hidden">
        <img
          src="/rice-field-7890204_1280.png"
          alt="Rice field"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>

    {/* TEXT: show below image on mobile, left on desktop */}
    <div className="md:col-span-7 order-2 md:order-1">
      {/* Heading: 20px mobile / 30px desktop (text-xl / md:text-3xl) */}
      <h1 className="text-xl md:text-3xl font-extrabold text-[#388e3c] tracking-tight">
        Palm International
      </h1>

      {/* Paragraphs: 16px on all breakpoints (text-base) */}
      <p className="mt-4 text-base text-gray-700 leading-7" style={{ textAlign: "justify" }}>
        Palm International is a leading Indian agri-inputs company since 1998 with expertise
        in developing, manufacturing, and exporting high-quality biostimulants, silicon-based
        foliar sprays, humic acid solutions, and crop care products. Our mission is to provide
        farmers with sustainable, science-backed solutions that improve soil health, boost crop
        yields, and enhance farm profitability.
      </p>

      <p className="mt-4 text-base text-gray-700 leading-7" style={{ textAlign: "justify" }}>
        With a global presence, Palm International has become a trusted partner for farmers and
        agri-distributors worldwide.
      </p>

      <p className="mt-6 text-base text-gray-700 leading-7" style={{ textAlign: "justify" }}>
        Our flagship brands – AG-F, AG-F Super Plus, Golden Drop, Crop Giant, Silicose, Palm Sulf,
        and Cropper Plus – are designed to solve real challenges like nutrient efficiency, drought
        stress, fruit drop, and fungal attacks, helping farmers achieve better quality produce, higher
        yields, and longer shelf life.
      </p>

      <p className="mt-4 text-base text-gray-700 leading-7" style={{ textAlign: "justify" }}>
        Palm International is committed to innovation, farmer education, and field trials, ensuring
        our products deliver consistent and proven results. With a strong focus on sustainability and
        residue-free agriculture, we aim to build a healthier future for farming communities globally.
      </p>
    </div>
  </div>
</div>
      </div>

      {/* ---- FILTERS + SEARCH + GRID ---- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 md:mt-12 lg:mt-16 pb-12 md:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* LEFT: Crops accordion with groups */}
          <aside className="md:col-span-3">
            <button
              className="w-full flex items-center justify-between py-2"
              onClick={() => setCropsOpen((v) => !v)}
              aria-expanded={cropsOpen}
              aria-controls="crops-panel"
            >
              <span className="text-base font-semibold text-gray-800">Crops</span>
              <span className="text-gray-600 text-xl leading-none select-none">
                {cropsOpen ? "–" : "+"}
              </span>
            </button>
            <div className="h-px bg-gray-200" />

            {cropsOpen && (
              <div id="crops-panel" className="mt-3 space-y-2">
                {Object.entries(CROPS_BY_GROUP).map(([group, crops]) => (
                  <div key={group} className="pb-1">
                    <button
                      className="w-full flex items-center justify-between py-2 pl-1"
                      onClick={() =>
                        setGroupOpen((prev) => ({ ...prev, [group]: !prev[group] }))
                      }
                      aria-expanded={!!groupOpen[group]}
                      aria-controls={`group-${group}`}
                    >
                      <span className="text-sm font-semibold text-gray-800">{group}</span>
                      <span className="text-gray-500 text-lg leading-none select-none">
                        {groupOpen[group] ? "–" : "+"}
                      </span>
                    </button>

                    {groupOpen[group] && (
                      <div id={`group-${group}`} className="ml-2 mt-1 space-y-2">
                        {crops.map((crop) => {
                          const checked = selectedCrops.includes(crop);
                          return (
                            <label
                              key={crop}
                              className="flex items-center gap-3 text-sm text-gray-700 cursor-pointer pl-2"
                            >
                              <input
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-[#2e7d32] focus:ring-[#2e7d32]"
                                checked={checked}
                                onChange={(e) => {
                                  setSelectedCrops((prev) =>
                                    e.target.checked
                                      ? [...prev, crop]
                                      : prev.filter((c) => c !== crop)
                                  );
                                }}
                              />
                              <span>{crop}</span>
                            </label>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ))}

                {selectedCrops.length > 0 && (
                  <button
                    onClick={() => setSelectedCrops([])}
                    className="mt-3 text-xs text-gray-500 underline underline-offset-2"
                  >
                    Clear crops
                  </button>
                )}
              </div>
            )}
          </aside>

          {/* RIGHT: search + chips + 2-col grid */}
          <div className="md:col-span-9">
            {selectedCrops.length > 0 && (
              <div className="mb-3 flex flex-wrap gap-2">
                {selectedCrops.map((c) => (
                  <span
                    key={c}
                    className="inline-flex items-center rounded-full bg-[#e8f5e9] border border-[#2e7d32]/30 px-2 py-0.5 text-xs text-[#2e7d32]"
                  >
                    {c}
                    <button
                      className="ml-1 text-[#2e7d32]/70 hover:text-[#2e7d32]"
                      onClick={() => setSelectedCrops((prev) => prev.filter((x) => x !== c))}
                      aria-label={`Remove ${c}`}
                    >
                      ×
                    </button>
                  </span>
                ))}
                <button
                  className="text-xs text-gray-500 underline underline-offset-2"
                  onClick={clearFilters}
                >
                  Clear all
                </button>
              </div>
            )}

            {/* search bar */}
            <div className="mb-6 flex items-center gap-3">
              <div className="relative flex-1">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Type a product name, crop, key target or details"
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-[#2e7d32]"
                />
                <SearchIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
              {filteredProducts.map((product) => (
                <div
                  key={product.name}
                  className="group cursor-pointer"
                  onClick={() =>
                    setSelectedIndex(products.findIndex((p) => p.name === product.name))
                  }
                >
                  {/* === FULL-BLEED COLOURED CARD === */}
                  <div className="w-full rounded-lg overflow-hidden transition-all duration-300 group-hover:scale-[1.02]">
                    {/* Use responsive square (padding-bottom) to guarantee full coverage */}
                    <div style={{ width: "100%", paddingBottom: "100%" }} className="relative">
                      {/* coloured surface */}
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

                        {/* bottom->top gradient overlay */}
                        <div
                          aria-hidden
                          className="absolute inset-0"
                          style={{
                            background: `linear-gradient(to top, ${product.overlayColor}, rgba(0,0,0,0.06) 45%, rgba(0,0,0,0) 75%)`,
                            zIndex: 2,
                            pointerEvents: "none",
                          }}
                        />

                        {/* image on top */}
                        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                          <img
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            className="max-w-[100%] max-h-[100%] object-contain"
                            style={{ filter: "drop-shadow(0 10px 18px rgba(0,0,0,0.18))" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* title (outside the colored area) */}
                  <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-gray-900">
                    {product.name}
                  </h3>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="mt-10 rounded-xl border border-dashed border-gray-300 p-10 text-center text-gray-500">
                No products match your search or crop filter.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
