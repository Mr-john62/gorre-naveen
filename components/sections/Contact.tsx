"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-[#050505] py-32 text-white"
    >
      <div className="mx-auto max-w-[1600px] px-14 xl:px-20">

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
          className="max-w-5xl text-[clamp(56px,7vw,110px)] font-black leading-[0.95] tracking-[-0.05em]"
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
          transition={{ delay: .2 }}
          className="mt-10 max-w-2xl text-[18px] leading-9 text-neutral-400"
        >
          Have an idea, a brand, or a project in mind?
          Let's connect and create something memorable together.
        </motion.p>

        <div className="mt-16 flex flex-wrap gap-5">

          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: .96 }}
            href="https://www.instagram.com/"
            target="_blank"
            className="rounded-full bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-black"
          >
            Instagram
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: .96 }}
            href="https://www.linkedin.com/"
            target="_blank"
            className="rounded-full border border-neutral-700 px-8 py-4 text-sm uppercase tracking-[0.2em] transition hover:border-white"
          >
            LinkedIn
          </motion.a>

        </div>

      </div>
    </section>
  );
}