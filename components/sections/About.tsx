"use client";

import { motion } from "framer-motion";

const stats = [
  {
    title: "Creative Director",
    value: "Brand Strategy & Visual Storytelling",
  },
  {
    title: "Video Editor",
    value: "Commercials • Reels • YouTube",
  },
  {
    title: "AI Automation",
    value: "Creative Workflows & Productivity",
  },
  {
    title: "Based In",
    value: "Hyderabad, India",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#050505] py-24 text-white sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-5 text-[11px] uppercase tracking-[0.45em] text-neutral-500"
        >
          ABOUT
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl text-[clamp(42px,7vw,88px)] font-black leading-[0.95] tracking-[-0.05em]"
        >
          I don't just create content.
          <br />
          I build brands people remember.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-10 max-w-3xl text-lg leading-9 text-neutral-400"
        >
          I'm <span className="text-white font-semibold">Gorre Naveen</span>,
          a Creative Director, Video Editor and Brand Strategist focused on
          building premium digital experiences. My work combines cinematic
          storytelling, branding, YouTube growth strategy and AI-powered
          creative systems to help businesses build a strong online presence.
        </motion.p>

        <div className="mt-20 grid gap-6 sm:grid-cols-2">

          {stats.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
              }}
              whileHover={{
                y: -6,
              }}
              className="rounded-3xl border border-neutral-800 bg-white/[0.02] p-7 transition-all duration-300 hover:border-neutral-600 hover:bg-white/[0.04]"
            >
              <p className="text-[11px] uppercase tracking-[0.35em] text-neutral-500">
                {item.title}
              </p>

              <h3 className="mt-4 text-2xl font-bold leading-snug text-white">
                {item.value}
              </h3>
            </motion.div>
          ))}

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 rounded-[32px] border border-neutral-800 bg-gradient-to-br from-white/[0.03] to-transparent p-8 sm:p-10"
        >
          <p className="text-[11px] uppercase tracking-[0.45em] text-neutral-500">
            MY JOURNEY
          </p>

          <p className="mt-6 max-w-4xl text-lg leading-9 text-neutral-400">
            Over the past few years I've worked with brands like
            <span className="text-white font-medium">
              {" "}Royal Biryani House{" "}
            </span>
            and
            <span className="text-white font-medium">
              {" "}Chef Govardhan Reddy
            </span>
            , leading content strategy, video production, branding and digital
            marketing. My goal is simple — create premium visual experiences
            that attract attention, build trust and help brands grow.
          </p>
        </motion.div>

      </div>
    </section>
  );
}