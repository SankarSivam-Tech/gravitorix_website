import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row ">
       <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className=" gidole-regular">
          <p className=" text-3xl lg:text-5xl ">
            Great <span className="text-gradient1 font-semibold">Product</span>{" "}
            is <br /> <span className="font-bold ">built by great</span>{" "}
            <span className="text-gradient2 font-semibold">teams</span>
          </p>

          <p className="prata-regular text-[#414141] w-3/4 sm:py-5 leading-relaxed">
            We help build and manage a team of world-class developers to bring
            your vision to life
          </p>

          
            <button className="bg-[#3D63EA] hover:bg-blue-500 text-white px-8 py-2 rounded-md mt-5">
              Let's Get Started
            </button>
        
        </div>
      </div>

      {/* hero right side */}

      <img className="w-full sm:w-1/2" src={assets.hero_img} alt="" />
    </div>
  );
};

export default Hero;
