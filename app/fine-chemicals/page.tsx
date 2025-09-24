import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FineChemicalsHero } from "@/components/fine-chemicals/fine-chemicals-hero"
import { FineChemicalsProducts } from "@/components/fine-chemicals/fine-chemicals-products"

export default function FineChemicalsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <FineChemicalsHero />
        <FineChemicalsProducts />
      </main>
      <Footer />
    </div>
  )
}
