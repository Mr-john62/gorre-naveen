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
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/70 to-transparent z-10" />

      <div className="relative z-20 mx-auto grid w-full max-w-[1700px] grid-cols-1 items-center gap-32 px-20 py-24 lg:grid-cols-[1fr_560px]">

        {/* LEFT */}

        <div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
            className="mb-8 text-[11px] uppercase tracking-[0.45em] text-neutral-500"
          >
            CREATIVE DIRECTOR • VIDEO EDITOR • BRAND STRATEGIST
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="leading-[0.82]"
          >

            <span className="block text-[clamp(96px,11vw,190px)] font-black tracking-[-0.06em] text-white">
              GORRE
            </span>

            <span className="block text-[clamp(96px,11vw,190px)] font-black tracking-[-0.06em] text-neutral-700">
              NAVEEN
            </span>

          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .4 }}
            className="mt-10 max-w-[620px] text-[22px] leading-[44px] text-neutral-400"
          >
            I create cinematic videos,
            memorable brands,
            premium digital experiences,
            and AI-powered creative systems
            that help businesses stand out.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .6 }}
            className="mt-14 flex items-center gap-6"
          >

            <motion.a
              href="#work"
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              whileTap={{
                scale: .96,
              }}
              className="inline-flex h-14 items-center justify-center rounded-full border border-white/20 bg-transparent px-10 text-sm font-semibold uppercase tracking-[0.22em] text-white transition-all duration-300 hover:bg-white hover:text-black"
            >
              VIEW WORK
            </motion.a>

            <motion.a
              href="#services"
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              whileTap={{
                scale: .96,
              }}
              className="inline-flex h-14 items-center justify-center rounded-full border border-neutral-700 px-10 text-sm font-semibold uppercase tracking-[0.22em] text-white transition-all duration-300 hover:border-white"
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
            className="mt-16 h-px origin-left bg-white/10"
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
          className="relative flex items-center justify-center lg:justify-end"
        >
          <ProfileCard />
        </motion.div>

      </div>

      {/* Bottom Fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050505] to-transparent" />

    </section>
  );
}