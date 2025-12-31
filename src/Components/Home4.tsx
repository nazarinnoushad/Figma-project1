import Home4 from '../assets/Images/Home4.png';

const SofaBanner = () => {
  return (
    <section className="relative bg-[#FFE7D3] rounded-xl overflow-hidden mx-4 lg:mx-16 font-family-urbanist min-h-[360px] lg:min-h-[420px]">
      
      <div className="max-w-7xl mx-auto flex flex-col xl:flex-row items-center xl:items-start py-20 xl:py-36">

        <div className="w-full xl:w-1/2 px-6 lg:px-28 flex flex-col justify-center text-center xl:text-left">
          <p className="text-sm sm:text-base text-[#AAB0BC] uppercase">
            End of Season Sale
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Up To 60% Off
          </h2>
          <p className="text-[#60697B] mt-2 text-sm sm:text-base md:text-lg">
            We bring solutions to make life
            <span className="block">easier for our customers.</span>
          </p>
        </div>

      </div>

      <img
        src={Home4}
        alt="Sofa"
        className="
          w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] xl:max-w-[700px] 
          mx-auto mt-6 xl:mt-0
          relative xl:absolute xl:bottom-0 xl:right-0
        "
      />

    </section>
  );
};

export default SofaBanner;
