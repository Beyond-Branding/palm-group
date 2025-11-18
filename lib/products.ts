// /lib/products.ts
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
    image: "/golden drop-Photoroom shadow.png",
    backgroundHex: "#0B5D3E",
    dotColor: "rgba(255,255,255,0.06)",
    overlayColor: "rgba(0,0,0,0.25)",
  },
  {
    name: "AG-F",
    targetPests:
      "1 ml per litre of water to reduce herbicide dosage by 50%. Use with herbicides, insecticides, fungicides, micronutrients & foliar fertilizers.",
    dosePerAcre: "Ideal for all crops.",
    image: "/agf-Photoroom (1).png",
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
    image: "/AG-F Superplus-Photoroom (1).png",
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
    image: "/crop giant (1).png",
    backgroundHex: "#C81E1E",
    dotColor: "rgba(255,255,255,0.07)",
    overlayColor: "rgba(0,0,0,0.25)",
  },
  {
    name: "PALM SULF",
    targetPests: "Foliar Spray: 3 ml per litre of water. Drip Application: 7.5 litres per hectare.",
    dosePerAcre:
      "Palm Sulf is ideal for a wide range of crops including:: Wheat, Rice, Grapes, Citrus, Mango, Chilli, Onion, Spinach, Potato, Tomato, Capsicum, Carrot.",
    image: "/palmsulfnew.png",
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
    image: "/croppernew.png",
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
    image: "/cropperplusnew.png",
    backgroundHex: "#D97706",
    dotColor: "rgba(255,255,255,0.07)",
    overlayColor: "rgba(0,0,0,0.24)",
  },
  {
    name: "SILICOSE",
    targetPests: "Foliar Spray: 3 ml per litre of water. Drip Application: 5–7.5 L/Ha.",
    dosePerAcre:
      "Silicose is ideal for a wide range of crops including: Rice, Wheat, Maize, Grapes, Mango, Citrus, Potato, Chilli, Tomato, Onion, Spinach, Strawberry, Sugarcane.",
    image: "/silicosenew.png",
    backgroundHex: "#2563EB",
    dotColor: "rgba(255,255,255,0.05)",
    overlayColor: "rgba(0,0,0,0.24)",
  },
];

export default cropProtectionProducts;
