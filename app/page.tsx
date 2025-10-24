import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
// import { BusinessAreas } from "@/components/home/business-areas"
import ProductsSection from "@/components/home/business-areas"    
//import { AboutPreview } from "@/components/home/about-preview"
import { Testimonials } from "@/components/home/testimonials"
import Animation  from "@/components/home/Aninmated plant"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ProductsSection />
        {/* <BusinessAreas /> */}
{/* //<AboutPreview /> */}
        <Animation /> 
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
