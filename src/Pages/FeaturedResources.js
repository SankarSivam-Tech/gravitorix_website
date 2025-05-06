import React, { useRef, useState } from 'react';
import { featureResources } from '../assets/assets';
import Card from '../Components/Card';
import Header from '../Components/Header';

const FeaturedResources = () => {
    const containerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e) => {
        e.preventDefault(); 
        setIsDragging(true);
        setStartX(e.clientX);
        setScrollLeft(containerRef.current.scrollLeft);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const x = e.clientX;
        const walk = (x - startX) * 1.5; 
        containerRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    return (
        <div className="relative">
            <div className="mb-6 text-center">
        <Header text1="Featured" text2="Resources" />
            </div>
            <div
                ref={containerRef}
                className="flex gap-4 mt-8 overflow-x-hidden p-4 cursor-grab " 
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
                style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
            >
                {Array.isArray(featureResources) && featureResources.length > 0 && (
                    featureResources.map((featureResource) => (
                        <Card key={featureResource.id} featureResource={featureResource} />
                    ))
                )}
            </div>
        </div>
    );
};

export default FeaturedResources;
