import { motion } from 'framer-motion';
import HireDevelopers from './HireDevelopers';

const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <HireDevelopers />
    </motion.div>
  );
};

export default ContactPage;