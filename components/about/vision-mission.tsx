import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Lightbulb } from "lucide-react";
import Image from "next/image";

export function VisionMission() {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-4 sm:px-6 lg:px-8">
        {/* Left: Clipped Image */}
        <div className="w-full md:w-1/2 flex-shrink-0 relative min-h-[280px] md:min-h-[350px]">
          <div
            className="h-full w-full overflow-hidden relative"
            style={{
              clipPath: 'polygon(10% 0%, 100% 0%, 80% 100%, 0% 100%)',
            }}
          >
            <Image
              src="/Vision.jpg"
              alt="Vision"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>
        {/* Right: Content */}
        <div className="w-full md:w-1/2 px-0 md:px-12 py-14 md:py-0 flex flex-col justify-center items-start">
          <h2 className="text-4xl md:text-5xl font-bold text-green-700 mb-4">Our Vision</h2>
          <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-xl">
            To build a world where sustainable agriculture supports thriving rural communities and resilient ecosystems. We are committed to offering farmer-centric, organic, and non-toxic bio-products that improve both crop yield and quality, while nurturing the health of the soil and environment.
          </p>
          {/* <button className="px-7 py-3 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition-all duration-200">
            Read More →
          </button> */}
        </div>
      </div>
    </section>
  );
}
