import React, { useState } from 'react';
import { techStack } from '../assets/assets';
import Header from '../Components/Header';
import { motion } from 'framer-motion';

const TechStack = () => {
  const [activeTab, setActiveTab] = useState('Backend');
  const current = techStack.find((stack) => stack.name === activeTab);

  const firstRow = current.images.slice(0, 5);
  const secondRow = current.images.slice(5, 9);

  return (
    <div className=" px-4 pt-12 pb-4 overflow-hidden">
      <div className='text-center mb-10 flex flex-col items-center justify-center'>
        <div className="w-20 h-1 bg-purple-600 mb-2 rounded-full"></div>
        <Header text1="Our" text2="Tech Stack" />
      </div>

      <div className="flex justify-center gap-6 mb-10 flex-wrap w-full max-w-[1600px] px-10 mx-auto">
        {techStack.map(({ name }) => (
          <button
            key={name}
            onClick={() => setActiveTab(name)}
            className={`text-lg font-medium border-b-2 pb-1 transition ${activeTab === name
              ? 'text-[#9C27B0] border-[#9C27B0]'
              : 'text-gray-600 border-transparent hover:text-[#9C27B0]'
              }`}
          >
            {name}
          </button>
        ))}
      </div>

      <motion.div
        key={activeTab}
        className="overflow-hidden"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{
          duration: 0.6,
          ease: [0.25, 0.8, 0.25, 1],
        }}
      >
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8 px-6 max-w-6xl mx-auto mb-8">
        {firstRow.map(({ name, image }, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center group cursor-pointer"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.25, 0.8, 0.25, 1],
              }}
            >
              <div className="p-4 rounded-lg bg-gray-50 group-hover:bg-purple-50 transition-colors duration-300">
                <img
                  src={image}
                  alt={name}
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
                />
              </div>
              <span className="text-xs sm:text-sm text-gray-600 mt-2 text-center">{name}</span>
            </motion.div>
          ))}
        </div>

        {secondRow.length > 0 && (
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8 px-6 max-w-6xl mx-auto">
            {secondRow.map(({ name, image }, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center group cursor-pointer"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{
                  duration: 0.6,
                  delay: (firstRow.length + index) * 0.1,
                  ease: [0.25, 0.8, 0.25, 1],
                }}
              >
                <div className="p-4 rounded-lg bg-gray-50 group-hover:bg-purple-50 transition-colors duration-300">
                  <img
                    src={image}
                    alt={name}
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
                  />
                </div>
                <span className="text-xs sm:text-sm text-gray-600 mt-2 text-center">{name}</span>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default TechStack;
