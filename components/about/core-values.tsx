export function CoreValues() {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-4 sm:px-6 lg:px-8">
        {/* Left: Mission Content */}
        <div className="w-full md:w-1/2 px-0 md:px-12 py-14 md:py-0 flex flex-col justify-center items-start">
          <h2 className="text-4xl md:text-5xl font-bold text-green-700 mb-4">Our Mission</h2>
          <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-xl">
            To develop and deliver high-quality, farmer-first products and services that increase agricultural productivity, promote sustainability, and support the livelihoods of farming communities worldwide.
          </p>
          {/* <button className="px-7 py-3 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition-all duration-200">
            Read More →
          </button> */}
        </div>

        {/* Right: Clipped/Styled Image */}
        <div className="w-full md:w-1/2 flex-shrink-0 relative min-h-[280px] md:min-h-[350px]">
          <div className="h-full w-full overflow-hidden" style={{
            clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)'
          }}>
            <img
              src="/healthy-green-crops-in-field-with-organic-fertiliz.jpg" // replace with your image file
              alt="Our Mission"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
