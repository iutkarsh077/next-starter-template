import { listItems } from "@/helpers/constant";
import Image from "next/image";

const Benefits = () => {
  return (
    <div className="bg-[url(/bg2.jpg)] bg-center bg-cover w-full py-12 sm:py-16 lg:py-20 my-14">
      <div className=" flex flex-col lg:flex-row gap-y-12 pl-4 sm:pl-6 lg:pl-10">
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <div className="w-full lg:w-[85%]">
            <p className="text-xl sm:text-2xl lg:text-3xl leading-snug font-medium">
              Each co-owner holds a legal share of the property through a
              registered structure (like an SPV), giving you:
            </p>

            <ul className="mt-6 flex flex-col gap-y-6">
              {listItems.map((item, index) => (
                <li key={index} className="flex items-start gap-x-4">
                  <span className="bg-linear-to-tr from-amber-200 to-amber-500 px-2 py-1 rounded-full text-white text-xs mt-1">
                    &#10003;
                  </span>
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-slate-600 text-sm sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="flex  w-full gap-x-6 items-center overflow-hidden">
            <div className="relative w-full px-4 lg:px-0 lg:w-[60%]">
              <Image
                width={0}
                height={0}
                unoptimized
                src="/gallery.jpg"
                className="h-56 sm:h-64 lg:h-72 w-full  rounded-tr-2xl rounded-bl-2xl object-cover"
                alt="image"
              />
              <p className="absolute bottom-4 left-1/3 text-white font-medium text-sm sm:text-base">
                Luxury Apartment
              </p>
            </div>

            <Image
              width={0}
              height={0}
              src="/gallery.jpg"
              unoptimized
              className="hidden sm:block h-56 sm:h-64 lg:h-72 flex-1 rounded-tr-2xl rounded-bl-2xl object-cover"
              alt="image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
