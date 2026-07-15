"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#050505] py-28 text-white"
    >
      <div className="mx-auto max-w-[1600px] px-14 xl:px-20">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-[11px] uppercase tracking-[0.45em] text-neutral-500"
        >
          ABOUT
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl text-[clamp(42px,5vw,82px)] font-black leading-[1] tracking-[-0.05em]"
        >
          I don't just create content.
          <br />
          I build brands people remember.
        </motion.h2>

        <div className="mt-20 grid grid-cols-12 gap-12">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="col-span-12 lg:col-span-7"
          >
            <p className="max-w-2xl text-[18px] leading-9 text-neutral-400">
              I'm Gorre Naveen, a Creative Director, Video Editor and Brand
              Strategist focused on building premium digital experiences.
              From storytelling and cinematic editing to branding,
              YouTube growth and AI automation, I help businesses
              stand out with meaningful creative work.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="col-span-12 lg:col-span-5"
          >
            <div className="space-y-8">

              <div className="border-b border-neutral-800 pb-6">
                <h3 className="text-[13px] uppercase tracking-[0.35em] text-neutral-500">
                  Experience
                </h3>
                <p className="mt-3 text-2xl font-semibold">
                  Creative Direction
                </p>
              </div>

              <div className="border-b border-neutral-800 pb-6">
                <h3 className="text-[13px] uppercase tracking-[0.35em] text-neutral-500">
                  Specialization
                </h3>
                <p className="mt-3 text-2xl font-semibold">
                  Branding • Video • Marketing
                </p>
              </div>

              <div className="border-b border-neutral-800 pb-6">
                <h3 className="text-[13px] uppercase tracking-[0.35em] text-neutral-500">
                  Based In
                </h3>
                <p className="mt-3 text-2xl font-semibold">
                  Hyderabad, India
                </p>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}