import { motion } from 'framer-motion';
import AboutUs from './About';
import MeetThePeople from './MeetThePeople';
import TimeLine from './TimeLine/TimeLine';

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <AboutUs />
      <MeetThePeople />
      <TimeLine />
    </motion.div>
  );
};

export default AboutPage;