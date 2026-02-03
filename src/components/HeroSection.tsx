
import Image from 'next/image'

const HeroSection = () => {
  return (
    <div className="hero-section h-175 lg:min-h-screen flex justify-center items-center bg-center bg-cover w-full bg-[url(/hero.png)] px-4">
  <div className="max-w-5xl w-full flex flex-col justify-center items-center text-center">
    <p className="text-sm sm:text-lg font-medium text-[#FC8F35]">
      Owns a Slice of Luxury
    </p>

    <p className="text-white text-2xl sm:text-4xl lg:text-5xl font-medium mt-2">
      Invest, Stay & Earn From Premium
    </p>
    <p className="text-white text-2xl sm:text-4xl lg:text-5xl font-medium">
      Holiday Homes
    </p>

    <p className="pt-4 text-sm sm:text-base lg:text-lg text-white/90 max-w-3xl">
      Experience the smarter way to own a dream vacation home through fractional
      ownership. Co-own luxury villas, resorts, and retreats, enjoy personal
      stays, and earn rental returns - all with complete transparency and ease.
    </p>

    <div className="w-full flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center pt-8">
      <button
        type="button"
        className="bg-linear-to-tr from-[#FFD7BA] to-[#FC8F35] hover:skew-x-6 duration-300 ease-in-out transition-all  px-8 py-2 text-base sm:text-lg rounded-sm"
      >
        Explore Properties
      </button>
      <button
        type="button"
        className="bg-white px-8 py-2 text-base sm:text-lg rounded-sm hover:skew-x-6 duration-300 ease-in-out transition-all"
      >
        How It Work
      </button>
    </div>

    <div className="w-10 h-10 mt-14 sm:mt-20 flex items-center justify-center rounded-full border-2 border-white">
      <div className="w-8 h-8 bg-white/50 rounded-full relative flex items-center justify-center">
        <p className="w-5 h-5 bg-white rounded-full shadow-md"></p>
      </div>
    </div>

    <div className="text-white text-xs sm:text-sm mt-4 flex flex-col items-center animate-bounce">
      <Image
        src="/arrow.png"
        width={100}
        height={100}
        className="w-4 h-6"
        alt="image"
      />
      Scroll Down
    </div>
  </div>
</div>

  )
}

export default HeroSection
