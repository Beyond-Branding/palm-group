export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute top-0 left-0 w-full h-50">
        <svg
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,200 Q160,100 820,200 T1440,200 L1440,0 L0,0 Z"
            fill="#059c5b"
          />
          <path
            d="M0,200 Q180,140 720,240 T1440,240 L1440,0 L0,0 Z"
            fill="#19703d"
            opacity="0.8"
          />
        </svg>
      </div>
   <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 pt-12 pb-24">
        <h1 className="text-4xl mid:text-6xl font-bold text-white">
         About Us
        </h1>
      </div>
    </section>
  );
}