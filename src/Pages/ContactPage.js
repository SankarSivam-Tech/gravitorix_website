import { motion } from 'framer-motion';
import ContactFooter from './ContactFooter';
import HireDevelopers from './HireDevelopers';

const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <HireDevelopers />
      <ContactFooter />
    </motion.div>
  );
};

export default ContactPage;