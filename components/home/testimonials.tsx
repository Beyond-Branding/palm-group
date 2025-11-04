"use client"

import { useState, useEffect, useMemo } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    name: "Basavraj Patil",
    location: "Jamkhandi, Karnataka",
    quote:
      "Palm Group's crop nutrition products have transformed my farm's productivity. The Golden Drop biostimulant increased my wheat yield by 30% while maintaining soil health.",
    image: "/basavrajtesti.jpg",
  },
  {
    name: "Ganesh Dhonge",
    location: "Rasegaon, Tal. Nashik",
    quote:
      "As a progressive farmer, I appreciate Palm Group's commitment to sustainable agriculture. Their products are effective and environmentally responsible.",
    image: "/Ganeshtesti.jpg",
  },
  {
    name: "Park Hyun Soo",
    location: "South Korea",
    quote:
      "The technical support from Palm Group is exceptional. They don't just sell products; they partner with us to ensure farming success.",
    image: "/parktesti.jpg",
  },
  {
    name: "Ramana Gowda",
    location: "Karnataka",
    quote: "Palm Group’s innovative crop solutions helped increase our yields sustainably.",
    image: "/ramanatesti.jpg",
  },
  {
    name: "Ramchandra Patil",
    location: "Samdoli, Sangli Miraj",
    quote: "I rely on Palm Group for their excellent technical support and products.",
    image: "/ramchandratesti.jpg",
  },
  {
    name: "Shivraj Billur",
    location: "Siddhanath, Taluka Jath",
    quote: "Effective and eco-friendly. Palm Group’s products have improved my crop quality tremendously.",
    image: "/shivrajtesti.jpg",
  },
  {
    name: "Shri Dattatray Patil",
    location: "Kavthe Mahankal, Sangli Maharashtra",
    quote: "Unmatched commitment to sustainable agriculture.",
    image: "/dattrayatesti.jpg",
  },
  {
    name: "Suresh Salunkhe",
    location: "Satara",
    quote: "The best partner farmers can have for success.",
    image: "/sureshtesti.jpg",
  },
  {
    name: "Tanaji Kudale",
    location: "Tarale, Nashik",
    quote: "Palm Group’s products consistently deliver quality and yield.",
    image: "/tanajitesti.jpg",
  },
  {
    name: "Sunita Kaur",
    location: "Himachal Pradesh, India",
    quote: "Professional, reliable, and effective farming solutions.",
    image: "/indian-farmer-portrait-smiling-in-agricultural-fie.jpg",
  },
]

// Pastel/earthy green backgrounds
const pastelShades = [
  "bg-[#eaf7e3]",
  "bg-[#d9f2e6]",
  "bg-[#edffe2]",
  "bg-[#effcf1]",
  "bg-[#f2fbe0]",
  "bg-[#f7f4cf]",
  "bg-[#dadba8]",
  "bg-[#dff4dc]",
  "bg-[#e6EEE0]",
  "bg-[#e6f9fd]",
]

export function Testimonials() {
  const [currentStartIndex, setCurrentStartIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const itemsPerPage = 3

  // Auto-advance with smooth fade/slide using framer-motion
  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setCurrentStartIndex((prevIndex) => (prevIndex + itemsPerPage) % testimonials.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [isPaused])

  const goToPrevious = () => {
    setCurrentStartIndex(
      (prevIndex) => (prevIndex - itemsPerPage + testimonials.length) % testimonials.length
    )
  }

  const goToNext = () => {
    setCurrentStartIndex((prevIndex) => (prevIndex + itemsPerPage) % testimonials.length)
  }

  const visibleTestimonials = useMemo(() => {
    return Array.from({ length: itemsPerPage }, (_, i) => {
      return testimonials[(currentStartIndex + i) % testimonials.length]
    })
  }, [currentStartIndex])

  return (
    <section className="relative pb-18 overflow-hidden">
      {/* Wave background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 350"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path fill="#119152" d="M0,0 H1440 V300 Q720,370 0,300 Z" />
        </svg>
      </div>

      {/* Heading & Subtitle */}
      <div className="relative z-20 pt-40 pb-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">What Farmers Say</h2>
        <p className="text-xl text-center text-white/90">
          Real stories from farmers who trust Palm Group for their agricultural needs.
        </p>
      </div>

      {/* Testimonials Cards Section */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div
          className="relative flex items-center justify-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStartIndex}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ type: "spring", stiffness: 70, damping: 18 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-10 w-full max-w-9xl"
            >
              {visibleTestimonials.map((testimonial, idx) => (
                <Card
                  key={testimonial.name + idx}
                  className={`${
                    pastelShades[(currentStartIndex + idx) % pastelShades.length]
                  } rounded-3xl shadow-2xl flex flex-col items-center overflow-hidden h-[520px] transition-colors`}
                >
                  {/* Increased media box height + no top gap */}
                  <div className="w-full h-[380px] flex items-center overflow-hidden relative">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      loading="lazy"
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <CardContent className="flex flex-col items-center gap-1 py-5 px-6 h-full">
                    <h3 className="font-bold text-xl text-[#22543d] mb-1 text-center">
                      {testimonial.name}
                    </h3>
                    <div className="mb-2 font-medium text-[#59744b] text-center">
                      {testimonial.location}
                    </div>
                    <p className="italic text-[#628b60] text-base leading-relaxed text-center mt-2">
                      {testimonial.quote}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg"
            aria-label="Next testimonials"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(testimonials.length / itemsPerPage) }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentStartIndex(i * itemsPerPage)}
              className={`w-3 h-3 rounded-full transition-colors ${
                i === Math.floor(currentStartIndex / itemsPerPage)
                  ? "bg-[#119152]"
                  : "bg-muted-foreground/30"
              }`}
              aria-label={`Go to testimonials group ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
