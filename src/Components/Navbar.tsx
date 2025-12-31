import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { FiMenu, FiX } from "react-icons/fi"

const menuItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Service", path: "/service" },
  { name: "Contact", path: "/contact" },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-[1440px] 2xl:max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 py-5 2xl:py-7 flex items-center justify-between">

        {/* Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src="src/assets/Images/Logo.png"
            alt="logo"
            className="w-12 2xl:w-16 h-auto"
          />
          <h1 className="text-xl sm:text-2xl 2xl:text-4xl font-bold font-family-montserrat">
            IOS INTERIORS
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-12 2xl:gap-20 font-family-poppins text-sm 2xl:text-lg">
          {menuItems.map(item => (
            <li
              key={item.name}
              onClick={() => navigate(item.path)}
              className="cursor-pointer hover:text-gray-500 transition"
            >
              {item.name}
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <button
          onClick={() => navigate("/contact")}
          className="hidden lg:block px-6 py-3 2xl:px-8 2xl:py-4 bg-[#FFE6D0] rounded-md font-family-urbanist font-semibold text-[#848385] 2xl:text-lg"
        >
          Get Started
        </button>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl 2xl:text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center gap-4 py-6 font-family-poppins text-sm 2xl:text-lg">
            {menuItems.map(item => (
              <li
                key={item.name}
                onClick={() => {
                  navigate(item.path)
                  setOpen(false)
                }}
                className="cursor-pointer"
              >
                {item.name}
              </li>
            ))}
          </ul>

          <div className="px-6 pb-6">
            <button
              onClick={() => {
                navigate("/contact")
                setOpen(false)
              }}
              className="w-full py-3 2xl:py-4 bg-[#FFE6D0] rounded-md font-family-urbanist font-semibold text-[#848385] 2xl:text-lg"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
