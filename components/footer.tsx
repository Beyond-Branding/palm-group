import Link from "next/link";
import { Facebook, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-white">
      {/* Top footer section */}
      <div className="border-t-4 border-[#119152] bg-[#f7f7f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Grid: About + 3 columns */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* ABOUT US */}
            <div className="lg:col-span-4">
              <h4 className="text-sm font-semibold text-gray-500 tracking-wider mb-4">
                ABOUT US
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Palm International delivers high-efficiency crop nutrition and protection
                products to improve crop health, enhance productivity, and maximise potential
                for farmers. We combine sustainable practices with science-backed formulations
                to support farmers worldwide.
              </p>

              {/* Optional certification badges */}
              <div className="mt-6 flex items-center gap-3">
                {/* Replace with actual certification image URLs or remove */}
                <img src="/badge1.png" alt="Certification" className="h-8 w-auto" />
                <img src="/badge2.png" alt="Certification" className="h-8 w-auto" />
                <img src="/badge3.png" alt="Certification" className="h-8 w-auto" />
                <img src="/badge4.png" alt="Certification" className="h-8 w-auto" />
              </div>
            </div>

            {/* COMPANY */}
            <div className="lg:col-span-2">
              <h4 className="text-sm font-semibold text-gray-500 tracking-wider mb-4">
                COMPANY
              </h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li><Link href="/" className="hover:underline">Home</Link></li>
                <li><Link href="/about" className="hover:underline">About Us</Link></li>
                <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
              </ul>
            </div>

            {/* OUR PRODUCTS */}
            <div className="lg:col-span-3">
              <h4 className="text-sm font-semibold text-gray-500 tracking-wider mb-4">
                OUR PRODUCTS
              </h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>
                  <Link href="/crop-nutrition" className="hover:underline">
                    Crop Protection & Nutrition
                  </Link>
                </li>
                <li>
                  <Link href="/pharmaceuticals" className="hover:underline">
                    Pharmaceuticals
                  </Link>
                </li>
                <li>
                  <Link href="/fine-chemicals" className="hover:underline">
                    Fine Chemicals
                  </Link>
                </li>
              </ul>
            </div>

            {/* SOCIAL */}
            <div className="lg:col-span-3">
              <h4 className="text-sm font-semibold text-gray-500 tracking-wider mb-4">
                SOCIAL
              </h4>
              <div className="flex items-center gap-3">
                <Link
                  href="https://www.facebook.com/profile.php?id=100077642690727"
                  className="bg-[#119152] hover:bg-[#0f7b45] text-white p-2 rounded-full shadow-sm"
                >
                  <Facebook className="h-4 w-4" />
                </Link>

                <Link
                  href="https://www.youtube.com/@palminternational5717"
                  className="bg-[#119152] hover:bg-[#0f7b45] text-white p-2 rounded-full shadow-sm"
                >
                  <Youtube className="h-4 w-4" />
                </Link>

                <Link
                  href="https://www.linkedin.com/company/palm-internationalagri/?viewAsMember=true"
                  className="bg-[#119152] hover:bg-[#0f7b45] text-white p-2 rounded-full shadow-sm"
                >
                  <Linkedin className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom single-line bar */}
      <div className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Left side: copyright + dev credit */}
            <div className="text-sm text-gray-600 text-center sm:text-left">
              © {new Date().getFullYear()} Palm International. All rights reserved. Site designed and developed by{" "}
              <span className="font-semibold text-black-800">Beyond Branding</span>
            </div>

            {/* Right side: policy links */}
            <div className="flex items-center space-x-6 text-sm text-gray-700">
              <Link href="/privacypolicy" className="hover:underline">
                Privacy Policy
              </Link>
              <span className="text-gray-300">/</span>
              <Link href="/terms" className="hover:underline">
                Terms &amp; Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
