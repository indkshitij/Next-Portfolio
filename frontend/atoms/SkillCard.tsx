"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SkillCard({
  skill,
}: {
  skill: {
    name: string;
    normalized: string;
    icon: string;
    description: string;
  };
}) {
  return (
    <div className="group relative h-30 sm:h-44 w-full px-4 py-4 border border-gray/10 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:bg-gray/5 overflow-hidden cursor-pointer hover:bg-gray-200/50 dark:hover:bg-zinc-900/80">
      {/* ICON */}
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{
          duration: 0.3,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.15, y: -6 }}
        className="p-0 sm:p-4 dark:sm:p-0 sm:mt-10 group-hover:py-0 group-hover:mt-0 transition-all duration-300 "
      >
        <div className="dark:bg-gray-100/15 dark:brightness-90 dark:backdrop-blur-md dark:rounded-md dark:p-3 dark:group-hover:p-1.5 transition-all duration-300">
          <Image
            src={skill.icon}
            alt={skill.name}
            width={40}
            height={40}
            className="object-contain "
          />
        </div>
      </motion.div>

      {/* TITLE */}
      <h3 className=" text-black dark:text-gray-200 text-sm md:text-md font-medium leading-tight text-center select-none">
        {skill.name}
      </h3>

      {/* DESCRIPTION */}
      <p className="hidden sm:flex opacity-0 translate-y-16 group-hover:translate-y-0 group-hover:opacity-100 text-black dark:text-gray-300 text-sm transition-all duration-300 ease-in-out px-1 text-center">
        {skill.description}
      </p>
    </div>
  );
}
