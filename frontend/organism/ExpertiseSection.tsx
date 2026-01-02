"use client";

import { motion } from "framer-motion";
import SectionContainer from "@/lib/Wrapper/SectionContainer";
import SectionHeading from "@/frontend/atoms/SectionHeading";
import Icons from "@/lib/Icons";
import { EXPERTISE } from "@/lib/DummyData";

const COLORS = ["#FFB800", "#FF6B4A", "#00B3FF", "#3DDC84"];

const ANIMATIONS = [
  { y: [0, -4, 0] },
  { scale: [1, 1.05, 1] },
  { rotate: [0, 4, -4, 0] },
  { x: [0, 4, 0] },
  { y: [0, -6, -2, 0] },
];

export default function ExpertiseSection() {
  return (
    <div className="bg-[#000]">
      <SectionContainer>
        <SectionHeading
          badge="Expertise"
          badgeColor="bg-indigo-500"
          heading="Expertise I Bring"
          textColor="text-white"
          description="A refined set of skills and strengths I bring to every project."
          descriptionColor="text-gray-300"
          badgePosition="rotate-5"
        />

        <div className="mt-14 rounded-lg border border-white/10 overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {EXPERTISE.map((item, idx) => (
              <ExpertiseCard key={idx} item={item} idx={idx} />
            ))}
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}

interface ExpertiseCardProps {
  item: { slug: string; title: string; desc: string };
  idx: number;
}

function ExpertiseCard({ item, idx }: ExpertiseCardProps) {
  const color = COLORS[idx % COLORS.length];
  const animation = ANIMATIONS[idx % ANIMATIONS.length];
  const isEven = idx % 2 === 0;

  return (
    <div className="group relative h-30 md:h-44 w-full px-4 py-6 border border-white/10 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:bg-white/5 overflow-hidden cursor-pointer">
      <motion.div
        animate={isEven ? animation : undefined}
        transition={{
          duration: 0.3,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        whileHover={
          !isEven ? { scale: 1.2, rotate: 6, y: -6 } : { scale: 1.15, y: -4 }
        }
        style={{ color }}
        className="p-0 md:p-4 flex justify-center items-center mt-18 sm:mt-10 group-hover:mt-0 group-hover:py-0 transition-all duration-300 dark:brightness-75"
      >
        <Icons icon={item.slug} size={40} />
      </motion.div>

      {/* TITLE */}
      <h3 className="text-white dark:text-gray-200 text-sm md:text-md font-medium leading-tight text-center select-none">
        {item.title}
      </h3>

      {/* DESCRIPTION */}
      <p className="opacity-0 translate-y-16 group-hover:translate-y-0 group-hover:opacity-100 text-white dark:text-gray-300 text-sm transition-all duration-300 ease-in-out px-1 text-center">
        {item.desc}
      </p>
    </div>
  );
}
