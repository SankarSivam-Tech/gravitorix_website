import React, { useEffect, useState } from "react";
import { assets, services } from "../assets/assets";
import { motion } from "framer-motion";

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(services.length);
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
      prevIndex === 0 ? services.length - 1 : prevIndex - 1
    );
  };

  const right_arrow = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  return (
    <>

      <div className="relative w-full p-6 py-10 bg-[#F9F9FF]">
        <div className="absolute -top-9 left-[32%] transform -translate-x-1/2 w-[72px] h-[36px] overflow-hidden z-50">
          <div className="w-[72px] h-[72px] rounded-full bg-gradient-to-br from-pink-500 to-purple-700"></div>
        </div>

        <h1 className="text-2xl sm:text-4xl font-bold text-center mb-2">
          Services we offer
        </h1>



        <article className="flex justify-end mb-8">
          <button onClick={left_arrow} className="bg-gray-200 p-3 mr-2">
            <img src={assets.left_arrow} alt="previous" />
          </button>

          <button onClick={right_arrow} className="bg-gray-200 p-3 mr-2">
            <img src={assets.right_arrow} alt="next" />
          </button>
        </article>

        <article className="overflow-hidden">
          <section
            className="flex gap-8 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`,
            }}
          >
            {services.map((service, index) => (
              <motion.section
                key={index}
                className="relative flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 hover:border hover:border-red-500 rounded-md  transition-all duration-100 ease-in-out"
                whileHover={{ scale: 1.05, y: 15 }}
              >
              <div className="size-10 mx-5 my-3 border border-[#DE4396] rounded-full p-2">
                {service.image}
              </div>

                <h3 className="font-medium text-left pl-4 text-gradient1">
                  {service.title}
                </h3>

                <p className="p-4 text-gray-400 text-md ">
                  {service.description}
                </p>
              </motion.section>
            ))}
          </section>
        </article>
      </div>
    </>
  );
};

export default Services;
