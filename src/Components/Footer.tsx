import Gradient from "../assets/Images/Gradient.png";
import Logo from "../assets/Images/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-white font-family-urbanist">

      {/* CTA CARD */}
      <div className="flex justify-center px-4">
        <div
          className="relative w-full max-w-[1040px] 2xl:max-w-[1400px] h-[370px] 2xl:h-[440px] rounded-lg overflow-hidden flex items-center justify-center text-center bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 230, 208, 0.68), rgba(255, 230, 208, 0.68)), url(${Gradient})`
          }}
        >
          <div className="relative z-10 w-full max-w-[900px] 2xl:max-w-[1100px] flex flex-col items-center gap-4 2xl:gap-6">

            <p className="text-[11px] sm:text-xs lg:text-sm 2xl:text-lg uppercase tracking-wide text-gray-400">
              Join our community
            </p>

            <h2 className="text-[16px] sm:text-xl md:text-2xl lg:text-3xl 2xl:text-5xl font-semibold text-gray-800 leading-snug">
              We are trusted by over 5000+ clients.<br />
              Join them now and grow your business.
            </h2>

            <button className="mt-3 px-6 py-3 2xl:px-10 2xl:py-4 bg-[#FFE6D0] rounded-lg text-[12px] sm:text-sm 2xl:text-lg text-gray-600 font-medium hover:bg-[#ffd9b8] transition">
              Get Started
            </button>

          </div>
        </div>
      </div>

      {/* FOOTER CONTENT */}
      <div className="mx-auto px-4 py-16 sm:py-24 2xl:py-32 max-w-[1400px] 2xl:max-w-[1800px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 2xl:gap-20 text-gray-600">

          {/* Logo */}
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-2">
              <img src={Logo} alt="Logo" className="h-12 2xl:h-14 w-auto" />
              <span className="text-sm sm:text-lg md:text-xl 2xl:text-3xl font-bold text-black">
                IOS INTERIORS
              </span>
            </div>
            <p className="text-[10px] sm:text-xs 2xl:text-sm leading-relaxed">
              © 2023 Sandbox.<br />All rights reserved.
            </p>
          </div>

          {/* Get in Touch */}
          <div className="text-center xl:text-left">
            <h4 className="text-xs sm:text-base 2xl:text-xl font-semibold text-gray-800 mb-4">
              Get in Touch
            </h4>
            <p className="text-[11px] sm:text-sm 2xl:text-base leading-relaxed mb-2">
              Moonshine St. 14/05<br />
              Light City, London,<br />
              United Kingdom
            </p>
            <p className="text-[11px] sm:text-sm 2xl:text-base leading-relaxed break-words">
              info@email.com<br />
              00 (123) 456 78 90
            </p>
          </div>

          {/* Learn More */}
          <div className="text-center xl:text-left">
            <h4 className="text-xs sm:text-base 2xl:text-xl font-semibold text-gray-800 mb-4">
              Learn More
            </h4>
            <ul className="space-y-2 text-[11px] sm:text-sm 2xl:text-base">
              <li className="hover:text-gray-800 cursor-pointer">About Us</li>
              <li className="hover:text-gray-800 cursor-pointer">Our Story</li>
              <li className="hover:text-gray-800 cursor-pointer">Projects</li>
              <li className="hover:text-gray-800 cursor-pointer">Terms of Use</li>
              <li className="hover:text-gray-800 cursor-pointer">Privacy Policy</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="text-center xl:text-left">
            <h4 className="text-xs sm:text-base 2xl:text-xl font-semibold text-gray-800 mb-4">
              Newsletter
            </h4>
            <p className="text-[11px] sm:text-sm 2xl:text-base leading-relaxed mb-4 max-w-xs mx-auto xl:mx-0">
              Subscribe to our newsletter to get news & deals delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-xs mx-auto xl:mx-0">
              <input
                type="email"
                placeholder="Email Address"
                className="h-10 2xl:h-12 w-full px-3 text-[11px] xs:text-[10px] sm:text-[11px] 2xl:text-base border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-300 shadow-sm"
              />
              <button className="h-10 2xl:h-12 px-4 bg-[#FFE6D0] rounded-lg text-[11px] xs:text-[10px] sm:text-[11px] 2xl:text-base text-gray-600 font-medium hover:bg-[#ffd9b8] transition">
                Join
              </button>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

