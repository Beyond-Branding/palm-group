import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AboutPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">
              Nurturing Those Who Nurture the Earth
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We believe in empowering farmers with innovative solutions that not only increase productivity but also
              promote sustainable farming practices. Our commitment extends beyond products to building lasting
              partnerships with the agricultural community.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Through our three specialized divisions, we deliver comprehensive solutions that address the evolving
              needs of modern agriculture, healthcare, and industrial applications.
            </p>
            <Link href="/about">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Learn More About Us
              </Button>
            </Link>
          </div>
          <div className="relative">
            <img
              src="/farmer-examining-healthy-crops-in-modern-sustainab.jpg"
              alt="Farmer examining crops"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">25+</span>
            </div>
            <div className="absolute -bottom-2 -left-2 text-sm text-primary font-semibold">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  )
}
