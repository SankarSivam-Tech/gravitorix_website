import React, { useRef, useState } from 'react';
import Header from '../Components/Header';
import { logos } from '../assets/assets';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const MeetThePeople = () => {
    const scrollRef = useRef(null);
    const [lastClicked, setLastClicked] = useState(null);

    const handleScroll = (direction) => {
        const scrollContainer = scrollRef.current;
        const scrollAmount = direction === 'left' ? -200 : 200;
        scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        setLastClicked(direction);
    };

    return (
        <div className="relative py-12 px-6 bg-white">
            <div className="flex justify-between items-center">
                <div className="mb-6 text-left">
                    <div className="w-20 h-1 bg-purple-600 mb-2 rounded-full"></div>
                    <Header text1="Meet the People" text2="We are Working With" />
                </div>
                <div className="flex gap-6">
                    <span
                        onClick={() => handleScroll('left')}
                        className={`rounded-full p-3 cursor-pointer transition ${lastClicked === 'left'
                            ? 'bg-[#57007B] text-white'
                            : 'border border-[#57007B] text-[#57007B]'
                            }`}
                    >
                        <ArrowLeft />
                    </span>
                    <span
                        onClick={() => handleScroll('right')}
                        className={`rounded-full p-3 cursor-pointer transition ${lastClicked === 'right'
                            ? 'bg-[#57007B] text-white'
                            : 'border border-[#57007B] text-[#57007B]'
                            }`}
                    >
                        <ArrowRight />
                    </span>
                </div>
            </div>

            <div className="relative bg-[#E5E5E5] p-4 rounded-lg overflow-visible">
                <div className="absolute top-[-36px] left-[64%] transform -translate-x-1/2 w-[72px] h-[36px] overflow-hidden z-10">
                    <div className="w-[72px] h-[72px] rounded-full bg-gradient-to-br from-pink-500 to-purple-700"></div>
                </div>

                <div
                    ref={scrollRef}
                    className="snap-x snap-mandatory overflow-x-hidden flex justify-between gap-6 mt-4 p-4 cursor-grab"
                >
                    {logos.map((item, index) => (
                        <img
                            key={index}
                            src={item.img}
                            alt="Partner Logo"
                            className="h-20 w-40 object-contain min-w-[160px]"
                        />
                    ))}
                </div>
            </div>

        </div>

    );
};

export default MeetThePeople;
