import React, { useState } from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [visible, setvisible] = useState(false);

  return (
    <div className="flex justify-between items-center py-5 font-medium ">
      <div className="flex items-center ">
        <img src={assets.logo} alt="Company Logo" className="min-w-36 " />
        <p className="text-xl font-bold -ml-[105px] text-[#4A5568]">
          Gravitorix
        </p>
      </div>

      <ul className="hidden sm:flex gap-5  text-base  font-medium text-[#4A5568] text-nowrap mx-5">
        <a href="/about" className="flex flex-col items-center gap-1">
          <p>About us</p>
          <hr className="w-2/4 h-[1.5px] bg-gray-700 border-none hidden " />
        </a>
        <a href="/services" className="flex flex-col items-center gap-1">
          <p>Services</p>
          <hr className="w-2/4 h-[1.5px] bg-gray-700 border-none hidden" />
        </a>
        <a href="/case_study" className="flex flex-col items-center gap-1">
          <p>Case Studies</p>
          <hr className="w-2/4 h-[1.5px] bg-gray-700 border-none hidden" />
        </a>
        <a href="/blog" className="flex flex-col items-center gap-1">
          <p>Blog</p>
          <hr className="w-2/4 h-[1.5px] bg-gray-700 border-none hidden" />
        </a>
        <a href="/how_it_works" className="flex flex-col items-center gap-1">
          <p>How it Works</p>
          <hr className="w-2/4 h-[1.5px] bg-gray-700 border-none hidden" />
        </a>
        <a href="/hire" className="flex flex-col items-center gap-1">
          <p>Hire</p>
          <hr className="w-2/4 h-[1.5px] bg-gray-700 border-none hidden" />
        </a>
      </ul>

      <button className="hidden md:block text-white font-semibold bg-gradient-to-r from-[#57007B] to-[#6675F7] px-8 py-2 rounded-md h-10">
        Contact us
      </button>

      <img
        onClick={() => setvisible(true)}
        src={assets.menu_icon}
        className="w-5 cursor-pointer sm:hidden"
        alt=""
      />

      {/* side bar menu for small screens */}

      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setvisible(false)}
            className="flex justify-end p-6 cursor-pointer"
          >
            <img src={assets.cross_icon} className=" w-6" alt="cross-icon" />
          </div>

          <ul
            onClick={() => setvisible(false)}
            className="flex flex-col items-center mt-5  text-lg font-medium"
          >
            <a href="/about" className="px-4 py-2 rounded-full inline-block">
              About us
            </a>
            <a href="/services" className="px-4 py-2 rounded-full inline-block">
              Services
            </a>
            <a
              href="/case_study"
              className="px-4 py-2 rounded-full inline-block"
            >
              Case Studies
            </a>
            <a href="/blog" className="px-4 py-2 rounded-full inline-block">
              Blog
            </a>

            <a
              href="/how_it_works"
              className="px-4 py-2 rounded-full inline-block"
            >
              How it Works
            </a>

            <a href="/hire" className="px-4 py-2 rounded-full inline-block">
              Hire
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
