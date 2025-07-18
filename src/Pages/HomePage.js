import { motion } from 'framer-motion';
import FeaturedResources from "./FeaturedResources";
import Ourdesign from "./Ourdesign";
import OurRecentCaseStudies from "./OurRecentCaseStudies";
import MeetThePeople from "./MeetThePeople";
import GreatSoftware from "./GreatSoftware";
import TechStack from "./TechStack";
import Services from './Services';
import HireDevelopers from './HireDevelopers';
import Hero from './Hero';
import TimeLine from "./TimeLine/TimeLine";
import AboutUs from "./About";
import ContactFooter from "./ContactFooter";

const HomePage = () => {
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
      <Hero />
      <motion.div {...fadeInUp}>
        <AboutUs />
      </motion.div>
      <motion.div {...fadeInUp}>
        <Services />
      </motion.div>
      <motion.div {...fadeInUp}>
        <MeetThePeople />
      </motion.div>
      <motion.div {...fadeInUp}>
        <OurRecentCaseStudies />
      </motion.div>
      <motion.div {...fadeInUp}>
        <GreatSoftware />
      </motion.div>
      <motion.div {...fadeInUp}>
        <Ourdesign />
      </motion.div>
      <motion.div {...fadeInUp}>
        <TechStack />
      </motion.div>
      <motion.div {...fadeInUp}>
        <TimeLine />
      </motion.div>
      <motion.div {...fadeInUp}>
        <FeaturedResources />
      </motion.div>
      <motion.div {...fadeInUp}>
        <HireDevelopers />
      </motion.div>
      <ContactFooter />
    </motion.div>
  );
};

export default HomePage;