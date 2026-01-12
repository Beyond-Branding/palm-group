import Link from "next/link";
import { Facebook, Linkedin, Youtube, Instagram } from "lucide-react";
import { awards } from "@/lib/awards";


export function Footer() {
  return (
    <footer className="w-full bg-white">
      <div className="border-t-4 border-[#119152] bg-[#f7f7f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-4 space-y-4">
  <p className="text-gray-700 text-sm leading-relaxed">
    Palm International delivers high-efficiency crop nutrition and protection
    products to improve crop health, enhance productivity, and maximise potential
    for farmers. We combine sustainable practices with science-backed formulations
    to support farmers worldwide.
  </p>

<div className="flex flex-wrap items-center gap-4 pt-3">
  {awards.map((award) => (
    <a
      key={award.title}
      aria-label={award.title}
      className="hover:scale-105 transition-transform"
    >
      <img
        src={award.image}
        alt={award.title}
        className="h-9 sm:h-12 md:h-13 w-auto object-contain"
      />
    </a>
  ))}
</div>
</div>

            <div className="lg:col-start-5 lg:col-span-2 mt-6 lg:mt-0 lg:pl-6">
              <ul className="space-y-2 text-gray-700 text-sm">
                <li><Link href="/" className="hover:underline">Home</Link></li>
                <li><Link href="/about" className="hover:underline">About Us</Link></li>
                <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
              </ul>
            </div>

            <div className="lg:col-start-7 lg:col-span-3 mt-6 lg:mt-0 lg:pl-6">
              <ul className="space-y-2 text-gray-700 text-sm">
                <li><Link href="/products" className="hover:underline">Our Products</Link></li>
                <li><Link href="/crop-nutrition" className="hover:underline">Crop Protection &amp; Nutrition</Link></li>
                <li><Link href="/pharmaceuticals" className="hover:underline">Pharmaceuticals</Link></li>
                <li><Link href="/fine-chemicals" className="hover:underline">Fine Chemicals</Link></li>
              </ul>
            </div>

            <div className="lg:col-start-10 lg:col-span-2 mt-6 lg:mt-0 flex lg:justify-end lg:pl-4">
              <div className="flex items-center gap-3">
                <Link
                  href="https://www.facebook.com/profile.php?id=100077642690727"
                  aria-label="Palm International Facebook"
                  className="bg-[#119152] hover:bg-[#0f7b45] text-white p-2 rounded-full shadow-sm"
                >
                  <Facebook className="h-4 w-4" />
                </Link>

                <Link
                  href="https://www.youtube.com/@palminternational5717"
                  aria-label="Palm International Youtube"
                  className="bg-[#119152] hover:bg-[#0f7b45] text-white p-2 rounded-full shadow-sm"
                >
                  <Youtube className="h-4 w-4" />
                </Link>

                <Link
                  href="https://www.linkedin.com/company/palm-internationalagri/?viewAsMember=true"
                  aria-label="Palm International LinkedIn"
                  className="bg-[#119152] hover:bg-[#0f7b45] text-white p-2 rounded-full shadow-sm"
                >
                  <Linkedin className="h-4 w-4" />
                </Link>

                <Link
                  href="https://www.instagram.com/palminternational1998/"
                  aria-label="Palm International Instagram"
                  className="bg-[#119152] hover:bg-[#0f7b45] text-white p-2 rounded-full shadow-sm"
                >
                  <Instagram className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-600 text-center sm:text-left">
              © {new Date().getFullYear()} Palm International. All rights reserved. Website designed and developed by{" "}
              <span className="font-semibold text-gray-800">Beyond Branding</span>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-700">
              <Link href="/privacypolicy" className="hover:underline">Privacy Policy</Link>
              <span className="text-gray-300">/</span>
              <Link href="/termsandcondition" className="hover:underline">Terms &amp; Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
