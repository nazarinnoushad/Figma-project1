import livingroom from "../assets/Images/livingroom.svg";
import dining from "../assets/Images/dining.svg";
import bedroom from "../assets/Images/bedroom.svg";

const cards = [
  { id: "dining", label: "Dining", img: dining },
  { id: "living", label: "Living", img: livingroom },
  { id: "bedroom", label: "Bedroom", img: bedroom },
];

const LargeImageCards = () => {
  return (
    <section className="py-6 px-4 lg:px-16 font-family-poppins">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Browse The Range</h2>
        <p className="mt-3 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {cards.map((card) => (
          <div key={card.id} className="text-center">
            <img
              src={card.img}
              alt={card.label}
              className="w-[280px] sm:w-full"
            />
            <p className="mt-4 text-lg font-semibold">{card.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LargeImageCards;
