'use client'

import { Phone, Mail, Clock } from 'lucide-react'

export default function ContactCards() {
  return (
    <div className="py-12">
     
      <div className="flex flex-col lg:flex-row items-start gap-10 max-w-6xl mx-auto">
        
        {/* Left: Map */}
        <div className="w-full lg:w-1/2 h-80 lg:h-[450px] rounded-xl overflow-hidden shadow-md">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4315.739416475277!2d72.84003885647303!3d19.102681001394977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9000a350379%3A0xf563a17dc30c38f7!2sPalm%20International!5e0!3m2!1sen!2sin!4v1759341456424!5m2!1sen!2sin" width="600" height="450" loading="lazy"></iframe>
        </div>

        {/* Right: Contact Information */}
        <div className="w-full lg:w-1/2 bg-white rounded-xl shadow-md p-8">
          <h2 className="text-3xl font-bold text-green-700 mb-6">Contact Information</h2>
          <p className="text-gray-700 mb-6">
            For more information, feel free to contact us using the details below.
          </p>

          {/* Phone */}
          <div className="flex items-center text-gray-900 mb-4 text-lg">
            <Phone className="mr-3 text-blue-400 w-5 h-5" />
            <span>+91 8779083022 / +91 9821133714</span>
          </div>

          {/* Email */}
          <div className="flex items-center text-gray-900 mb-4 text-lg">
            <Mail className="mr-3 text-pink-400 w-5 h-5" />
            <span>palminter@hotmail.com<br></br>aman.shah@palmgrp.com<br></br>vikas@palmgrp.com</span>
          </div>

          {/* Business Hours */}
          <div className="flex items-start text-gray-900 text-lg">
            <Clock className="mr-3 text-green-400 w-5 h-5 mt-1" />
            <div>
              <p className="font-semibold">Business Hours</p>
              <p> Mon-Sat 10:00AM - 7:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}