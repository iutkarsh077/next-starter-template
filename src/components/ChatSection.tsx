import { BrainCog, User } from "lucide-react";
import { useState } from "react";
import "@/app/form-submission/_components/style.css";

interface IConv {
  role: string;
  message: string;
}

const ChatSection = () => {
  const [conversation, setConversation] = useState<IConv[] | null>([
    {
      role: "User",
      message: "What is today's weather in New York?",
    },
    {
      role: "ai",
      message: "Weather in New York is -10 degrees Celsius.",
    },
  ]);

  
  return (
    <div className="w-full relative h-full flex flex-col gap-y-7 mt-4 overflow-y-scroll scrollbarhidden">
      {conversation?.map((item: IConv, index: number) => (
        <div
          key={index}
          className={`flex px-4 ${item.role === "ai" ? "justify-start" : "justify-end"}`}
        >
          <div
            className={` gap-x-2 flex h-full items-center   ${item.role === "ai" ? "" : " flex-row-reverse"}`}
          >
            <span className="bg-black text-white p-2 rounded-full">
              {item.role === "User" ? <User /> : <BrainCog />}
            </span>
            <span className=" bg-gray-200 px-2  rounded-xl py-2 font-medium font-mono">
              {item.message}
            </span>
          </div>
        </div>
      ))}

      <div className="absolute bottom-6 w-full px-4">
        <div className="flex items-center h-full gap-x-2">
            <input type="text" className="border-2 border-black w-[75%] outline-none py-1 rounded-xl px-2 font-mono" placeholder="How can i help you?" />
        <button className="flex-1 bg-black transition-all duration-300 ease-in-out  text-white px-4 rounded-2xl font-mono uppercase py-1 hover:shadow-3xl hover:cursor-pointer">Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatSection;
