"use client";
import Image from "next/image";
import Link from "next/link";

export default function BusinessAreas() {
  const products = [
    {
      name: "Herbicides",
      color: "bg-[#6A4B3B]",
      icon: "/grapes.svg",
      image: "/image-Photoroom.png",
      link: "/products/herbicides",
    },
    {
      name: "Insecticides",
      color: "bg-[#000000]",
      icon: "/icons/insecticide-icon.svg",
      image: "/products/Black_Insecticide.png",
      link: "/products/insecticides",
    },
    {
      name: "Fungicides",
      color: "bg-[#006D43]",
      icon: "/icons/fungicide-icon.svg",
      image: "/products/Green_Fungicide.png",
      link: "/products/fungicides",
    },
    {
      name: "Harvest Aids",
      color: "bg-[#F59E0B]",
      icon: "/icons/harvest-icon.svg",
      image: "/products/Orange_Harvest.png",
      link: "/products/harvest-aids",
    },
    {
      name: "Nematicide",
      color: "bg-[#7E22CE]",
      icon: "/icons/nematicide-icon.svg",
      image: "/products/Purple_Nematicide.png",
      link: "/products/nematicide",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Products</h2>
        <p className="text-gray-600 mb-10">
          Discover solutions to simplify your farming
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 justify-center">
          {products.map((product, index) => (
            <Link
              href={product.link}
              key={index}
              className={`product-category-card ${product.color} rounded-2xl p-6 flex flex-col items-center justify-between transition-transform duration-300 hover:scale-105 hover:shadow-2xl`}
            >
              {/* Icon & Title */}
              <div className="w-full text-left">
                <div className="flex items-center gap-2 mb-3">
                  <Image
                    src={product.icon}
                    alt={`${product.name} icon`}
                    width={45}
                    height={45}
                  />
                </div>
                <h3 className="text-2xl font-bold text-white">{product.name}</h3>
              </div>

              {/* Product image (larger sticker) */}
              <div className="mt-10 flex justify-center items-end flex-grow">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={230}  // increased from 180
                  height={300} // increased from 220
                  className="mx-auto drop-shadow-xl scale-110"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Card styling to match structure */}
      <style jsx>{`
        .product-category-card {
          position: relative;
          overflow: hidden;
          height: 420px; /* slightly taller to fit bigger image */
        }
        .product-category-card::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 40%;
          opacity: 0.1;
          background-image: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.15) 20%,
            transparent 20%
          );
          background-size: 20px 20px;
        }
      `}</style>
    </section>
  );
}
