const HomeHero = () => {
  return (
    <section className="relative w-full min-h-[720px] overflow-hidden">
      
      {/* Background Image */}
      <img
        src="src/assets/Images/Home1.svg"
        alt="Interior"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Content Card */}
      <div className="relative z-10 flex justify-end items-center min-h-[720px] px-6 lg:px-20">
        <div className="bg-[#FFF3E3] max-w-xl w-full rounded-lg p-8 md:p-10">
          
          <p className="text-xs tracking-widest uppercase mb-3 font-family-poppins text-gray-600">
            New Arrival
          </p>

          <h1 className="font-family-poppins font-semibold text-[#848385] text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">
            Discover Our <br /> New Collection
          </h1>

          <p className="text-sm md:text-base leading-6 text-gray-600 mb-8 font-family-poppins">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>

          <button className="bg-[#FFE6D0] px-8 py-4 text-xs font-semibold uppercase font-family-poppins tracking-wide">
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;

