import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/about-hero"
import { VisionMission } from "@/components/about/vision-mission"
import { CoreValues } from "@/components/about/core-values"
import { Leadership } from "@/components/about/leadership"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <AboutHero />
        <VisionMission />
        <CoreValues />
        <Leadership />
      </main>
      <Footer />
    </div>
  )
}
