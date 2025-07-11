import React from "react";

export default function Calltoaction() {
  return (
    <section className="bg-black text-white py-24 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-6xl font-bold mb-4">
          Build faster websites.
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Pull content from anywhere and serve it fast with Astro's next-gen island architecture.
        </p>
        <button className="bg-white text-black px-10 py-5 text-xl rounded font-semibold hover:bg-gray-200 transition">
          Get Started
        </button>
      </div>
    </section>
  );
}
