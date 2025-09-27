"use client";
import { useState } from "react";

const productCategories = [
  {
    title: "Crop Nutrition & Protection",
    products: [
      {
        name: "Golden Drop",
        image: "/images/golden-drop.jpg",
        description: "Golden Drop is a next-generation, protein hydrolysate-based biostimulant designed to improve flowering, enhance fruit quality, and boost overall plant health.",
        keyBenefits: [
          "Speeds Up Plant Growth – Activates natural plant processes, promoting faster flowering and uniform fruit development.",
          "Improves Flowering & Fruiting – Reduces flower drop and encourages better fruit setting for a higher yield.",
          "Boosts Chlorophyll & Photosynthesis – Ensures greener, healthier plants with improved energy production.",
          "Protein-Rich Nutrition – Enriches plants with essential amino acids and peptides for better growth and stress tolerance.",
          "Better Fruit Quality – Enhances size, weight, and appearance of fruits for improved market value."
        ],
        dosage: [
          "Dosage: 0.5–0.75 ml per litre of water",
          "Timing: Spray during flowering and early fruiting stages every 12–15 days."
        ],
        whereToUse: [
          "Grapes", "Tomato", "Mango", "Paddy", "Onion", "Chilli", "Citrus Fruits", "Vegetables", "Strawberries", "Capsicum", "Pomegranate", "Sugarcane", "Tea", "Coffee", "Cashew", "Banana"
        ],
      },
      {
        name: "AG-F – Premium Activator, Spreader & Sticker",
        image: "/images/ag-f.jpg",
        description: "AG-F is a specialized non-ionic activator designed to maximize the effectiveness of pesticides, plant growth regulators, micronutrients, and water-soluble fertilizers. It ensures superior coverage, faster absorption, and longer rain persistence, helping farmers get the best results with lower agrochemical usage",
        keyBenefits: [
"✅ Enhances Agrochemical Performance – Improves penetration, spreading, and absorption of pesticides, PGRs, and fertilizers.",
"✅ Excellent Rainfastness – Keeps chemicals active even after rainfall for maximum protection.",
"✅ Boosts Efficacy Up to 12X – Ensures uniform coverage and faster action for better results.",
"✅ Reduces Herbicide Costs – Cuts Glyphosate and Paraquat usage by up to 50%, reducing input cost per acre.",
"✅ Faster Pest & Disease Control – Promotes quick knockdown of insects and faster fungal control when tank-mixed with pesticides"
        ],
        dosage: ["🔹 Dosage: 1 ml per litre of water to reduce herbicide dosage by 50%",
"🔹 Use With: Herbicides, insecticides, fungicides, micronutrients & foliar fertilizers"],
        whereToUse: ["Ideal for all crops"]
      },
      {
        name: "AG-F Super Plus",
        image: "/images/ag-f-super-plus.jpg",
        description: "AG-F Super Plus is a high-performance stimulator for crop resilience.",
        keyBenefits: ["Enables drought resistance", "Promotes flowering"],
        dosage: ["Dosage: 2 ml per litre", "Foliar spray during growth phase"],
        whereToUse: ["Grains", "Fruit Trees","Fruits"],
      },
      {
        name: "Crop Giant",
        image: "/images/crop-giant.jpg",
        description: "Crop Giant supports rapid growth cycles in key cash crops.",
        keyBenefits: ["Accelerates development", "Improves harvest quality"],
        dosage: ["Dosage: 1.5 ml per litre", "Use at key vegetative stages"],
        whereToUse: ["Sugarcane", "Cotton", "Maize"],
      },
    ],
  },
  {
    title: "Pharmaceuticals",
    products: [
      {
        name: "Aceclofenac",
        image: "/images/aceclofenac.jpg",
        description: "Aceclofenac is a non-steroidal anti-inflammatory drug used for pain relief.",
        keyBenefits: ["Reduces inflammation", "Pain relief"],
        dosage: ["Dosage: 100mg twice daily"],
        whereToUse: ["Human use"]
      },
      {
        name: "Albendazole",
        image: "/images/albendazole.jpg",
        description: "Albendazole is an antiparasitic medication targeting intestinal worms.",
        keyBenefits: ["Treats parasitic infections", "Safe and effective"],
        dosage: ["Dosage: 400mg single dose"],
        whereToUse: ["Human use"]
      },
      {
        name: "Ambroxol Hydrochloride",
        image: "/images/ambroxol.jpg",
        description: "Ambroxol Hydrochloride provides mucolytic action for easier breathing.",
        keyBenefits: ["Thins mucus", "Relieves chest congestion"],
        dosage: ["Dosage: 30mg thrice daily"],
        whereToUse: ["Human use"]
      },
      {
        name: "Atorvastatin",
        image: "/images/atorvastatin.jpg",
        description: "Atorvastatin is a statin medication for cholesterol management.",
        keyBenefits: ["Lowers LDL cholesterol", "Prevents heart disease"],
        dosage: ["Dosage: 10-40mg per day"],
        whereToUse: ["Human use"]
      },
    ],
  },
  {
    title: "Fine Chemicals",
    products: [
      {
        name: "1,6 Hexandiol",
        image: "/images/hexandiol.jpg",
        description: "1,6 Hexandiol is an industrial chemical for diverse applications.",
        keyBenefits: ["High purity", "Wide usage"],
        dosage: ["Follow standard industrial levels"],
        whereToUse: ["Paints", "Plastics", "Pharma"],
      },
      {
        name: "2-Ethylaniline",
        image: "/images/2-ethylaniline.jpg",
        description: "2-Ethylaniline is used in dye and chemical synthesis.",
        keyBenefits: ["Stable compound", "Process versatility"],
        dosage: ["Industrial application"],
        whereToUse: ["Synthetic dyes", "Research"],
      },
      {
        name: "6-B.A.",
        image: "/images/6ba.jpg",
        description: "6-B.A. is a plant growth regulator.",
        keyBenefits: ["Stimulates cell division", "Improves yield"],
        dosage: ["Dosage: Varies per crop, see datasheet"],
        whereToUse: ["Fruit crops", "Orchards", "Greenhouse plants"],
      },
      {
        name: "Aluminium Molybdate",
        image: "/images/aluminium-molybdate.jpg",
        description: "Aluminium Molybdate is used in pigment and ceramic production.",
        keyBenefits: ["Heat-resistant", "Stable pigment"],
        dosage: ["Use according to material specs"],
        whereToUse: ["Ceramics", "Pigments", "Industrial"],
      },
    ],
  },
];

type Product = (typeof productCategories)[number]["products"][number];

export function ProductsGrid() {
  const [selectedCategory, setSelectedCategory] = useState((productCategories)[0]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  if (selectedProduct) {
    return (
      <section className="py-16 bg-white min-h-[75vh]">
        <div className="max-w-4xl mx-auto px-4 flex flex-col gap-8 border rounded-lg shadow bg-green-50">
          <button
            onClick={() => setSelectedProduct(null)}
            className="self-start mt-6 mb-2 px-4 py-1 rounded bg-green-700 text-white hover:bg-green-900"
          >
            ← Back to Products
          </button>
          <div className="flex gap-12 items-center mt-4 mb-6 w-full">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-60 h-60 object-contain rounded-lg border bg-white"
            />
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-green-900 mb-4">{selectedProduct.name}</h2>
              <p className="mb-6 text-green-800">{selectedProduct.description}</p>
              <h3 className="font-bold text-green-900 mb-2">🌱 Key Benefits</h3>
              <ul className="mb-4 list-disc list-inside text-green-700">
                {selectedProduct.keyBenefits.map((benefit, idx) => (
                  <li key={idx}>{benefit}</li>
                ))}
              </ul>
              <h3 className="font-bold text-green-900 mb-2">📋 Recommended Dosage</h3>
              <ul className="mb-4 list-disc list-inside text-green-700">
                {selectedProduct.dosage.map((dosage, idx) => (
                  <li key={idx}>{dosage}</li>
                ))}
              </ul>
              <h3 className="font-bold text-green-900 mb-2">🌾 Where to Use</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProduct.whereToUse.map((crop, idx) => (
                  <span
                    key={idx}
                    className="bg-green-100 text-green-900 px-2 py-1 rounded text-sm"
                  >
                    {crop}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white min-h-[75vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-6">
        <aside className="w-1/6 bg-green-100 rounded-md p-4">
          <h2 className="text-lg font-bold text-green-900 mb-4">Categories</h2>
          <div className="flex flex-col space-y-3">
            {productCategories.map((category) => (
              <button
                key={category.title}
                className={`px-3 py-2 rounded text-sm font-semibold text-left border transition ${
                  selectedCategory.title === category.title
                    ? "bg-green-800 text-white border-green-800"
                    : "bg-white text-green-800 border-green-800 hover:bg-green-200"
                }`}
                onClick={() => {
                  setSelectedCategory(category);
                  setSelectedProduct(null);
                }}
              >
                {category.title}
              </button>
            ))}
          </div>
        </aside>
        <main className="w-5/6 bg-green-50 rounded-md p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {selectedCategory.products.map((product) => (
              <div
                key={product.name}
                className="flex flex-col items-center border border-green-300 rounded-xl p-6 bg-white shadow hover:bg-green-100 cursor-pointer transition"
                onClick={() => setSelectedProduct(product)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-32 h-32 object-contain mb-4 rounded"
                />
                <span className="text-lg font-bold text-green-900 text-center">{product.name}</span>
              </div>
            ))}
          </div>
        </main>
      </div>
    </section>
  );
}
