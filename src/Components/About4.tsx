import circle1 from "../assets/Images/Circle1.svg";
import circle2 from "../assets/Images/Circle2.svg";
import circle3 from "../assets/Images/Circle3.svg";

import Twitter from "../assets/Images/Twitter.svg";
import Facebook from "../assets/Images/Facebook.svg";
import Dribble from "../assets/Images/Dribble.svg";

import profile1 from "../assets/Images/Profile1.svg";
import profile2 from "../assets/Images/Profile2.svg";
import profile3 from "../assets/Images/Profile3.svg";
import profile4 from "../assets/Images/Profile4.svg";

import logo1 from "../assets/Images/L1.svg";
import logo2 from "../assets/Images/L2.svg";
import logo3 from "../assets/Images/L3.svg";
import logo4 from "../assets/Images/L4.svg";
import logo5 from "../assets/Images/L5.svg";
import logo6 from "../assets/Images/L6.svg";
import logo7 from "../assets/Images/L7.svg";

const stats = [
  { img: circle1, value: "1000+", label: "Completed Projects" },
  { img: circle2, value: "50K+", label: "Happy Customers" },
  { img: circle3, value: "20+", label: "Awards Won" },
];

const profiles = [profile1, profile2, profile3, profile4];

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

export default function TeamSection() {
  return (
    <section className="w-full bg-white py-20 px-4 font-family-urbanist">
      <div className="mx-auto max-w-[1200px] 2xl:max-w-[1600px]">

        {/* ===== TOP SECTION ===== */}
        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-20">

          {/* Left Content */}
          <div className="max-w-md 2xl:max-w-xl">
            <p className="text-sm 2xl:text-lg font-semibold tracking-wide text-[#B88E2F] mb-3">
              COMPANY FACTS
            </p>

            <h2 className="text-4xl 2xl:text-6xl font-bold leading-tight text-[#1F2937] mb-4">
              We are proud of our design team
            </h2>

            <p className="text-sm 2xl:text-lg leading-relaxed text-[#6B7280]">
              Just sit back and relax while we take care <br className="hidden lg:block" />
              of your business needs for you.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
            {stats.map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-14 h-14 2xl:w-20 2xl:h-20 rounded-full bg-[#FFF3E0] flex items-center justify-center mb-4">
                  <img src={item.img} alt="" className="w-6 h-6 2xl:w-9 2xl:h-9" />
                </div>

                <h3 className="text-3xl 2xl:text-5xl font-bold text-[#1F2937]">
                  {item.value}
                </h3>

                <p className="text-sm 2xl:text-lg text-[#6B7280]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ===== TEAM CARDS ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-24">
          {profiles.map((img, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] px-8 py-10 2xl:px-10 2xl:py-14 text-center"
            >
              <img
                src={img}
                alt="profile"
                className="w-24 h-24 2xl:w-32 2xl:h-32 rounded-full mx-auto mb-5"
              />

              <h4 className="text-lg 2xl:text-2xl font-semibold text-[#1F2937]">
                Team Member
              </h4>

              <p className="text-xs 2xl:text-sm uppercase tracking-wide text-[#9CA3AF] mb-4">
                Designer
              </p>

              <p className="text-sm 2xl:text-lg text-[#6B7280] leading-relaxed mb-6">
                Fermentum massa justo sit amet risus morbi leo.
              </p>

              <div className="flex justify-center gap-5">
                <img src={Twitter} alt="twitter" className="w-[18px] h-[18px] 2xl:w-6 2xl:h-6" />
                <img src={Facebook} alt="facebook" className="w-[18px] h-[18px] 2xl:w-6 2xl:h-6" />
                <img src={Dribble} alt="dribbble" className="w-[18px] h-[18px] 2xl:w-6 2xl:h-6" />
              </div>
            </div>
          ))}
        </div>
{/* ===== LOGOS ===== */}
<p className="text-center text-sm 2xl:text-lg text-[#6B7280] mb-8">
  Trusted by over 2K+ clients across the world
</p>

<div className="relative overflow-hidden w-full">
  <div className="flex w-max animate-scroll gap-16 2xl:gap-24">
    
    {/* First set */}
    {logos.map((logo, i) => (
      <img
        key={`logo-1-${i}`}
        src={logo}
        alt="brand"
        className="h-7 2xl:h-10 opacity-70 shrink-0"
      />
    ))}

    {/* Duplicate set (for seamless loop) */}
    {logos.map((logo, i) => (
      <img
        key={`logo-2-${i}`}
        src={logo}
        alt="brand"
        className="h-7 2xl:h-10 opacity-70 shrink-0"
      />
    ))}

  </div>
</div>
      </div>
    </section>
  );
}
