"use client";

import { motion } from "framer-motion";

const links = [
  { name: "WORK", href: "#work" },
  { name: "ABOUT", href: "#about" },
  { name: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 z-50 w-full backdrop-blur-md"
    >
      <div className="mx-auto flex h-24 max-w-[1700px] items-center justify-between px-14 xl:px-20">
        {/* Brand */}
        <motion.a
          href="/"
          whileHover={{ opacity: 0.75 }}
          transition={{ duration: 0.25 }}
          className="select-none text-[20px] font-semibold uppercase tracking-[0.08em] text-white whitespace-nowrap"
        >
          GORRE NAVEEN
        </motion.a>

        {/* Navigation */}
        <nav className="flex items-center gap-12">
          {links.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.25 }}
              className="relative text-[13px] uppercase tracking-[0.35em] text-neutral-500 transition-colors duration-300 hover:text-white"
            >
              {link.name}

              <span className="absolute -bottom-2 left-0 h-px w-0 bg-white transition-all duration-300 hover:w-full" />
            </motion.a>
          ))}
        </nav>
      </div>

      <div className="mx-auto h-px max-w-[1700px] bg-white/10" />
    </motion.header>
  );
}