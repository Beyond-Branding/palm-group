"use client"
import { useRef } from 'react';
import Link from 'next/link'; // Import Link for routing

export default function ProductsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // NOTE: I've updated the 'cap' colors to simple strings to ensure Tailwind works correctly.
  const products = [
    { name: 'Golden Drop', color: 'bg-blue-400',  image: '/golen drop .png' },
    { name: 'AG-F', color: 'bg-purple-500',  image: '/agf s.png' },
    { name: 'AG-F Superplus', color: 'bg-indigo-400', image: '/AG-F Superplus.png' },
    { name: 'Crop Giant', color: 'bg-green-400',  image: '/crop giant.png' },
    { name: 'Palm Sulf', color: 'bg-yellow-400', image: '/palm sulf.png' },
    { name: 'Cropper', color: 'bg-red-400',  image: '/cropper.png' },
    { name: 'Cropper Plus', color: 'bg-pink-400',  image: '/copperplus.png' },
    { name: 'Silicose', color: 'bg-teal-400',  image: '/silicose.png' },
  ];

  return (
    <section className="py-2 bg-white-50">
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
              // 🔑 KEY CHANGE: Set static href="/products"
              <Link 
                key={index} 
                href="/products" // <-- Redirects all clicks to the general /products page
                passHref
                className="inline-block mx-4 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-opacity-90 cursor-pointer"
                style={{ minWidth: '200px' }}
              >
                {/* The content of the product item */}
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <div className="mt-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-32 object-cover rounded"
                  />
                    <span className="text-white font-bold">A</span>
                  </div>
                
              </Link>
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