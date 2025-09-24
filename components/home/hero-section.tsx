"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
  <section className="relative pb-2 flex overflow-hidden">
  {/* Smaller left green block */}
  <div className="relative z-10 w-[100vw] h-[47vw] bg-[#08A84B] rounded-br-[50vw] flex-col justify-center pl-10 lg:pl-20 pr-5 ">
    <div className="max-w-md pt-10">
      <p className="text-base font-semibold tracking-wide text-white mb-3">HELLO,</p>
      <h1 className="text-white text-4xl lg:text-5xl font-bold leading-tight mb-3">
        Welcome to<br />Palm Group!
      </h1>
      <p className="text-white text-lg mb-7">
        Helping you from seed to fruit.
      </p>
      <button className="bg-[#088A45] text-white px-6 py-2 rounded font-semibold shadow hover:bg-[#065a88] transition mb-10">
        Learn more →
      </button>
      {/* Carousel controls & dots */}
      <div className="flex items-center space-x-3 mt-2">
        <button className="w-7 h-7 flex items-center justify-center bg-white/30 rounded-full text-white text-lg">‹</button>
        <button className="w-7 h-7 flex items-center justify-center bg-white/30 rounded-full text-white text-lg">›</button>
        <div className="flex items-center ml-2 space-x-1">
          <span className="inline-block w-5 h-1 bg-white rounded-full" />
          <span className="inline-block w-5 h-1 bg-white opacity-60 rounded-full" />
          <span className="inline-block w-5 h-1 bg-white opacity-60 rounded-full" />
          <svg
          className="absolute bottom-0 left-0 w-full h-1/2"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          >
          <path
            fill="#FFFFFF"
            d="M0,224L80,208C160,192,320,160,480,149.3C640,139,800,149,960,160C1120,171,1280,181,1360,186.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          />
        </svg>
        </div>
        </div>
      </div>
    </div>
  
  {/* Background image with wave curve, overlaying the left green panel */}
  <div className="absolute top-0 right-0 w-1/2 h-[38vw] z-10 rounded-bl-[80vw] overflow-hidden">
  <div className="relative w-full h-full bg-[#08A84B] rounded-bl-[50vw]" >
      <Image
        src="/agricultural-farm-field-with-green-crops-growing--.jpg"
        alt="Palm Group office"
        fill
        className="object-cover"
        priority
      />
      {/* Wave mask using SVG as a mask over the image */}
      {/* <svg
        className="absolute top-0 left-0 w-full h-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        style={{ pointerEvents: "none" }}
      >
        <defs>
          <clipPath id="wave-clip" clipPathUnits="objectBoundingBox">
            <path
              d="
                M0,0 
                L1,0 
                L1,0.85 
                C0.85,0.95,0.7,1,0.5,0.95 
                C0.3,0.9,0.15,0.8,0,0.85 
                Z
              "
            />
          </clipPath>
        </defs>
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="white"
          clipPath="url(#wave-clip)"
        />
      </svg> */}
      <style jsx>{`
        .relative > :global(img) {
          clip-path: url(#wave-clip);
        }
      `}</style>
    </div>
  </div>
  
  {/* Bottom SVG curve for seamless join */}
  <div className="absolute left-0 bottom-0 w-full h-[65px] overflow-hidden z-30">
    <svg viewBox="0 0 1728 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M0 70C220 140 1480 -20 1728 70V90H0V70Z" fill="#fff"/>
    </svg>
  </div>
</section>
  )
}