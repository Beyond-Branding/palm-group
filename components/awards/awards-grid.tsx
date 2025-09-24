import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Shield, FileCheck, Leaf, Globe } from "lucide-react"

const awards = [
  {
    title: "ISO 9001:2015",
    category: "Quality Management",
    description:
      "International standard for quality management systems, ensuring consistent quality in our products and services.",
    icon: Shield,
    year: "2023",
    issuer: "International Organization for Standardization",
  },
  {
    title: "IEC Certificate",
    category: "Export Compliance",
    description: "Import Export Code certificate enabling us to engage in international trade operations.",
    icon: Globe,
    year: "2023",
    issuer: "Directorate General of Foreign Trade",
  },
  {
    title: "PPC Drug License",
    category: "Pharmaceutical",
    description: "Pharmaceutical Product Certificate for manufacturing and distribution of pharmaceutical products.",
    icon: FileCheck,
    year: "2023",
    issuer: "State Drug Control Authority",
  },
  {
    title: "Agricultural Licenses",
    category: "Agriculture",
    description: "Comprehensive licensing for manufacturing and distribution of agricultural products and fertilizers.",
    icon: Leaf,
    year: "2023",
    issuer: "Department of Agriculture",
  },
  {
    title: "RCMC Certificate",
    category: "Export Promotion",
    description: "Registration-cum-Membership Certificate from Export Promotion Council for international trade.",
    icon: Award,
    year: "2023",
    issuer: "Export Promotion Council",
  },
]

export function AwardsGrid() {
  return (
    <section className="py-20 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">Our Certifications</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            These certifications demonstrate our unwavering commitment to quality, compliance, and excellence across all
            our business operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <Card key={award.title} className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <award.icon className="h-8 w-8 text-primary" />
                </div>
                <Badge variant="secondary" className="mb-3">
                  {award.category}
                </Badge>
                <h3 className="text-xl font-bold text-primary mb-3">{award.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{award.description}</p>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-primary">Issued: {award.year}</p>
                  <p className="text-xs text-muted-foreground">{award.issuer}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">Our Commitment to Excellence</h3>
            <p className="text-muted-foreground leading-relaxed">
              At Palm Group, we believe that certifications are not just documents on the wall, but a testament to our
              dedication to quality, safety, and regulatory compliance. These recognitions validate our commitment to
              delivering products and services that meet the highest international standards, ensuring that our
              customers receive only the best from us.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
