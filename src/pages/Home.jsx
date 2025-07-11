import React from "react";
import homeImage from "../assets/home.png";
import { FaDownload, FaGithub } from "react-icons/fa";
import Detail from "../components/home/Detail";
import Calltoaction from "../components/home/Calltoaction";
import { motion } from "framer-motion";

// Animation Variants
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60 } },
};

const bounceIn = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 12,
      delay: 0.3,
    },
  },
};

export default function HomeSection() {
  return (
    <>
      <section className="min-h-screen flex flex-col md:flex-row items-center px-6 md:px-20 py-16 bg-white overflow-hidden">
        {/* Left side - Text */}
        <motion.div
          className="md:w-1/2 text-center md:text-left space-y-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-7xl font-extrabold text-gray-900"
          >
            Marketing website done with Astro
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-gray-700 text-lg max-w-lg mx-auto md:mx-0"
          >
            Astroship is a starter template for startups, marketing websites &amp; landing pages.
            Built with Astro.build and TailwindCSS. You can quickly create any website with this starter.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex justify-center md:justify-start space-x-6 mt-6"
            variants={fadeInUp}
          >
            <motion.a
              href="#download"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white px-8 py-3 rounded font-semibold hover:bg-gray-800 transition flex items-center space-x-2"
            >
              <FaDownload />
              <span>Download for Free</span>
            </motion.a>
            <motion.a
              href="https://github.com/withastro/astroship"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-black text-black px-8 py-3 rounded font-semibold hover:bg-black hover:text-white transition flex items-center space-x-2"
            >
              <FaGithub />
              <span>GitHub Repo</span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right side - Image with bounce */}
        <motion.div
          className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
          variants={bounceIn}
          initial="hidden"
          animate="show"
        >
          <motion.img
            src={homeImage}
            alt="Astroship Marketing"
            className="w-full max-w-md md:max-w-full rounded-lg "
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ type: "spring", stiffness: 80 }}
          />
        </motion.div>
      </section>

      <Detail />
      <Calltoaction />
    </>
  );
}
