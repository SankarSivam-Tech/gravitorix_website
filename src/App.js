import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ServicesPage from './Pages/ServicesPage';
import ContactPage from './Pages/ContactPage';
import ResourceDetail from './Pages/ResourceDetail';
import NotFound from './Pages/NotFound';
import ScrollToTop from './Components/ScrollToTop';
import BackToTop from './Components/BackToTop';
import SharedLayout from './Components/SharedLayout';

function App() {
  useEffect(() => {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen">
        <div className=" ">
          <Navbar />
          <Routes>
            <Route element={<SharedLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/hire" element={<ContactPage />} />
              {/* <Route path="/resource/:id" element={<ResourceDetail />} /> */}
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </div>
        <BackToTop />
      </div>
    </>
  );
}

export default App;