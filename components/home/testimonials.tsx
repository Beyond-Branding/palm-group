"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "Punjab, India",
    quote:
      "Palm Group's crop nutrition products have transformed my farm's productivity. The Golden Drop biostimulant increased my wheat yield by 30% while maintaining soil health.",
    image: "/indian-farmer-portrait-smiling-in-agricultural-fie.jpg",
  },
  {
    name: "Priya Sharma",
    location: "Maharashtra, India",
    quote:
      "As a progressive farmer, I appreciate Palm Group's commitment to sustainable agriculture. Their products are effective and environmentally responsible.",
    image: "/female-indian-farmer-portrait-in-cotton-field.jpg",
  },
  {
    name: "Suresh Patel",
    location: "Gujarat, India",
    quote:
      "The technical support from Palm Group is exceptional. They don't just sell products; they partner with us to ensure farming success.",
    image: "/experienced-indian-farmer-portrait-with-vegetables.jpg",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">What Farmers Say</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Real stories from farmers who trust Palm Group for their agricultural needs.
          </p>
        </div>

        <div className="relative">
          <Card className="bg-white shadow-xl">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-start mb-6">
                <Quote className="h-8 w-8 text-primary mr-4 flex-shrink-0 mt-1" />
                <p className="text-lg md:text-xl text-foreground leading-relaxed italic">
                  "{testimonials[currentIndex].quote}"
                </p>
              </div>
              <div className="flex items-center">
                <img
                  src={testimonials[currentIndex].image || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-primary text-lg">{testimonials[currentIndex].name}</h4>
                  <p className="text-muted-foreground">{testimonials[currentIndex].location}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white shadow-lg"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white shadow-lg"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
