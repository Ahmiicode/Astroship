import React from "react";
import {
  FaCogs,
  FaHtml5,
  FaRocket,
  FaCube,
  FaSearch,
  FaUsers,
  FaReact,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaGithub
} from "react-icons/fa";

export default function Detail() {
  const features = [
    {
      icon: <FaCogs size={28} />,
      title: "Bring Your Own Framework",
      desc: "Use React, Svelte, Vue, or plain HTML + JS."
    },
    {
      icon: <FaHtml5 size={28} />,
      title: "100% Static HTML",
      desc: "Astro renders everything to static HTML by default."
    },
    {
      icon: <FaRocket size={28} />,
      title: "On-Demand Components",
      desc: "Hydrate JS only when needed, automatically."
    },
    {
      icon: <FaCube size={28} />,
      title: "Broad Integration",
      desc: "Supports Sass, Tailwind, Markdown, MDX & more."
    },
    {
      icon: <FaSearch size={28} />,
      title: "SEO Enabled",
      desc: "Sitemaps, RSS, and metadata all built-in."
    },
    {
      icon: <FaUsers size={28} />,
      title: "Community",
      desc: "Powered by thousands of open-source contributors."
    }
  ];

  const tech = [
    { name: "React", icon: <FaReact size={92} /> },
    { name: "HTML5", icon: <FaHtml5 size={92} /> },
    { name: "CSS3", icon: <FaCss3Alt size={92} /> },
    { name: "JavaScript", icon: <FaJs size={92} /> },
    { name: "Node.js", icon: <FaNodeJs size={92} /> },
    { name: "GitHub", icon: <FaGithub size={92} /> }
  ];

  return (
    <section className="px-6 py-20 bg-white text-slate-900">
      {/* Features Section */}
      <div className="max-w-6xl mx-auto text-center mb-20">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Everything you need to start a website
        </h2>
        <p className="text-lg text-slate-700 mb-12 max-w-2xl mx-auto">
          Astro comes batteries included. It takes the best parts of state-of-the-art tools and adds its own innovations.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex flex-col items-start gap-3 text-left border border-slate-200 p-6 rounded-lg hover:shadow-md transition"
            >
              <div className="text-slate-900">{feature.icon}</div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-slate-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Technology Section */}
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
          Works with your technologies
        </h2>
        <p className="text-lg text-slate-700 mb-12 max-w-2xl mx-auto">
          Build faster websites using tools you're already familiar with.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-center">
          {tech.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-2 hover:scale-105 transition-transform"
            >
             <div className="text-black ">{item.icon}</div>

              <p className="text-sm font-semibold">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
