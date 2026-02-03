const Testimonials = () => {
  const shades = [600, 500, 400, 300, 200]
  return (
    <section className="w-full my-12 sm:my-16 flex justify-center px-4">
      <div className="w-full max-w-6xl flex flex-col gap-8">
        
        <div className="text-center sm:text-left">
          <p className="text-[#FC8F35] text-sm sm:text-lg font-medium tracking-wider">
            Testimonials / Success Stories
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold mt-2">
            Hear What Our Clients Say About Us!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          <div className="border-2 border-dotted border-zinc-400 p-4 sm:p-5 text-zinc-700 space-y-3">
            <p className="text-sm sm:text-base">
              Owning a slice of a Goa villa has been life-changing. We love
              getting nearly 40 days of vacation there each year, and the rental
              checks cover most of our annual travel costs. The platform team
              took care of everything – legal, maintenance, bookings – and the
              dashboard makes tracking our income a breeze.
            </p>
            <div className="text-sm">
              <span className="text-black font-medium">- Priya S.</span>{" "}
              <span className="text-zinc-700">Mumbai Investor</span>
            </div>
          </div>

          <div className="border-2 border-dotted border-zinc-400 p-4 sm:p-5 text-zinc-700 space-y-3">
            <p className="text-sm sm:text-base">
              Owning a slice of a Goa villa has been life-changing. We love
              getting nearly 40 days of vacation there each year, and the rental
              checks cover most of our annual travel costs. The platform team
              took care of everything – legal, maintenance, bookings – and the
              dashboard makes tracking our income a breeze.
            </p>
            <div className="text-sm">
              <span className="text-black font-medium">- Anil M.</span>{" "}
              <span className="text-zinc-700">Los Angeles, CA</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-2">
          {shades.map((item, index)=>(
            <span key={index} className={`w-2.5 h-2.5 rounded-full bg-amber-${item}`}></span>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
