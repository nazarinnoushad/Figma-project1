import Bed from '../assets/Images/Bed.svg'
import Sofa from '../assets/Images/Sofa.svg'
import Lamb from '../assets/Images/Lamb.svg'
import Underline from '../assets/Images/Underline.svg'

export default function WhyChoose() {
  const cards = [
    { icon: Bed, title: 'Collect Ideas', text: 'Duis mollis commodo luctus cursus commodo tortor mauris.' },
    { icon: Sofa, title: 'Data Analysis', text: 'Vivamus sagittis lacus augue fusce dapibus tellus nibh.' },
    { icon: Lamb, title: 'Finalize Product', text: 'Vestibulum ligula porta felis maecenas faucibus mollis.' },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 font-family-urbanist relative bg-gradient-to-t from-[#FFE6D03D] to-transparent">

      {/* Heading */}
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-800 leading-tight max-w-4xl mx-auto">
        Here are a few{" "}
        <span className="relative inline-block">
          reasons
          <img
            src={Underline}
            alt=""
            aria-hidden="true"
            className="absolute left-1/2 -translate-x-1/2 -bottom-1 sm:-bottom-1 w-28 sm:w-36 md:w-40"
          />
        </span>{" "}
        why our customers choose Sandbox.
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mt-14 sm:mt-20">
        {cards.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 sm:p-8 flex items-start gap-4 sm:gap-5 shadow-sm hover:shadow-xl transition-shadow duration-300"
          >
            {/* Icon */}
            <img
              src={item.icon}
              alt={item.title}
              className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0"
            />

            {/* Text */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-slate-800 mb-1 sm:mb-2">{item.title}</h4>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Curved bottom wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-[140px]"
          viewBox="0 0 1440 140"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#FEFEFE"
            d="M0,96L80,106.7C160,117,320,139,480,138.7C640,139,800,117,960,101.3C1120,85,1280,75,1360,69.3L1440,64L1440,140L1360,140C1280,140,1120,140,960,140C800,140,640,140,480,140C320,140,160,140,80,140L0,140Z"
          />
        </svg>
      </div>

    </section>
  );
}
