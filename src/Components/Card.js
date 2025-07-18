import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Card = ({ featureResource }) => {
    return (
        <motion.div 
            className="w-80 bg-white rounded-xl overflow-hidden flex-shrink-0 shadow-md hover:shadow-2xl transition-shadow duration-300 group cursor-pointer"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
        >
            <div className="relative overflow-hidden">
                <motion.img 
                    src={featureResource.img} 
                    alt="card" 
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-6">
                <p className="text-sm text-slate-600 group-hover:text-slate-800 transition-colors line-clamp-3">
                    {featureResource.description}
                </p>
                <Link 
                    to="/blog/post" 
                    className="mt-4 float-right inline-flex items-center gap-2 text-purple-600 font-medium group-hover:text-purple-700 transition-colors"
                >
                    Read More 
                    <ArrowRight 
                        size={16} 
                        className="group-hover:translate-x-1 transition-transform"
                    />
                </Link>
            </div>
        </motion.div>
    );
};

export default Card;