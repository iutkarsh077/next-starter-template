import { legalItems, quickLinks, socialLinks } from "@/helpers/constant";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="bg-black text-white w-full">
        <div className="max-w-7xl mx-auto px-4 py-14">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="w-full lg:w-2/5 flex flex-col gap-5">
              <div className="leading-tight">
                <h1 className="text-5xl sm:text-6xl font-semibold">BRD</h1>
                <h5 className="text-2xl sm:text-3xl">Associates</h5>
              </div>

              <p className="text-zinc-400 text-sm sm:text-base">
                Real estate encompasses land and any permanent structures on it,
                from homes to commercial buildings, serving as a crucial
                economic sector for investment and development.
              </p>

              <div className="space-y-2 text-sm sm:text-base">
                <p className="flex items-center gap-3">
                  <span className="text-amber-500">@</span>
                  <span>utkarshsingh132002@gmail.com</span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-amber-500">&#9742;</span>
                  <span>+1 98726-72649</span>
                </p>
              </div>
            </div>

            <div className="w-full lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              <div>
                <h3 className="text-lg font-medium mb-4">Quick Links</h3>
                <ul className="flex flex-col gap-2 text-sm sm:text-base">
                  {quickLinks.map((item, index) => (
                    <li
                      key={index}
                      className=" hover:text-amber-400 transition cursor-pointer"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">Legal</h3>
                <ul className="flex flex-col gap-2 text-sm sm:text-base">
                  {legalItems.map((item, index) => (
                    <li
                      key={index}
                      className="hover:text-amber-400 transition cursor-pointer"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">Social Links</h3>
                <ul className="flex flex-col gap-4">
                  {socialLinks.map((item, index) => (
                    <li
                      key={index}
                      className="bg-zinc-700 text-sm sm:text-base w-36 px-6 py-2 flex items-center gap-2 transition hover:scale-105 hover:rounded-md hover:text-amber-400 hover:translate-x-6 cursor-pointer"
                    >
                      <Image
                        src={item.path}
                        width={16}
                        height={16}
                        alt={item.name}
                      />
                      <span>{item.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="bg-black border-t border-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-center text-sm sm:text-base">
          <span>
            <span className="text-zinc-400">© copyright by</span> BRD Associates
            <span className="text-zinc-400"> | All Rights Reserved</span>
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
