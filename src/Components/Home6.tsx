import syltherine from "../assets/Images/syltherine.svg";
import Lolito from "../assets/Images/Lolito.svg";
import Respira from "../assets/Images/Respira.svg";
import Grifo from "../assets/Images/Grifo.svg";
import Muggo from "../assets/Images/Muggo.svg";
import Pingky from "../assets/Images/Pingky.svg";
import Potty from "../assets/Images/Potty.svg";

const products = [
  { name: "Syltherine", desc: "Stylish cafe chair", img: syltherine },
  { name: "Lolito", desc: "Luxury big sofa", img: Lolito },
  { name: "Respira", desc: "Outdoor bar table and stool", img: Respira },
  { name: "Lolito", desc: "Luxury big sofa", img: Lolito },
  { name: "Grifo", desc: "Night lamp", img: Grifo },
  { name: "Muggo", desc: "Small mug", img: Muggo },
  { name: "Pingky", desc: "Cute bed set", img: Pingky },
  { name: "Potty", desc: "Minimalist flower pot", img: Potty },
];

const Products = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white font-family-poppins">
      
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
        Our Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div
            key={index} 
            className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-auto object-contain"
            />

            <div className="p-4">
              <h3 className="font-semibold text-gray-800">{product.name}</h3>
              <p className="text-gray-500 text-sm mt-1">{product.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <button className="px-10 py-2 bg-[#FFE6D0] text-[#848385] font-semibold rounded">
          Show More
        </button>
      </div>
    </section>
  );
};

export default Products;
