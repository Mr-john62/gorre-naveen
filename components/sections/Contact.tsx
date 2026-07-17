"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-[#050505] py-24 text-white sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 text-[11px] uppercase tracking-[0.45em] text-neutral-500"
        >
          CONTACT
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl text-[clamp(44px,7vw,110px)] font-black leading-[0.95] tracking-[-0.05em]"
        >
          Let's Build
          <br />
          Something
          <br />
          Extraordinary.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 max-w-2xl text-base leading-8 text-neutral-400 sm:mt-10 sm:text-lg sm:leading-9"
        >
          Whether it's building a brand, creating engaging content, or
          producing high-quality videos, I'm always excited to collaborate on
          meaningful projects.
        </motion.p>

        <div className="mt-14 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          {/* Instagram */}
          <motion.a
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            href="https://www.instagram.com/chefgovardhanreddy/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-14 w-full items-center justify-center rounded-full border border-neutral-700 bg-transparent px-8 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:border-white hover:bg-white/5 sm:w-auto"
          >
            Instagram
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            href="https://www.linkedin.com/in/YOUR-LINKEDIN/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-14 w-full items-center justify-center rounded-full border border-neutral-700 bg-transparent px-8 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:border-white hover:bg-white/5 sm:w-auto"
          >
            LinkedIn
          </motion.a>

          {/* Hire Me */}
          <motion.a
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            href="/resume"
            className="flex h-14 w-full items-center justify-center rounded-full bg-white px-8 text-sm font-semibold uppercase tracking-[0.2em] text-black transition-all duration-300 hover:scale-[1.04] hover:bg-neutral-200 sm:w-auto"
          >
            Hire Me
          </motion.a>
        </div>
      </div>
    </section>
  );
}