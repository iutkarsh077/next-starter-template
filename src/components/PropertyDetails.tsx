"use client";
import { GetInformation } from "../../actions/GetInfo";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

interface IResponse {
  image: string;
  location: string;
  pricehike: string;
}

const PropertyDetails = () => {
  const [gridResponse, setGridResponse] = useState<IResponse[] | null>(null);
  const shades = ["bg-amber-600","bg-amber-500", "bg-amber-400", "bg-amber-300", "bg-amber-200"];
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchInfo = async () => {
      try {
        setLoading(true);
        const res = await GetInformation();
        if (res.status === false) {
          throw new Error("Internal Server error");
        }
        const data = await JSON.parse(res.data!);
        console.log(data);
        setGridResponse(data);
      } catch (error) {
        console.log(error);
        alert("Internal Server error");
      } finally {
        setLoading(false);
      }
    };
    fetchInfo();
  }, []);

  if (loading === true || gridResponse === null) {
    return (
      <div className="w-full h-80 flex flex-col justify-center gap-y-4 items-center ">
        <Loader2 className="animate-spin w-8 h-8 text-black" />
        <span>Loading, Please wait...</span>
      </div>
    );
  }
  return (
   <>
  <div className="flex justify-center px-4">
    <div className="max-w-7xl w-full flex flex-col lg:flex-row py-6 gap-y-6">
      <div className="w-full lg:w-1/2 leading-relaxed text-center lg:text-left">
        <p className="text-[#FC8F35]  font-medium">
          Featured Luxury Properties
        </p>
        <p className="text-2xl sm:text-3xl font-semibold">
          Own a Piece of Paradise!
        </p>
      </div>

      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <p className="italic font-normal text-sm sm:text-base">
          Handpicked vacation homes in stunning destinations - each offering a
          blend of elegence, exclusivity and guaranteed returns.
        </p>

        <button
          type="button"
          className="bg-black text-white px-6 py-2 mt-4 transition-all duration-150 hover:rounded-md"
        >
          View all Properties
        </button>
      </div>
    </div>
  </div>

  <div className="w-full my-6 px-4">
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {gridResponse.map((item: IResponse, index: number) => (
        <div className="relative group overflow-hidden rounded-xl" key={index}>
          <Image
            width={0}
            height={0}
            unoptimized
            className="w-full h-72 object-cover"
            src={item.image}
            alt="image"
          />
          <p className="absolute top-3 right-3 text-xs bg-white px-4 py-1 rounded-xl font-medium text-green-500">
            <span>&#10138;</span>
            {item.pricehike}
          </p>
          <p className="absolute group-hover:translate-x-4 transition-all ease-in-out duration-300 left-4 bottom-4 text-white font-medium text-lg">
            {item.location}
          </p>
        </div>
      ))}
    </div>

    <div className="flex gap-x-2 justify-center h-16 items-center mt-6">
      {shades.map((item, index) => (
        <span
          key={index}
          className={`w-3 h-3 rounded-full ${item}`}
        ></span>
      ))}
    </div>
  </div>
</>

  );
};

export default PropertyDetails;
