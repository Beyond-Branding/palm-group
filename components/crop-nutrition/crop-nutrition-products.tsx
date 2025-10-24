"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
    dosage: "0.5–0.75 ml per litre of water. Spray during flowering and early fruiting stages every 12–15 days for best results.",
    usage:
      "Grapes, Tomato, Mango, Paddy, Onion, Chilli, Citrus Fruits, Vegetables, Strawberries, Capsicum, Pomegranate, Sugarcane, Tea, Coffee, Cashew, Banana.",
    image: "/golen drop .png", // Placeholder - Update path
    secondaryImage: "/golden-drop-side.png", // Placeholder - Update path
    modeOfAction: "Protein Hydrolysate Biostimulant",
    majorCrops: "Grapes, Mango, Citrus, Vegetables",
    dosePerAcre: "0.5–0.75 ml/Liter of water",
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
    image: "/agf.png",
    secondaryImage: "/copperplus.png", // Keeping original secondary image for now
    modeOfAction: "Spreader, Sticker, Activator",
    majorCrops: "All Crops",
    dosePerAcre: "1 ml/Liter of water",
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
    dosage:
      "1 ml per 8 litres of water. Use with herbicides, insecticides, fungicides, micronutrients & foliar sprays.",
    usage:
      "Perfect for all crops where complete coverage and high spray efficiency are crucial.",
    image: "/AG-F Superplus.png",
    secondaryImage: "/ag-f-super-side.jpg",
    modeOfAction: "Silicone-Based Spreading & Activating",
    majorCrops: "All Crops (High Efficiency Required)",
    dosePerAcre: "1 ml/8 Liters of water",
  },
  {
    name: "CROP GIANT",
    category: "Organic Plant Extract (Carbohydrate Theory)",
    description:
      "Organic extract formulated to enhance fruit quality, prevent cracking, and increase sugar.",
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
      "Grapes, Strawberry, Citrus, Apple, Mango, Tomato, Capsicum, Watermelon, Cucumbers, Brinjal, Chilli, Pomegranate.",
    image: "/crop giant.png",//Fix the size get it to proper ratio dabble with css 1:1 1080 x 1080
    secondaryImage: "/crop giant.png",
    modeOfAction: "Foliar Spray for Fruit Quality",
    majorCrops: "Grapes, Strawberry, Citrus, Apple, Mango",
    dosePerAcre: "1.5 ml/Liter of water",
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
      "Wheat, Rice, Grapes, Citrus, Mango, Chilli, Onion, Spinach, Potato, Tomato, Capsicum, Carrot.",
    image: "/palm sulf.png",
    secondaryImage: "/palm-sulf-side.jpg",
    modeOfAction: "Foliar Spray and Drip Application",
    majorCrops: "Wheat, Rice, Grapes, Citrus, Mango, Chilli",
    dosePerAcre: "3 ml/Liter (Foliar) / 7.5 L/Ha (Drip)",
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
      "Maize, Wheat, Rice, Sunflower, Potato, Tomato, Garlic, Onion, Spinach, Coconut, Citrus, Mango.",
    image: "/cropper.png",
    secondaryImage: "/cropper-side.jpg",
    modeOfAction: "Soil and Foliar Application",
    majorCrops: "Maize, Wheat, Rice, Sunflower, Potato",
    dosePerAcre: "7.5 L/Ha (Soil) / 2 ml/Liter (Foliar)",
  },
  {
    name: "CROPPER PLUS",
    category: "Concentrated Humic Acid Solution",
    description: "Highly concentrated humic acid solution designed for maximum impact on root growth and soil fertility.",
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
      "Wheat, Rice, Maize, Sunflower, Potato, Leafy Greens, Coconut, Grapes, Citrus, Mango, Tomato, Chilli.",
    image: "/copperplus.png",
    secondaryImage: "/cropper-plus-side.png",
    modeOfAction: "Soil and Foliar Application (Concentrated)",
    majorCrops: "Wheat, Rice, Maize, Sunflower, Potato",
    dosePerAcre: "2.5–4 L/Ha (Soil) / 1 ml/Liter (Foliar)",
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
      "Rice, Wheat, Maize, Grapes, Mango, Citrus, Potato, Chilli, Tomato, Onion, Spinach, Strawberry, Sugarcane.",
    image: "/hero2.png",
    secondaryImage: "/silicose-side.png",
    modeOfAction: "Foliar Spray and Drip Application",
    majorCrops: "Rice, Wheat, Maize, Grapes, Mango, Citrus",
    dosePerAcre: "3 ml/Liter (Foliar) / 5–7.5 L/Ha (Drip)",
  },
];

type Product = typeof products[number];

/**
 * Main component to display product cards and the single product detail view.
 */
export default function ProductListingAndDetails() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selectedProduct = selectedIndex !== null ? products[selectedIndex] : null;

  // --- DETAIL VIEW (Single Product Page - H&M Style) ---
  if (selectedProduct) {
    return (
      <section className="py-12 md:py-20 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => setSelectedIndex(null)}
            className="mb-8 px-4 py-2 text-[#388e3c] border border-[#388e3c] rounded hover:bg-[#e8f5e9] transition font-semibold"
          >
            &larr; Back to Products
          </button>

          <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
            
            {/* LEFT SIDE: Product Image (50% width on medium screens) */}
            <div className="md:w-1/2 p-4 bg-[#f9f9f9] rounded-xl shadow-inner flex justify-center items-center h-[500px]">
              <img
                src={selectedProduct.image || "/placeholder.svg"}
                alt={selectedProduct.name}
                className="w-full h-full object-contain"
              />
            </div>

            {/* RIGHT SIDE: Product Details (50% width on medium screens) */}
            <div className="md:w-1/2 p-4">
              <Badge 
                variant="secondary" 
                className="mb-2 text-sm text-[#388e3c] bg-[#e8f5e9] border border-[#388e3c]"
              >
                {selectedProduct.category}
              </Badge>
              
              <h1 className="text-4xl font-extrabold text-[#388e3c] mb-2">
                {selectedProduct.name}
              </h1>
              
              <p className="text-lg text-gray-700 font-semibold mb-6">
                {selectedProduct.detailedDescription}
              </p>

              {/* Key Benefits Section */}
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-3">
                  Key Benefits
                </h2>
                <ul className="list-disc list-inside space-y-2 text-base text-gray-600 pl-4">
                  {selectedProduct.benefits.map((benefit, index) => (
                    <li key={index} className="text-gray-700 font-medium">{benefit}</li>
                  ))}
                </ul>
              </div>

              {/* Technical Details */}
              <div className="mt-8 border-t pt-4">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Technical Specifications
                </h3>
                <div className="space-y-1 text-gray-700">
                  <p>
                    <strong className="font-semibold text-gray-900">Mode of Action:</strong> {selectedProduct.modeOfAction}
                  </p>
                  <p>
                    <strong className="font-semibold text-gray-900">Major Crops:</strong> {selectedProduct.majorCrops}
                  </p>
                  <p>
                    <strong className="font-semibold text-gray-900">Dosage:</strong> {selectedProduct.dosage}
                  </p>
                  <p>
                    <strong className="font-semibold text-gray-900">Usage/Crops:</strong> {selectedProduct.usage}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    );
  }

  // --- LIST VIEW (2-Column Grid) ---
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#388e3c] mb-6 text-balance">
            Our Product Range
          </h2>
          <p className="text-xl text-gray-700 max-w-50xl mx-auto text-pretty">
            Palm International is a leading Indian agri-inputs company since 1998 with expertise in developing, manufacturing, and exporting high-quality biostimulants, silicon-based foliar sprays, humic acid solutions, and crop care products. Our mission is to provide farmers with sustainable, science-backed solutions that improve soil health, boost crop yields, and enhance farm profitability.

            With a global presence, Palm International has become a trusted partner for farmers and agri-distributors worldwide.
          </p>
        </div>
        
        {/* GRID: Always 2 columns for better mobile and tablet view */}
        <div className="grid grid-cols-2 gap-8">
          {products.map((product, index) => (
            <Card
              key={product.name}
              // Card styling is simplified to match the list view from earlier successful iterations
              className="group cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              onClick={() => setSelectedIndex(index)}
            >
              <CardContent className="p-0">
                {/* Image Section */}
                <div 
                    className="relative h-48 overflow-hidden rounded-t-xl p-4 flex justify-center items-center" 
                    style={{ backgroundColor: '#f0f0f0' }}
                >
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-contain transition-transform duration-300" 
                  />
                </div>
                {/* Text Section */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-0">{product.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{product.category}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}