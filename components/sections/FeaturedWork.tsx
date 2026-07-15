"use client";

import { motion } from "framer-motion";

const projects = [
  {
    no: "01",
    title: "Royal Biryani House",
    role: "Creative Direction • Brand Strategy • YouTube",
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
      className="bg-[#050505] py-28 text-white"
    >
      <div className="mx-auto max-w-[1600px] px-14 xl:px-20">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 text-[11px] uppercase tracking-[0.45em] text-neutral-500"
        >
          SELECTED WORK
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-[clamp(52px,6vw,90px)] font-black tracking-[-0.05em]"
        >
          Featured Projects
        </motion.h2>

        <div className="border-t border-neutral-800">

          {projects.map((project) => (
            <motion.div
              key={project.no}
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
              className="border-b border-neutral-800 py-10"
            >
              <div className="grid grid-cols-12 items-start">

                <div className="col-span-1">
                  <p className="text-lg text-neutral-600">
                    {project.no}
                  </p>
                </div>

                <div className="col-span-8">
                  <h3 className="text-[34px] font-bold tracking-[-0.04em]">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-[15px] text-neutral-500">
                    {project.role}
                  </p>
                </div>

                <div className="col-span-3 flex justify-end gap-3">

                  {project.links.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-neutral-700 px-4 py-2 text-xs uppercase tracking-[0.25em] text-neutral-300 transition hover:border-white hover:text-white"
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