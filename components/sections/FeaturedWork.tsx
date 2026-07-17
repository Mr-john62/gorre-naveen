"use client";

import { motion } from "framer-motion";

const projects = [
  {
    no: "01",
    title: "Royal Biryani House",
    role: "Creative Direction • Brand Strategy • YouTube",
    description:
      "Built the creative identity, content strategy and YouTube presence for an authentic Hyderabadi restaurant brand.",
    links: [
      {
        name: "YouTube",
        url: "https://www.youtube.com/@royalbiryanihouse_us",
      },
    ],
  },
  {
    no: "02",
    title: "Chef Govardhan Reddy",
    role: "Creative Direction • Content Production",
    description:
      "Developed the chef's personal brand through cinematic recipe videos, Instagram content and YouTube storytelling.",
    links: [
      {
        name: "Instagram",
        url: "https://www.instagram.com/chefgovardhanreddy/",
      },
      {
        name: "YouTube",
        url: "https://www.youtube.com/@chefgovardhanreddy",
      },
    ],
  },
];

export default function FeaturedWork() {
  return (
    <section
      id="work"
      className="bg-[#050505] py-20 lg:py-28 text-white"
    >
      <div className="mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 text-[11px] uppercase tracking-[0.45em] text-neutral-500"
        >
          SELECTED WORK
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-[clamp(42px,7vw,90px)] font-black tracking-[-0.05em]"
        >
          Featured Projects
        </motion.h2>

        <div className="border-t border-neutral-800">
          {projects.map((project) => (
            <motion.div
              key={project.no}
              whileHover={{ x: 8 }}
              transition={{ duration: 0.3 }}
              className="border-b border-neutral-800 py-10"
            >
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-start">
                {/* Number */}
                <div className="lg:col-span-1">
                  <p className="text-xl text-neutral-600">{project.no}</p>
                </div>

                {/* Content */}
                <div className="lg:col-span-8">
                  <h3 className="text-4xl font-bold leading-tight tracking-[-0.04em] sm:text-5xl">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-lg text-neutral-400">
                    {project.role}
                  </p>

                  <p className="mt-4 max-w-2xl text-base leading-8 text-neutral-500">
                    {project.description}
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3 lg:col-span-3 lg:justify-end">
                  {project.links.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-neutral-700 px-5 py-3 text-xs uppercase tracking-[0.25em] text-neutral-300 transition-all duration-300 hover:border-white hover:text-white"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}