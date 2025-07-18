import { motion } from 'framer-motion';
import Services from './Services';
import TechStack from './TechStack';
import Ourdesign from './Ourdesign';
import ContactFooter from './ContactFooter';

const ServicesPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Services />
      <TechStack />
      <Ourdesign />
      <ContactFooter />
    </motion.div>
  );
};

export default ServicesPage;