import LocationIcon from '../assets/Images/Vector.svg';
import PhoneIcon from '../assets/Images/Phone.svg';
import ClockIcon from "../assets/Images/Clock.svg";

const ContactForm = () => {
  return (
    <section className="
      max-w-6xl 
      2xl:max-w-[1600px] 
      3xl:max-w-[1900px]
      mx-auto 
      px-3 sm:px-4 lg:px-6 3xl:px-10
      py-14 lg:py-16 3xl:py-24
      font-family-poppins
    ">

      <h2 className="
        text-[26px] sm:text-[30px] lg:text-[32px] 3xl:text-[42px]
        font-bold text-center
      ">
        Get In Touch With Us
      </h2>

      <p className="
        text-center text-gray-400 
        mt-3 mb-14 lg:mb-20
        text-[13px] sm:text-[14px] lg:text-[15px] 3xl:text-[18px]
        leading-relaxed
      ">
        For More Information About Our Product & Services. Please Feel Free To Drop Us <br />
        An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
      </p>

      <div className="flex flex-col md:flex-row gap-10 lg:gap-12 3xl:gap-24">

        {/* Left */}
        <div className="flex-1 space-y-5 lg:space-y-6 3xl:space-y-10">

          {[
            {
              icon: LocationIcon,
              title: "Address",
              lines: ["236 5th SE Avenue, New York NY10000, United States"],
            },
            {
              icon: PhoneIcon,
              title: "Phone",
              lines: ["Mobile: +(84) 546-6789", "Hotline: +(84) 456-6789"],
            },
            {
              icon: ClockIcon,
              title: "Working Time",
              lines: [
                "Monday–Friday: 9:00 - 22:00",
                "Saturday–Sunday: 9:00 - 21:00",
              ],
            },
          ].map(({ icon, title, lines }) => (
            <div key={title} className="flex gap-4">
              <img
                src={icon}
                alt=""
                className="w-4 h-4 sm:w-5 sm:h-5 3xl:w-7 3xl:h-7 mt-1"
              />
              <div>
                <h3 className="
                  font-semibold 
                  text-[15px] sm:text-[17px] 3xl:text-[22px]
                ">
                  {title}
                </h3>
                {lines.map((line, i) => (
                  <p
                    key={i}
                    className="text-[13px] sm:text-[15px] 3xl:text-[18px]"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}

        </div>

        {/* Right */}
        <div className="flex-1 mt-8 md:mt-0">
          <form className="space-y-4 lg:space-y-5 3xl:space-y-7">

            {[
              { label: "Your name", type: "text", placeholder: "Abc" },
              { label: "Email address", type: "email", placeholder: "Abc@def.com" },
              { label: "Subject", type: "text", placeholder: "This is an optional" },
            ].map(({ label, type, placeholder }) => (
              <div key={label}>
                <label className="
                  block font-medium 
                  text-[13px] sm:text-[15px] 3xl:text-[18px]
                  mb-1.5
                ">
                  {label}
                </label>
                <input
                  type={type}
                  placeholder={placeholder}
                  className="
                    w-full 
                    h-[44px] sm:h-[50px] 3xl:h-[64px]
                    border border-gray-300 rounded-lg
                    px-3 sm:px-4 3xl:px-6
                    text-[13px] sm:text-[14px] 3xl:text-[17px]
                    focus:outline-none focus:ring-2 focus:ring-[#B88E2F]
                  "
                />
              </div>
            ))}

            <div>
              <label className="block font-medium text-[13px] sm:text-[15px] 3xl:text-[18px] mb-1.5">
                Message
              </label>
              <textarea
                placeholder="Hi! I'd like to ask about"
                className="
                  w-full 
                  h-[90px] sm:h-[110px] 3xl:h-[170px]
                  border border-gray-300 rounded-lg
                  px-3 py-3 3xl:px-6
                  text-[13px] sm:text-[14px] 3xl:text-[17px]
                  resize-none focus:outline-none focus:ring-2 focus:ring-[#B88E2F]
                "
              />
            </div>

            <button
              type="submit"
              className="
                mt-4
                bg-[#B88E2F] text-white
                w-[150px] sm:w-[180px] 3xl:w-[230px]
                h-[42px] sm:h-[46px] 3xl:h-[58px]
                rounded-md
                text-[13px] sm:text-[14px] 3xl:text-[17px]
                font-medium
                hover:bg-[#a47f28] transition
              "
            >
              Submit
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactForm;

