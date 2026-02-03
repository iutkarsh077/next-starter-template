const Ownership = () => {
  return (
    <div className="flex justify-center items-center w-full px-4 py-12 sm:py-16">
      <div className="w-full flex flex-col items-center lg:flex-row gap-y-10 lg:gap-x-16">
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="flex flex-col justify-center items-center lg:items-start w-full gap-y-3 text-center lg:text-left lg:w-[80%]">
            <p className="text-[#FC8F35]  font-medium">
              Own a Luxury Home - Without Buying it All!
            </p>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
              What is Fractional Property Ownership?
            </p>
            <p className="italic text-sm sm:text-base text-slate-700">
              Fractional Ownership lets you live the luxury lifestyle, grow your
              wealth and share the cost - all in one smart investment.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-slate-800 gap-y-5 text-sm sm:text-base text-center lg:text-left">
          <div className="space-y-3">
            <div className="tracking-wide">
              Fractional property ownership means you{" "}
              <b className="text-stone-700">co-own a real property</b> — like a
              luxury villa, resort, or holiday home — along with a small group
              of other investors.
            </div>
            <div>
              Instead of paying the full cost of the home, you invest in a{" "}
              <b className="text-stone-700">fraction (or share)</b> of it and
              get all the benefits of ownership.
            </div>
          </div>

          <p>
            Everything — from maintenance to guest management — is handled by
            professionals, so you get{" "}
            <b className="text-stone-700">
              the joy of owning a luxury home without the headaches{" "} 
            </b>
             of managing it.
          </p>

          <button
            type="button"
            className="bg-black text-white px-6 py-2 mt-2 transition-all duration-150 hover:rounded-md"
          >
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ownership;
