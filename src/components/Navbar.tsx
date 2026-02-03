"use client";
import { navItems } from "@/helpers/constant";
import { Menu, SquareX } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
   <>
  <div
    id="navbar"
    className="bg-black h-20 w-full text-white flex justify-center fixed top-0 z-50"
  >
    <div className="flex justify-between items-center w-[90%]">
      <div className="leading-[0.5]">
        <h1 className="text-2xl sm:text-4xl font-semibold">BRD</h1>
        <h5 className="text-sm sm:text-md">Associates</h5>
      </div>

      <div className="hidden lg:flex gap-x-8 items-center">
        <div className="flex gap-x-6 items-center">
          {navItems.map((item, index) => (
            <Link
            href={item.path}
              key={index}
              className="hover:text-amber-400 cursor-pointer transition-all duration-150"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <button
          type="button"
          className="text-black bg-linear-to-tr from-[#FFA75E] to-[#FC8F35] px-5 py-1.5 font-medium transition-all duration-150 hover:rounded-sm"
        >
          Login
        </button>
        <button
          type="button"
          className="text-amber-400 border border-amber-400 px-5 py-1.5 transition-all duration-150 hover:rounded-sm"
        >
          Join Us
        </button>
      </div>

      <div className="lg:hidden">
        {
          isOpen === true ? (<SquareX onClick={() => setIsOpen(false)} className="text-white w-7 h-7" />) : (<Menu onClick={() => setIsOpen(true)} className="text-white w-7 h-7" />)
        }
      </div>
    </div>
  </div>

  {isOpen && (
    <div className="fixed inset-0 z-40 bg-black text-white flex justify-end">
      <div className="w-full mt-14 sm:w-[70%] md:w-[50%] h-full py-8 px-8 flex flex-col items-end gap-y-6">
        {navItems.map((item, index) => (
          <Link
          href={item.path}
            key={index}
            className="text-lg z-50 hover:text-amber-400 cursor-pointer transition-all duration-150"
          >
            {item.name}
          </Link>
        ))}
        <button
          type="button"
          className="text-black bg-linear-to-tr from-[#FFA75E] to-[#FC8F35] px-6 py-2 font-medium transition-all duration-150 hover:rounded-sm"
        >
          Login
        </button>
        <button
          type="button"
          className="text-amber-400 border border-amber-400 px-6 py-2 transition-all duration-150 hover:rounded-sm"
        >
          Join Us
        </button>
      </div>
    </div>
  )}
</>

  );
};

export default Navbar;
