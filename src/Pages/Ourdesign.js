import React from 'react';
import Header from '../Components/Header';
import { ourDesign } from '../assets/assets';

const OurDesign = () => {
    return (
        <div className="bg-[#F7F7FA] min-h-screen px-4 sm:px-6 lg:px-8 py-12 overflow-x-hidden">
              <div className='text-center mb-10 flex flex-col items-center justify-center'>
              <div className="w-20 h-1 bg-purple-600 mb-2 rounded-full"></div>
                <Header text1="Our design and " text2="development approach" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 max-w-full sm:max-w-6xl mx-auto justify-items-center">
                {ourDesign.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-row items-center gap-4 p-4 w-full max-w-[550px] h-auto min-h-[237px] bg-white border border-[#E7DAED] rounded-lg shadow-sm"
                    >
                        <div className={`flex-shrink-0 w-20 h-20 rounded-md ${item.bgColor} flex items-center justify-center`}>
                            <img
                                src={item.img}
                                alt={`${item.title} icon`}
                                className="w-12 h-12 object-contain"
                            />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl font-semibold text-gray-900 mb-1">{item.title}</h3>
                            <p className="text-sm text-gray-600 leading-6">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurDesign;
