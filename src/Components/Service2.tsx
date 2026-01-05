import { useState } from "react";
import syltherine from "../assets/Images/syltherine.svg";
import Lolito from "../assets/Images/Lolito.svg";
import Respira from "../assets/Images/Respira.svg";
import Grifo from "../assets/Images/Grifo.svg";
import Muggo from "../assets/Images/Muggo.svg";
import Pingky from "../assets/Images/Pingky.svg";
import Potty from "../assets/Images/Potty.svg";

const items = [
  { name: "Syltherine", desc: "Stylish cafe chair", img: syltherine },
  { name: "Lolito", desc: "Luxury big sofa", img: Lolito },
  { name: "Respira", desc: "Outdoor bar table and stool", img: Respira },
  { name: "Lolito", desc: "Luxury big sofa", img: Lolito },
  { name: "Grifo", desc: "Night lamp", img: Grifo },
  { name: "Muggo", desc: "Small mug", img: Muggo },
  { name: "Pingky", desc: "Cute bed set", img: Pingky },
  { name: "Potty", desc: "Minimalist flower pot", img: Potty },
];

const categories = ["All", "Beds", "Sofa", "Table", "Chair"];

const ItemsSection = () => {
  const [selected, setSelected] = useState("All");

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white font-family-poppins w-full">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
        Our Products
      </h2>

   
      <div className="flex gap-8 mb-12 text-sm md:text-base overflow-x-auto whitespace-nowrap scrollbar-hide justify-start md:justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            style={selected === cat ? { color: "#C68642" } : {}}
            className={`px-4 py-1 font-semibold border-b-2 transition shrink-0 ${
              selected === cat
                ? "border-[#FFE6D0]"
                : "border-transparent text-gray-500 hover:text-gray-800"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-gray-900">{item.name}</h3>
              <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ItemsSection;
