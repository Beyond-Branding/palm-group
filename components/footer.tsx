import Link from "next/link"
import { Facebook, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-primary-foreground rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">PG</span>
              </div>
              <span className="ml-3 text-xl font-bold">Palm Group</span>
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Passionate agri-innovators committed to transforming farming into a sustainable, productive, and
              farmer-first experience.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Our Products
                </Link>
              </li>
              <li>
                <Link
                  href="/awards"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Awards
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Business Verticals */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Business Areas</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/crop-nutrition"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Crop Nutrition
                </Link>
              </li>
              <li>
                <Link
                  href="/pharmaceuticals"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Pharmaceuticals
                </Link>
              </li>
              <li>
                <Link
                  href="/fine-chemicals"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Fine Chemicals
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80">© 2025 Palm Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
