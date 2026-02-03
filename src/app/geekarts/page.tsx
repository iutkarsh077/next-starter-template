"use client";

import {
  BatteryFull,
  ChartNoAxesColumnIncreasing,
  FastForward,
  Search,
  Triangle,
  Wifi,
} from "lucide-react";

const GeekArts = () => {
  return (
    <div className="w-full flex justify-center h-full p-5">
      <div className="w-7xl h-[150vh] border-20 bg-[#e4e1d7] border-gray-800 rounded-4xl  py-2">
        <div className="flex justify-between px-4">
          <div className="font-semibold">9:41</div>
          <div className="text-zinc-500 font-semibold">Mon Apr 26</div>
          <div className="flex gap-x-5 items-center">
            <ChartNoAxesColumnIncreasing className="font-bold" />
            <Wifi />
            <BatteryFull />
          </div>
        </div>

        <div className="mt-5 px-4">
          <div className="font-extrabold text-8xl">Comprehensive</div>
          <div className="font-extrabold text-8xl">Guide For Graphic</div>
          <div className="font-extrabold text-8xl text-[#d9351c] flex justify-between w-[90%]">
            <span>Designers</span>
            <span>22</span>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-4 gap-x-20 text-zinc-500 px-4">
          <span className="wrap-break-word">
            Ideally, we equate the word minimal with simple - basic design that
            is reduced
          </span>
          <div>
            How do you strip something creative down to its essential elements
            without eliminating the creativity?
          </div>
          <div>
            There a reason why something which is, on the face of it, simple
            requires a comprehensive guide.
          </div>
          <div>
            Lets start with a discussion of what minimal design actually is.
          </div>
        </div>

        <div className="bg-[#d9351c] h-80 flex gap-x-5 mt-5">
          <div className="grid grid-cols-3 w-[80%]  text-white">
            <div className="pl-6 pt-2">001</div>
            <div className="pl-4 pt-2">002</div>
            <div className="pl-4 pt-2">003</div>
            <div className="bg-black pt-4 flex flex-col justify-between">
              <div className="h-[70%] pl-6">001</div>
              <div className="h-[30%] w-full  bg-[#d9351c] flex flex-col items-center justify-end">
                <div className="bg-[#755b54] h-full w-[95%] pl-4 pt-2">001</div>
              </div>
            </div>
            <div className="bg-black pl-4 pt-4">002</div>
            <div></div>
            <div className="flex justify-center w-full bg-[#d9351c]">
              <div className="w-[95%] bg-[#755b54]">
                <div className=" pt-4 text-9xl flex items-end h-full">1532</div>
              </div>
            </div>
            <div className="bg-black flex items-end pl-4 pb-4">002</div>
            <div className="pl-4 pb-4 flex items-end">003</div>
          </div>

          <div className=" text-white flex flex-col justify-between">
            <h1 className="text-8xl">Box</h1>
            <div className="w-[60%] flex flex-col gap-y-3">
              <div className="text-white font-semibold">
                Minimal design can be boiled
              </div>
              <div className="text-gray-100 opacity-45">Maxim Less is More</div>
            </div>
          </div>
        </div>

        <div className="h-64  flex">
          <div className="flex w-[40%]">
            <div className=" h-full  flex items-end">
            <div className="h-[50%] w-auto flex gap-x-5">
              <Triangle className="h-full w-auto rotate-90 fill-black" />
              <span className="text-9xl">02</span>
            </div>
          </div>
          <div className=" flex items-end">
            <div className="h-[50%] text-gray-400 opacity-80  tracking-wider pt-2 font-semibold text-2xl">
              /683
            </div>
          </div>
          </div>

          <div className="w-[60%] flex justify-between">
            <div className="h-full flex gap-x-8 w-[50%] justify-end items-end">
                <FastForward className="h-[50%] rotate-180 w-auto text-gray-400 opacity-80" />
                <FastForward className=" h-[50%] w-auto text-gray-400 opacity-80" />
            </div>

            <div className="w-[40%] flex justify-end items-end pr-5">
                <div className="bg-black w-30 h-30 rounded-full flex items-center justify-center text-white">
                    <Search className="w-8 h-8" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeekArts;
