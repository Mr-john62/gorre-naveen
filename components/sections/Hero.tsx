"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import ProfileCard from "@/components/hero/ProfileCard";

const ThreeBackground = dynamic(
  () => import("@/components/hero/ThreeBackground"),
  {
    ssr: false,
  }
);

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#050505]"
    >
      {/* 3D Background */}
      <ThreeBackground />

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#050505] via-[#050505]/70 to-transparent" />

      <div className="relative z-20 mx-auto grid w-full max-w-[1700px] grid-cols-1 items-center gap-12 px-6 pt-28 pb-16 md:px-10 lg:grid-cols-[1fr_560px] lg:gap-24 lg:px-20 lg:py-24">
        {/* LEFT */}

        <div className="order-2 lg:order-1">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 text-[10px] uppercase tracking-[0.45em] text-neutral-500 md:mb-8 md:text-[11px]"
          >
            CREATIVE DIRECTOR • VIDEO EDITOR • BRAND STRATEGIST
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="leading-[0.9] md:leading-[0.82]"
          >
            <span className="block text-[64px] font-black tracking-[-0.06em] text-white sm:text-[80px] md:text-[110px] lg:text-[clamp(96px,11vw,190px)]">
              GORRE
            </span>

            <span className="block text-[64px] font-black tracking-[-0.06em] text-neutral-700 sm:text-[80px] md:text-[110px] lg:text-[clamp(96px,11vw,190px)]">
              NAVEEN
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 max-w-xl text-lg leading-9 text-neutral-400 md:mt-10 md:text-[22px] md:leading-[44px]"
          >
            I create cinematic videos, memorable brands, premium digital
            experiences, and AI-powered creative systems that help businesses
            stand out.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center md:mt-14 md:gap-6"
          >
            <motion.a
              href="#work"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex h-14 w-full items-center justify-center rounded-full border border-white/20 bg-transparent px-8 text-sm font-semibold uppercase tracking-[0.22em] text-white transition-all duration-300 hover:bg-white hover:text-black sm:w-auto md:px-10"
            >
              VIEW WORK
            </motion.a>

            <motion.a
              href="#services"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex h-14 w-full items-center justify-center rounded-full border border-neutral-700 px-8 text-sm font-semibold uppercase tracking-[0.22em] text-white transition-all duration-300 hover:border-white sm:w-auto md:px-10"
            >
              SERVICES
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              delay: 1,
              duration: 1,
            }}
            className="mt-10 h-px origin-left bg-white/10 md:mt-16"
          />
        </div>

        {/* RIGHT */}

        <motion.div
          initial={{
            opacity: 0,
            x: 80,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
          className="order-1 relative flex items-center justify-center lg:order-2 lg:justify-end"
        >
          <ProfileCard />
        </motion.div>
      </div>

      {/* Bottom Fade */}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050505] to-transparent" />
    </section>
  );
}