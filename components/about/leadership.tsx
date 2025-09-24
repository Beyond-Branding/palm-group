import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Mail } from "lucide-react"

const leaders = [
  {
    name: "Rajesh Patel",
    position: "Founder & Chairman",
    bio: "With over 25 years of experience in agriculture and business development, Rajesh founded Palm Group with a vision to revolutionize farming practices through innovation and sustainability.",
    image: "/placeholder.svg?key=leader1",
    linkedin: "#",
    email: "rajesh@palmgroup.com",
  },
  {
    name: "Dr. Priya Sharma",
    position: "Chief Technology Officer",
    bio: "A renowned agricultural scientist with expertise in crop nutrition and sustainable farming practices. Dr. Sharma leads our research and development initiatives.",
    image: "/placeholder.svg?key=leader2",
    linkedin: "#",
    email: "priya@palmgroup.com",
  },
  {
    name: "Amit Kumar",
    position: "Chief Executive Officer",
    bio: "An experienced business leader with a passion for agricultural innovation. Amit oversees the strategic direction and operational excellence of Palm Group.",
    image: "/placeholder.svg?key=leader3",
    linkedin: "#",
    email: "amit@palmgroup.com",
  },
]

export function Leadership() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">Our Leadership</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Meet the visionary leaders driving Palm Group's mission to transform agriculture and empower farmers
            worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <Card key={leader.name} className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={leader.image || "/placeholder.svg"}
                    alt={leader.name}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-1">{leader.name}</h3>
                  <p className="text-primary/70 font-medium mb-3">{leader.position}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{leader.bio}</p>
                  <div className="flex space-x-3">
                    <a
                      href={leader.linkedin}
                      className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
                    >
                      <Linkedin className="h-4 w-4 text-primary" />
                    </a>
                    <a
                      href={`mailto:${leader.email}`}
                      className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
                    >
                      <Mail className="h-4 w-4 text-primary" />
                    </a>
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
