import Image from "next/image"; // Import Next.js Image correctly
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react";

// const leaders = [
//   {
//     name: "Rajesh Patel",
//     position: "Founder & Chairman",
//     bio: "With over 25 years of experience in agriculture and business development, Rajesh founded Palm Group with a vision to revolutionize farming practices through innovation and sustainability.",
//     image: "/placeholder.svg?key=leader1",
//     linkedin: "#",
//     email: "rajesh@palmgroup.com",
//   },
//   {
//     name: "Dr. Priya Sharma",
//     position: "Chief Technology Officer",
//     bio: "A renowned agricultural scientist with expertise in crop nutrition and sustainable farming practices. Dr. Sharma leads our research and development initiatives.",
//     image: "/placeholder.svg?key=leader2",
//     linkedin: "#",
//     email: "priya@palmgroup.com",
//   },
//   {
//     name: "Amit Kumar",
//     position: "Chief Executive Officer",
//     bio: "An experienced business leader with a passion for agricultural innovation. Amit oversees the strategic direction and operational excellence of Palm Group.",
//     image: "/placeholder.svg?key=leader3",
//     linkedin: "#",
//     email: "amit@palmgroup.com",
//   },
// ];

export function Leadership() {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-4 sm:px-6 lg:px-8">
        {/* Left: Clipped Image */}
        <div className="w-full md:w-1/2 flex-shrink-0 relative min-h-[280px] md:min-h-[350px]">
          <div
            className="h-full w-full overflow-hidden"
            style={{
              clipPath: "polygon(10% 0%, 80% 0%, 100% 100%, 0% 100%)",
            }}
          >
            <Image
              src="public/Vision.jpg" // path relative to public folder
              alt="Vision"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        {/* Right: Content */}
        <div className="w-full md:w-1/2 px-0 md:px-12 py-14 md:py-0 flex flex-col justify-center items-start">
          <h2 className="text-4xl md:text-5xl font-bold text-green-700 mb-4">A New Era of Agriculture</h2>
          <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-xl">
Agriculture is evolving and so are we. Palm Group is leading the shift toward a new era of farming that prioritizes ecology, efficiency, and sustainability. Through next-generation bio-products and eco-friendly practices, we’re helping build a future where farming is smarter, cleaner, and more resilient for generations to come.          </p>
        </div>
      </div>
    </section>
  );
}
