import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
// import VerticalTimeline from "@/components/awards/verticaltimeline"
import { AwardsGrid } from "@/components/awards/awards-grid"

export default function AwardsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* < VerticalTimeline/> */}

        <AwardsGrid />
      </main>
      <Footer />
    </div>
  )
}
