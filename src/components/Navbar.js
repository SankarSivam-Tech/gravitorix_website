import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import { path } from "framer-motion/client";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About us" },
    { path: "/services", label: "Services" },
    {path: "/contact", label: "Contact us" },
  ];

  return (
    <motion.div
      className={`ps-[5vw] pe-[5vw] flex justify-between items-center py-5 font-medium sticky top-0 z-40 transition-all duration-300 ${
        scrolled ? " bg-white/90 backdrop-blur-md shadow-md" : ""
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link to="/" className="flex items-center group">
        <img
          src={assets.logo}
          alt="Company Logo"
          className="min-w-36 transition-transform group-hover:scale-105"
        />
        <p className="text-xl font-bold -ml-[105px] text-[#4A5568] group-hover:text-purple-600 transition-colors">
          Gravitorix
        </p>
      </Link>

      <ul className="hidden sm:flex gap-5 text-base font-medium text-[#4A5568] text-nowrap mx-5">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`flex flex-col items-center gap-1 hover:text-purple-600 transition-colors relative ${
              location.pathname === link.path ? "text-purple-600" : ""
            }`}
          >
            <p>{link.label}</p>
            <motion.hr
              className="w-2/4 h-[2px] bg-purple-600 border-none"
              initial={{ width: 0 }}
              animate={{ width: location.pathname === link.path ? "50%" : 0 }}
              transition={{ duration: 0.3 }}
            />
          </Link>
        ))}
      </ul>

      <button
        onClick={() => navigate("/contact")}
        className="hidden md:block text-white font-semibold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-2 rounded-full h-10 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
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
        className={`fixed top-0 right-0 bottom-0 overflow-hidden bg-white z-50 shadow-2xl`}
        initial={{ width: 0 }}
        animate={{ width: visible ? "100%" : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="flex flex-col text-gray-600 h-full">
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

          <ul className="flex flex-col items-center mt-5 text-lg font-medium">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: visible ? 1 : 0, x: visible ? 0 : -50 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={link.path}
                  onClick={() => setVisible(false)}
                  className={`px-6 py-3 rounded-full inline-block hover:bg-purple-50 hover:text-purple-600 transition-all ${
                    location.pathname === link.path
                      ? "text-purple-600 bg-purple-50"
                      : ""
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </ul>

          <motion.button
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 50 }}
            transition={{ delay: 0.5 }}
            onClick={() => {
              navigate("/contact");
              setVisible(false);
            }}
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
