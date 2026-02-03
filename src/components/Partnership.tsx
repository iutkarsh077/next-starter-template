import Image from "next/image";

const Partnership = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col lg:flex-row min-h-80 sm:min-h-95 lg:min-h-105">
        
        <div className="w-full lg:w-1/2 h-64 sm:h-72 lg:h-auto">
          <Image
            src="/first.avif"
            width={800}
            height={600}
            alt="image"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col justify-center gap-3 sm:gap-4 px-4 sm:px-8 lg:px-10 bg-[url(/bg2.jpg)] bg-center bg-cover">
          <p className="text-[#FC8F35] font-medium text-sm sm:text-base">
            Partner with Us!
          </p>

          <p className="font-bold text-xl sm:text-2xl md:text-3xl lg:max-w-[80%]">
            Are You a Builder or Developer? Let Grow Together!
          </p>

          <p className="text-sm sm:text-base lg:max-w-[85%]">
            Showcase your premium property to verified investors through our
            platform. Submit your project and join our network of trusted real
            estate partners.
          </p>

          <button
            type="button"
            className="bg-black text-white px-5 py-2 mt-3 sm:mt-4 max-w-fit transition-all duration-150 hover:rounded-md hover:cursor-pointer"
          >
            Partner with Us
          </button>
        </div>

      </div>
    </section>
  );
};

export default Partnership;
