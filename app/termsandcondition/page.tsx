import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import React from "react";

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg p-8">
            <h1 className="text-4xl font-extrabold text-green-700 border-b-4 border-green-500 pb-3 mb-6">
              Terms and Conditions – Palm International
            </h1>

            <p className="text-sm text-gray-600 mb-6">
              <strong>Effective Date:</strong> 18/4/2021
            </p>

            <p className="text-gray-700 mb-6">
              Welcome to Palm International’s website. By accessing or using our site, you agree to be bound by these Terms and Conditions.
            </p>

            {/* ====================== 1. General Use ====================== */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-gray-400 pl-3">
                1. General Use
              </h2>
              <p className="text-gray-700">
                This website provides information about Palm International’s agricultural biostimulants and related products. The content is for informational and promotional purposes only.
              </p>
            </section>

            {/* ====================== 2. Intellectual Property ====================== */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-gray-400 pl-3">
                2. Intellectual Property
              </h2>
              <p className="text-gray-700">
                All text, graphics, logos, images, and content on this site are the property of Palm International. Unauthorized copying or reproduction is strictly prohibited.
              </p>
            </section>

            {/* ====================== 3. Product Information ====================== */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-gray-400 pl-3">
                3. Product Information
              </h2>
              <p className="text-gray-700">
                We strive to ensure that all product information is accurate and up to date. However, variations may occur due to technical or regional factors. Always follow the recommended usage and dosage guidelines on product labels.
              </p>
            </section>

            {/* ====================== 4. Limitation of Liability ====================== */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-gray-400 pl-3">
                4. Limitation of Liability
              </h2>
              <p className="text-gray-700">
                Palm International is not liable for any direct or indirect damages arising from the use of our website, products, or linked third-party services.
              </p>
            </section>

            {/* ====================== 5. External Links ====================== */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-gray-400 pl-3">
                5. External Links
              </h2>
              <p className="text-gray-700">
                Our website may contain links to third-party websites. We are not responsible for their content, privacy policies, or practices.
              </p>
            </section>

            {/* ====================== 6. Governing Law ====================== */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-gray-400 pl-3">
                6. Governing Law
              </h2>
              <p className="text-gray-700">
                These terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of the courts of Mumbai, Maharashtra.
              </p>
            </section>

            {/* ====================== 7. Contact Information ====================== */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-gray-400 pl-3">
                7. Contact Information
              </h2>
              <p className="text-gray-700 mb-4">
                For queries or concerns regarding these Terms, contact:
              </p>

              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="font-semibold text-gray-800">Palm International</p>
                <p className="text-gray-700">
                  📧{" "}
                  <a
                    href="mailto:palminter@rediffmail.com"
                    className="text-green-700 hover:underline"
                  >
                    palminter@rediffmail.com
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
