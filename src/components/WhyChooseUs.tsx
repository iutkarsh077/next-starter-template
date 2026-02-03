import { Bitcoin, DollarSign, Euro, IndianRupee } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section className="bg-black mt-16 sm:mt-20 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 flex flex-col lg:flex-row gap-10">
        
        <div className="w-full lg:w-1/2 text-white flex flex-col gap-3 sm:gap-4 justify-center">
          <p className="text-[#FC8F35] text-sm sm:text-base">
            Why Choose Us?
          </p>

          <h2 className="font-semibold text-xl sm:text-2xl md:text-3xl lg:max-w-[80%]">
            100% Trusted Fractional Ownership Platform
          </h2>

          <p className="italic text-sm sm:text-base text-gray-300 lg:max-w-[85%]">
            We bring a seamless digital ownership experience backed by legal
            transparency, strong returns and professional property management.
          </p>
        </div>

       
        <div className="w-full lg:w-1/2 flex items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 w-full">
            
            <div className="min-h-28 bg-zinc-800 flex items-center rounded-md transition hover:shadow-sm hover:shadow-gray-400">
              <div className="flex gap-4 px-4">
                <div className="text-amber-400 font-medium text-2xl"><Bitcoin /></div>
                <div>
                  <h3 className="text-white font-medium">
                    Verified Luxury Properties
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Every property is vetted and RERA-compliant
                  </p>
                </div>
              </div>
            </div>

            <div className="min-h-28 bg-zinc-800 flex items-center rounded-md transition hover:shadow-sm hover:shadow-gray-400">
              <div className="flex gap-4 px-4">
                <div className="text-amber-400 font-medium text-2xl"><Euro /></div>
                <div>
                  <h3 className="text-white font-medium">
                    Full Service Management
                  </h3>
                  <p className="text-gray-400 text-sm">
                    We handle maintenance, rentals and guest stays.
                  </p>
                </div>
              </div>
            </div>

            <div className="min-h-28 bg-zinc-800 flex items-center rounded-md transition hover:shadow-sm hover:shadow-gray-400">
              <div className="flex gap-4 px-4">
                <div className="text-amber-400 font-medium text-2xl"><DollarSign /></div>
                <div>
                  <h3 className="text-white font-medium">
                    Transparent Investment Process
                  </h3>
                  <p className="text-gray-400 text-sm truncate whitespace-pre-wrap">
                    End-to-end digital documentation.
                  </p>
                </div>
              </div>
            </div>

            <div className="min-h-28 bg-zinc-800 flex items-center rounded-md transition hover:shadow-sm hover:shadow-gray-400">
              <div className="flex gap-4 px-4">
                <div className="text-amber-400 font-medium text-2xl"><IndianRupee /></div>
                <div>
                  <h3 className="text-white font-medium">
                    Real Returns, Real Ownership
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Own a legal share of the property, not just a token.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
