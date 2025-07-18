import FeaturedResources from "./Pages/FeaturedResources";
import Ourdesign from "./Pages/Ourdesign";
import OurRecentCaseStudies from "./Pages/OurRecentCaseStudies";
import MeetThePeople from "./Pages/MeetThePeople";
import GreatSoftware from "./Pages/GreatSoftware";
import TechStack from "./Pages/TechStack";
import Navbar from './Components/Navbar'
import Services from './Pages/Services'
import HireDevelopers from './Pages/HireDevelopers'
// import Footer from './Pages/Footer'
import Hero from './Pages/Hero'
import TimeLine from "./Pages/TimeLine/TimeLine";
import AboutUs from "./Pages/About";
import ContactFooter from "./Pages/ContactFooter";

function App() {
  return (
    <>
      <div className="px-4 sm:px-[5vw] md:px-[5vw] lg:px-[9vw]">
     <Navbar />
      <Hero/>
      <AboutUs />
      <Services/>
      <MeetThePeople />
      <OurRecentCaseStudies />
      <GreatSoftware />
      <Ourdesign />
      <TechStack />
      <TimeLine />
      <FeaturedResources />
      <HireDevelopers/>
      {/* <Footer/> */}
      <ContactFooter/>
    </div>
    </>
  );
}

export default App;
