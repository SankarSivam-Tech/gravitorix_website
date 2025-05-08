import React from 'react';
import Header from '../Components/Header';
import { caseStudies } from '../assets/assets';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const OurRecentCaseStudies = () => {
    return (
        <section className="bg-[#F7F7FA] py-12">
            <div className="text-center mb-10 flex flex-col items-center justify-center">
                <div className="w-20 h-1 bg-purple-600 mb-2 rounded-full"></div>
                <Header text1="Our Recent" text2="Case Studies" />
            </div>

            {caseStudies.map((item, index) => (
                <article
                    key={index}
                    className="flex flex-col md:flex-row w-full max-w-6xl mx-auto my-6 bg-white shadow-sm border border-slate-200 rounded-lg overflow-hidden"
                >
                    <div className="md:w-2/5 h-64 md:h-auto">
                        <img
                            src={item.img}
                            alt={item.title || "card-image"}
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div
                        className="p-10 flex flex-col justify-between md:w-3/5"
                        style={{ backgroundColor: item.bgColor }}
                    >
                        <div>
                            <h4 className="mb-2 text-slate-800 text-2xl font-semibold">
                                {item.title}
                            </h4>
                            <p className="mb-6 text-slate-600 leading-relaxed font-light">
                                {item.description}
                            </p>
                        </div>
                        <div>
                            <Link
                                to={item.link || "#"}
                                className="font-semibold text-base  flex justify-end items-center"
                            >
                                <span className="bg-gradient-to-r from-[#F76680] to-[#57007B] bg-clip-text text-transparent">
                                    Read More
                                </span>
                                <ChevronRight className="text-[#57007B]" />
                            </Link>
                        </div>
                    </div>
                </article>
            ))}
            <div className="w-full max-w-6xl mx-auto">
                <Link to="/case-studies" className="flex justify-end items-center text-[#57007B] font-semibold text-lg ">
                    Read More Case Studies <ChevronRight className="text-[#57007B]" />

                </Link>
            </div>


        </section>
    );
};

export default OurRecentCaseStudies;
