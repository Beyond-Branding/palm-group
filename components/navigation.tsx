"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Products", href: "/products" },
  { name: "Crop Nutrition", href: "/crop-nutrition" },
  { name: "Pharmaceuticals", href: "/pharmaceuticals" },
  { name: "Fine Chemicals", href: "/fine-chemicals" },
  { name: "Certification", href: "/awards" },
  { name: "Contact Us", href: "/contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
        {/* Logo */}
<div className="flex-shrink-0">
  <Link href="/" className="flex items-center">
    {/* Image on the extreme left */}
    <img
      src="logo.png"
      alt="Palm Group Logo"
      className="w-25 h-25 mr-3 object-contain"
    />
  </Link>
  {/* <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
    {/* <span className="text-primary-foreground font-bold text-lg">PG</span>
  </div>
  <span className="ml-3 text-xl font-bold text-primary">Palm Group</span>
  */}
</div>
          {/* Desktop Navigation */}
          <div className="hidden lg:flex ml-10 space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-green-600  text-m font-medium transition-colors duration-200 whitespace-normal break-words max-w-[150px] text-center"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-border">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}