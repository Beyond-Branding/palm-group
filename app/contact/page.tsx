import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactInfo } from "@/components/contact/contact-info"
import ContactCards from "@/components/contact/contact-cards"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <ContactHero />
        <ContactCards />
        {/* <div className="grid grid-cols-1 lg:grid-cols-2"> */}
          <ContactInfo />
        {/* </div> */}
      </main>
      <Footer />
    </div>
  )
}