export type CropProduct = {
  name: string;
  targetPests: string;
  dosePerAcre: string;
  image: string;
  backgroundHex: string;
  dotColor?: string;
  overlayColor?: string;
  // optional sizing per product
  imageSize?: {
    paddingBottom?: string; // e.g. "115%" or "100%"
    maxWidth?: string;      // e.g. "120%" or "100%"
    maxHeight?: string;     // e.g. "120%" or "100%"
    objectPosition?: string;// e.g. "right center"
  };
};

export const cropProtectionProducts: CropProduct[] = [
  {
    name: "GOLDEN DROP",
    targetPests:
      "<strong>Dosage:</strong> 0.5–0.75 ml per litre of water.<br/><strong>Timing:</strong> Spray during flowering and early fruiting stages every 12–15 days for best results.",
    dosePerAcre:
      "Golden Drop is ideal for a wide range of crops including: Grapes, Strawberries, Pomegranate, Tomato, Mango, Paddy, Onion, Chilli, Citrus Fruits, All Vegetable Crops, All Horticultural Crops, Sugarcane, Tea, Coffee, Cashew, Banana.",
    image: "https://res.cloudinary.com/daoju0r3c/image/upload/v1764173725/golden_drop-Photoroom_shadow_m9aigy.png",
    backgroundHex: "#DFF2EA",
    dotColor: "rgba(255,255,255,0.06)",
    overlayColor: "rgba(0,0,0,0.25)",
    imageSize: { maxWidth: "130%", maxHeight: "130%", objectPosition: "right center" }
  },
  {
    name: "AG-F",
    targetPests:
      "<strong>To reduce herbicide dosage:</strong> 1 ml per litre of water to reduce herbicide dosage by 50%.<br/><strong>General Foliar sprays:</strong> 0.25 ml per liter of water <strong><br/>For Fertigation:</strong> 250ml per acre. <br/><strong>Use With:</strong> Herbicides, insecticides, fungicides, micronutrients & foliar fertilizers.",
    dosePerAcre: "Ideal for all crops.",
    image: "https://res.cloudinary.com/daoju0r3c/image/upload/v1764173812/agf-Photoroom_1_cmpcyy.png",
    backgroundHex: "#FFF3C4",
    dotColor: "rgba(255,255,255,0.08)",
    overlayColor: "rgba(0,0,0,0.22)",
    imageSize: { maxWidth: "125%", maxHeight: "125%", objectPosition: "right center" }
  },
  {
    name: "AG-F SUPER PLUS",
    targetPests:
      "<strong>For foliar sprays:</strong> 1 ml per 8 litres of water. Use with herbicides, insecticides, fungicides, micronutrients & foliar sprays. <br/><strong>Use With:</strong> Insecticides, fungicides, pesticides, micronutrients, biostimulants & other foliar sprays",
    dosePerAcre:
      "Perfect for all crops where complete coverage and high spray efficiency are crucial.",
    image: "https://res.cloudinary.com/daoju0r3c/image/upload/v1764173861/AG-F_Superplus-Photoroom_shadow_kdb8m9.png",
    backgroundHex: "#D6E8FF",
    dotColor: "rgba(255,255,255,0.07)",
    overlayColor: "rgba(0,0,0,0.25)",  
    imageSize: { maxWidth: "85%", maxHeight: "85%", objectPosition: "right center" }
  },
  {
    name: "CROP GIANT",
    targetPests:
      "<strong>Spray:</strong> 1.5 ml per litre of water when berries reach pea size. <br/><strong>Repeat:</strong> After 7-10 days for maximum effectiveness. <br/><strong>Third Spray:</strong> 15 days before harvest",
    dosePerAcre:
      "Crop Giant is ideal for a wide range of crops including: Grapes, Strawberries, Pomegranate, Tomato, Mango, Paddy, Onion, Chilli, Citrus Fruits, All Vegetable Crops, All Horticultural Crops, Sugarcane, Tea, Coffee, Cashew, Banana.",
    image: "https://res.cloudinary.com/daoju0r3c/image/upload/v1764173895/crop_giant_1_cs6nnn.png",
    backgroundHex: "#FADDDD",
    dotColor: "rgba(255,255,255,0.07)",
    overlayColor: "rgba(0,0,0,0.25)",
    imageSize: { maxWidth: "115%", maxHeight: "115%", objectPosition: "right center" }
  },
  {
    name: "PALM SULF",
    targetPests: "<strong>Foliar Spray:</strong> 2-3 ml per litre of water.<br/><strong>Drip Application:</strong> 3 litres per acre.",
    dosePerAcre:
      "Palm Sulf is ideal for a wide range of crops including: Grapes, Strawberries, Pomegranate, Tomato, Mango, Paddy, Onion, Chilli, Citrus Fruits, All Vegetable Crops, All Horticultural Crops, Sugarcane, Tea, Coffee, Cashew, Banana.",
    image: "https://res.cloudinary.com/daoju0r3c/image/upload/v1764173960/palmsulfnew_ntrjwo.png",
    backgroundHex: "#FFE3D1",
    dotColor: "rgba(255,255,255,0.06)",
    overlayColor: "rgba(0,0,0,0.25)",
    imageSize: { maxWidth: "115%", maxHeight: "135%", objectPosition: "right center" }
  },
  {
    name: "CROPPER",
    targetPests:
      "<strong>Soil Application:</strong> 3 L/acre.<br/><strong>Seed Treatment:</strong> 2.5 L per MT of seed. <br/><strong>With Fertilizers:</strong> 3 L/acre.",
    dosePerAcre:
      "Cropper is ideal for a wide range of crops including: Grapes, Strawberries, Pomegranate, Tomato, Mango, Paddy, Onion, Chilli, Citrus Fruits, All Vegetable Crops, All Horticultural Crops, Sugarcane, Tea, Coffee, Cashew, Banana.",
    image: "https://res.cloudinary.com/daoju0r3c/image/upload/v1764174014/croppernew_qydobw.png",
    backgroundHex: "#E8DAD6",
    dotColor: "rgba(255,255,255,0.06)",
    overlayColor: "rgba(0,0,0,0.25)",
    imageSize: { maxWidth: "115%", maxHeight: "145%", objectPosition: "right center" }
  },
  {
    name: "CROPPER PLUS",
    targetPests:
      "<strong>Soil Application:</strong> 1-1.25 L/acre. <br/><strong>Foliar Spray:</strong> 1 ml per litre. <br/><strong>Seed Treatment:</strong> 1.5 L per MT of seed. <br/><strong>With Fertilizers:</strong> 1-1.25 L/acre.",
    dosePerAcre:
      "Cropper Plus is ideal for a wide range of crops including: Grapes, Strawberries, Pomegranate, Tomato, Mango, Paddy, Onion, Chilli, Citrus Fruits, All Vegetable Crops, All Horticultural Crops, Sugarcane, Tea, Coffee, Cashew, Banana.",
    image: "https://res.cloudinary.com/daoju0r3c/image/upload/v1764174140/cropperplusnew_gxqz3w.png",
    backgroundHex: "#FFE8C7",
    dotColor: "rgba(255,255,255,0.07)",
    overlayColor: "rgba(0,0,0,0.24)",
  },
  {
    name: "SILICOSE",
    targetPests: "<strong>Foliar Spray:</strong> 3 ml per litre of water. <br/><strong>Drip Application:</strong> 2–3 L/acre.",
    dosePerAcre:
      "Silicose is ideal for a wide range of crops including: Grapes, Strawberries, Pomegranate, Tomato, Mango, Paddy, Onion, Chilli, Citrus Fruits, All Vegetable Crops, All Horticultural Crops, Sugarcane, Tea, Coffee, Cashew, Banana.",
    image: "https://res.cloudinary.com/daoju0r3c/image/upload/v1764174176/silicosenew_t2zou5.png",
    backgroundHex: "#E0E9FF",
    dotColor: "rgba(255,255,255,0.05)",
    overlayColor: "rgba(0,0,0,0.24)",
  },
  {
    name: "CROPPER GRANULES",
    targetPests: "<strong>Soil Application by broadcasting:</strong> 1-1.5 kg per acre. <br/><strong>Method:</strong> Apply directly to the soil during land preparation or as a top-dressing in early growth stages.",
    dosePerAcre:
      "Cropper Granules is ideal for a wide range of crops including: Grapes, Strawberries, Pomegranate, Tomato, Mango, Paddy, Onion, Chilli, Citrus Fruits, All Vegetable Crops, All Horticultural Crops, Sugarcane, Tea, Coffee, Cashew, Banana, Wheat.",
    image: "https://res.cloudinary.com/daoju0r3c/image/upload/v1766901717/Screenshot_2025-12-28_112823-removebg-preview_hgnhjc.png",
    backgroundHex: "#E6F8EC",
    dotColor: "rgba(255,255,255,0.05)",
    overlayColor: "rgba(0,0,0,0.24)",
    imageSize: { maxWidth: "100%", maxHeight: "85%", objectPosition: "right center" }
  },
];

export default cropProtectionProducts;
