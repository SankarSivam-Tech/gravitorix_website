import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["home", "about", "services", "contact"];
      const scrollPosition = window.scrollY;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;

          if (
            scrollPosition >= offsetTop - 100 &&
            scrollPosition < offsetTop + offsetHeight - 100
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About us" },
    { id: "services", label: "Services" },
    // { id: "contact", label: "Contact us" },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarOffset = 0;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset - navbarOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setVisible(false);
  };

  return (
    <motion.div
      className={`w-full ps-[5vw] pe-[5vw] flex justify-between items-center py-5 font-medium sticky top-0 z-40 transition-all   ${
        scrolled && !visible ? "bg-white/90 backdrop-blur-md shadow-md duration-500" : ""
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <button
        onClick={() => scrollToSection("home")}
        className="flex items-center group "
      >
        <img
          src={assets.logo}
          alt="Company Logo"
          className="min-w-36 transition-transform group-hover:scale-105"
        />
        <p className="text-xl font-bold -ml-[105px] text-[#4A5568] group-hover:text-purple-600 transition-colors">
          Gravitorix
        </p>
      </button>

      <ul className="hidden sm:flex gap-5 text-base font-medium text-[#4A5568] text-nowrap mx-5">
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => scrollToSection(link.id)}
            className={`flex flex-col items-center gap-1 hover:text-purple-600 transition-colors relative ${
              activeSection === link.id ? "text-purple-600" : ""
            }`}
          >
            <p>{link.label}</p>
            <motion.hr
              className="w-2/4 h-[2px] bg-purple-600 border-none"
              initial={{ width: 0 }}
              animate={{ width: activeSection === link.id ? "50%" : 0 }}
              transition={{ duration: 0.3 }}
            />
          </button>
        ))}
      </ul>

      <button
        onClick={() => scrollToSection("contact")}
        className="hidden sm:block text-white font-semibold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-2 rounded-full h-10 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
      >
        Contact us
      </button>

      <motion.img
        whileTap={{ scale: 0.9 }}
        onClick={() => setVisible(true)}
        src={assets.menu_icon}
        className="w-5 cursor-pointer sm:hidden"
        alt="Menu"
      />

      {/* Side bar menu for small screens */}
      <motion.div
        className={`fixed top-0 right-0 bottom-0  bg-white z-50 shadow-2xl`}
        initial={{ width: 0 }}
        animate={{ width: visible ? "100%" : "0%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="flex flex-col bg-white  text-gray-600 h-full">
          <div
            onClick={() => setVisible(false)}
            className="flex justify-end p-6 cursor-pointer"
          >
            <motion.img
              whileTap={{ scale: 0.9 }}
              src={assets.cross_icon}
              className="w-6"
              alt="close"
            />
          </div>

          <ul className="flex flex-col  items-center mt-5 text-lg font-medium">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: visible ? 1 : 0, x: visible ? 0 : -50 }}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  onClick={() => scrollToSection(link.id)}
                  className={`px-6 py-3 rounded-full inline-block hover:bg-purple-50 hover:text-purple-600 transition-all ${
                    activeSection === link.id
                      ? "text-purple-600 bg-purple-50"
                      : ""
                  } ${visible ? "block" : "hidden"}`}
                >
                  {link.label}
                </button>
              </motion.div>
            ))}
          </ul>

          <motion.button
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 50 }}
            transition={{ delay: 0.5 }}
            onClick={() => scrollToSection("contact")}
            className="mx-6 mt-8 text-white font-semibold bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 rounded-full transition-all duration-300"
          >
            Contact us
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
