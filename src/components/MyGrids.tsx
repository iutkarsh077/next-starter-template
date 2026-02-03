import Image from "next/image";

const MyGrids = () => {
  return (
    <>
      <div className="my-16 sm:my-20 px-4 text-center">
        <p className="text-[#FC8F35] text-sm sm:text-lg font-medium">
          How It Works / Process to Book Your Property
        </p>
        <p className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-2">
          Get Your Dream Home in Reality!
        </p>
      </div>

      <div className="w-full flex justify-center px-4 pb-16">
        <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          
          
          <div className="h-full flex flex-col justify-between">
            <p className="text-amber-500 font-semibold text-4xl sm:text-5xl">01</p>
            <div className="py-3">
              <p className="font-semibold">Browse Luxury Homes</p>
              <p className="text-zinc-700 text-sm">
                Explore verified villas, retreats and resorts across India’s most sought-after destinations.
              </p>
            </div>
          </div>

          <Image
            src="/fifth.avif"
            width={400}
            height={300}
            alt="Browse Homes"
            className="w-full h-48 object-cover rounded-md"
          />

         
          <div className="h-full flex flex-col justify-between">
            <p className="text-amber-500 font-semibold text-4xl sm:text-5xl">03</p>
            <div className="py-3">
              <p className="font-semibold">Invest Securely</p>
              <p className="text-zinc-700 text-sm">
                Upload your KYC, sign digitally and complete payment in a few clicks.
              </p>
            </div>
          </div>

          <Image
            src="/first.avif"
            width={400}
            height={300}
            alt="Invest Securely"
            className="w-full h-48 object-cover rounded-md"
          />

         
          <div className="h-full flex flex-col justify-between">
            <p className="text-amber-500 font-semibold text-4xl sm:text-5xl">05</p>
            <div className="py-3">
              <p className="font-semibold">Exit or Resell</p>
              <p className="text-zinc-700 text-sm">
                List your share for resale with smooth exits. Flexibility is part of ownership.
              </p>
            </div>
          </div>

      
          <Image
            src="/second.avif"
            width={400}
            height={300}
            alt="Choose Fraction"
            className="w-full h-48 object-cover rounded-md"
          />

          <div className="h-full flex flex-col justify-between">
            <p className="text-amber-500 font-semibold text-4xl sm:text-5xl">02</p>
            <div className="py-3">
              <p className="font-semibold">Choose Your Fraction</p>
              <p className="text-zinc-700 text-sm">
                Select shares, check live availability and projected ROI instantly.
              </p>
            </div>
          </div>

        
          <Image
            src="/third.avif"
            width={400}
            height={300}
            alt="Stay Earn Grow"
            className="w-full h-48 object-cover rounded-md"
          />

          <div className="h-full flex flex-col justify-between">
            <p className="text-amber-500 font-semibold text-4xl sm:text-5xl">04</p>
            <div className="py-3">
              <p className="font-semibold">Stay, Earn & Grow</p>
              <p className="text-zinc-700 text-sm">
                Enjoy stays while your property generates steady income.
              </p>
            </div>
          </div>

          <Image
            src="/fourth.avif"
            width={400}
            height={300}
            alt="Final Step"
            className="w-full h-48 object-cover rounded-md"
          />
        </div>
      </div>
    </>
  );
};

export default MyGrids;
