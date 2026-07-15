"use client";

import { motion } from "framer-motion";

const skills = [
  "Content Strategy",
  "Video Editing",
  "Brand Identity",
  "YouTube SEO",
  "Adobe Photoshop",
  "Premiere Pro",
  "Canva",
  "AI Automation",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-neutral-900 bg-[#050505] py-32"
    >
      <div className="mx-auto max-w-7xl px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-10 uppercase tracking-[0.35em] text-neutral-500"
        >
          Skills
        </motion.p>

        <div className="grid gap-4 md:grid-cols-2">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-neutral-800 p-6 text-2xl font-semibold transition hover:border-white hover:bg-neutral-900"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}