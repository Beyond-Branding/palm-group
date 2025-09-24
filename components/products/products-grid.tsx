import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const productCategories = [
  {
    title: "Crop Nutrition & Protection",
    description: "Innovative biostimulants, activators, and organic plant extracts for sustainable farming.",
    products: ["Golden Drop", "AG-F", "AG-F Super Plus", "Crop Giant"],
    href: "/crop-nutrition",
    image: "/healthy-green-crops-in-field-with-organic-fertiliz.jpg",
  },
  {
    title: "Pharmaceuticals",
    description: "High-quality APIs and formulations through Palm Pharmachem.",
    products: ["Aceclofenac", "Albendazole", "Ambroxol Hydrochloride", "Atorvastatin"],
    href: "/pharmaceuticals",
    image: "/modern-pharmaceutical-laboratory-with-medicine-pro.jpg",
  },
  {
    title: "Fine Chemicals",
    description: "Leading supplier of fine chemicals for diverse industries through Shah Scientific.",
    products: ["1,6 Hexandiol", "2-Ethylaniline", "6-B.A.", "Aluminium Molybdate"],
    href: "/fine-chemicals",
    image: "/chemical-laboratory-with-precision-instruments-and.jpg",
  },
]

export function ProductsGrid() {
  return (
    <section className="py-20 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">Product Categories</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Explore our three specialized product lines, each designed to meet specific industry needs with the highest
            quality standards.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {productCategories.map((category, index) => (
            <Link key={category.title} href={category.href} className="group">
              <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/30 transition-colors duration-300" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-primary/80 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{category.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary text-sm">Featured Products:</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.products.map((product) => (
                        <span
                          key={product}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                        >
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
