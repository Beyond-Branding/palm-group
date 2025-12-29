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
      "0.5–0.75 ml per litre of water. Spray during flowering and early fruiting stages every 12–15 days for best results.",
    dosePerAcre:
      "Golden Drop is ideal for a wide range of crops including: Grapes, Tomato, Mango, Paddy, Onion, Chilli, Citrus Fruits, Vegetables, Strawberries, Capsicum, Pomegranate, Sugarcane, Tea, Coffee, Cashew, Banana.",
    image: "https://res.cloudinary.com/daoju0r3c/image/upload/v1764173725/golden_drop-Photoroom_shadow_m9aigy.png",
    backgroundHex: "#DFF2EA",
    dotColor: "rgba(255,255,255,0.06)",
    overlayColor: "rgba(0,0,0,0.25)",
    imageSize: { maxWidth: "130%", maxHeight: "130%", objectPosition: "right center" }
  },
  {
    name: "AG-F",
    targetPests:
      "1 ml per litre of water to reduce herbicide dosage by 50%. Use with herbicides, insecticides, fungicides, micronutrients & foliar fertilizers.",
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
      "1 ml per 8 litres of water. Use with herbicides, insecticides, fungicides, micronutrients & foliar sprays.",
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
      "Spray: 1.5 ml per litre of water when berries reach pea size. Repeat after 7 days for maximum effectiveness.",
    dosePerAcre:
      "Crop Giant is ideal for a wide range of crops including: Grapes, Strawberry, Citrus, Apple, Mango, Tomato, Capsicum, Watermelon, Cucumbers, Brinjal, Chilli, Pomegranate.",
    image: "https://res.cloudinary.com/daoju0r3c/image/upload/v1764173895/crop_giant_1_cs6nnn.png",
    backgroundHex: "#FADDDD",
    dotColor: "rgba(255,255,255,0.07)",
    overlayColor: "rgba(0,0,0,0.25)",
    imageSize: { maxWidth: "115%", maxHeight: "115%", objectPosition: "right center" }
  },
  {
    name: "PALM SULF",
    targetPests: "Foliar Spray: 3 ml per litre of water. Drip Application: 7.5 litres per hectare.",
    dosePerAcre:
      "Palm Sulf is ideal for a wide range of crops including:: Wheat, Rice, Grapes, Citrus, Mango, Chilli, Onion, Spinach, Potato, Tomato, Capsicum, Carrot.",
    image: "https://res.cloudinary.com/daoju0r3c/image/upload/v1764173960/palmsulfnew_ntrjwo.png",
    backgroundHex: "#FFE3D1",
    dotColor: "rgba(255,255,255,0.06)",
    overlayColor: "rgba(0,0,0,0.25)",
    imageSize: { maxWidth: "115%", maxHeight: "135%", objectPosition: "right center" }
  },
  {
    name: "CROPPER",
    targetPests:
      "Soil Application: 7.5 L/Ha. Foliar Spray: 2 ml per litre. Seed Treatment: 2.5 L per MT of seed. With Fertilizers: 7.5 L/Ha.",
    dosePerAcre:
      "Cropper is ideal for a wide range of crops including: Maize, Wheat, Rice, Sunflower, Potato, Tomato, Garlic, Onion, Spinach, Coconut, Citrus, Mango.",
    image: "https://res.cloudinary.com/daoju0r3c/image/upload/v1764174014/croppernew_qydobw.png",
    backgroundHex: "#E8DAD6",
    dotColor: "rgba(255,255,255,0.06)",
    overlayColor: "rgba(0,0,0,0.25)",
    imageSize: { maxWidth: "115%", maxHeight: "145%", objectPosition: "right center" }
  },
  {
    name: "CROPPER PLUS",
    targetPests:
      "Soil Application: 2.5–4 L/Ha. Foliar Spray: 1 ml per litre. Seed Treatment: 1.5 L per MT of seed. With Fertilizers: 2.5–4 L/Ha.",
    dosePerAcre:
      "Cropper Plus is ideal for a wide range of crops including: Wheat, Rice, Maize, Sunflower, Potato, Leafy Greens, Coconut, Grapes, Citrus, Mango, Tomato, Chilli.",
    image: "https://res.cloudinary.com/daoju0r3c/image/upload/v1764174140/cropperplusnew_gxqz3w.png",
    backgroundHex: "#FFE8C7",
    dotColor: "rgba(255,255,255,0.07)",
    overlayColor: "rgba(0,0,0,0.24)",
  },
  {
    name: "SILICOSE",
    targetPests: "Foliar Spray: 3 ml per litre of water. Drip Application: 5–7.5 L/Ha.",
    dosePerAcre:
      "Silicose is ideal for a wide range of crops including: Rice, Wheat, Maize, Grapes, Mango, Citrus, Potato, Chilli, Tomato, Onion, Spinach, Strawberry, Sugarcane.",
    image: "https://res.cloudinary.com/daoju0r3c/image/upload/v1764174176/silicosenew_t2zou5.png",
    backgroundHex: "#E0E9FF",
    dotColor: "rgba(255,255,255,0.05)",
    overlayColor: "rgba(0,0,0,0.24)",
  },
  {
    name: "CROPPER GRANULES",
    targetPests: "Soil Application by broadcasting : 1-1.5 kg per acre. Method: Apply directly to the soil during land preparation or as a top-dressing in early growth stages.",
    dosePerAcre:
      "Cropper Granules is ideal for a wide range of crops including: Grapes, Strawberries, Pomegranate, Tomato, Mango, Paddy, Onion, Chilli, Citrus Fruits, All Vegetable Crops, All Horticultural Crops, Sugarcane, Coffee, Cashew, Banana, Wheat.",
    image: "https://res.cloudinary.com/daoju0r3c/image/upload/v1766901717/Screenshot_2025-12-28_112823-removebg-preview_hgnhjc.png",
    backgroundHex: "#E6F8EC",
    dotColor: "rgba(255,255,255,0.05)",
    overlayColor: "rgba(0,0,0,0.24)",
    imageSize: { maxWidth: "100%", maxHeight: "85%", objectPosition: "right center" }
  },
];

export default cropProtectionProducts;
