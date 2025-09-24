import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const pharmaceuticalProducts = [
  {
    name: "Aceclofenac",
    category: "Anti-inflammatory",
    description: "Non-steroidal anti-inflammatory drug (NSAID) used for pain and inflammation management.",
    applications: ["Arthritis treatment", "Pain management", "Anti-inflammatory therapy"],
  },
  {
    name: "Albendazole",
    category: "Antiparasitic",
    description: "Broad-spectrum antiparasitic medication effective against various parasitic infections.",
    applications: ["Parasitic infections", "Deworming", "Tropical disease treatment"],
  },
  {
    name: "Ambroxol Hydrochloride",
    category: "Respiratory",
    description: "Mucolytic agent that helps clear respiratory tract secretions and improves breathing.",
    applications: ["Respiratory disorders", "Cough treatment", "Bronchial therapy"],
  },
  {
    name: "Atorvastatin",
    category: "Cardiovascular",
    description: "HMG-CoA reductase inhibitor used to lower cholesterol and prevent cardiovascular disease.",
    applications: ["Cholesterol management", "Cardiovascular protection", "Lipid disorders"],
  },
  {
    name: "Azithromycin",
    category: "Antibiotic",
    description: "Macrolide antibiotic effective against a wide range of bacterial infections.",
    applications: ["Bacterial infections", "Respiratory infections", "Skin infections"],
  },
  {
    name: "Cefixime",
    category: "Antibiotic",
    description: "Third-generation cephalosporin antibiotic for treating various bacterial infections.",
    applications: ["UTI treatment", "Respiratory infections", "Gonorrhea treatment"],
  },
]

export function PharmaceuticalsProducts() {
  return (
    <section className="py-20 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">Palm Pharmachem Products</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Our comprehensive range of pharmaceutical APIs and formulations meets the highest quality standards for
            healthcare applications worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pharmaceuticalProducts.map((product, index) => (
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
