import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AwardsHero } from "@/components/awards/awards-hero"
import { AwardsGrid } from "@/components/awards/awards-grid"

export default function AwardsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <AwardsHero />
        <AwardsGrid />
      </main>
      <Footer />
    </div>
  )
}
