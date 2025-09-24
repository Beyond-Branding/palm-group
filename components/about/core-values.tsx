import { Shield, Users, Leaf, Award, Heart, Zap } from "lucide-react"

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We conduct business with honesty, transparency, and ethical practices in all our interactions.",
  },
  {
    icon: Users,
    title: "Farmer-First",
    description: "Every decision we make prioritizes the needs and success of the farming community we serve.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "We are committed to environmental stewardship and sustainable agricultural practices.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for the highest quality in our products, services, and customer relationships.",
  },
  {
    icon: Heart,
    title: "Partnership",
    description: "We build lasting relationships based on trust, mutual respect, and shared success.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We continuously invest in research and development to create cutting-edge solutions.",
  },
]

export function CoreValues() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">Our Core Values</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            The principles that guide our actions and define our commitment to farmers, partners, and the environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group p-6 rounded-lg border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
