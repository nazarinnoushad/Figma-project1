import Underline from '../assets/Images/Underline.svg';
import Cras from '../assets/Images/Cras.jpg';
import Mollis from '../assets/Images/Mollis.jpg';
import Ipsum from '../assets/Images/Ipsum.jpg';

const projects = [
  { title: "Cras Fermentum Sem", category: "STATIONARY", img: Cras },
  { title: "Mollis Ipsum Mattis", category: "BRANDING", img: Mollis },
  { title: "Ipsum Ultricies Cursus", category: "PACKAGING", img: Ipsum },
];

const Project3 = () => {
  return (
    <section className="w-full bg-white font-family-urbanist ">
      <div className="max-w-7xl 2xl:max-w-[2000px] mx-auto px-4">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs tracking-widest text-gray-400 uppercase mb-3">
            Latest Projects
          </p>

          <h2 className="text-xl sm:text-2xl md:text-3xl 2xl:text-5xl font-semibold text-gray-800 leading-snug">
            Check out some of our awesome projects{" "}
            <span className="relative inline-block">
              creative
              <img
                src={Underline}
                alt="underline"
                className="absolute left-0 -bottom-1 w-full"
              />
            </span>{" "}
            ideas and great design.
          </h2>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 2xl:gap-12">
          {projects.map((item) => (
            <div key={item.title}>
              <div className="overflow-hidden rounded-xl">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-64 sm:h-72 md:h-80 lg:h-96 2xl:h-[28rem] object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <h3 className="mt-4 font-semibold text-gray-800 text-base 2xl:text-lg">{item.title}</h3>
              <p className="text-xs uppercase tracking-wide text-gray-400 mt-1 2xl:text-sm">
                {item.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project3;
