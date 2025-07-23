import { motion } from 'framer-motion';
import Hero from './Hero';
import AboutUs from './About';
import Services from './Services';
import MeetThePeople from './MeetThePeople';
import GreatSoftware from './GreatSoftware';
import Ourdesign from './Ourdesign';
import TechStack from './TechStack';
import TimeLine from './TimeLine/TimeLine';
import HireDevelopers from './HireDevelopers';
import ContactFooter from './ContactFooter';
const SinglePage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <section id="home">
        <Hero />
      </section>
      
      <section id="about">
        <motion.div {...fadeInUp}>
          <AboutUs />
        </motion.div>
        <motion.div {...fadeInUp}>
          <MeetThePeople />
        </motion.div>
        <motion.div {...fadeInUp}>
          <TimeLine />
        </motion.div>
      </section>
      
      <section id="services">
        <motion.div {...fadeInUp}>
          <Services />
        </motion.div>
        <motion.div {...fadeInUp}>
          <TechStack />
        </motion.div>
        <motion.div {...fadeInUp}>
          <Ourdesign />
        </motion.div>
      </section>
      
      <motion.div {...fadeInUp}>
        <GreatSoftware />
      </motion.div>
      <section id="contact">
        <motion.div {...fadeInUp}>
          <HireDevelopers />
        </motion.div>
        <motion.div {...fadeInUp}>
          <ContactFooter />
        </motion.div>
      </section>
      
    </motion.div>
  );
};

export default SinglePage;