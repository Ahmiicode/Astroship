import React from "react";
import { motion } from "framer-motion";
import about1 from "../assets/about1.png";
import about2 from "../assets/about2.png";
import about3 from "../assets/about3.png";

const teamMembers = [
  {
    name: "Janette Lynch",
    role: "Senior Director",
    image: about1,
  },
  {
    name: "Marcell Ziemann",
    role: "Principal Strategist",
    image: about2,
  },
  {
    name: "Robert Palmer",
    role: "Marketing Engineer",
    image: about3,
  },
];

// Animation variants for each member card
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section className="bg-white text-slate-900 py-20 px-6 md:px-12 max-w-7xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-4">About</h2>
      <p className="text-xl font-semibold mb-6">We are a small passionate team.</p>
      <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-16">
        Empowering the world with Astro. We're a multi-cultural team from around the world! 
        We come from diverse backgrounds, bringing different personalities, experiences and skills to the job. 
        This is what makes our team so special.
      </p>

      {/* Team Members with animation */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-5xl mx-auto"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.3 }}
      >
        {teamMembers.map(({ name, role, image }, index) => (
          <motion.div
            key={index}
            className="space-y-4"
            variants={cardVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <img
              src={image}
              alt={name}
              className="w-32 h-32 mx-auto rounded-full object-cover shadow-lg"
            />
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-gray-600">{role}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
