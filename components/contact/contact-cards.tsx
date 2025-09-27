'use client'

import { Phone, Mail, Users, TrendingUp, Headphones } from 'lucide-react';

const cards = [
  {
    heading: 'For Business Enquires',
    description: 'Contact us for strategic partnerships, collaborations, or other business-related inquiries.',
    number: '+1 234 567 8901',
    email: 'business@example.com',
    icon: <Users className="text-green-600 w-10 h-10" />
  },
  {
    heading: 'For Marketing / Sales',
    description: 'Reach out to our sales and marketing team for new deals, campaigns, or sales support.',
    number: '+1 987 654 3210',
    email: 'sales@example.com',
    icon: <TrendingUp className="text-pink-600 w-10 h-10" />
  },
  {
    heading: 'Export / Customer Care',
    description: 'Our support specialists assist with export queries and customer care needs.',
    number: '+1 456 123 7890',
    email: 'support@example.com',
    icon: <Headphones className="text-green-600 w-10 h-10" />
  },
];

export default function ContactCards() {
  return (
    <div className="py-12">
      {/* Get in Touch Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-green-600 mb-4">Get in Touch</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Thanks for your interest. Please use this area to ask a question, make a comment or request information.
        </p>
      </div>
      
      {/* Contact Cards */}
      <div className="space-y-14">
        {cards.map((card, idx) => (
        <div
          key={card.heading}
          className={`flex justify-center ${
            idx % 2 === 1 ? 'md:justify-end' : 'md:justify-start'
          }`}
        >
          <div className="flex items-center p-8 gap-6 bg-white rounded-xl shadow-md md:w-2/3 w-full max-w-4xl">
            {card.icon}
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold text-green-700 mb-4">{card.heading}</h2>
              <p className="mb-5 text-gray-700">{card.description}</p>
              <div className="flex items-center text-gray-900 mb-3 text-lg">
                <Phone className="mr-3 text-indigo-500 w-5 h-5" />
                <span>{card.number}</span>
              </div>
              <div className="flex items-center text-gray-900 text-lg">
                <Mail className="mr-3 text-pink-500 w-5 h-5" />
                <span>{card.email}</span>
              </div>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}