"use client";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";
const navItems = ["Products", "Customers", "Pricing", "Learn"];

const Finpay = () => {
  return (
    <>
      <motion.div className="w-full h-20 flex justify-center">
        <motion.div
          initial={{
            opacity: 0,
            animationDuration: 8,
          }}
          animate={{
            opacity: 1,
          }}
          whileHover={{ y: 20 }}
          transition={{ type: "keyframes" }}
          className="h-full w-[80%]
  border-2 border-transparent
  hover:border-gray-200
  hover:shadow-4xl
  transition-all duration-300 ease-in-out
   hover:px-5
  rounded-xl"
        >
          <motion.div className="flex items-center justify-between h-full">
            <div className="flex gap-x-2 w-[50%] justify-between">
              <div className="flex gap-x-2">
                <Image
                  src="/finpay.png"
                  width={0}
                  height={0}
                  unoptimized
                  alt="finpay logo"
                  className="w-auto h-8"
                />
                <span className="text-3xl font-semibold text-[#1d4150]">
                  Finpay
                </span>
              </div>

              <div className="w-[70%] flex items-center gap-x-14 justify-end">
                {navItems.map((item, index) => (
                  <div
                    key={index}
                    className="text-[#1d4150] font-medium hover:scale-125  ease-in-out transition-all hover:cursor-pointer  outline-none duration-300 flex flex-col group"
                  >
                    <span className="bg-bottom-left bg-linear-to-r from-[#1d4150] to-[#1d4150] bg-size-[0%_2px] bg-no-repeat group-hover:bg-size-[100%_2px] transition-all duration-500 ease-out">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex gap-x-5">
              <button className="border-2 border-gray-300 px-6 rounded-lg py-2 text-[#1d4150] font-semibold transition-all ease-in-out duration-300 hover:skew-x-12 hover:cursor-pointer">
                Login
              </button>
              <button className="border-none bg-[#2a8f9e] px-6 rounded-lg py-3 text-white font-medium transition-all ease-in-out duration-300 hover:skew-x-12 hover:cursor-pointer">
                Sign Up
              </button>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div className="w-full flex justify-center mt-20 ">
        <div className="w-7xl flex">
          <div className="w-[50%] flex flex-col gap-y-8">
            <div className="flex flex-col gap-y-4">
              <div className="text-7xl font-bold">Get paid early</div>
              <div className="text-7xl font-medium">save automatically</div>
              <div className="text-7xl font-medium">all your pay.</div>
            </div>

            <div className="text-gray-400 text-md w-[75%]">
              Supports small businesses with simple invoicing, powerful
              integrations and cash flow management tools.
            </div>

            <div className="w-[70%] relative">
              <input
                type="text"
                placeholder="Your business email"
                className="h-16 w-full rounded-xl border-2 border-gray-300 pl-4 pr-40 font-medium text-lg focus:outline-none"
              />

              <button
                className="absolute top-1/2 right-2 -translate-y-1/2
               flex items-center gap-x-2
               bg-[#2a8f9e] px-6 py-3 rounded-lg
               text-white font-medium
               transition-all duration-300 hover:opacity-90"
              >
                <span>Get Started</span>
                <MoveUpRight className="h-5 w-5" />
              </button>
            </div>

            <div className="flex items-center gap-x-16">
              <Image
                unoptimized
                src="/klarna.png"
                alt="klarna"
                width={0}
                height={0}
                className="h-16 w-auto"
              />
              <Image
                unoptimized
                src="/coinbase.png"
                alt="klarna"
                width={0}
                height={0}
                className="h-24 w-auto items-end"
              />
              <Image
                unoptimized
                src="/instakart.png"
                alt="klarna"
                width={0}
                height={0}
                className="h-20 w-auto"
              />
            </div>
          </div>
          <div className="flex-1">
            <Image
              src="/finpayright.png"
              unoptimized
              width={0}
              height={0}
              alt="finpay image"
              className="w-full h-96 object-contain hover:scale-110 duration-300 ease-in-out hover:skew-x-2"
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Finpay;
