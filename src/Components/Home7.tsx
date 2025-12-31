import Gallery from '../assets/Images/Gallery.svg';

const GallerySection = () => {
  return (
    <section className="w-full py-16 bg-white flex flex-col items-center font-family-poppins">
      <p className="text-sm sm:text-base text-[#616161]">Gallery</p>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-8 text-center">
        #FuniroFurniture
      </h2>
      
      <img
        src={Gallery}
        alt="Furniture Gallery"
        className="w-full h-auto object-cover"
      />
    </section>
  );
};

export default GallerySection;
