import React from "react";
import { assets } from "../assets/assets";

const HireDevelopers = () => {
  return (
    <div className="flex flex-col sm:flex-row  px-14 py-8 md:py-20 my-10 rounded-2xl bg-gradient-to-r from-[#E4ECF7] to-[#f1f1f5]">
      {/* left side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <p className="  text-3xl lg:text-4xl font-semibold">
          Hire the best developers and designers around!
        </p>
      </div>

      <div className="w-full sm:w-1/2 flex sm:justify-end items-center">
      <button className="px-8 py-2 bg-gradient-to-r from-[#F16063] to-[#FFC656] text-white font-medium hover:scale-110 transition-all duration-300 ">
        Hire Top Developers
      </button>
      </div>
    </div>
  );
};

export default HireDevelopers;
