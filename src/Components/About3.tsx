import { useState } from 'react'
import whyChoose from '../assets/Images/whyChoose.svg'

type IconProps = {
  color: string
}

const IconUp: React.FC<IconProps> = ({ color }) => (
  <svg
    className={`w-4 h-4 ${color}`}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
  </svg>
)

const IconDown: React.FC<IconProps> = ({ color }) => (
  <svg
    className={`w-4 h-4 ${color}`}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
)

const About3: React.FC = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0])

  const toggleIndex = (index: number) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index))
    } else {
      setOpenIndexes([...openIndexes, index])
    }
  }

  const accordionItems = [
    {
      title: 'Professional Design',
      content:
        'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel.',
    },
    { title: 'Top-Notch Support', content: '' },
    { title: 'Header and Slider Options', content: '' },
  ]

  return (
    <section className="relative bg-gradient-to-t from-[#FFE6D03D] to-transparent py-24 font-family-urbanist">
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Image */}
        <div>
          <img
            src={whyChoose}
            alt="Interior"
            className="w-full max-w-[650px] h-auto object-contain rounded-[15px]"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="max-w-xl mx-auto lg:mx-0">
          <p className="text-[12px] 2xl:text-[14px] font-medium uppercase tracking-[0.4px] text-[#848385]">
            Why Choose Us?
          </p>

          <h2 className="mt-4 text-[32px] sm:text-[36px] lg:text-[42px] 2xl:text-[48px] 4xl:text-[56px] leading-[44px] lg:leading-[50px] 2xl:leading-[56px] 4xl:leading-[64px] font-semibold text-[#343F52]">
            We bring solutions to make life easier.
          </h2>

          <div className="mt-10 space-y-6">
            {accordionItems.map((item, index) => {
              const isOpen = openIndexes.includes(index)
              return (
                <div key={index}>
                  <button
                    onClick={() => toggleIndex(index)}
                    className={`flex items-center gap-2 font-semibold text-[16px] 2xl:text-[18px] 4xl:text-[20px] focus:outline-none ${
                      isOpen ? 'text-[#848385]' : 'text-[#343F52]'
                    }`}
                  >
                    {isOpen ? (
                      <IconUp color="text-[#848385]" />
                    ) : (
                      <IconDown color="text-[#343F52]" />
                    )}
                    {item.title}
                  </button>

                  {isOpen && item.content && (
                    <p className="mt-4 pl-7 text-[16px] 2xl:text-[18px] 4xl:text-[20px] leading-[29px] 2xl:leading-[32px] 4xl:leading-[36px] text-[#60697B]">
                      {item.content}
                    </p>
                  )}
                </div>
              )
            })}
          </div>
        </div>

      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          viewBox="0 0 1440 140"
          className="w-full h-[140px]"
          preserveAspectRatio="none"
        >
          <path
            fill="#FEFEFE"
            d="M0,96L80,106.7C160,117,320,139,480,138.7C640,139,800,117,960,101.3C1120,85,1280,75,1360,69.3L1440,64L1440,140L1360,140C1280,140,1120,140,960,140C800,140,640,140,480,140C320,140,160,140,80,140L0,140Z"
          />
        </svg>
      </div>
    </section>
  )
}

export default About3


