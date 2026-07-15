"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Clapperboard,
  Palette,
  TrendingUp,
  MonitorSmartphone,
  Bot,
  ChevronDown,
} from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Creative Direction",
    short: "Brand Strategy, Creative Campaigns & Visual Storytelling",
    details: [
      "Brand Strategy",
      "Creative Campaign Planning",
      "Visual Storytelling",
      "Creative Consultation",
      "Marketing Direction",
    ],
  },
  {
    icon: Clapperboard,
    title: "Video Production",
    short: "Commercials, Reels, YouTube & Motion Graphics",
    details: [
      "Commercial Video Editing",
      "YouTube Content",
      "Instagram Reels",
      "Motion Graphics",
      "Color Grading",
      "Sound Design",
    ],
  },
  {
    icon: Palette,
    title: "Brand Identity",
    short: "Identity Systems, Packaging & Marketing Design",
    details: [
      "Logo Design",
      "Brand Guidelines",
      "Packaging Design",
      "Menu Design",
      "Print Design",
      "Social Media Branding",
    ],
  },
  {
    icon: TrendingUp,
    title: "Content Strategy",
    short: "Content Planning, SEO & Growth Strategy",
    details: [
      "YouTube SEO",
      "Content Calendar",
      "Thumbnail Strategy",
      "Script Writing",
      "Analytics & Growth",
    ],
  },
  {
    icon: MonitorSmartphone,
    title: "UI / UX Design",
    short: "Websites, Landing Pages & Digital Experiences",
    details: [
      "Portfolio Websites",
      "Restaurant Websites",
      "Landing Pages",
      "Responsive Design",
      "Premium UI Systems",
    ],
  },
  {
    icon: Bot,
    title: "AI Automation",
    short: "ChatGPT, Claude & Business Automation",
    details: [
      "ChatGPT Automation",
      "Claude AI",
      "Workflow Design",
      "Business Automation",
      "Productivity Systems",
    ],
  },
];

export default function Services() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="services"
      className="bg-[#050505] py-28 text-white"
    >
      <div className="mx-auto max-w-[1500px] px-14">

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-5 text-[11px] uppercase tracking-[0.45em] text-neutral-500"
        >
          SERVICES
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-[70px] font-black tracking-[-3px]"
        >
          What I Do
        </motion.h2>

        <div className="border-t border-neutral-800">

          {services.map((service, index) => {
            const Icon = service.icon;
            const active = open === index;

            return (
              <motion.div
                key={service.title}
                layout
                className="border-b border-neutral-800"
              >
                <button
                  onClick={() =>
                    setOpen(active ? null : index)
                  }
                  className="group flex w-full items-center justify-between py-8 text-left"
                >
                  <div className="flex items-center gap-6">

                    <div className="rounded-xl border border-neutral-800 p-4 transition group-hover:border-white/20">
                      <Icon
                        size={26}
                        className="text-neutral-400 group-hover:text-white"
                      />
                    </div>

                    <div>
                      <h3 className="text-3xl font-bold">
                        {service.title}
                      </h3>

                      <p className="mt-2 text-[15px] text-neutral-500">
                        {service.short}
                      </p>
                    </div>

                  </div>

                  <motion.div
                    animate={{
                      rotate: active ? 180 : 0,
                    }}
                  >
                    <ChevronDown
                      size={28}
                      className="text-neutral-500"
                    />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {active && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        height: 0,
                      }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                      }}
                      transition={{
                        duration: 0.35,
                      }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 pl-[108px]">

                        <div className="grid grid-cols-2 gap-4">

                          {service.details.map((item) => (
                            <motion.div
                              key={item}
                              initial={{
                                opacity: 0,
                                x: -15,
                              }}
                              animate={{
                                opacity: 1,
                                x: 0,
                              }}
                              className="flex items-center gap-3"
                            >
                              <span className="h-2 w-2 rounded-full bg-white" />

                              <span className="text-[16px] text-neutral-300">
                                {item}
                              </span>
                            </motion.div>
                          ))}

                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}