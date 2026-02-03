import { grid1 } from "@/helpers/constant";
import Image from "next/image";

const WhyItMatters = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-0 lg:bg-[url('/new-black.png')] lg:bg-cover lg:bg-center lg:bg-no-repeat">
      
     
      <div className="mx-auto max-w-6xl flex flex-col items-center justify-center text-center text-white min-h-[260px] sm:min-h-[320px] lg:min-h-[360px] gap-2 sm:gap-3">
        
        <p className="text-[#FC8F35] text-xs sm:text-sm md:text-lg font-medium">
          Why Fractional Ownership
        </p>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-black lg:text-white">
          Luxury Living is Now Accessible!
        </h2>

        <p className="max-w-xl sm:max-w-2xl md:max-w-3xl text-xs sm:text-sm md:text-base tracking-wide text-black lg:text-white mt-1 sm:mt-2">
          Gone are the days when luxury homes were out of reach. With fractional
          ownership, you invest in a share of a premium property – enjoying
          exclusive stays and steady rental income while the asset appreciates
          in value.
        </p>
      </div>

     
      <div className="flex justify-center pb-12 sm:pb-16">
        <div className="grid w-full max-w-6xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          
          {grid1.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-800 text-white rounded-md p-4 sm:p-5 flex flex-col justify-between min-h-[140px] sm:min-h-[160px]"
            >
              <Image
                src={item.path}
                width={40}
                height={40}
                alt={item.title}
                className="w-8 h-8 sm:w-10 sm:h-10"
              />

              <p className="font-medium text-sm sm:text-base md:text-lg leading-snug w-[85%]">
                {item.title}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;
