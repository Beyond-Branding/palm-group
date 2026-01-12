"use client";

import { useMemo, useState, useEffect } from "react";
import { Search as SearchIcon, Facebook, Instagram, Share2 } from "lucide-react";
import { FaWhatsapp as WhatsAppIcon } from "react-icons/fa";
import { useSearchParams } from "next/navigation";

const products = [
  {
    name: "GOLDEN DROP",
    category: "Premium Organic Biostimulant",
    tagline:"Premium Organic Biostimulant",
    description:
      "Next-generation, protein hydrolysate-based biostimulant for improved flowering, enhanced fruit quality, and boosted overall plant health.",
    detailedDescription:
      "Golden Drop is a high-performance, protein hydrolysate-based biostimulant engineered for the modern farmer. By leveraging a concentrated blend of essential amino acids and bioactive peptides, Golden Drop optimizes the plant’s internal physiological processes to ensure peak productivity. Trusted by progressive farmers to secure high-quality harvests, Golden Drop helps you achieve higher yields, superior produce, enhanced fruit size and a significant reduction in losses from flower and fruit drop.",
    benefits: [
      "Accelerated Plant Development: Actively stimulates metabolic pathways, promoting rapid flowering and uniform fruit development.",
      "Enhanced Flowering, Fruit Set & Fruit Sizes: Dramatically reduces premature flower drop and encourages robust fruit setting for a heavier, larger fruit to give more consistent yield.",
      "Photosynthetic Efficiency: Naturally boosts chlorophyll levels, ensuring deeper green, healthier foliage and maximized energy production.",
      " Advanced Protein Nutrition: Enriches plants with essential amino acid and peptides, providing the building blocks for vigorous growth and superior stress tolerance.",
    ],
    dosage:
      "<strong>Dosage:</strong> 0.5–0.75 ml per litre of water.<br/><strong>Timing:</strong> Spray during flowering and early fruiting stages every 12–15 days for best results.",
    usage:
      "Golden Drop is ideal for a wide range of crops including: Grapes, Strawberries, Pomegranate, Tomato, Mango, Paddy, Onion, Chilli, Citrus Fruits, All Vegetable Crops, All Horticultural Crops, Sugarcane, Tea, Coffee, Cashew, Banana.",
    image: "https://res.cloudinary.com/daoju0r3c/image/upload/v1764173725/golden_drop-Photoroom_shadow_m9aigy.png",
    secondaryImage: "/golden-drop-side.png",
    backgroundHex: "#DFF2EA",
    dotColor: "rgba(255,255,255,0.06)",
    overlayColor: "rgba(0,0,0,0.25)",
    imageStyle: {
    maxWidth: "120%",
    maxHeight: "115%",
    objectPosition: "right center",
    translateY: "2%",
  },
  },
  {
    name: "AG-F",
    category: "Premium Activator, Spreader & Sticker",
    tagline:"Maximum Coverage. Superior Absorption. Unmatched Efficacy",
    description:
      "Specialized non-ionic activator designed to maximize the effectiveness of crop protection agents and fertilizers.",
    detailedDescription:
      "AG-F is a specialized, high-performance ionic & non-ionic activator engineered to amplify the effectiveness of your crop protection and nutrition programs. By drastically reducing the surface tension of spray droplets, AG-F ensures that pesticides, herbicides, growth regulators, and fertilizers are absorbed faster and stay on the plant longer. For the professional farmer, AG-F is the key to achieving superior results while reducing overall agrochemical inputs and costs. In modern farming, it’s not just about what you spray, but how it stays. AG-F ensures that every drop of your expensive agrochemicals works harder, penetrates deeper, and lasts longer, providing a significant return on investment through lower input costs and healthier crops.",
    benefits: [
      "12x Efficacy Boost: Ensures ultra-uniform coverage and rapid penetration, delivering up to 12 times the standard effectiveness of your tank-mix.",
      "Superior Rainfastness: Creates a durable bond between the chemical and the leaf surface, preventing wash-off during unexpected rainfall.",
      "50% Herbicide Cost Reduction: When used with Glyphosate or Paraquat, AG-F allows you to reduce herbicide dosage by up to 50% without compromising on weed control.",
      "Rapid Knockdown Action: Promotes immediate absorption for faster control of stubborn pests and fungal diseases.",
      "Optimized Nutrient Uptake: Maximizes the delivery of micronutrients and water-soluble fertilizers directly into the plant’s vascular system.",
      "Enhanced Soil Binding & Nutrient Retention: Creates a unique binding effect in the soil that anchors nutrients, preventing leaching and ensuring a steady, slow-release of NPK to the root zone. It also optimizes soil structure to retain moisture more effectively, reducing irrigation frequency and protecting crops during dry spells.",
    ],
    dosage:
      "<strong>To reduce herbicide dosage:</strong> 1 ml per litre of water to reduce herbicide dosage by 50%.<br/><strong>General Foliar sprays:</strong> 0.25 ml per liter of water <strong><br/>For Fertigation:</strong> 250ml per acre. <br/><strong>Use With:</strong> Herbicides, insecticides, fungicides, micronutrients & foliar fertilizers.",
    usage: "Ideal for all crops.",
    image: "https://res.cloudinary.com/daoju0r3c/image/upload/v1764173812/agf-Photoroom_1_cmpcyy.png",
    secondaryImage: "/copperplus.png",
    backgroundHex: "#FFF3C4",
    dotColor: "rgba(255,255,255,0.08)",
    overlayColor: "rgba(0,0,0,0.22)",
    imageStyle: {
    maxWidth: "115%",
    maxHeight: "115%",
    objectPosition: "right center",
    translateY: "2%",
  },
  },
  {
    name: "AG-F SUPER PLUS",
    category: "Advanced Silicone-Based Activator",
    tagline:"Precision Engineering for Maximum Leaf Coverage and Rain Protection",
    description:
      "Silicone-based spreader, sticker, and activator for maximum coverage, rainfastness and spray efficiency.",
    detailedDescription:
      "AG-F Super Plus is a premium silicone-based spreader, sticker, activator, penetrator and pH regulator that ensures exceptional coverage, faster absorption, and unmatched rainfastness. Its advanced formulation provides complete leaf surface coverage, maximizing the performance of every spray.",
    benefits: [
      "40x Superior Spreading Power: Engineered to spread up to 40 times further than conventional activators, ensuring a thin, uniform film over the entire leaf surface.",
      "Stomatal Infiltration (Faster Action): Promotes rapid knockdown of pests and faster fungal control by facilitating immediate chemical entry through the plant's stomata.",
      "Integrated pH Balancing: Optimizes the pH of the spray tank to improve chemical stability and maximize the bio-availability of nutrients.",
      "Unmatched Rainfastness: Provides a high-performance sticker effect that anchors chemicals to the plant, maintaining full effectiveness even under heavy tropical rains.",
      "Synergistic Efficiency: Significantly enhances the performance of high-value Pesticides, Plant Growth Regulators (PGRs), Micronutrients, and Foliar Fertilizers.",
      "Economic Optimization: Delivers superior coverage at lower doses, drastically reducing the total volume of water and chemicals required per acre.",
      "pH Regulation: Optimizes and stabilizes the pH levels to prevent chemical degradation and maximize nutrient bio-availability.",
    ],
    dosage: "<strong>For foliar sprays:</strong> 1 ml per 8 litres of water. <br/>Use with herbicides, insecticides, fungicides, micronutrients & foliar sprays.",
    usage:
      "Perfect for all crops where complete coverage and high spray efficiency are crucial.",
    image: "https://res.cloudinary.com/daoju0r3c/image/upload/v1764173861/AG-F_Superplus-Photoroom_shadow_kdb8m9.png",
    secondaryImage: "/ag-f-super-side.jpg",
    backgroundHex: "#D6E8FF",
    dotColor: "rgba(255,255,255,0.07)",
    overlayColor: "rgba(0,0,0,0.25)",
    imageStyle: {
    maxWidth: "65%",
    maxHeight: "115%",
    objectPosition: "right center",
    translateY: "-2%",
  },
  },
  {
    name: "CROP GIANT",
    category: "Organic Plant Extract (Carbohydrate Theory)",
    tagline:"Mastering the Science of Fruit Quality and Carbohydrate Balance",
    description:
      "Crop Giant is an organic plant extract formulated using the carbohydrate theory to enhance fruit quality, prevent cracking, and increase sugar accumulation.",
    detailedDescription:
      "Crop Giant is a sophisticated organic formulation built upon the Carbohydrate Theory of plant nutrition. By optimizing how plants synthesize and store energy, Crop Giant ensures that nutrients are efficiently converted into high-quality fruit tissue rather than excess vegetative growth. This makes it an indispensable tool for farmers aiming for premium, high quality produce with exceptional flavor and shelf life.",
    benefits: [
  "Structural Integrity & Cracking Prevention – Strengthens cell walls to prevent berry and fruit cracking, especially during periods of unseasonal rain or rapid growth.",
  "Reduced Premature Drop – Maintains berry and fruit integrity throughout the growth cycle, significantly reducing losses from natural or stress-induced fruit drop.",
  "BRIX & Sweetness Optimization – Actively controls sugar dilution by enhancing the accumulation of soluble solids, resulting in a higher BRIX factor and concentrated sweetness.",
  "Essential Nutrient Enrichment – Supplies targeted Phosphorus and Potash, the vital elements required for healthy fruit development and metabolic balance.",
  "Superior Pulp & Keeping Quality – Develops firmer, juicier pulp, improving shelf life and making the produce more resilient for long-distance transport.",
  "Induces Early Harvest – Accelerates the natural maturation process by optimizing carbohydrate translocation, allowing farmers to reach the market sooner.",
],
    dosage:
      "<strong>Spray:</strong> 1.5 ml per litre of water when berries reach pea size. <br/><strong>Repeat:</strong> After 7-10 days for maximum effectiveness. <br/><strong>Third Spray:</strong> 15 days before harvest.",
    usage:
      "Crop Giant is ideal for a wide range of crops including: Grapes, Strawberries, Pomegranate, Tomato, Mango, Paddy, Onion, Chilli, Citrus Fruits, All Vegetable Crops, All Horticultural Crops, Sugarcane, Tea, Coffee, Cashew, Banana.",
    image: "https://res.cloudinary.com/daoju0r3c/image/upload/v1764173895/crop_giant_1_cs6nnn.png",
    secondaryImage: "/crop giant.png",
    backgroundHex: "#FADDDD",
    dotColor: "rgba(255,255,255,0.07)",
    overlayColor: "rgba(0,0,0,0.25)",
    imageStyle: {
    maxWidth: "105%",
    maxHeight: "115%",
    objectPosition: "right center",
    translateY: "-2%",
  },
  },
  {
    name: "PALM SULF",
    category: "Organic Liquid Sulphur",
    tagline:"Organic Liquid Sulphur",
    description: "100% organic spray for integrated pest management and soil health.",
    detailedDescription:
      "Palm Sulf is a 100% organic liquid sulfur formulation, ideal for integrated pest management and soil health improvement.",
    benefits: [
  "Controls Powdery Mildew & Red Mites – Effectively suppresses fungal infections and mite infestations through natural action.",
  "No Residue – Leaves no harmful residues, ensuring consumer safety and full export compliance.",
  "Corrects Sulfur Deficiency – Supplies available sulfur to improve soil fertility, crop metabolism, and overall plant vigor.",
  "Heat Safe – Non-scorching and safe to use even under high-temperature conditions.",
  "Improves Soil Temperature – Helps maintain optimal root-zone temperature, supporting healthy growth during cooler months.",
],

    dosage: "<strong>Foliar Spray:</strong> 2-3 ml per litre of water.<br/><strong>Drip Application:</strong> 3 litres per acre.",
    usage:
      "Palm Sulf is ideal for a wide range of crops including: Grapes, Strawberries, Pomegranate, Tomato, Mango, Paddy, Onion, Chilli, Citrus Fruits, All Vegetable Crops, All Horticultural Crops, Sugarcane, Tea, Coffee, Cashew, Banana.",
    image: "https://res.cloudinary.com/daoju0r3c/image/upload/v1764173960/palmsulfnew_ntrjwo.png",
    secondaryImage: "/palm-sulf-side.jpg",
    backgroundHex: "#FFE3D1",
    dotColor: "rgba(255,255,255,0.06)",
    overlayColor: "rgba(0,0,0,0.25)",
    imageStyle: {
    maxWidth: "110%",
    maxHeight: "115%",
    objectPosition: "right center",
    translateY: "7%",
  },
  },
  {
    name: "CROPPER",
    category: "Humic Acid Solution (6%)",
    tagline:"Humic Acid Solution (6%)",
    description:
      "Humic acid-based soil conditioner that improves soil structure, fertility, and water retention for healthier crops.",
    detailedDescription:
      "Cropper 6% is a humic acid-based soil conditioner that improves soil structure, fertility, and water retention for healthier crops.",
    benefits: [
  "Boosts Plant Growth – Acts as a natural catalyst for root development, enhances nutrient chelation, and functions as a natural organic manure.",
  "Improves Soil Structure – Enhances soil aeration, aggregation, and beneficial microbial activity.",
  "Retains Nutrients – Reduces nutrient leaching and keeps essential fertilizers available within the root zone.",
  "Improves Water-Holding Capacity – Increases moisture retention in the soil, which is critical during dry spells and water-stress conditions.",
],

    dosage:
      "<strong>Soil Application:</strong> 3 L/acre.<br/><strong>Seed Treatment:</strong> 2.5 L per MT of seed. <br/><strong>With Fertilizers:</strong> 3 L/acre.",
    usage:
      "Cropper is ideal for a wide range of crops including: Grapes, Strawberries, Pomegranate, Tomato, Mango, Paddy, Onion, Chilli, Citrus Fruits, All Vegetable Crops, All Horticultural Crops, Sugarcane, Tea, Coffee, Cashew, Banana.",
    image: "https://res.cloudinary.com/daoju0r3c/image/upload/v1764174014/croppernew_qydobw.png",
    secondaryImage: "/cropper-side.jpg",
    backgroundHex: "#E8DAD6",
    dotColor: "rgba(255,255,255,0.06)",
    overlayColor: "rgba(0,0,0,0.25)",
    imageStyle: {
    maxWidth: "120%",
    maxHeight: "115%",
    objectPosition: "right center",
    translateY: "7%",
  },
  },
  {
    name: "CROPPER PLUS",
    category: "Concentrated Humic Acid Solution",
    tagline:"Concentrated Humic Acid Solution",
    description:
      "Highly concentrated humic acid solution designed for maximum impact on root growth and soil fertility.",
    detailedDescription:
      "Cropper Plus 12% is a highly concentrated humic and fulvic acid solution designed for maximum impact on root growth and soil fertility.",
    benefits: [
  "Boosts Plant Growth – Acts as a natural catalyst for root development, enhances nutrient chelation, and functions as a natural organic manure.",
  "Promotes Root & Shoot Growth – Encourages stronger vegetative growth, leading to healthier plants and improved yields.",
  "Enhances Microbial Activity – Improves the soil ecosystem by stimulating beneficial microbial populations.",
  "Reduces Nutrient Loss – Minimizes leaching and keeps essential nutrients available to plants for a longer duration.",
  "Fulvate-Powered Nutrient Transport – Contains active fulvates that act as natural chelating agents, significantly increasing mineral mobility and nutrient absorption within the plant.",
],

    dosage:
      "<strong>Soil Application:</strong> 1-1.25 L/acre. <br/><strong>Foliar Spray:</strong> 1 ml per litre. <br/><strong>Seed Treatment:</strong> 1.5 L per MT of seed. <br/><strong>With Fertilizers:</strong> 1-1.25 L/acre.",
    usage:
      "Cropper Plus is ideal for a wide range of crops including: Grapes, Strawberries, Pomegranate, Tomato, Mango, Paddy, Onion, Chilli, Citrus Fruits, All Vegetable Crops, All Horticultural Crops, Sugarcane, Tea, Coffee, Cashew, Banana.",
    image: "https://res.cloudinary.com/daoju0r3c/image/upload/v1764174140/cropperplusnew_gxqz3w.png",
    secondaryImage: "/cropper-plus-side.png",
    backgroundHex: "#FFE8C7",
    dotColor: "rgba(255,255,255,0.07)",
    overlayColor: "rgba(0,0,0,0.24)",
    imageStyle: {
    maxWidth: "110%",
    maxHeight: "110%",
    objectPosition: "right center",
    translateY: "3%",
  },
  },
  {
    name: "SILICOSE",
    category: "Silica-Based Organic Supplement",
    tagline:"Silica-Based Organic Supplement",
    description:
      "Silica-rich soil and foliar supplement that strengthens plants and protects them against stress.",
    detailedDescription:
      "Silicose is a silica-rich soil and foliar supplement that strengthens plants and protects them against stress.",
    benefits: [
  "Supplies Soluble Silica – Strengthens plant cell walls, improving overall structural integrity and crop robustness.",
  "Enhances Disease Resistance – Provides natural protection against fungal and bacterial pathogens by reinforcing plant defenses.",
  "Blocks Nematode Entry – Acts as a physical barrier at the root zone, reducing nematode penetration and root damage.",
  "Improves Water Retention – Enhances moisture-holding capacity, increasing drought tolerance and sustaining yields under water stress.",
  "Increases Lodging Resistance – Strengthens stems and stalks, enabling crops to better withstand wind, rain, and heavy growth load.",
],
    dosage: "<strong>Foliar Spray:</strong> 3 ml per litre of water. <br/><strong>Drip Application:</strong> 2–3 L/acre.",
    usage:
      "Silicose is ideal for a wide range of crops including: Grapes, Strawberries, Pomegranate, Tomato, Mango, Paddy, Onion, Chilli, Citrus Fruits, All Vegetable Crops, All Horticultural Crops, Sugarcane, Tea, Coffee, Cashew, Banana.",
    image: "https://res.cloudinary.com/daoju0r3c/image/upload/v1764174176/silicosenew_t2zou5.png",
    secondaryImage: "/silicose-side.png",
    backgroundHex: "#E0E9FF",
    dotColor: "rgba(255,255,255,0.05)",
    overlayColor: "rgba(0,0,0,0.24)",
    imageStyle: {
    maxWidth: "110%",
    maxHeight: "110%",
    objectPosition: "right center",
    translateY: "7%",
  },
  },
  {
    name: "CROPPER GRANULES",
    category: "Silica-Based Organic Supplement",
    tagline:"Humic-Based Organic Soil Conditioner",
    description:
      "Silica-rich soil and foliar supplement that strengthens plants and protects them against stress.",
    detailedDescription:
      "Cropper Granules is a high-performance organic soil amendment designed to restore soil health and stimulate vigorous root systems. Formulated with active Humic Acid, it reverses soil degradation and maximizes the efficiency of your nutritional program.",
    benefits: [
  "Triggers White Root Growth – Stimulates rapid development of healthy white roots, maximizing nutrient and water absorption.",
  "Improves Soil Structure – Enhances soil texture, aeration, and moisture retention for better root-zone conditions.",
  "Boosts Nutrient Efficiency – Acts as a natural chelator, increasing the availability and uptake of essential micronutrients such as Zinc and Iron.",
  "Enhances Drought Tolerance – Regulates internal plant hormones, enabling crops to survive and perform better under water-stress conditions.",
  "Supports Seed Germination – Improves root respiration and early vigor during critical germination and seedling establishment stages.",
],
    dosage: "<strong>Soil Application by broadcasting:</strong> 1-1.5 kg per acre. <br/><strong>Method:</strong> Apply directly to the soil during land preparation or as a top-dressing in early growth stages.",
    usage:
      "Cropper Granules is ideal for a wide range of crops including: Grapes, Strawberries, Pomegranate, Tomato, Mango, Paddy, Onion, Chilli, Citrus Fruits, All Vegetable Crops, All Horticultural Crops, Sugarcane, Tea, Coffee, Cashew, Banana, Wheat.",
    image: "https://res.cloudinary.com/daoju0r3c/image/upload/v1767960406/croppergranules-removebg-preview_rzxnek.png",
    secondaryImage: "/silicose-side.png",
    backgroundHex: "#E6F8EC",
    dotColor: "rgba(255,255,255,0.05)",
    overlayColor: "rgba(0,0,0,0.24)",
    imageStyle: {
    maxWidth: "90%",
    maxHeight: "85%",
    objectPosition: "right center",
    translateY: "3%",
  },
  },
];

type Product = typeof products[number];

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

const CROPS_BY_GROUP: Record<string, string[]> = {
  Fruits: ["Apple","Banana","Citrus","Grapes","Mango","Pomegranate","Strawberry","Watermelon"],
  Vegetables: ["Brinjal","Capsicum","Carrot","Cucumber","Garlic","Onion","Potato","Spinach","Leafy Greens","Tomato"],
  "Cereals & Grains": ["Rice","Wheat","Maize"],
  Oilseeds: ["Sunflower"],
  "Plantation & Tree Crops": ["Coconut","Coffee","Tea","Cashew"],
  Industrial: ["Sugarcane"],
};

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
    const regex = new RegExp(esc.replace(/&/g, "(?:&|&amp;)"), "g");
    html = html.replace(regex, `<strong>${escapeHtml(phrase)}</strong>`);
  });

  return html;
}

export default function ProductListingAndDetails() {
  const searchParams = useSearchParams();
  const productQuery = searchParams?.get("product") ?? null;

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selectedProduct = selectedIndex !== null ? products[selectedIndex] : null;
  useEffect(() => {
    if (!productQuery) return;
    try {
      const decoded = decodeURIComponent(productQuery);
      const foundIndex = products.findIndex((p) => p.name.toLowerCase() === decoded.toLowerCase());
      if (foundIndex >= 0) {
        setSelectedIndex(foundIndex);
        setTimeout(() => {
          if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
        }, 50);
      }
    } catch (e) {
    }
  }, [productQuery]);

  useEffect(() => {
    if (selectedProduct) {
      setTimeout(() => {
        if (typeof window !== "undefined") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 50);
    }
  }, [selectedProduct]);

  function shareTo(platform: "facebook" | "whatsapp" | "instagram" | "generic", title: string) {
    const url = typeof window !== "undefined" ? window.location.href : "";
    const text = `${title} — check this out: ${url}`;
    const encURL = encodeURIComponent(url);
    const encText = encodeURIComponent(text);

    if (platform === "facebook") {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encURL}`, "_blank");
      return;
    }

    if (platform === "whatsapp") {
      window.open(`https://wa.me/?text=${encText}`, "_blank");
      return;
    }

    if (platform === "instagram") {
      if ((navigator as any).share) {
        (navigator as any).share({ title, text, url }).catch(() => {
          alert("Instagram sharing isn’t available via direct web links. Copy the URL to share.");
        });
      } else {
        alert("Instagram sharing isn’t available via direct web links. Copy the URL to share.");
      }
      return;
    }

    // generic
    if ((navigator as any).share) {
      (navigator as any).share({ title, text, url }).catch(() => {});
    } else {
      navigator.clipboard?.writeText(url);
      alert("Link copied!");
    }
  }

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
            <div className="flex flex-col items-center">
              <div className="w-full rounded-xl bg-neutral-50 ring-1 ring-gray-200 overflow-hidden shadow-inner">
                <img
                  src={selectedProduct.image || "/placeholder.svg"}
                  alt={selectedProduct.name}
                  className="w-full h-[420px] object-contain"
                />
              </div>

              <div className="mt-5 flex flex-col items-center gap-3">
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

                {/* Share now row */}
                <div className="w-full max-w-[380px]">
                  <div className="mt-4 text-sm font-semibold text-neutral-800 mb-2 text-center">Share now</div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => shareTo("facebook", selectedProduct.name)}
                      title="Share on Facebook"
                      className="rounded-full border border-[#1f6f3d] p-2 hover:bg-[#e8f5e9] transition"
                    >
                      <Facebook className="h-5 w-5 text-[#1f6f3d]" />
                    </button>

                    <button
                      onClick={() => shareTo("instagram", selectedProduct.name)}
                      title="Share on Instagram"
                      className="rounded-full border border-[#1f6f3d] p-2 hover:bg-[#e8f5e9] transition"
                    >
                      <Instagram className="h-5 w-5 text-[#1f6f3d]" />
                    </button>

                    <button
                      onClick={() => shareTo("whatsapp", selectedProduct.name)}
                      title="Share on WhatsApp"
                      className="rounded-full border border-[#1f6f3d] p-2 hover:bg-[#e8f5e9] transition"
                    >
                      <WhatsAppIcon className="h-5 w-5 text-[#1f6f3d]" />
                    </button>

                    <button
                      onClick={() => shareTo("generic", selectedProduct.name)}
                      title="Share"
                      className="rounded-full border border-[#1f6f3d] p-2 hover:bg-[#e8f5e9] transition"
                    >
                      <Share2 className="h-5 w-5 text-[#1f6f3d]" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-sm md:text-base">
              <h1 className="text-3xl md:text-4xl font-extrabold text-[#1b5e20] mb-1">
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
      selectedProduct.detailedDescription,
      BOLD_PHRASES
    ),
  }}
/>

              <div className="mb-6">
  <h2 className="text-xl font-bold text-gray-800 mb-3">
    Key Benefits
  </h2>

  <ul
  className="list-disc list-inside space-y-1 text-base text-gray-700 leading-7 font-normal pl-4"
  style={{ textAlign: 'justify' }}
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


              {/* Table below Key Benefits */}
              <div className="mb-6 overflow-hidden rounded-xl border border-[#1f6f3d]/30">
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-[#1f6f3d]/20">
                    <tr>
                      <td className="w-28 p-3 font-semibold text-[#1f6f3d]">Dosage</td>
                      <td
  className="p-3 text-base text-neutral-800 leading-7 font-normal"
  dangerouslySetInnerHTML={{
    __html: selectedProduct.dosage,
  }}
/>
                    </tr>
                    <tr className="bg-[#e8f5e9]">
                      <td className="w-28 p-3 font-semibold text-[#1f6f3d]">Crops</td>
                      <td
  className="p-3 text-base text-neutral-800 leading-7 font-normal"
  dangerouslySetInnerHTML={{
    __html: highlightPhrases(selectedProduct.usage, BOLD_PHRASES),
  }}
/>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gray-50">
      <div className="relative overflow-hidden bg-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-0 pb-10 md:pt-0 md:pb-14 -mt-1 md:-mt-1">
  <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
    <div className="md:col-span-5 order-1 md:order-2">
      <div className="relative h-[15rem] md:h-[26rem] bg-white rounded-2xl ring-1 ring-gray-200 shadow-sm overflow-hidden">

              <img
          src="https://res.cloudinary.com/daoju0r3c/image/upload/v1768221378/rice-field-7890204_1280_tldtn9_1_d3uqvz.png"
          alt="Rice field"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
    <div className="md:col-span-7 order-2 md:order-1">
      <h1 className="text-xl md:text-3xl font-extrabold text-[#388e3c] tracking-tight">
        Palm International
      </h1>
      <p className="mt-4 text-base text-gray-700 leading-7" style={{ textAlign: "justify" }}>
        Palm International is a leading Indian agri-inputs company since 1998 with expertise in developing, manufacturing, and exporting high-quality biostimulants, silicon-based foliar sprays, humic acid solutions, and crop care products. Our mission is to provide farmers with sustainable, science-backed solutions that improve soil health, boost crop yields, and enhance farm profitability.
      </p>

      <p className="mt-4 text-base text-gray-700 leading-7" style={{ textAlign: "justify" }}>
        With a global presence, Palm International has become a trusted partner for farmers and agri-distributors worldwide.
      </p>

      <p className="mt-6 text-base text-gray-700 leading-7" style={{ textAlign: "justify" }}>
        Our flagship brands – <strong> AG-F, AG-F Super Plus, Golden Drop, Crop Giant, Silicose, Palm Sulf, Cropper, Cropper Plus and Cropper Granules </strong>– are designed to solve real challenges like <strong>nutrient efficiency, drought stress, fruit drop, and fungal attacks, helping farmers achieve better quality produce, higher yields, and longer shelf life.</strong>
      </p>

      <p className="mt-4 text-base text-gray-700 leading-7" style={{ textAlign: "justify" }}>
        Palm International is committed to innovation, farmer education, and field trials, ensuring our products deliver consistent and proven results. With a strong focus on sustainability and residue-free agriculture, we aim to build a healthier future for farming communities globally.
      </p>
    </div>
  </div>
</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 md:mt-12 lg:mt-16 pb-12 md:pb-20">
        <div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
              {products.map((product) => (
                <div
                  key={product.name}
                  className="group cursor-pointer"
                  onClick={() =>
                    setSelectedIndex(products.findIndex((p) => p.name === product.name))
                  }
                >
                  <div className="w-full rounded-lg overflow-hidden transition-all duration-300 group-hover:scale-[1.02]">
                    <div style={{ width: "100%", paddingBottom: "100%" }} className="relative">
                      <div
                        className="absolute inset-0 rounded-lg"
                        style={{ backgroundColor: product.backgroundHex }}
                      >
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
  className="object-contain transition-all duration-300"
  style={{
    maxWidth: product.imageStyle?.maxWidth ?? "100%",
    maxHeight: product.imageStyle?.maxHeight ?? "100%",
    objectPosition: product.imageStyle?.objectPosition ?? "center",
    transform: product.imageStyle?.translateY
      ? `translateY(${product.imageStyle.translateY})`
      : undefined,
    filter: "drop-shadow(0 10px 18px rgba(0,0,0,0.18))",
  }}
/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-gray-900 text-center">
                    {product.name}
                  </h3>
                </div>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
}
