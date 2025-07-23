import { useEffect } from 'react';
import Navbar from './Components/Navbar';
import SinglePage from './Pages/SinglePage';
import BackToTop from './Components/BackToTop';

function App() {
  useEffect(() => {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <>
      <div className="min-h-screen overflow-x-hidden bg-gray-50">
        <div className=" ">
          <Navbar />
          <SinglePage />
        </div>
        <BackToTop />
      </div>
    </>
  );
}

export default App;