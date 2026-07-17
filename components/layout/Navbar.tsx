"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { name: "WORK", href: "#work" },
  { name: "ABOUT", href: "#about" },
  { name: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 z-50 w-full backdrop-blur-md"
    >
      <div className="mx-auto flex h-20 max-w-[1700px] items-center justify-between px-6 md:h-24 md:px-14 xl:px-20">
        {/* Brand */}
        <a
          href="/"
          className="text-lg font-semibold uppercase tracking-[0.08em] text-white md:text-[20px]"
        >
          GORRE NAVEEN
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-12 md:flex">
          {links.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              whileHover={{ y: -2 }}
              className="text-[13px] uppercase tracking-[0.35em] text-neutral-500 transition hover:text-white"
            >
              {link.name}
            </motion.a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-white md:hidden"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="border-t border-white/10 bg-black md:hidden"
          >
            <nav className="flex flex-col py-6">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="px-6 py-4 text-lg uppercase tracking-[0.2em] text-neutral-300 hover:text-white"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mx-auto h-px max-w-[1700px] bg-white/10" />
    </motion.header>
  );
}