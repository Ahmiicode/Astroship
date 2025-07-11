import React from "react";
import { motion } from "framer-motion";

import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";
import blog4 from "../assets/blog4.png";

const blogPosts = [
  {
    title: "Introduction to the Essential Data Structures & Algorithms",
    category: "Courses",
    author: "Marcell Ziemann",
    date: "Wed Nov 09 2022",
    image: blog1,
  },
  {
    title: "The Complete Guide to Full Stack Web Development",
    category: "Tutorials",
    author: "Janette Lynch",
    date: "Tue Nov 08 2022",
    image: blog2,
  },
  {
    title: "How to become a Frontend Master",
    category: "Tutorials",
    author: "Connor Lopez",
    date: "Mon Nov 07 2022",
    image: blog3,
  },
  {
    title: "Typography Example Post",
    category: "Technology",
    author: "Charles North",
    date: "Sat Nov 05 2022",
    image: blog4,
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Blog() {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto text-slate-900">
      <div className="text-center mb-12">
        <h2 className="text-6xl font-bold mb-3">Our Blog</h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          We write about building startups and thoughts going on our mind.
        </p>
      </div>

      <motion.div
        className="grid gap-10 grid-cols-1" // Always one column
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {blogPosts.map((post, idx) => (
          <motion.article
            key={idx}
            className="p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer flex flex-col sm:flex-row gap-8"
            variants={itemVariants}
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full sm:w-[350px] h-[220px] object-cover rounded-lg flex-shrink-0"
              // increased width & height for larger image
            />
            <div className="flex flex-col justify-center">
              <div className="text-sm uppercase font-semibold text-slate-900 mb-2">
                {post.category}
              </div>
              <h3 className="text-3xl font-semibold mb-3">{post.title}</h3>
              <div className="flex items-center text-gray-500 text-sm space-x-2">
                <span>{post.author}</span>
                <span>•</span>
                <time>{post.date}</time>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
