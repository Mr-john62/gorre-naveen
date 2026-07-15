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
      className="bg-[#050505] py-28 text-white"
    >
      <div className="mx-auto max-w-[1600px] px-14 xl:px-20">

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
          className="max-w-4xl text-[clamp(48px,6vw,88px)] font-black leading-[0.95] tracking-[-0.05em]"
        >
          Brands I've Built &
          <br />
          Content I've Created.
        </motion.h2>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-500">
          Creative direction, cinematic storytelling, YouTube strategy,
          branding and digital experiences crafted for growing brands.
        </p>

        <div className="mt-20 space-y-10">

          {brands.map((brand) => (
            <motion.div
              key={brand.title}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="rounded-[30px] border border-neutral-800 bg-white/[0.02] p-10 transition-all duration-300 hover:border-neutral-600 hover:bg-white/[0.04]"
            >
              <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">

                <div className="max-w-2xl">
                  <h3 className="text-4xl font-black tracking-[-0.04em]">
                    {brand.title}
                  </h3>

                  <p className="mt-5 text-[17px] leading-8 text-neutral-500">
                    {brand.description}
                  </p>
                </div>

                <div className="flex flex-col gap-4">

                  {brand.links.map((link) => {
                    const Icon = link.icon;

                    return (
                      <motion.a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 8 }}
                        className="group flex min-w-[320px] items-center justify-between rounded-2xl border border-neutral-800 px-6 py-5 transition-all duration-300 hover:border-white hover:bg-white/5"
                      >
                        <div className="flex items-center gap-4">
                          <Icon
                            size={22}
                            className="text-neutral-300 transition group-hover:text-white"
                          />

                          <span className="text-sm font-medium uppercase tracking-[0.18em]">
                            {link.label}
                          </span>
                        </div>

                        <ArrowUpRight
                          size={20}
                          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
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