"use client";

import Image from "next/image";
import { SKILLS } from "@/lib/DummyData";
import { normalizeTechName, TECH_ICONS } from "@/lib/MapTechnologiesLogo";
import {
  motion,
  useMotionValue,
  useTransform,
  useAnimationFrame,
} from "framer-motion";
import { useRef, useState } from "react";

const SPEED = 0.75;

export default function InfiniteScroller({
  direction,
}: {
  direction: "left" | "right";
}) {
  const baseX = useMotionValue(0);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  useAnimationFrame(() => {
    if (paused || !wrapperRef.current) return;

    const width = wrapperRef.current.scrollWidth / 2;
    const movement = direction === "left" ? -SPEED : SPEED;
    let next = baseX.get() + movement;

    if (next <= -width) next = 0;
    if (next >= 0) next = -width;

    baseX.set(next);
  });

  const x = useTransform(baseX, (v) => `${v}px`);

  const ITEMS = [...SKILLS, ...SKILLS];

  return (
    <>
      {/* LEFT FADE */}
      <div className="absolute left-0 top-0 h-full w-8 sm:w-24 pointer-events-none z-10 bg-gradient-to-r from-[#F8FAFB] dark:from-custom-black via-[#F8FAFB]/60 dark:via-custom-black/40 to-transparent" />

      {/* RIGHT FADE */}
      <div className="absolute right-0 top-0 h-full w-8 sm:w-24 pointer-events-none z-10 bg-gradient-to-l from-[#F8FAFB] dark:from-custom-black via-[#F8FAFB]/60 dark:via-custom-black/40 to-transparent" />

      <div ref={wrapperRef} className="overflow-hidden w-full">
        <motion.div style={{ x }} className="flex whitespace-nowrap py-5 ">
          {ITEMS.map((skill, idx) => {
            const normalized = normalizeTechName(skill);
            const Icon = TECH_ICONS[normalized] || TECH_ICONS.default;

            return (
              <motion.div
                key={idx}
                className="group mx-5 sm:mx-10 flex flex-col items-center select-none cursor-pointer opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-[1.02]  hover:-translate-y-2"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
              >
                <div className="w-20 h-20 p-4 rounded-2xl flex items-center justify-center border border-white/50 dark:border-white/20 shadow-lg transition-all duration-300 relative group-hover:-rotate-3">
                  {/* Icon */}
                  <Image
                    src={Icon}
                    alt={skill}
                    className="object-contain w-full h-full transition-all duration-300"
                  />
                </div>

                {/* Label */}
                <p className="z-10 text-sm text-custom-black dark:text-gray-300 mt-3 font-medium opacity-0 group-hover:opacity-100 -translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  {skill}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </>
  );
}
