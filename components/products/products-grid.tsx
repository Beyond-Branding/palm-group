"use client";
import React, { useState } from 'react';
// Assuming these imports are correct for your environment
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// --- CROP NUTRITION & PROTECTION DATA ---
const cropProtectionProducts = [
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
        image: "/agf s.png",
        secondaryImage: "/copperplus.png",
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
            "Quick Action Formula – Ensures faster insect knockdown and rapid fungus control.",
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
        image: "/crop giant.png",
        secondaryImage: "/crop-giant-side.png",
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
            "Humic acid-based soil conditioner for better soil structure, fertility, and water retention.",
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
        description: "Highly concentrated humic acid solution for root growth and soil fertility.",
        detailedDescription:
            "Cropper Plus 12% is a highly concentrated humic acid solution designed for maximum impact on root growth and soil fertility.",
        benefits: [
            "Double Strength Formula – Works faster than Cropper 6%.",
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
            "Silica-rich soil and foliar supplement to strengthen plants and protect from stress.",
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
        image: "/silicose.png",
        secondaryImage: "/silicose-side.png",
        modeOfAction: "Foliar Spray and Drip Application",
        majorCrops: "Rice, Wheat, Maize, Grapes, Mango, Citrus",
        dosePerAcre: "3 ml/Liter (Foliar) / 5–7.5 L/Ha (Drip)",
    },
];

type CropProduct = typeof cropProtectionProducts[number];

const mockPharmaceuticals = [
    { name: "Aceclofenac" },
    { name: "Albendazole" },
    { name: "Ambroxol Hydrochloride" },
    { name: "Amoxycillin Trihydrate Comp" },
    { name: "Analgin" },
    { name: "Azithromycin" },
    { name: "Azithromycin Di Hydrate" },
    { name: "Benzoic Acid" },
    { name: "Caffeine Anhydrous" },
    { name: "Calcitrol" },
    { name: "Calcium D Pantothenate" },
    { name: "Clavulanate Potassium Diluted" },
    { name: "Clomiphene Citrate" },
    { name: "Cross Povidone XL" },
    { name: "Cefpodoxime Proxetil Compacted" },
    { name: "Cefpodoxime Proxetil Micronized" },
    { name: "Dextromethorphan Hydrobromide" },
    { name: "Dicyclomine HCL" },
    { name: "Diclofenac Sodium" },
    { name: "Erythromycin Stearate" },
    { name: "Fluconazole" },
    { name: "Fructose" },
    { name: "Guaiphenesin" },
    { name: "Isopropyl Alcohol" },
    { name: "Ketoconazole" },
    { name: "Levosulphride" },
    { name: "Levocetirizine" },
    { name: "Magnesium Stearate" },
    { name: "Mannitol" },
    { name: "Melatonin" },
    { name: "Mephenesin" },
    { name: "Mefanamic Acid" },
    { name: "Methotrexate" },
    { name: "Methylene Chloride" },
    { name: "Methylprednisolone" },
    { name: "Montelukast Sodium" },
    { name: "Montelukast Sodium Micronized" },
    { name: "N-Acetyl-L-Cysteine" },
    { name: "Niacinamide" },
    { name: "Paracetamol" },
    { name: "Phenylephrine HCL" },
    { name: "Piracetam" },
    { name: "Piroxicam" },
    { name: "Polyvinyl Alcohol (PVA GH 17R)" },
    { name: "Povidone Iodine" },
    { name: "Pregabalin HCL" },
    { name: "Probnecid" },
    { name: "Propyl Paraben" },
    { name: "Riboflavine Sodium Phosphate" },
    { name: "Rabeprazole Sodium E/C" },
    { name: "Rosuvastatin Calcium Micronised" },
    { name: "Saaf" },
    { name: "Shellac" },
    { name: "Silicose" },
    { name: "Sodium Methyl Paraben" },
    { name: "Sodium Saccharine" },
    { name: "Sorbitol Solution" },
    { name: "Starch IP" },
    { name: "Sucralose" },
    { name: "Sulphamethoxazole" },
    { name: "Taurine" },
    { name: "Teneligliptin" },
    { name: "Terbutaline Sulfate" },
    { name: "Tobramycin Sulfate" },
    { name: "Trimethoprim" },
    { name: "Vitamin A" },
    { name: "Vitamin B1" },
    { name: "Vitamin B3" },
    { name: "Vitamin B6" },
    { name: "Vitamin B12" },
    { name: "Vitamin D3" },
    { name: "Vitamin E" },
    { name: "Xanthan Gum" },

    // --- Intermediates ---
    { name: "1-Benzylimidazole" },
    { name: "2,3-Dimethylbenzonitrile" },
    { name: "2,3-Dimethylbenzoic Acid" },
    { name: "2-Bromo Aniline" },
    { name: "3-Bromo Phthalide" },
    { name: "2,6-Dichloro Thiophenol" },
    { name: "1-[2-Chloro-4-(4-Chlorophenyl)-Butyl]-Imidazol" },
    { name: "4-Acetyl Benzonitrile" },
    { name: "N,N-Diethyl Cyano Acetamide" },
    { name: "4-Phenoxybenzoic Acid" },
    { name: "3-Pyridyl Acetic Acid" },
    { name: "3-Pyridyl Acetic Acid Hydrochloride" },
    { name: "Phthalaldehydic Acid" },
    { name: "4-Acetyl Benzoic Acid" },
    { name: "4-Acetyl Benzoic Acid Methyl Ester" },
    { name: " 4-Cyano Phenacyl Bromide" },
    { name: " 3,5-Dimethoxy Aniline" },
    { name: "3,4,5-Trimethoxy Aniline" },
    { name: "2-Bromo-5-Chlorotoluene" },
    { name: "1-Bromo-3,5-Dimethoxybenzene" },
    { name: "5-Bromo-m-Xylene" },
    { name: "2-(4-Chlorophenoxy)-Aniline" },
    { name: "2-Amino-1-(2,5-dimethoxyphenyl)-ethanone HCl" },
    { name: "2,5-Dibromo Toluene" },
    { name: "2-(Methylthio)acetamide" },
    { name: "5-Chlorobenzo[d]oxazole" },
    { name: "1-Bromo-2-Iodobenzene" },
    { name: "4-Acetylbenzenesulfonyl chloride" },
    { name: "3-Bromo-Benzoic Acid tert-Butyl Ester" },
    { name: "4-(2-Bromoacetyl)benzoic acid" },
    { name: "5-Bromo-2-Chloroanisole" },
    { name: "1-Bromo-3,5-Diaminobenzene" },
    { name: "2-Bromo-1,3-Dimethoxybenzene" },
    { name: "4-Bromo-3-Methoxyaniline" },
    { name: "2-Bromo-5-methoxyaniline" },
    { name: "4-Bromo-3-Methoxybenzonitrile" },
    { name: "4-Bromo-2-Methylbenzonitrile" },
    { name: "N-(4-Bromophenyl)-Phthalimide" },
    { name: "5-Bromo-1,2,3-Trimethoxybenzene" },
    { name: "3-Methoxyaniline (m-Anisidine)" },
    { name: "7-Methyl Phthalide" },
    { name: "4-(Methylthio)-Phenol" },
    { name: "4-Toluene Sulfonyl Bromide" },
    { name: "2,4,6-Trihydroxyacetophenone (Phloroacetophenone)" },
];

const mockFineChemicals = [
      { name: "1,6 Hexandiol" },
    { name: "2-Ethylaniline" },
    { name: "6-B.A." },
    { name: "Aluminium Molybdate" },
    { name: "Amino Acids (20%, 30%, 50%, 70%, 80%, etc.)" },
    { name: "Ammonium Molybdate" },
    { name: "Ascorbic Acid" },
    { name: "Borax" },
    { name: "Boric Acid" },
    { name: "Chelated Amino Proteinate (Zn, Fe, Ca, Mg, Mn, Cu, Bo)" },
    { name: "Chitisan" },
    { name: "Citric Acid" },
    { name: "Cobalt Sulphate" },
    { name: "Copper Sulphate" },
    { name: "DA-6" },
    { name: "E.D.D.H.A.-Fe" },
    { name: "Ferulic Acid" },
    { name: "Folic Acid" },
    { name: "5-Hydroxytryptophan (5-HTP)" },
    { name: "Histidine Hydrochloride" },
    { name: "Kinetin" },
    { name: "L – Isoleuine" },
    { name: "L – Leucine" },
    { name: "L – Methionine" },
    { name: "L - Phenyl alanine" },
    { name: "L – Threonine" },
    { name: "L – Tryptophan" },
    { name: "Lead Bromide" },
    { name: "Lead Chloride" },
    { name: "L-Lysine Hydrochloride" },
    { name: "L-Valine" },
    { name: "Magnesium Oxide (Light)" },
    { name: "N-acetyl thiozolidine-4-carboxylic acid (NATCA)" },
    { name: "Naphthalene Acetic Acid" },
    { name: "Phosphoric Acid" },
    { name: "Potassium Bicarbonate" },
    { name: "Potassium Bisulphite" },
    { name: "Potassium Dihydrogen O Phosphate" },
    { name: "Potassium Molybdate" },
    { name: "Potassium Sulfate" },
    { name: "Seaweed Extracts" },
    { name: "Sodium Moybdate" },
    { name: "Sodium Nitrophenolate" },
    { name: "Tri-iodo-benzoic acid" },
    { name: "Uracil" },
];

// --- PRODUCT CATEGORIES ARRAY (Master Data Structure) ---
const productCategories = [
   {
        title: "Crop Nutrition & Protection",
        // Cast the detailed products to the base type for the category array
        products: cropProtectionProducts as unknown as { name: string }[], 
    },
    {
        title: "Pharmaceuticals",
        products: mockPharmaceuticals,
    },
    {
        title: "Fine Chemicals",
        products: mockFineChemicals,
    },
   
];

// --- HELPER COMPONENTS ---

// Component to render the table list for Pharma/Fine Chemicals (Preview/Full)
interface ProductTableProps {
    title: string;
    products: { name: string }[];
    showAll: boolean;
    onShowAll: () => void;
}

const ProductTable: React.FC<ProductTableProps> = ({ title, products, showAll, onShowAll }) => {
    const productsToShow = showAll ? products : products.slice(0, 10);
    const hasMore = products.length > 10 && !showAll;

    return (
        <main className="w-5/6 pl-6">
            <h2 className="text-2xl font-bold text-green-900 mb-4">{title}</h2>
            <div className="overflow-x-auto rounded-lg shadow">
                <table className="min-w-full bg-green-50 border border-green-300 rounded-xl">
                    <thead>
                        <tr>
                            <th className="py-3 px-5 text-left bg-green-700 text-white font-semibold rounded-tl-xl">Sr No</th>
                            <th className="py-3 px-5 text-left bg-green-700 text-white font-semibold rounded-tr-xl">Product Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productsToShow.map((prod, idx) => (
                            <tr key={idx} className="border-b border-green-200 even:bg-white odd:bg-green-50">
                                <td className="py-3 px-5 text-green-800">{idx + 1}</td>
                                <td className="py-3 px-5 text-black font-medium">{prod.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
            {hasMore && (
                <div className="mt-6 flex justify-center">
                    <button
                        className="px-6 py-2 rounded-full bg-green-700 text-white font-semibold hover:bg-green-900 transition shadow-md"
                        onClick={onShowAll}
                    >
                        View All Products ({products.length})
                    </button>
                </div>
            )}
        </main>
    );
}

// Component to handle the Card List and Detail View for Crop Protection
const CropProtectionProducts: React.FC<{ products: CropProduct[] }> = ({ products }) => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const selectedProduct = selectedIndex !== null ? products[selectedIndex] : null;

    // --- DETAIL VIEW (Single Product Page) ---
    if (selectedProduct) {
        return (
            <main className="w-5/6 pl-6">
                <section className="py-8 bg-white">
                    <button
                        onClick={() => setSelectedIndex(null)}
                        className="mb-8 px-4 py-2 text-[#388e3c] border border-[#388e3c] rounded hover:bg-[#e8f5e9] transition font-semibold"
                    >
                        &larr; Back to Products
                    </button>

                    <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
                        
                        {/* LEFT SIDE: Product Image */}
                        <div className="md:w-1/2 p-4 bg-[#f9f9f9] rounded-xl shadow-inner flex justify-center items-center h-[500px]">
                            <img
                                src={selectedProduct.image || "/placeholder.svg"}
                                alt={selectedProduct.name}
                                className="w-full h-full object-contain"
                            />
                        </div>

                        {/* RIGHT SIDE: Product Details */}
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
                                {selectedProduct.description}
                            </p>

                            {/* Key Benefits Section */}
                            <div className="mb-6">
                                <h2 className="text-2xl font-bold text-gray-800 mb-3">
                                    Key Benefits
                                </h2>
                                <ul className="list-disc list-inside space-y-2 text-base text-gray-600 pl-4">
                                    {selectedProduct.benefits.map((benefit, index) => (
                                        <li key={index} className="text-gray-700">{benefit}</li>
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
                                        <strong className="font-semibold text-gray-900">Usage:</strong> {selectedProduct.usage}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        );
    }

    // --- LIST VIEW (2-Column Grid) ---
    return (
        <main className="w-5/6 pl-6">
            <h2 className="text-2xl font-bold text-green-900 mb-4">Crop Nutrition & Protection</h2>
            <div className="grid grid-cols-2 gap-8">
                {products.map((product, index) => (
                    <Card
                        key={product.name}
                        className="group cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                        // CORRECTED: Added the onClick handler here
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
        </main>
    );
}

// --- MAIN PRODUCTS GRID COMPONENT ---

export function ProductsGrid() {
    const [selectedCategory, setSelectedCategory] = useState(productCategories[0]);
    
    // States for Table View previews
    const [showFullPharmaList, setShowFullPharmaList] = useState(false);
    const [showFullFineChemList, setShowFullFineChemList] = useState(false);

    // Handler to switch categories and reset the "show full list" state for a fresh preview
    const handleCategoryClick = (category: { title: string; products: { name: string }[] }) => {
        setSelectedCategory(category);
        setShowFullPharmaList(false);
        setShowFullFineChemList(false);
    };

    // Handler for the "View All" button in Table View
    const handleShowAllClick = (categoryTitle: string) => {
        if (categoryTitle === "Pharmaceuticals") {
            setShowFullPharmaList(true);
        } else if (categoryTitle === "Fine Chemicals") {
            setShowFullFineChemList(true);
        }
    };

    // Function to render the right-hand product view
    const renderProductView = () => {
        const title = selectedCategory.title;

        if (title === "Pharmaceuticals") {
            return (
                <ProductTable
                    title={title}
                    products={selectedCategory.products}
                    showAll={showFullPharmaList}
                    onShowAll={() => handleShowAllClick(title)}
                />
            );
        }

        if (title === "Fine Chemicals") {
            return (
                <ProductTable
                    title={title}
                    products={selectedCategory.products}
                    showAll={showFullFineChemList}
                    onShowAll={() => handleShowAllClick(title)}
                />
            );
        }

        // Logic for "Crop Nutrition & Protection" (Card View + Detail View)
        if (title === "Crop Nutrition & Protection") {
            return <CropProtectionProducts products={cropProtectionProducts} />;
        }
        
        // Default empty state for the main area
        return <main className="w-5/6 pl-6 flex items-center justify-center"><p className='text-gray-500'>Select a category to view products.</p></main>;
    }


    // Main component render
    return (
        <section className="py-16 bg-white min-h-[75vh] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex">
            
            {/* Left Sidebar: Category Selection */}
            <aside className="w-1/6 bg-green-100 rounded-md p-4 sticky top-16 self-start">
                <h2 className="text-lg font-bold text-green-900 mb-4">Categories</h2>
                <div className="flex flex-col space-y-3">
                    {productCategories.map((category) => (
                        <button
                            key={category.title}
                            className={`px-2 py-1 rounded text-sm font-semibold text-left border transition ${
                                selectedCategory.title === category.title
                                    ? "bg-green-700 text-white border-green-700"
                                    : "bg-white text-green-800 border-green-700 hover:bg-green-100"
                            }`}
                            onClick={() => handleCategoryClick(category)}
                        >
                            {category.title}
                        </button>
                    ))}
                </div>
            </aside>
            
            {/* Right Content Area: Product Display (Table or Grid/Detail) */}
            {renderProductView()}

        </section>
    );
}