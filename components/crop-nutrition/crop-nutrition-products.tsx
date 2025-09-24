import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, Droplets, Shield, Zap } from "lucide-react"

const products = [
  {
    name: "Golden Drop",
    category: "Premium Organic Biostimulant",
    description:
      "Advanced organic biostimulant that enhances plant growth, improves nutrient uptake, and increases crop yield naturally.",
    benefits: [
      "Increases yield by 20-30%",
      "Improves soil health",
      "Enhances nutrient absorption",
      "Organic certified",
    ],
    icon: Droplets,
    image: "/placeholder.svg?key=golden-drop",
  },
  {
    name: "AG-F",
    category: "Premium Activator, Spreader & Sticker",
    description:
      "Multi-functional adjuvant that improves the effectiveness of crop protection products and fertilizers.",
    benefits: ["Better spray coverage", "Reduced drift", "Enhanced penetration", "Cost-effective"],
    icon: Shield,
    image: "/placeholder.svg?key=ag-f",
  },
  {
    name: "AG-F Super Plus",
    category: "Silicone-Based Activator",
    description:
      "Advanced silicone-based activator that provides superior spreading and penetration for maximum efficacy.",
    benefits: ["Superior spreading", "Enhanced penetration", "Weather resistance", "Long-lasting effect"],
    icon: Zap,
    image: "/placeholder.svg?key=ag-f-super",
  },
  {
    name: "Crop Giant",
    category: "Organic Plant Extract",
    description:
      "Natural plant extract that stimulates growth, improves stress tolerance, and enhances overall plant health.",
    benefits: ["Stress tolerance", "Natural growth promotion", "Improved flowering", "Eco-friendly"],
    icon: Leaf,
    image: "/placeholder.svg?key=crop-giant",
  },
]

export function CropNutritionProducts() {
  return (
    <section className="py-20 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">Our Product Range</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Discover our comprehensive range of crop nutrition and protection products designed to maximize your
            agricultural success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <Card key={product.name} className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/30 transition-colors duration-300" />
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <product.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <Badge variant="secondary" className="mb-3">
                    {product.category}
                  </Badge>
                  <h3 className="text-2xl font-bold text-primary mb-3">{product.name}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{product.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary text-sm">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {product.benefits.map((benefit) => (
                        <li key={benefit} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
