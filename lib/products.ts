export type CropProduct = {
  name: string;
  targetPests: string;
  dosePerAcre: string;
  image: string;
  backgroundHex: string;
  dotColor: string;
  overlayColor: string;
};

export const cropProtectionProducts: CropProduct[] = [
  {
    name: "GOLDEN DROP",
    targetPests:
      "0.5–0.75 ml per litre of water. Spray during flowering and early fruiting stages every 12–15 days for best results.",
    dosePerAcre:
      "Golden Drop is ideal for a wide range of crops including: Grapes, Tomato, Mango, Paddy, Onion, Chilli, Citrus Fruits, Vegetables, Strawberries, Capsicum, Pomegranate, Sugarcane, Tea, Coffee, Cashew, Banana.",
    image: "https://res.cloudinary.com/daoju0r3c/image/upload/v1764173725/golden_drop-Photoroom_shadow_m9aigy.png",
    backgroundHex: "#0B5D3E",
    dotColor: "rgba(255,255,255,0.06)",
    overlayColor: "rgba(0,0,0,0.25)",
  },
  {
    name: "AG-F",
    targetPests:
      "1 ml per litre of water to reduce herbicide dosage by 50%. Use with herbicides, insecticides, fungicides, micronutrients & foliar fertilizers.",
    dosePerAcre: "Ideal for all crops.",
    image: "https://res.cloudinary.com/daoju0r3c/image/upload/v1764173812/agf-Photoroom_1_cmpcyy.png",
    backgroundHex: "#F5C400",
    dotColor: "rgba(255,255,255,0.08)",
    overlayColor: "rgba(0,0,0,0.22)",
  },
  {
    name: "AG-F SUPER PLUS",
    targetPests:
      "1 ml per 8 litres of water. Use with herbicides, insecticides, fungicides, micronutrients & foliar sprays.",
    dosePerAcre:
      "Perfect for all crops where complete coverage and high spray efficiency are crucial.",
    image: "https://res.cloudinary.com/daoju0r3c/image/upload/v1764173861/AG-F_Superplus-Photoroom_shadow_kdb8m9.png",
    backgroundHex: "#0057B7",
    dotColor: "rgba(255,255,255,0.07)",
    overlayColor: "rgba(0,0,0,0.25)",
  },
  {
    name: "CROP GIANT",
    targetPests:
      "Spray: 1.5 ml per litre of water when berries reach pea size. Repeat after 7 days for maximum effectiveness.",
    dosePerAcre:
      "Crop Giant is ideal for a wide range of crops including: Grapes, Strawberry, Citrus, Apple, Mango, Tomato, Capsicum, Watermelon, Cucumbers, Brinjal, Chilli, Pomegranate.",
    image: "https://res.cloudinary.com/daoju0r3c/image/upload/v1764173895/crop_giant_1_cs6nnn.png",
    backgroundHex: "#C81E1E",
    dotColor: "rgba(255,255,255,0.07)",
    overlayColor: "rgba(0,0,0,0.25)",
  },
  {
    name: "PALM SULF",
    targetPests: "Foliar Spray: 3 ml per litre of water. Drip Application: 7.5 litres per hectare.",
    dosePerAcre:
      "Palm Sulf is ideal for a wide range of crops including:: Wheat, Rice, Grapes, Citrus, Mango, Chilli, Onion, Spinach, Potato, Tomato, Capsicum, Carrot.",
    image: "https://res.cloudinary.com/daoju0r3c/image/upload/v1764173960/palmsulfnew_ntrjwo.png",
    backgroundHex: "#E65100",
    dotColor: "rgba(255,255,255,0.06)",
    overlayColor: "rgba(0,0,0,0.25)",
  },
  {
    name: "CROPPER",
    targetPests:
      "Soil Application: 7.5 L/Ha. Foliar Spray: 2 ml per litre. Seed Treatment: 2.5 L per MT of seed. With Fertilizers: 7.5 L/Ha.",
    dosePerAcre:
      "Cropper is ideal for a wide range of crops including: Maize, Wheat, Rice, Sunflower, Potato, Tomato, Garlic, Onion, Spinach, Coconut, Citrus, Mango.",
    image: "https://res.cloudinary.com/daoju0r3c/image/upload/v1764174014/croppernew_qydobw.png",
    backgroundHex: "#4E342E",
    dotColor: "rgba(255,255,255,0.06)",
    overlayColor: "rgba(0,0,0,0.25)",
  },
  {
    name: "CROPPER PLUS",
    targetPests:
      "Soil Application: 2.5–4 L/Ha. Foliar Spray: 1 ml per litre. Seed Treatment: 1.5 L per MT of seed. With Fertilizers: 2.5–4 L/Ha.",
    dosePerAcre:
      "Cropper Plus is ideal for a wide range of crops including: Wheat, Rice, Maize, Sunflower, Potato, Leafy Greens, Coconut, Grapes, Citrus, Mango, Tomato, Chilli.",
    image: "https://res.cloudinary.com/daoju0r3c/image/upload/v1764174140/cropperplusnew_gxqz3w.png",
    backgroundHex: "#D97706",
    dotColor: "rgba(255,255,255,0.07)",
    overlayColor: "rgba(0,0,0,0.24)",
  },
  {
    name: "SILICOSE",
    targetPests: "Foliar Spray: 3 ml per litre of water. Drip Application: 5–7.5 L/Ha.",
    dosePerAcre:
      "Silicose is ideal for a wide range of crops including: Rice, Wheat, Maize, Grapes, Mango, Citrus, Potato, Chilli, Tomato, Onion, Spinach, Strawberry, Sugarcane.",
    image: "https://res.cloudinary.com/daoju0r3c/image/upload/v1764174176/silicosenew_t2zou5.png",
    backgroundHex: "#2563EB",
    dotColor: "rgba(255,255,255,0.05)",
    overlayColor: "rgba(0,0,0,0.24)",
  },
];

export default cropProtectionProducts;
