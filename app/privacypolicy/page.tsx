import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import React from 'react';

export default function PrivacyPolicyPage() {
  const companyInfo = [
    { label: 'Company Name', value: 'Palm International' },
    { label: 'Address', value: 'Palm House, Plot No 3/B, Hanuman Road, Vile Parle East, Mumbai, Maharashtra, India' },
    { label: 'Business', value: 'Manufacturer and exporter of agro-chemicals and laboratory chemicals.' },
    { label: 'Mission', value: 'To support sustainable agriculture by providing organic, non-toxic, and ecological bio-products that enhance crop yield and quality.' },
    { label: 'GST Number', value: '27AACFP7860K1ZS' },
  ];

  return (
     <div className="min-h-screen">
      <Navigation />
        <main>

    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg p-8">
        <h1 className="text-4xl font-extrabold text-green-700 border-b-4 border-green-500 pb-3 mb-6">
          Privacy Policy
        </h1>
       
        {/* ================================== 1. COMPANY INFORMATION ================================== */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-gray-400 pl-3">
            1. Company Information 🌿
          </h2>
          <p className="text-gray-700 mb-4">
            Palm International we are committed to transparency. The following details our entity:
          </p>
          <div className="bg-green-50 p-4 rounded-lg shadow-inner">
            <dl className="space-y-2">
              {companyInfo.map((item) => (
                <div key={item.label} className="flex flex-col sm:flex-row">
                  <dt className="font-semibold text-gray-800 w-full sm:w-1/4">
                    {item.label}:
                  </dt>
                  <dd className="text-gray-600 w-full sm:w-3/4">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ================================== 2. DATA COLLECTION ================================== */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-gray-400 pl-3">
            2. Our Approach to Data Collection 
          </h2>
          
          <p className="text-lg font-semibold text-red-600 mb-3 p-3 bg-red-50 border-l-4 border-red-500">
            **Crucially, this is a static website and we do not collect any Personal Data, use cookies, or track user activity.**
          </p>

          <p className="text-gray-700 mb-4">
            This website is designed purely for informational purposes to detail our commitment to sustainable, organic, and eco-friendly farm products and our specialty chemicals (like AG-F®, humic acid, and liquid sulfur).
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
            <li>**No Personal Information Collected:** We utilize no forms, registration systems, or public-facing tools to gather personally identifiable information.</li>
            <li>**No Cookies or Tracking:** We do not use cookies, pixel tags, or any third-party analytics to monitor your usage or browsing behavior on this domain.</li>
            <li>**No Log File Usage:** We do not maintain or analyze logs of visitors' IP addresses or page visits for our own business purposes.</li>
          </ul>
        </section>

        {/* ================================== 3. EXTERNAL COMMUNICATION ================================== */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-gray-400 pl-3">
            3. External Communication and Contact 
          </h2>
          <p className="text-gray-700 mb-4">
            Any data you provide to us when contacting us through external means (such as phone or email) is handled confidentially:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
            <li>**Business Inquiries:** Personal or company data you provide will be used solely for communication, fulfilling orders, and addressing business matters.</li>
            <li>**Financial Data:** Financial information related to accepted payment methods (cheques, demand drafts, and cash) is handled securely at our Mumbai office and retained only as required by Indian financial and export regulations.</li>
          </ul>
        </section>

        {/* ================================== 4. THIRD-PARTY LINKS ================================== */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-gray-400 pl-3">
            4. Third-Party Links 
          </h2>
          <p className="text-gray-700">
            Our website may contain links to external sites (e.g., government or industry partners). Palm International is not responsible for the privacy practices or content of these third-party sites. This Privacy Policy applies only to this website.
          </p>
        </section>

        {/* ================================== 5. CONTACT US ================================== */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-gray-400 pl-3">
            5. Contact Us 
          </h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about this Privacy Policy or our business operations, please contact us directly:
          </p>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="font-semibold text-gray-800">Palm International</p>
            <address className="not-italic text-gray-600">
             Nestor Court, 601, Baji Prabhu Deshpande Marg, opposite Lexus Showroom, <br></br>Pond Gaothan, Navpada, Kamala Nagar, <br></br>Vile Parle West, Mumbai, Maharashtra 400056
            </address>
            {/* <p className="text-sm text-gray-600 mt-2">
              *Business hours start at 10:30 AM IST.*
            </p> */}
          </div>
        </section>
      </div>
    </div>
    </main>
     <Footer />
    </div>
  );
}