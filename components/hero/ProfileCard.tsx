"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

export default function ProfileCard() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-200, 200], [10, -10]), {
    stiffness: 180,
    damping: 20,
  });

  const rotateY = useSpring(useTransform(mouseX, [-200, 200], [-10, 10]), {
    stiffness: 180,
    damping: 20,
  });

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
    <div className="relative flex justify-center">
      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-80 w-80 rounded-full bg-white/5 blur-3xl lg:h-[600px] lg:w-[600px]" />
      </div>

      <motion.div
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="relative h-[420px] w-[320px] overflow-hidden rounded-3xl border border-white/10 bg-neutral-900 shadow-2xl sm:h-[520px] sm:w-[380px] lg:h-[650px] lg:w-[500px]"
      >
        <Image
          src="/profile.png"
          alt="Gorre Naveen"
          fill
          priority
          sizes="(max-width:768px) 320px, 500px"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      </motion.div>
    </div>
  );
}