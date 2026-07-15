"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

export default function ProfileCard() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(mouseY, [-200, 200], [10, -10]),
    {
      stiffness: 180,
      damping: 20,
    }
  );

  const rotateY = useSpring(
    useTransform(mouseX, [-200, 200], [-10, 10]),
    {
      stiffness: 180,
      damping: 20,
    }
  );

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();

    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  }

  function handleLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <div className="relative flex items-center justify-center">

      {/* Glow */}

      <div className="absolute h-[620px] w-[620px] rounded-full bg-white/5 blur-[140px]" />

      <motion.div
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{
          scale: 1.02,
        }}
        transition={{
          duration: 0.35,
        }}
        className="relative h-[650px] w-[500px] overflow-hidden rounded-[42px] border border-white/10 bg-[#111] shadow-[0_40px_120px_rgba(0,0,0,0.7)]"
      >
        <Image
          src="/profile.png"
          alt="Gorre Naveen"
          fill
          priority
          className="object-cover"
        />

        {/* Dark Overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

      </motion.div>

    </div>
  );
}