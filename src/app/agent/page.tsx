"use client";
import ChatSection from "@/components/ChatSection";
import { BrainCircuit, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const Agents = () => {
  const [isAgentOpen, setIsAgentOpen] = useState(false);
  return (
    <div className="h-screen bg-[#f4f6f8] w-full">
      <div className="w-full flex justify-between pt-5">
        <div className="w-[55%] flex pl-5">
          <h3 className="font-medium tracking-wide">AIPatrn</h3>
        </div>

        <div className="flex flex-1 justify-between px-5 pr-10">
          <ul className="flex flex-col gap-y-2 font-medium text-[#a3a5a6]">
            <li className="text-black">Home page</li>
            <li>Generator</li>
            <li>Pricing-plan</li>
            <li>Blog - News</li>
          </ul>

          <ul className="flex flex-col gap-y-2 font-medium text-[#a3a5a6]">
            <li>About us</li>
            <li>Features</li>
            <li>Collection-2023</li>
            <li>Career</li>
          </ul>

          <div>
            <span className="flex gap-x-3  border-2 border-gray-300 px-5 font-semibold py-2 rounded-2xl shadow-3xl">
              Menu <ChevronDown />
            </span>
          </div>
        </div>
      </div>

      <div className="pl-5 mt-10 flex flex-col gap-y-3 pr-10">
        <div className="text-[#a3a5a6] font-medium text-2xl">
          Revolutionize Your
        </div>
        <div className="w-full flex flex-col gap-y-3">
          <div className="font-semibold text-7xl font-mono">
            Creative Projects with
          </div>
          <div className="font-semibold text-7xl font-mono">
            the Ultimate AI-Powered
          </div>
          <div className="flex gap-x-5 items-center">
            <div className="font-semibold text-7xl font-mono">Patterns</div>
            <div className="uppercase text-white font-mono bg-black hover:shadow-2xl transition-all ease-in-out duration-300 hover:cursor-pointer px-10 py-5 rounded-4xl">
              Start Generating
            </div>
            <div className="text-[#a3a5a6] font-mono text-xl">
              <div>The Next generation</div>
              <div>
                <span className="text-black font-medium">Production</span> for
                Designers
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 w-full h-96 flex">
        <Image
          src="/flower3.png"
          width={0}
          unoptimized
          className="w-[25%] object-cover h-full"
          height={0}
          alt="image1"
        />
        <Image
          src="/flower2.png"
          width={0}
          unoptimized
          className="w-[25%] object-cover h-full"
          height={0}
          alt="image2"
        />
        <Image
          src="/flower1.png"
          width={0}
          unoptimized
          height={0}
          className="w-[50%] object-cover h-full"
          alt="image3"
        />
      </div>

      <div className="fixed right-8 bottom-8 ">
        {isAgentOpen && (
          <div className="h-96 w-96  border-2 mb-5 border-black rounded-xl">
            <ChatSection/>
          </div>
        )}
        <div className="w-full  flex justify-end">
          <div
            onClick={() => setIsAgentOpen(!isAgentOpen)}
            className="h-16 w-16 flex justify-center items-center rounded-full bg-black text-white animate-pulse hover:cursor-pointer shadow-3xl"
          >
            <BrainCircuit className="text-4xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agents;
