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

const SPEED = 1.2;
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

  const ITEMS =
    direction === "left"
      ? [...SKILLS, ...SKILLS].reverse()
      : [...SKILLS, ...SKILLS];

  return (
    <>
      {/* LEFT FADE */}
      <div className="absolute left-0 top-0 h-full sm:w-32 pointer-events-none z-10 bg-gradient-to-r from-[#F8FAFB] dark:from-custom-black via-[#F8FAFB]/60 dark:via-custom-black/40 to-transparent" />

      {/* RIGHT FADE */}
      <div className="absolute right-0 top-0 h-full sm:w-32 pointer-events-none z-10 bg-gradient-to-l from-[#F8FAFB] dark:from-custom-black via-[#F8FAFB]/60 dark:via-custom-black/40 to-transparent" />

      <div
        ref={wrapperRef}
        className="overflow-hidden w-full"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <motion.div
          style={{ x }}
          className="flex whitespace-nowrap py-6 will-change-transform"
        >
          {ITEMS.map((skill, idx) => {
            const normalized = normalizeTechName(skill);
            const Icon = TECH_ICONS[normalized] || TECH_ICONS.default;

            return (
              <motion.div
                key={idx}
                className="group mx-10 flex flex-col items-center select-none cursor-pointer opacity-70 hover:opacity-100 transition-all duration-200 hover:scale-[1.02]  hover:-translate-y-2"
              >
                <div className="w-20 h-20 p-4 rounded-3xl flex items-center justify-center backdrop-blur-xl border border-white/50 dark:border-white/20 shadow-lg transition-all duration-200 relative group-hover:-rotate-3">
                  {/* Inner Glow */}
                  <div className="absolute inset-0 rounded-3xl bg-white/20 dark:bg-white/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>

                  {/* Outer subtle ring */}
                  <div className="absolute inset-0 rounded-3xl border border-white/40 dark:border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 "></div>

                  {/* Icon */}
                  <Image
                    src={Icon}
                    alt={skill}
                    className="object-contain w-full h-full drop-shadow-[0_4px_12px_rgba(0,0,0,0.25)] group-hover:drop-shadow-[0_6px_18px_rgba(0,0,0,0.4)] transition-all duration-200"
                  />
                </div>

                {/* Label */}
                <span className="text-sm text-custom-black dark:text-gray-300 mt-3 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {skill}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </>
  );
}
