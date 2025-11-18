import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg p-8">
            <h1 className="text-4xl font-extrabold text-green-700 border-b-4 border-green-500 pb-3 mb-6">
              Privacy Policy – Palm International
            </h1>

            <p className="text-sm text-gray-600 mb-6">
              <strong>Effective Date:</strong> 05/07/2020
            </p>

            <p className="text-gray-700 mb-6">
              Palm International (“we”, “our”, “us”) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard the data you provide when you visit our website or interact with us.
            </p>

            {/* 1. Information We Collect */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-gray-400 pl-3">
                1. Information We Collect
              </h2>
              <p className="text-gray-700 mb-3">
                We may collect the following types of information:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700">
                <li>
                  <strong>Personal details:</strong> name, email address, phone number, company name, location, etc., submitted via contact forms or inquiries.
                </li>
                <li>
                  <strong>Technical information:</strong> IP address, browser type, and device information.
                </li>
                <li>
                  <strong>Interaction data:</strong> information related to your interactions with our products, advertisements, and website.
                </li>
              </ul>
            </section>

            {/* 2. How We Use Your Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-gray-400 pl-3">
                2. How We Use Your Information
              </h2>
              <p className="text-gray-700 mb-3">
                We use your data to:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700">
                <li>Respond to your inquiries and provide requested information.</li>
                <li>Send product updates, offers, and marketing materials (only if you consent).</li>
                <li>Improve our website, products, and customer experience.</li>
                <li>Comply with legal and regulatory obligations.</li>
              </ul>
            </section>

            {/* 3. Data Protection & Security */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-gray-400 pl-3">
                3. Data Protection &amp; Security
              </h2>
              <p className="text-gray-700">
                We use appropriate technical and organizational measures to ensure your data is secure and protected against unauthorized access or disclosure.
              </p>
            </section>

            {/* 4. Sharing of Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-gray-400 pl-3">
                4. Sharing of Information
              </h2>
              <p className="text-gray-700">
                We do not sell or rent your data. Information may be shared with trusted service providers (such as courier, hosting, or marketing partners) only for business purposes and under strict confidentiality.
              </p>
            </section>

            {/* 5. Your Rights */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-gray-400 pl-3">
                5. Your Rights
              </h2>
              <p className="text-gray-700">
                You have the right to:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700">
                <li>Access and correct your personal data.</li>
                <li>Withdraw consent to receive communications.</li>
                <li>Request deletion of your personal information (subject to legal requirements).</li>
              </ul>
            </section>

            {/* 6. Contact Us */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-gray-400 pl-3">
                6. Contact Us
              </h2>
              <p className="text-gray-700 mb-4">
                For any questions about our privacy practices, you may contact us at:
              </p>

              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="font-semibold text-gray-800">Palm International</p>
                <p className="text-gray-600 mb-2">📧 <a href="mailto:palminter@rediffmail.com" className="text-green-700 hover:underline">palminter@rediffmail.com</a></p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}