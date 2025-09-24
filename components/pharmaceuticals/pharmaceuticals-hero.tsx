export function PharmaceuticalsHero() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/modern-pharmaceutical-laboratory-with-medicine-pro.jpg"
          alt="Pharmaceutical manufacturing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 text-balance animate-fade-in-up">
            Pharmaceuticals
          </h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed text-pretty animate-fade-in-up">
            Palm Pharmachem delivers high-quality APIs and formulations, ensuring excellence in healthcare through
            rigorous quality standards and innovative manufacturing processes.
          </p>
        </div>
      </div>
    </section>
  )
}
