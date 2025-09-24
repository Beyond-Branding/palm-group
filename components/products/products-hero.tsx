export function ProductsHero() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/healthy-green-crops-in-field-with-organic-fertiliz.jpg"
          alt="Palm International products"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 text-balance animate-fade-in-up">
            Our Products
          </h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed text-pretty animate-fade-in-up">
            Discover Palm International's comprehensive range of innovative agricultural solutions designed to enhance
            crop productivity and sustainability.
          </p>
        </div>
      </div>
    </section>
  )
}
