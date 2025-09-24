"use client"
import { useRef } from 'react';

export default function ProductsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const products = [
    { name: 'Fungicides', color: 'bg-blue-400', icon: '🌱', cap: 'blue-500', image: 'https://via.placeholder.com/150?text=Fungicides' },
    { name: 'Insecticides', color: 'bg-purple-500', icon: '🐞', cap: 'purple-500', image: 'https://via.placeholder.com/150?text=Insecticides' },
    { name: 'Herbicides', color: 'bg-green-400', icon: '🌿', cap: 'green-500', image: 'https://via.placeholder.com/150?text=Herbicides' },
    { name: 'Crop Enhancement', color: 'bg-yellow-400', icon: '🌾', cap: 'yellow-500', image: 'https://via.placeholder.com/150?text=Crop+Enhancement' },
    { name: 'Fertilizers', color: 'bg-red-400', icon: '🌺', cap: 'red-500', image: 'https://via.placeholder.com/150?text=Fertilizers' },
    { name: 'Seed Treatments', color: 'bg-pink-400', icon: '🌱', cap: 'pink-500', image: 'https://via.placeholder.com/150?text=Seed+Treatments' },
    { name: 'Pest Control', color: 'bg-indigo-400', icon: '🕷️', cap: 'indigo-500', image: 'https://via.placeholder.com/150?text=Pest+Control' },
    { name: 'Soil Health', color: 'bg-teal-400', icon: '🌍', cap: 'teal-500', image: 'https://via.placeholder.com/150?text=Soil+Health' },
  ];

  return (
    <section className="py-2 bg-white-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 py-0 mb-4">Our Products</h2>
        <p className="text-gray-600 mb-8">Discover our solutions to simplify your farming</p>
        {/* Wrapper with overflow-hidden to contain the scrolling */}
        <div className="overflow-hidden relative">
          {/* Animated container for seamless infinite scroll */}
          <div
            className="flex whitespace-nowrap animate-scroll"
            style={{ animationDuration: '40s' }} // Adjust duration for speed
          >
            {/* Duplicate products for seamless loop */}
            {[...products, ...products].map((product, index) => (
              <div
                key={index}
                className="inline-block mx-4 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-opacity-90"
                style={{ minWidth: '200px' }}
              >
                <div className="text-2xl mb-2">{product.icon}</div>
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <div className="mt-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-32 object-cover rounded"
                  />
                  <div className={`mt-2 bg-${product.cap}-600 h-8 w-8 rounded-full mx-auto flex items-center justify-center`}>
                    <span className="text-white font-bold">A</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* CSS animation for scrolling */}
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: inline-flex;
          animation: scroll linear infinite;
        }
      `}</style>
    </section>
  );
}