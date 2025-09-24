import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Leaf, Pill, FlaskConical } from "lucide-react"

const businessAreas = [
  {
    title: "Crop Nutrition & Protection",
    description: "Innovative, farmer-first crop nutrition & protection products for sustainable agriculture.",
    icon: Leaf,
    href: "/crop-nutrition",
    image: "/healthy-green-crops-in-field-with-organic-fertiliz.jpg",
  },
  {
    title: "Pharmaceuticals",
    description: "High-quality APIs and formulations through Palm Pharmachem for healthcare excellence.",
    icon: Pill,
    href: "/pharmaceuticals",
    image: "/modern-pharmaceutical-laboratory-with-medicine-pro.jpg",
  },
  {
    title: "Fine Chemicals",
    description: "Leading supplier of fine chemicals for diverse industries through Shah Scientific.",
    icon: FlaskConical,
    href: "/fine-chemicals",
    image: "/chemical-laboratory-with-precision-instruments-and.jpg",
  },
]

export function BusinessAreas() {
  return (
    <section className="py-20 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">Our Business Areas</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Three specialized verticals working together to create sustainable solutions for agriculture, healthcare,
            and industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {businessAreas.map((area, index) => (
            <Link key={area.title} href={area.href} className="group">
              <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={area.image || "/placeholder.svg"}
                    alt={area.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/30 transition-colors duration-300" />
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <area.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-primary/80 transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{area.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
