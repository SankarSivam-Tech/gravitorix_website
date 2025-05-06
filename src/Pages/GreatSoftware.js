import React from 'react';
import { greatSoftware } from '../assets/assets';
import Header from '../Components/Header'

const BuildRightTeam = () => {
  return (
    <section className="bg-white py-12">
      <div className='text-center mb-10'>
      <Header text1={"Way of building"} text2={"Great Software"}/>
      </div>
      {greatSoftware.map((item, index) => (
        <div
          key={index}
          className={`mx-auto px-4 sm:px-6 flex flex-col ${
            index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
          } items-stretch gap-10 mb-20 max-w-[1300px] lg:min-h-[475px]`}
        >
           <div className="w-full lg:w-1/2 flex justify-center items-center">
            <img
              src={item.img}
              alt="Team Discussion"
              className="w-full h-full rounded-xl shadow-lg object-cover"
            />
          </div>

           <div className="w-full lg:w-1/2 flex flex-col justify-between items-start">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {item.title}
            </h2>
            <p className="text-gray-700 text-[16px] sm:text-[18px] mb-4 leading-[30px] sm:leading-[39px] w-full max-w-[95%]">
              {item.description}
            </p>
            <p className="text-gray-700 text-base sm:text-lg mb-4">
              Our <span className="text-pink-500 font-medium">delivery model</span> helps you cut costs and deliver within budget.
            </p>

            <blockquote className="italic text-pink-500 mb-4 border-l-4 border-pink-400 pl-4 pr-32 text-base sm:text-lg leading-[30px] sm:leading-[39px]">
              "{item.quotes}"
            </blockquote>

            <div className="flex items-center mt-6">
              <img
                src={item.icon}
                alt={item.author}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="text-gray-900 font-medium">{item.author}</p>
                <p className="text-gray-600 text-sm">CEO</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default BuildRightTeam;
