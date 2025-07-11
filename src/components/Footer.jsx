import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white text-slate-900 py-12 px-6 border-t">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo */}
        <div>
          <h2 className="text-2xl font-bold">
            Astro<span className="text-gray-400">ship</span>
          </h2>
          <p className="text-slate-500 mt-2 text-sm">
            Build blazing-fast sites with Astro + Tailwind.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col space-y-2 text-sm">
          <Link to="/" className="hover:text-black">Home</Link>
          <Link to="/about" className="hover:text-black">About</Link>
          <Link to="/pricing" className="hover:text-black">Pricing</Link>
          <Link to="/blog" className="hover:text-black">Blog</Link>
          <Link to="/contact" className="hover:text-black">Contact</Link>
        </div>

        {/* Social Icons */}
        <div className="flex md:justify-end items-center space-x-6">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-black">
            <FaGithub size={22} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-black">
            <FaTwitter size={22} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-black">
            <FaLinkedin size={22} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-slate-500 text-sm mt-10">
        © {new Date().getFullYear()} Astroship. All rights reserved.
      </div>
    </footer>
  );
}
