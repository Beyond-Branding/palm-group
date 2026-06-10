export type CropProduct = {
  name: string;

  // GRID + QUICK VIEW
  targetPests: string;
  dosePerAcre: string;
  image: string;

  // FULL CONTENT
  category?: string;
  tagline?: string;
  description?: string;
  detailedDescription?: string;
  benefits?: string[];

  // NEW FIELD
  applicationSchedule?: string;

  // visuals
  backgroundHex: string;
  dotColor?: string;
  overlayColor?: string;
  imageStyle?: {
    paddingBottom?: string;
    maxWidth?: string;
    maxHeight?: string;
    objectPosition?: string;
    translateY?: string;
  };
};

export const cropProtectionProducts: CropProduct[] = [
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
    targetPests:
      "<strong>Dosage:</strong> 0.5–0.75 ml per litre of water.<br/><strong>Timing:</strong> Spray during flowering and early fruiting stages every 12–15 days for best results.",
    dosePerAcre:
      "Golden Drop is ideal for a wide range of crops including: Grapes, Strawberries, Pomegranate, Tomato, Mango, Paddy, Onion, Chilli, Citrus Fruits, All Vegetable Crops, All Horticultural Crops, Sugarcane, Tea, Coffee, Cashew, Banana.",
    image: "https://res.cloudinary.com/daoju0r3c/image/upload/v1764173725/golden_drop-Photoroom_shadow_m9aigy.png",
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
    targetPests:
      "<strong>To reduce herbicide dosage:</strong> 1 ml per litre of water to reduce herbicide dosage by 50%.<br/><strong>General Foliar sprays:</strong> 0.25 ml per liter of water <strong><br/>For Fertigation:</strong> 250ml per acre. <br/><strong>Use With:</strong> Herbicides, insecticides, fungicides, micronutrients & foliar fertilizers.",
    dosePerAcre: "Ideal for all crops.",
    image: "https://res.cloudinary.com/daoju0r3c/image/upload/v1764173812/agf-Photoroom_1_cmpcyy.png",
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
    targetPests: "<strong>For foliar sprays:</strong> 1 ml per 8 litres of water. <br/>Use with herbicides, insecticides, fungicides, micronutrients & foliar sprays.",
    dosePerAcre:
      "Perfect for all crops where complete coverage and high spray efficiency are crucial.",
    image: "https://res.cloudinary.com/daoju0r3c/image/upload/v1764173861/AG-F_Superplus-Photoroom_shadow_kdb8m9.png",
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
    targetPests:
      "<strong>Spray:</strong> 1.5 ml per litre of water when berries reach pea size. <br/><strong>Repeat:</strong> After 7-10 days for maximum effectiveness. <br/><strong>Third Spray:</strong> 15 days before harvest.",
    dosePerAcre:
      "Crop Giant is ideal for a wide range of crops including: Grapes, Strawberries, Pomegranate, Tomato, Mango, Paddy, Onion, Chilli, Citrus Fruits, All Vegetable Crops, All Horticultural Crops, Sugarcane, Tea, Coffee, Cashew, Banana.",
    image: "https://res.cloudinary.com/daoju0r3c/image/upload/v1764173895/crop_giant_1_cs6nnn.png",
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

    targetPests: "<strong>Foliar Spray:</strong> 2-3 ml per litre of water.<br/><strong>Drip Application:</strong> 3 litres per acre.",
    dosePerAcre:
      "Palm Sulf is ideal for a wide range of crops including: Grapes, Strawberries, Pomegranate, Tomato, Mango, Paddy, Onion, Chilli, Citrus Fruits, All Vegetable Crops, All Horticultural Crops, Sugarcane, Tea, Coffee, Cashew, Banana.",
    image: "https://res.cloudinary.com/daoju0r3c/image/upload/v1764173960/palmsulfnew_ntrjwo.png",
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

    targetPests:
      "<strong>Soil Application:</strong> 3 L/acre.<br/><strong>Seed Treatment:</strong> 2.5 L per MT of seed. <br/><strong>With Fertilizers:</strong> 3 L/acre.",
    dosePerAcre:
      "Cropper is ideal for a wide range of crops including: Grapes, Strawberries, Pomegranate, Tomato, Mango, Paddy, Onion, Chilli, Citrus Fruits, All Vegetable Crops, All Horticultural Crops, Sugarcane, Tea, Coffee, Cashew, Banana.",
    image: "https://res.cloudinary.com/daoju0r3c/image/upload/v1764174014/croppernew_qydobw.png",
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

    targetPests:
      "<strong>Soil Application:</strong> 1-1.25 L/acre. <br/><strong>Foliar Spray:</strong> 1 ml per litre. <br/><strong>Seed Treatment:</strong> 1.5 L per MT of seed. <br/><strong>With Fertilizers:</strong> 1-1.25 L/acre.",
    dosePerAcre:
      "Cropper Plus is ideal for a wide range of crops including: Grapes, Strawberries, Pomegranate, Tomato, Mango, Paddy, Onion, Chilli, Citrus Fruits, All Vegetable Crops, All Horticultural Crops, Sugarcane, Tea, Coffee, Cashew, Banana.",
    image: "https://res.cloudinary.com/daoju0r3c/image/upload/v1764174140/cropperplusnew_gxqz3w.png",
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
    targetPests: "<strong>Foliar Spray:</strong> 3 ml per litre of water. <br/><strong>Drip Application:</strong> 2–3 L/acre.",
    dosePerAcre:
      "Silicose is ideal for a wide range of crops including: Grapes, Strawberries, Pomegranate, Tomato, Mango, Paddy, Onion, Chilli, Citrus Fruits, All Vegetable Crops, All Horticultural Crops, Sugarcane, Tea, Coffee, Cashew, Banana.",
    image: "https://res.cloudinary.com/daoju0r3c/image/upload/v1764174176/silicosenew_t2zou5.png",
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
    targetPests: "<strong>Soil Application by broadcasting:</strong> 1-1.5 kg per acre. <br/><strong>Method:</strong> Apply directly to the soil during land preparation or as a top-dressing in early growth stages.",
    dosePerAcre:
      "Cropper Granules is ideal for a wide range of crops including: Grapes, Strawberries, Pomegranate, Tomato, Mango, Paddy, Onion, Chilli, Citrus Fruits, All Vegetable Crops, All Horticultural Crops, Sugarcane, Tea, Coffee, Cashew, Banana, Wheat.",
    image: "https://res.cloudinary.com/daoju0r3c/image/upload/v1767960406/croppergranules-removebg-preview_rzxnek.png",
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
  {
    name: "BIO PALM L.C.",
    category: "Metabolic bio-stimulant",
    tagline:"High density metabolic bio-stimulant",
    description:
      "Bio Palm L.C. is a high-density metabolic bio-stimulant engineered for next-generation crop nutrition. By leveraging specialized science and advanced plant-sourced formulations, it powers your crops to their maximum potential.",
    detailedDescription:
      "Bio Palm L.C. is a high-density metabolic bio-stimulant engineered for next-generation crop nutrition. By leveraging specialized science and advanced plant-sourced formulations, it powers your crops to their maximum potential. It helps progressive farmers achieve stronger roots, better nutrition, higher yields, and greater profits.",
    benefits: [
  "Phosphorus Uptake & Nutrient Unlock: Mobilizes locked Phosphorus and micronutrients from the soil, enhancing its uptake and utilization by the plant for better fertilizer efficiency.",
  "Powerful Root System: Promotes rapid white root proliferation for better nutrient and water uptake, enhancing root activity and long-term establishment.",
  "Stress Resilience: Improves root respiration and plant tolerance to harsh environmental factors such as heat, drought, waterlogging, and sun-scorch protection.",
  "Bud Differentiation & Cane Maturity: Overcomes the physiological stall after pruning to ensure uniform shoot growth, stronger canes, better wood ripening, and increased fruitfulness for next season's bunch count.",
  "Breaks April Dormancy: Helps the vine overcome the physiological stall after April pruning, directing organic catalysts to ensure a vigorous, uniform flush and over 90%+ uniformity in bud burst.",
  "Improved Photosynthesis: Increases chlorophyll intensity within the plant, making the leaves thick, sturdy, and dark green.",
],
    targetPests: "<strong>Foliar Spray (Grapes):</strong>2 ml per Liter of water.<br/><strong>Drip Application (Other Crops):</strong> 500 ml per acre.",
    dosePerAcre:
  "Grapes: Special science for breaking dormancy, strong canes, uniform bud burst, and bigger, firmer, sweeter berries.\n\nOther Crops (Via Drip): Ideal for Rice (Paddy), Vegetables & Floriculture, Fruits & Horticultural Crops (Pomegranate, Tomato, Mango, Citrus, Banana), Onion, Chilli, Capsicum, Sugarcane, Tea, Coffee and Rhizobium Crops (Ginger, Turmeric).",
    applicationSchedule: `
<strong>For Grapes (Foliar Spray):</strong><br/>

<strong>First Spray:</strong> Apply at the 5 leaf stage for vegetative vigor.<br/>

<strong>Second Spray:</strong> Apply 10 to 12 days after the first spray (7-leaf stage) for canopy uniformity.<br/><br/>

<strong>For Other Crops (Drip System):</strong><br/>

Delivered directly to the root zone via drip, fertigation, drenching, or flooding.<br/>

Best applied during early vegetative growth and grand growth phases for root establishment.
`,
    image: "https://res.cloudinary.com/daoju0r3c/image/upload/v1781074521/Bio_palmlc-removebg-preview_sr4cdi.png",
    backgroundHex: "#E2E8FF",
    dotColor: "rgba(255,255,255,0.05)",
    overlayColor: "rgba(0,0,0,0.24)",
    imageStyle: {
    maxWidth: "90%",
    maxHeight: "90%",
    objectPosition: "right center",
    translateY: "3%",
  },
  },
];
export default cropProtectionProducts;
