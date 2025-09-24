import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
  <section className="relative h-screen flex overflow-hidden">
  {/* Smaller left green block */}
  <div className="relative z-10 w-[50vw] h-half bg-[#08A84B] rounded-br-[30vw] flex flex-col justify-center pl-10 lg:pl-10 pr-2">
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
        </div>
      </div>
    </div>
  </div>
  
  {/* Right-side background image */}
  <div className="absolute right-0 top-0 w-[68vw] h-full z-0">
    <img
      src="/your-building-image.jpg" // Replace with your image path
      alt="Palm Group office"
      className="w-full h-full object-cover"
    />
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