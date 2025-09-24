import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PharmaceuticalsHero } from "@/components/pharmaceuticals/pharmaceuticals-hero"
import { PharmaceuticalsProducts } from "@/components/pharmaceuticals/pharmaceuticals-products"

export default function PharmaceuticalsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <PharmaceuticalsHero />
        <PharmaceuticalsProducts />
      </main>
      <Footer />
    </div>
  )
}
