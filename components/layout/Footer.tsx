"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-[#050505]">
      <div className="mx-auto flex max-w-[1600px] flex-col items-center justify-between gap-8 px-14 py-12 md:flex-row xl:px-20">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-black tracking-[-0.05em]">
            GORRE NAVEEN
          </h2>

          <p className="mt-3 text-sm leading-7 text-neutral-500">
            Creative Director • Content Strategist •
            <br />
            Video Editor • Visual Storyteller
          </p>
        </motion.div>

        {/* Center */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-neutral-600">
            Portfolio 2026
          </p>

          <p className="mt-3 text-sm text-neutral-500">
            Designed &amp; Developed by{" "}
            <span className="font-semibold text-white">
              Nexvora AI
            </span>
          </p>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-right"
        >
          <p className="text-sm text-neutral-500">
            © 2026 All Rights Reserved
          </p>

          <p className="mt-2 text-xs uppercase tracking-[0.3em] text-neutral-700">
            Hyderabad • India
          </p>
        </motion.div>

      </div>
    </footer>
  );
}