import interiorImg from "../assets/Images/interiorImg.svg";
import List from "../assets/Images/List.svg";

const WhatWeDo = () => {
  const list1 = [
    "World Wide Donation",
    "Various industrial Applications.",
    "Providing Solutions For Construction, Management",
    "Engineers design and build the structure",
  ];

  const list2 = [
    "Certified & Awards winner",
    "Work with energetic team",
    "Just Because You Work Hard You'll Be Successful.",
    "For all your construction needs!",
  ];

  return (
    <section className="w-full bg-white py-16 lg:py-24 font-family-exo">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* IMAGE */}
          <div className="rounded-[20px] overflow-hidden">
            <img
              src={interiorImg}
              alt="Interior Design"
              className="w-full min-h-[260px] md:min-h-[320px] lg:min-h-[420px] object-cover"
            />
          </div>

          {/* CONTENT */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="max-w-md">

              <h2 className="text-[26px] lg:text-[32px] font-semibold text-[#1F1F1F] mb-5">
                What We Do!
              </h2>

              <p className="text-[#1C1D20] text-[14px] lg:text-[15px] leading-[28px] mb-8">
                It is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout
              </p>

              {/* LIST 1 */}
              <ul className="space-y-4 mb-10 text-left">
                {list1.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-[#494949] text-[15px]">
                    <img src={List} alt="" className="w-3 h-3 mt-[6px]" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* LIST 2 */}
              <h3 className="text-[22px] lg:text-[26px] font-semibold text-[#1F1F1F] mb-5">
                What You Can Do in!
              </h3>
              <ul className="space-y-4 mb-12 text-left">
                {list2.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-[#494949] text-[15px]">
                    <img src={List} alt="" className="w-3 h-3 mt-[6px]" />
                    {item}
                  </li>
                ))}
              </ul>

             
              {/* BUTTON */}
<button className="bg-[#FFE6D0] text-[#848385] font-family-exo font-semibold text-[13px] leading-[16px] uppercase rounded text-center transition px-6 py-3 sm:py-4 mx-auto lg:mx-0">
  MORE EXPLORE
</button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;

