import React from 'react';
import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import FeaturedResources from '../Pages/FeaturedResources';
import OurRecentCaseStudies from '../Pages/OurRecentCaseStudies';
import ContactFooter from '../Pages/ContactFooter';

const SharedLayout = () => {
    return (
        <>
            {/* Main content from routes */}
            <Outlet />
            
            {/* Common sections that appear on all pages */}
            {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <OurRecentCaseStudies />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <FeaturedResources />
            </motion.div> */}

            {/* Contact Footer */}
            <ContactFooter />
        </>
    );
};

export default SharedLayout;