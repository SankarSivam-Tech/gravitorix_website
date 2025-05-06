import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ featureResource }) => {
    return (
        <div className="w-80 bg-white rounded-lg  overflow-hidden flex-shrink-0">
            <img src={featureResource.img} alt="card" className="w-full h-48 object-cover" />
            <div className="p-4">
                <p className="text-sm text-slate-600">{featureResource.description}</p>
                <Link className="mt-4 float-right inline-block text-purple-600 font-medium">
                    Read More →
                </Link>
            </div>
        </div>
    );
};

export default Card;
