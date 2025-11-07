import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/about-hero"
import { VisionMission } from "@/components/about/vision-mission"
import { CoreValues } from "@/components/about/core-values"
import VerticalTimeline from "@/components/about/verticaltimeline"


export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <AboutHero/>
        <VerticalTimeline />
        <VisionMission />
        <CoreValues />
      </main>
      <Footer />
    </div>
  )
}
