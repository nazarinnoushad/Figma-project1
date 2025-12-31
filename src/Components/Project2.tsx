import twentyDay from "../assets/Images/twentyDay.svg";
import Custom from "../assets/Images/Custom.svg";
import Many from "../assets/Images/Many.svg";
import Free from "../assets/Images/Free.svg";

const features = [
  { title: "20 day returns", desc: "Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.", image: twentyDay },
  { title: "Custom Made", desc: "Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.", image: Custom },
  { title: "Many Options", desc: "Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.", image: Many },
  { title: "Free Shipping", desc: "Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.", image: Free },
];

const Project2 = () => {
  return (
    <section className="w-full bg-white font-family-urbanist py-16 2xl:py-24">
      <div className="mx-auto px-4 max-w-7xl 2xl:max-w-[2000px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 2xl:gap-16">
          {features.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-8 2xl:p-14 text-center"
            >
              <img
                src={item.image}
                alt={item.title}
                className="mx-auto mb-5 max-w-[56px] 2xl:max-w-[80px]"
              />
              <h3 className="font-semibold text-gray-800 mb-3 text-base 2xl:text-xl">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed 2xl:text-lg">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project2;


