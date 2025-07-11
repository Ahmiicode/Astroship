import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
    exit: { opacity: 0, y: -20 },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  const navLinks = ["Home", "Pricing", "About", "Blog", "Contact"];

  return (
    <motion.nav
      initial={{ y: -50, scale: 0.8, opacity: 0 }}
      animate={{ y: 0, scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className="bg-white text-gray-900 text-xl font-semibold px-6 py-4 flex items-center justify-between relative"
    >
      {/* Logo */}
      <div className="text-2xl font-bold z-20">
        <Link to="/" className="hover:text-gray-700">
          Astro<span className="text-gray-500">ship</span>
        </Link>
      </div>

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex space-x-12 mx-auto">
        {navLinks.map((item) => (
          <motion.li
            key={item}
            whileHover={{ scale: 1.1 }}
            className="relative"
          >
            <Link
              to={`/${item === "Home" ? "" : item.toLowerCase()}`}
              className="hover:text-black text-gray-900"
            >
              {item}
              <motion.span
                layoutId="underline"
                className="block h-0.5 bg-black absolute bottom-[-6px] left-0 right-0 scale-x-0 origin-left"
                whileHover={{ scaleX: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </Link>
          </motion.li>
        ))}
      </ul>

      {/* Desktop Login/Signup */}
      <div className="hidden md:flex space-x-4">
        <button className="hover:text-black text-gray-900">Login</button>
        <button className="bg-black text-white px-5 py-3 rounded">Signup</button>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden z-30 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        <motion.svg
          className="w-8 h-8 text-gray-900"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
          animate={isOpen ? "open" : "closed"}
          variants={{
            closed: { rotate: 0 },
            open: { rotate: 90 },
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {isOpen ? (
            <motion.path
              d="M6 18L18 6M6 6l12 12"
              variants={{
                closed: { pathLength: 0, opacity: 0 },
                open: { pathLength: 1, opacity: 1 },
              }}
              transition={{ duration: 0.3 }}
            />
          ) : (
            <motion.path
              d="M3 12h18M3 6h18M3 18h18"
              variants={{
                closed: { pathLength: 1, opacity: 1 },
                open: { pathLength: 0, opacity: 0 },
              }}
              transition={{ duration: 0.3 }}
            />
          )}
        </motion.svg>
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            transition={{ duration: 0.25 }}
            className="absolute top-full left-0 w-full bg-black text-white rounded-b-lg shadow-lg py-8 z-20"
          >
            <nav className="flex flex-col space-y-4 items-center text-lg font-semibold">
              {navLinks.map((item) => (
                <motion.div
                  key={item}
                  variants={menuItemVariants}
                  className="w-full text-center"
                >
                  <Link
                    to={`/${item === "Home" ? "" : item.toLowerCase()}`}
                    className="hover:text-gray-400 block w-full"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="flex justify-center space-x-6 mt-6">
              <button
                onClick={() => setIsOpen(false)}
                className="hover:text-gray-400 font-semibold"
              >
                Login
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="bg-white text-black px-6 py-2 rounded font-semibold hover:bg-gray-200"
              >
                Signup
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
