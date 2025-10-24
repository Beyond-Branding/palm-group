import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CropNutritionHero } from "@/components/crop-nutrition/crop-nutrition-hero"
import CropNutritionProducts from "@/components/crop-nutrition/crop-nutrition-products"

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
  )
}
