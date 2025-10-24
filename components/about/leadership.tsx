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
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Left: Clipped Image */}
        <div className="w-full md:w-1/2 flex-shrink-0 relative min-h-[200px] sm:min-h-[250px] md:min-h-[300px] lg:min-h-[350px]">
          <div
            className="h-full w-full overflow-hidden relative"
            style={{
              clipPath: 'ellipse(80% 90% at 60% 40%)', // Smoother, oval shape for better aesthetics
            }}
          >
            <img
              src="/female-indian-farmer-portrait-in-cotton-field.jpg"
              alt="A new era of agriculture"
              style={{ objectFit: "cover" }}

            />
          </div>
        </div>
        {/* Right: Content */}
        <div className="w-full md:w-1/2 px-0 md:px-8 lg:px-12 py-8 sm:py-10 md:py-12 lg:py-0 flex flex-col justify-center items-start">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-green-700 mb-4">
            A New Era of Agriculture
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 mb-6 max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl">
            Agriculture is evolving and so are we. Palm Group is leading the shift toward a new era of farming that prioritizes ecology, efficiency, and sustainability. Through next-generation bio-products and eco-friendly practices, we’re helping build a future where farming is smarter, cleaner, and more resilient for generations to come.
          </p>
        </div>
      </div>
    </section>
  );
}