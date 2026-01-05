import trophy from '../assets/Images/trophy.svg'
import guarantee from '../assets/Images/guarantee.svg'
import shipping from '../assets/Images/shipping.svg'
import customerSupport from '../assets/Images/customerSupport.svg'

const features = [
  {
    img: trophy,
    title: 'High Quality',
    desc: 'crafted from top materials',
  },
  {
    img: guarantee,
    title: 'Warranty Protection',
    desc: 'Over 2 years',
  },
  {
    img: shipping,
    title: 'Free Shipping',
    desc: 'Order over 150 $',
  },
  {
    img: customerSupport,
    title: '24 / 7 Support',
    desc: 'Dedicated support',
  },
]

const FeaturesBar = () => {
  return (
    <section className="bg-[#FAF3EA] font-family-poppins h-auto lg:h-[120px] 2xl:h-[160px] mb-16">
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 h-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 2xl:gap-12 py-8 lg:py-0 h-full items-center">
          {features.map(({ img, title, desc }) => (
            <div key={title} className="flex items-center gap-4 2xl:gap-6">
              <img
                src={img}
                alt={title}
                className="w-8 h-8 2xl:w-12 2xl:h-12"
              />
              <div>
                <h4 className="font-semibold text-[16px] 2xl:text-[20px] text-black">
                  {title}
                </h4>
                <p className="text-[14px] 2xl:text-[16px] text-gray-500">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesBar
