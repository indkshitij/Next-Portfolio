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
import SectionContainer from "@/lib/Wrapper/SectionContainer";
import SectionHeading from "../atoms/SectionHeading";

const SPEED = 0.6;

const SkillsCarousel = () => {
  return (
    <div className="w-full -mb-24 -mt-5">
      <SectionContainer>
        <SectionHeading
          badge="Highlights"
          badgeColor="bg-indigo-500"
          badgePosition="-rotate-5"
          heading="The Tools I Work With"
          description="A continuously evolving collection of modern tools I use to create meaningful digital experiences."
        />

        <div className="-space-y-15 sm:-space-y-6 relative -mt-8">
          <InfiniteScroller direction="left" />
          <InfiniteScroller direction="right" />
        </div>
      </SectionContainer>
    </div>
  );
};

export default SkillsCarousel;

// -------------------------------------------------------

function InfiniteScroller({ direction }: { direction: "left" | "right" }) {
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
      {/* 🟦 LEFT GRADIENT */}
      <div className="absolute left-0 top-0 h-full sm:w-32 pointer-events-none z-10  bg-gradient-to-r from-[#F8FAFB] dark:from-custom-black/95 via-[#F8FAFB] dark:via-custom-black/70 to-transparent" />

      {/* 🟦 RIGHT GRADIENT */}
      <div className="absolute right-0 top-0 h-full sm:w-32 pointer-events-none z-10 bg-gradient-to-l from-[#F8FAFB] dark:from-custom-black/95 via-[#F8FAFB] dark:via-custom-black/70 to-transparent" />
      <div
        ref={wrapperRef}
        className="overflow-hidden w-full"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <motion.div style={{ x }} className="flex whitespace-nowrap py-6">
          {ITEMS.map((skill, idx) => {
            const normalized = normalizeTechName(skill);
            const Icon = TECH_ICONS[normalized] || TECH_ICONS.default;

            return (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.15, y: -6 }}
                transition={{ type: "spring", stiffness: 250, damping: 15 }}
                className="group mx-8 flex flex-col items-center select-none transition-all cursor-pointer opacity-80 hover:opacity-100 "
              >
                {/* 🟦 CLOUD-LIKE BACKGROUND BUBBLE */}
                <div className="w-20 h-20 p-4 rounded-3xl flex items-center justify-center  backdrop-blur-xl border border-white/50 transition-all duration-200 hover:shadow-xl hover:border-white/80">
                  <Image
                    src={Icon}
                    alt={skill}
                    className="object-contain w-full h-full"
                  />
                </div>

                <span className="text-sm text-gray-700 dark:text-gray-300 mt-3 font-medium opacity-0 group-hover:opacity-100">
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
