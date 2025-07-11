import React from "react";
import homeImage from "../assets/home.png";
import { FaDownload, FaGithub } from "react-icons/fa";
import Detail from "../components/home/Detail";
import Calltoaction from "../components/home/Calltoaction";

export default function HomeSection() {
  return (
    <>
    <section className="min-h-screen flex flex-col md:flex-row items-center px-6 md:px-20 py-16 bg-white">
      {/* Left side - Text */}
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-7xl font-extrabold text-gray-900">
          Marketing website done with Astro
        </h1>
        <p className="text-gray-700 text-lg max-w-lg mx-auto md:mx-0">
          Astroship is a starter template for startups, marketing websites &amp; landing pages.
          Built with Astro.build and TailwindCSS. You can quickly create any website with this starter.
        </p>

        {/* Buttons */}
        <div className="flex justify-center md:justify-start space-x-6 mt-6">
          <a
            href="#download"
            className="bg-black text-white px-8 py-3 rounded font-semibold hover:bg-gray-800 transition flex items-center space-x-2"
          >
            <FaDownload />
            <span>Download for Free</span>
          </a>
          <a
            href="https://github.com/withastro/astroship"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-black text-black px-8 py-3 rounded font-semibold hover:bg-black hover:text-white transition flex items-center space-x-2"
          >
            <FaGithub />
            <span>GitHub Repo</span>
          </a>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img
          src={homeImage}
          alt="Astroship Marketing"
          className="w-full rounded-lg "
        />
      </div>
     
    </section>
       <Detail/>
       <Calltoaction/>
       </>
  
  );

}
