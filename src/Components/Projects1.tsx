import { Link } from "react-router-dom";
import aboutBg from "../assets/Images/aboutBg.svg";
import Logo from "../assets/Images/Logo.png";

const ProjectBanner = () => {
  return (
    <section className="relative w-full h-[360px] overflow-hidden font-family-poppins">
      
      <img
        src={aboutBg}
        alt="about background"
        className="absolute inset-0 w-full h-full object-cover blur-[3px]"
      />

      <div className="absolute inset-0 bg-white/40"></div>

      <div className="relative z-10 flex flex-col items-center justify-end h-full pb-12 text-center">
        <img
          src={Logo}
          alt="icon"
          className="w-16"
        />

        <h1 className="text-3xl md:text-4xl font-bold font-family-montserrat">
          PROJECTS
        </h1>

        <div className="mt-2 text-sm text-[#000000] flex items-center justify-center gap-1">
          
      
          <Link to="/" className="">
            Home
          </Link>

          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className="w-4 h-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>

          <span>Projects</span>
        </div>
      </div>
    </section>
  );
};

export default ProjectBanner;
