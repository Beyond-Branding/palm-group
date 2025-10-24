import Link from "next/link";
import { Facebook, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full relative">
      {/* Top footer section */}
      <div className="bg-[#f5f5f5] border-t-4 border-[#119152]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {/* Company Column */}
            <div>
              <h4 className="text-sm font-semibold text-gray-500 tracking-wider mb-4">
                COMPANY
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <Link href="/about" className="hover:underline">
                    About Palm
                  </Link>
                </li>
                {/* <li>
                  <Link href="#" className="hover:underline">
                    Palm India
                  </Link>
                </li> */}
                {/* <li><Link href="#" className="hover:underline">Our Team</Link></li> */}
                {/* <li><Link href="#" className="hover:underline">Career</Link></li> */}
                <li>
                  <Link href="/contact" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Our Products Column */}
            <div>
              <h4 className="text-sm font-semibold text-gray-500 tracking-wider mb-4">
                OUR PRODUCTS
              </h4>
              <ul className="space-y-2 text-gray-700">
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
                {/* <li>
                  <Link href="#" className="hover:underline">
                    Crop Enhancement
                  </Link>
                </li> */}
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h4 className="text-sm font-semibold text-gray-500 tracking-wider mb-4">
                LEGAL
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <Link href="/privacypolicy" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                {/* <li>
                  <Link href="#" className="hover:underline">
                    Terms and Conditions of Use
                  </Link>
                </li> */}
                {/* <li><Link href="#" className="hover:underline">Code of Conduct</Link></li> */}
                {/* <li><Link href="#" className="hover:underline">Anti-Bribery and Anti-Corruption</Link></li> */}
                {/* <li><Link href="#" className="hover:underline">Modern Slavery</Link></li> */}
                {/* <li><Link href="#" className="hover:underline">Cookie Policy</Link></li> */}
              </ul>
            </div>

            {/* Social Column */}
            <div>
              <h4 className="text-sm font-semibold text-gray-500 tracking-wider mb-4">
                SOCIAL
              </h4>
              <div className="flex space-x-4 mt-2">
                <Link href="https://www.facebook.com/profile.php?id=100077642690727" className="bg-[#119152] p-2 rounded-full">
                  <Facebook className="h-5 w-5 text-white" />
                </Link>
                <Link href="https://www.youtube.com/@palminternational5717" className="bg-[#119152] p-2 rounded-full">
                  <Youtube className="h-5 w-5 text-white" />
                </Link>
                <Link href="https://www.linkedin.com/company/palm-internationalagri/?viewAsMember=true" className="bg-[#119152] p-2 rounded-full">
                  <Linkedin className="h-5 w-5 text-white" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section with green background + chat bubbles */}
      <div className="bg-[#119152] py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col space-y-4">
          {/* Links bubble (left, white bubble) */}
          <div className="self-start bg-white text-[#119152] px-6 py-3 rounded-2xl rounded-bl-sm shadow-md text-sm max-w-2xl">
            <div className="flex flex-wrap gap-4">
              <Link href="/privacypolicy" className="hover:underline">
                Privacy Policy
              </Link>
              {/* <Link href="#" className="hover:underline">
                Terms and Conditions
              </Link> */}
              {/* <Link href="#" className="hover:underline">Code of Conduct</Link> */}
              {/* <Link href="#" className="hover:underline">Anti-Bribery</Link> */}
              {/* <Link href="#" className="hover:underline">Modern Slavery</Link> */}
              {/* <Link href="#" className="hover:underline">Cookie Policy</Link> */}
            </div>
          </div>

          {/* Company bubble (right, green bubble) */}
          <div className="self-end bg-green-700 text-white px-6 py-3 rounded-2xl rounded-br-sm shadow-md text-sm font-medium max-w-xs">
            Copyright © Palm
          </div>
        </div>
      </div>
    </footer>
  );
}
