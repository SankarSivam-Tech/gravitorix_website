import React, { useEffect, useState } from "react";
import { assets, services } from "../assets/assets";
import { motion } from "framer-motion";

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(4);
      } else if (window.innerWidth >= 768) {
        setCardsToShow(2);
      } else {
        setCardsToShow(1);
      }
    };
    updateCardsToShow();

    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  const left_arrow = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.ceil(services.length / cardsToShow) - 1 : prevIndex - 1
    );
  };

  const right_arrow = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % Math.ceil(services.length / cardsToShow)
    );
  };

  return (
    <div className="relative w-full px-4 sm:px-6 lg:px-8 py-16 bg-[#F9F9FF]">
      <div className="max-w-7xl mx-auto">
        <div className="absolute -top-9 left-1/2 transform -translate-x-1/2 w-[72px] h-[36px] overflow-hidden z-10">
          <div className="w-[72px] h-[72px] rounded-full bg-gradient-to-br from-pink-500 to-purple-700"></div>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Services we offer
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions tailored to elevate your business
          </p>
        </div>

        <div className="flex justify-end mb-8 gap-2">
          <button 
            onClick={left_arrow} 
            className="bg-white hover:bg-gray-50 shadow-md rounded-full p-3 transition-all duration-200 hover:shadow-lg"
          >
            <img src={assets.left_arrow} alt="previous" className="w-5 h-5" />
          </button>
          <button 
            onClick={right_arrow} 
            className="bg-white hover:bg-gray-50 shadow-md rounded-full p-3 transition-all duration-200 hover:shadow-lg"
          >
            <img src={assets.right_arrow} alt="next" className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-hidden px-4">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {Array.from({ length: Math.ceil(services.length / cardsToShow) }).map((_, groupIndex) => (
              <div key={groupIndex} className="flex gap-6 min-w-full p-4">
                {services.slice(groupIndex * cardsToShow, (groupIndex + 1) * cardsToShow).map((service, index) => (
                  <motion.div
                    key={groupIndex * cardsToShow + index}
                    className="flex-1 min-w-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.div
                      className="h-full bg-white rounded-xl p-6 shadow-sm border-2 border-transparent hover:border-pink-500 transition-all duration-300 cursor-pointer"
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
                      }}
                    >
                      <div className="w-14 h-14 mb-4 border-2 border-[#DE4396] rounded-full p-3 flex items-center justify-center bg-pink-50">
                        {service.image}
                      </div>
                      <h3 className="font-semibold text-lg text-gray-900 mb-3 bg-gradient-to-r from-pink-500 to-purple-700 bg-clip-text text-transparent">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: Math.ceil(services.length / cardsToShow) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? "w-8 bg-gradient-to-r from-pink-500 to-purple-700" 
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
