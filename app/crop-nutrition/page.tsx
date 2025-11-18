// app/crop-nutrition/page.tsx
import dynamic from "next/dynamic";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { CropNutritionHero } from "@/components/crop-nutrition/crop-nutrition-hero";

// dynamic import client-only CropNutritionProducts to avoid SSR/prerender errors (useSearchParams etc.)
const CropNutritionProducts = dynamic(
  () =>
    import("@/components/crop-nutrition/crop-nutrition-products").then((mod) => {
      const m = mod as any;
      // prefer default export (your crop-nutrition file used default), fallback to named export
      return m.default ?? m.CropNutritionProducts ?? m.ProductListingAndDetails;
    }),
  { ssr: false }
);

export default function CropNutritionPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <CropNutritionHero />
        <CropNutritionProducts />
      </main>
      <Footer />
    </div>
  );
}
