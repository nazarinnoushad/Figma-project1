import Solution1 from "../assets/Images/Solution1.svg";
import Solution2 from "../assets/Images/Solution2.svg";
import Solution3 from "../assets/Images/Solution3.svg";

import Creativity from "../assets/Images/Creativity.svg";
import Innovative from "../assets/Images/Innovative.svg";
import Rapid from "../assets/Images/Rapid.svg";
import Support from "../assets/Images/Support.svg";

const solutions = [
  { title: "Creativity", description: "Curabitur blandit lacus porttitor ridiculus mus.", img: Creativity },
  { title: "Innovative Thinking", description: "Curabitur blandit lacus porttitor ridiculus mus.", img: Innovative },
  { title: "Rapid Solutions", description: "Curabitur blandit lacus porttitor ridiculus mus.", img: Rapid },
  { title: "Top-Notch Support", description: "Curabitur blandit lacus porttitor ridiculus mus.", img: Support },
];

const Project4 = () => {
  return (
    <section className="w-full bg-white py-16 xl:py-24 2xl:py-32 font-family-urbanist">
      <div className="max-w-7xl 2xl:max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 2xl:gap-24 items-center">

          {/* Left Image Grid */}
          <div className="flex flex-col gap-5 h-full">
            <div className="w-full h-[250px] lg:h-[350px] 2xl:h-[500px] rounded-2xl overflow-hidden">
              <img src={Solution1} alt="solution main" className="w-full h-full object-cover" />
            </div>

            <div className="grid grid-cols-2 gap-5">
              {[Solution2, Solution3].map((img, i) => (
                <div key={i} className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img src={img} alt={`solution ${i + 2}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-center gap-10">
            <p className="text-xs uppercase tracking-widest text-gray-400">
              What makes us different?
            </p>

            <h2 className="text-3xl md:text-4xl 2xl:text-5xl font-semibold leading-tight text-gray-800 max-w-[640px] 2xl:max-w-[800px]">
              We bring{" "}
              <span className="relative inline-block">
                solutions
                <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-orange-300" />
              </span>{" "}
              to make life easier for our customers.
            </h2>

            <div className="grid sm:grid-cols-2 gap-x-14 gap-y-10 max-w-[640px] 2xl:max-w-[800px]">
              {solutions.map(({ title, description, img }) => (
                <div key={title} className="flex gap-4">
                  <img src={img} alt={title} className="w-8 h-8 2xl:w-10 2xl:h-10" />
                  <div>
                    <h4 className="font-semibold text-gray-800 2xl:text-lg">{title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed 2xl:text-base">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Project4;
 
