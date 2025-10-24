export function AboutHero() {
  return (
    <section className="relative py-16 sm:py-20 md:py-32 bg-white overflow-hidden">
      {/* Background/Accent Shape with Image */}
      <div className="absolute inset-y-0 right-0 w-full md:w-2/3 lg:w-1/2 z-0">
        <div className="h-full w-full">
          {/* Custom Clip-Path for the image */}
          <img
            src="/agricultural-farm-field-with-green-crops-growing--.jpg"
            alt="Modern sustainable farming"
            className="object-cover h-full w-full"
            style={{
              clipPath: 'ellipse(80% 80% at 70% 30%)', // Slightly adjusted for better mobile fit
            }}
          />
        </div>
      </div>
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col md:flex-row items-start">
        <div className="w-full md:w-[48%] py-8 sm:py-12 md:py-24 pr-0 md:pr-12 text-left flex flex-col">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-700 mb-4 max-w-xl">
            Who We Are At Palm Group
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 max-w-lg">
            At Palm Group, we are a passionate team of agri-innovators committed to transforming traditional farming into a more sustainable, productive, and farmer-first experience. With deep roots in organic science and rural empowerment, we aim to redefine agriculture through solutions that work with nature not against it.
          </p>
        </div>
      </div>
    </section>
  );
}