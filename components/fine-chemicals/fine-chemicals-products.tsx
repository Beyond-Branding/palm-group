import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const fineChemicalProducts = [
  {
    name: "1,6 Hexandiol",
    category: "Diol",
    description: "High-purity diol used in polymer synthesis and industrial applications.",
    applications: ["Polymer synthesis", "Coatings", "Adhesives"],
  },
  {
    name: "2-Ethylaniline",
    category: "Aromatic Amine",
    description: "Aromatic amine compound used in dye and pharmaceutical intermediate synthesis.",
    applications: ["Dye intermediates", "Pharmaceutical synthesis", "Chemical manufacturing"],
  },
  {
    name: "6-B.A.",
    category: "Plant Growth Regulator",
    description: "6-Benzylaminopurine, a cytokinin plant growth regulator for agricultural applications.",
    applications: ["Plant tissue culture", "Growth regulation", "Agricultural research"],
  },
  {
    name: "Aluminium Molybdate",
    category: "Inorganic Salt",
    description: "High-purity inorganic compound used in catalysis and analytical applications.",
    applications: ["Catalysis", "Analytical chemistry", "Industrial processes"],
  },
  {
    name: "Benzyl Acetate",
    category: "Ester",
    description: "Aromatic ester used in fragrance and flavor applications.",
    applications: ["Fragrance industry", "Flavor compounds", "Solvent applications"],
  },
  {
    name: "Citric Acid Monohydrate",
    category: "Organic Acid",
    description: "High-purity citric acid for food, pharmaceutical, and industrial applications.",
    applications: ["Food additives", "Pharmaceutical excipients", "Cleaning agents"],
  },
]

export function FineChemicalsProducts() {
  return (
    <section className="py-20 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">Shah Scientific Products</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Our extensive catalog of fine chemicals serves diverse industries with consistent quality and reliable
            supply chain management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fineChemicalProducts.map((product, index) => (
            <Card key={product.name} className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <Badge variant="outline" className="mb-3">
                  {product.category}
                </Badge>
                <h3 className="text-xl font-bold text-primary mb-3">{product.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{product.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-primary text-sm">Applications:</h4>
                  <ul className="space-y-1">
                    {product.applications.map((application) => (
                      <li key={application} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0" />
                        {application}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
