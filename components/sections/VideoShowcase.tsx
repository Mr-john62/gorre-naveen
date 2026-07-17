"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaYoutube, FaInstagram } from "react-icons/fa";

const brands = [
  {
    title: "Royal Biryani House",
    description:
      "Creative Direction, YouTube Strategy, Video Production & Brand Storytelling.",
    links: [
      {
        label: "Watch on YouTube",
        url: "https://www.youtube.com/@royalbiryanihouse_us",
        icon: FaYoutube,
      },
    ],
  },
  {
    title: "Chef Govardhan Reddy",
    description:
      "Recipe Videos, Creative Direction, Content Strategy & Social Media Management.",
    links: [
      {
        label: "Watch on YouTube",
        url: "https://www.youtube.com/@chefgovardhanreddy",
        icon: FaYoutube,
      },
      {
        label: "View on Instagram",
        url: "https://www.instagram.com/chefgovardhanreddy/",
        icon: FaInstagram,
      },
    ],
  },
];

export default function VideoShowcase() {
  return (
    <section
      id="portfolio"
      className="bg-[#050505] py-20 lg:py-28 text-white"
    >
      <div className="mx-auto max-w-[1600px] px-6 sm:px-8 lg:px-20">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-5 text-[11px] uppercase tracking-[0.45em] text-neutral-500"
        >
          BRAND PORTFOLIO
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl text-[clamp(40px,7vw,88px)] font-black leading-[0.95] tracking-[-0.05em]"
        >
          Brands I've Built &
          <br />
          Content I've Created.
        </motion.h2>

        <p className="mt-8 max-w-2xl text-base leading-7 text-neutral-500 sm:text-lg sm:leading-8">
          Creative direction, cinematic storytelling, YouTube strategy,
          branding and digital experiences crafted for growing brands.
        </p>

        <div className="mt-16 space-y-8 lg:mt-20 lg:space-y-10">
          {brands.map((brand) => (
            <motion.div
              key={brand.title}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="rounded-[30px] border border-neutral-800 bg-white/[0.02] p-6 transition-all duration-300 hover:border-neutral-600 hover:bg-white/[0.04] sm:p-8 lg:p-10"
            >
              <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-2xl">
                  <h3 className="text-3xl font-black tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                    {brand.title}
                  </h3>

                  <p className="mt-5 text-base leading-7 text-neutral-500 sm:text-[17px] sm:leading-8">
                    {brand.description}
                  </p>
                </div>

                <div className="flex w-full flex-col gap-4 lg:w-auto">
                  {brand.links.map((link) => {
                    const Icon = link.icon;

                    return (
                      <motion.a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 6 }}
                        className="group flex w-full items-center justify-between rounded-2xl border border-neutral-800 px-5 py-5 transition-all duration-300 hover:border-white hover:bg-white/5 sm:min-w-[340px] sm:px-6"
                      >
                        <div className="flex items-center gap-4">
                          <Icon
                            size={22}
                            className="text-neutral-300 transition group-hover:text-white"
                          />

                          <span className="text-xs font-medium uppercase tracking-[0.18em] sm:text-sm">
                            {link.label}
                          </span>
                        </div>

                        <ArrowUpRight
                          size={20}
                          className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}