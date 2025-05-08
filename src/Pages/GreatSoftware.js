import React from "react";
import Header from "../Components/Header";
import { assets } from "../assets/assets";

const BuildRightTeam = () => {
  return (
    <section className="bg-white py-12">
      <div className="text-center mb-20 flex flex-col items-center justify-center">
        <div className="w-20 h-1 bg-purple-600 mb-1 rounded-full"></div>
        <Header text1="Way of building" text2="Great Software" />
      </div>

      <div
        className={`mx-auto px-4 sm:px-6 flex flex-col lg:flex-row-reverse items-center gap-y-10 lg:gap-y-0 gap-x-0 lg:gap-x-20 mb-20 max-w-full lg:max-w-[1300px]`}
      >
        <div className="w-full lg:w-[45%] flex justify-center relative">
          <div className="absolute -top-8 -left-8 w-[75px] h-[75px] rounded-full bg-yellow-400 z-0"></div>

          <img
            src={assets.GreatSoftware}
            alt="Team Discussion"
            className="w-full min-h-[300px] lg:min-h-[400px] rounded-xl shadow-lg object-cover z-10"
          />

          <div className="absolute bottom-[-24px] left-1/2 transform -translate-x-1/2 w-[48px] h-[24px] z-10 overflow-hidden">
            <div className="w-[48px] h-[48px] rounded-full bg-gradient-to-br from-pink-500 to-purple-700 -mt-[24px]"></div>
          </div>
        </div>

        <div className="w-full lg:w-[55%] flex flex-col justify-center">
          <h2 className="text-3xl sm:text-3xl font-bold text-gray-900 mb-4">
            Innovative Software Solutions for the Real World
          </h2>
          <p className="text-gray-700 text-[16px] sm:text-[18px] mb-4 leading-[28px] sm:leading-[34px]">
            We build software that tackles real-world challenges with innovative solutions. Designed for scalability and ease of use, our products empower businesses. With a focus on functionality, we help you meet today’s and tomorrow’s needs.</p>
          <p className="text-gray-700 text-base sm:text-lg mb-4 leading-[28px] sm:leading-[32px]">
          Our <span className="text-pink-500 font-medium"> solutions</span> streamline your operations while ensuring cost efficiency and timely delivery within budget.
           </p>

          <blockquote className="italic text-pink-500 mb-4 border-l-4 border-pink-400 pl-4 text-base sm:text-lg leading-[30px] sm:leading-[34px] w-full max-w-[70%]">
            "Technology has the power to change the world, but only if it’s built with purpose and impact in mind."
          </blockquote>

          <div className="flex items-center mt-2">
            <img
              src={assets.satya_nadella}
              alt="Jeewa markram"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <p className="text-gray-900 font-medium">Satya Nadella</p>
              <p className="text-gray-600 text-sm">CEO</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`mx-auto px-4 sm:px-6 flex flex-col-reverse lg:flex-row-reverse sm:flex-row items-center gap-y-10 lg:gap-y-0 gap-x-0 lg:gap-x-20 mb-20 max-w-full lg:max-w-[1300px]`}
      >
        <div className="w-full lg:w-[55%] flex flex-col justify-center">
          <h2 className="text-3xl sm:text-3xl font-bold text-gray-900 mb-4">
            Crafting Software with Impact for Businesses
          </h2>
          <p className="text-gray-700 text-[16px] sm:text-[18px] mb-4 leading-[30px] sm:leading-[34px]">
          Our software is designed to solve real business problems, from efficiency to customer engagement. We focus on practical solutions that drive growth and impact. Technology is our tool to empower your success.
          </p>
          <p className="text-gray-700 text-base sm:text-lg mb-4 leading-[28px] sm:leading-[32px]">
          We create  <span className="text-pink-500 font-medium">impactful software</span> that enhances performance while maximizing cost savings and ensuring on-budget delivery.
 
          </p>

          <blockquote className="italic text-pink-500 mb-4 border-l-4 border-pink-400 pl-4 text-base sm:text-lg leading-[30px] sm:leading-[34px] w-full max-w-[70%]">
            "In the world of business, technology is the ultimate enabler. We build software that empowers people to do more with less."
          </blockquote>

          <div className="flex items-center mt-2">
            <img
              src={assets.sundarpichai}
              alt="Jeewa markram"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <p className="text-gray-900 font-medium"> Sundar Pichai</p>
              <p className="text-gray-600 text-sm">CEO</p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[45%] flex justify-center relative">
          <div className="absolute -top-4 -right-4 w-[48px] h-[48px] rounded-full bg-gradient-to-br from-pink-500 to-purple-700 z-0"></div>

          <img
            src={assets.GreatSoftware1}
            alt="Team Discussion"
            className="w-full min-h-[300px] lg:min-h-[400px] rounded-xl shadow-lg object-cover z-10"
          />

          <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 w-[75px] h-[75px] rounded-full bg-yellow-400 z-0"></div>
        </div>
      </div>

      <div
        className={`mx-auto px-4 sm:px-6 flex flex-col lg:flex-row-reverse items-center gap-y-10 lg:gap-y-0 gap-x-0 lg:gap-x-20 mb-20 max-w-full lg:max-w-[1300px]`}
      >
        <div className="w-full lg:w-[45%] flex justify-center relative">
          <div className="absolute -bottom-4 -left-4 w-[50px] h-[50px] rounded-full bg-yellow-400 z-0"></div>

          <img
            src={assets.GreatSoftware2}
            alt="Team Discussion"
            className="w-full min-h-[300px] lg:min-h-[400px] rounded-xl shadow-lg object-cover z-10"
          />

          <div className="absolute top-[-28px] left-[64%] transform -translate-x-1/2 w-[50px] h-[28px] overflow-hidden z-10">
            <div className="w-[50px] h-[50px] rounded-full bg-gradient-to-br from-pink-500 to-purple-700"></div>
          </div>
        </div>

        <div className="w-full lg:w-[55%] flex flex-col justify-center">
          <h2 className="text-3xl sm:text-3xl font-bold text-gray-900 mb-4">
          Next-Gen Software for Business Growth
          </h2>
          <p className="text-gray-700 text-[16px] sm:text-[18px] mb-4 leading-[30px] sm:leading-[34px]">
          Our next-generation software is built to scale with your business. We provide solutions that stay ahead of industry demands and evolving markets. Stay agile and competitive with technology designed for growth.
          </p>
          <p className="text-gray-700 text-base sm:text-lg mb-4 leading-[28px] sm:leading-[32px]">
          Our scalable software <span className="text-pink-500 font-medium">delivers growth</span> while staying cost-effective and on budget.
           </p>

          <blockquote className="italic text-pink-500 mb-4 border-l-4 border-pink-400 pl-4 text-base sm:text-lg leading-[30px] sm:leading-[39px] w-full max-w-[70%]">
            "Building technology that empowers businesses to innovate is key to staying relevant in a constantly evolving market"
          </blockquote>

          <div className="flex items-center mt-2">
            <img
              src={assets.timcook}
              alt="Jeewa markram"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <p className="text-gray-900 font-medium">Tim Cook</p>
              <p className="text-gray-600 text-sm">CEO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildRightTeam;
