
import  LocationIcon from '../assets/Images/Vector.svg'
import PhoneIcon from '../assets/Images/Phone.svg'
import ClockIcon from "../assets/Images/Clock.svg";

const ContactForm = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold text-center">Get In Touch With Us</h2>
      <p className="text-center text-gray-400 mt-2 mb-12">
        For More Information About Our Product & Services. Please Feel Free To
        Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
        Hesitate!
      </p>

      <div className="flex flex-col md:flex-row md:gap-16">
        {/* Left Contact Info */}
        <div className="flex-1 space-y-8">
          <div className="flex items-start gap-4">
            <img src={LocationIcon} alt="Address" className="w-6 h-6 mt-1" />
            <div>
              <h3 className="font-bold">Address</h3>
              <p className="text-gray-600">
                236 5th SE Avenue, New York NY10000, United States
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <img src={PhoneIcon} alt="Phone" className="w-6 h-6 mt-1" />
            <div>
              <h3 className="font-bold">Phone</h3>
              <p className="text-gray-600">Mobile: +(84) 546-6789</p>
              <p className="text-gray-600">Hotline: +(84) 456-6789</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <img src={ClockIcon} alt="Working Time" className="w-6 h-6 mt-1" />
            <div>
              <h3 className="font-bold">Working Time</h3>
              <p className="text-gray-600">Monday–Friday: 9:00 - 22:00</p>
              <p className="text-gray-600">Saturday–Sunday: 9:00 - 21:00</p>
            </div>
          </div>
        </div>

        {/* Right Contact Form */}
        <div className="flex-1 mt-10 md:mt-0">
          <form className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Your name</label>
              <input
                type="text"
                placeholder="Abc"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-600"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Email address</label>
              <input
                type="email"
                placeholder="Abc@def.com"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-600"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Subject</label>
              <input
                type="text"
                placeholder="This is an optional"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-600"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Message</label>
              <textarea
                placeholder="Hi! I'd like to ask about"
                className="w-full border border-gray-300 rounded-lg p-3 h-32 focus:outline-none focus:ring-2 focus:ring-yellow-600"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 transition-colors"
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
