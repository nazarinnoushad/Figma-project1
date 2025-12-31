import eIdeaof from '../assets/Images/eIdeaof.svg'
import Felis from '../assets/Images/Felis.svg'
import inEgestas from '../assets/Images/inEgestas.svg'

const About2: React.FC = () => {
  return (
    <section className="relative w-full max-w-[1800px] mx-auto px-4 sm:px-6 py-12 font-family-urbanist">
      
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-[11px] sm:text-xs font-medium tracking-widest uppercase text-gray-400">
          What We Do?
        </p>

        <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 leading-snug md:leading-tight">
          The service we offer is specifically
          <br className="hidden md:block" />
          designed to meet your needs.
        </h2>
      </div>

      {/* Cards */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 text-center">
        
        {/* Card 1 */}
        <div className="flex flex-col h-full">
          <img
            src={eIdeaof}
            alt="Web Design"
            className="mx-auto h-44 sm:h-52 md:h-56 object-contain"
          />
          <h3 className="mt-6 text-lg sm:text-xl font-semibold text-gray-800">
            Web Design
          </h3>
          <p className="mt-4 text-sm sm:text-base text-gray-500 leading-relaxed">
            Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget.
          </p>
          <a className="mt-auto pt-4 text-sm sm:text-base font-medium text-gray-400 hover:text-gray-600 transition">
            Learn More →
          </a>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col h-full">
          <img
            src={Felis}
            alt="Graphic Design"
            className="mx-auto h-44 sm:h-52 md:h-56 object-contain"
          />
          <h3 className="mt-6 text-lg sm:text-xl font-semibold text-gray-800">
            Graphic Design
          </h3>
          <p className="mt-4 text-sm sm:text-base text-gray-500 leading-relaxed">
            Maecenas faucibus mollis interdum. Vivamus sagittis lacus vel augue laoreet.
          </p>
          <a className="mt-auto pt-4 text-sm sm:text-base font-medium text-gray-400 hover:text-gray-600 transition">
            Learn More →
          </a>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col h-full">
          <img
            src={inEgestas}
            alt="3D Animation"
            className="mx-auto h-44 sm:h-52 md:h-56 object-contain"
          />
          <h3 className="mt-6 text-lg sm:text-xl font-semibold text-gray-800">
            3D Animation
          </h3>
          <p className="mt-4 text-sm sm:text-base text-gray-500 leading-relaxed">
            Cras justo odio, dapibus ac facilisis in, egestas eget quam.
          </p>
          <a className="mt-auto pt-4 text-sm sm:text-base font-medium text-gray-400 hover:text-gray-600 transition">
            Learn More →
          </a>
        </div>

      </div>
    </section>
  )
}

export default About2














