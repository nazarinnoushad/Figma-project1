import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const menuItems = ["Home", "About", "Projects", "Service", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-5 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="src/assets/Images/Logo.png"
            alt="logo"
            className="w-12 h-auto"
          />
          <h1 className="text-xl sm:text-2xl font-bold font-family-montserrat">
            IOS INTERIORS
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-12 font-family-poppins text-sm">
          {menuItems.map(item => (
            <li
              key={item}
              className="cursor-pointer hover:text-gray-500 transition"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <button className="hidden lg:block px-6 py-3 bg-[#FFE6D0] rounded-md font-family-urbanist font-semibold text-[#848385]">
          Get Started
        </button>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center gap-4 py-6 font-family-poppins text-sm">
            {menuItems.map(item => (
              <li
                key={item}
                onClick={() => setOpen(false)}
                className="cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="px-6 pb-6">
            <button
              onClick={() => setOpen(false)}
              className="w-full py-3 bg-[#FFE6D0] rounded-md font-family-urbanist font-semibold text-[#848385]"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

