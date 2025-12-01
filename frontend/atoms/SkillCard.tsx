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
    <div className="group relative h-44 w-full px-4 py-4 border border-gray/10 flex flex-col items-center justify-center gap-3 transition-all duration-500 hover:bg-gray/5 overflow-hidden cursor-pointer hover:bg-gray-200/50">
      {/* ICON */}
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{
          duration: 1.4,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.15, y: -6 }}
        className="p-4 sm:mt-10 group-hover:py-0 group-hover:mt-0 transition-all duration-500"
      >
        
          <Image
            src={skill.icon}
            alt={skill.name}
            width={40}
            height={40}
            className="object-contain"
          />
        
      </motion.div>

      {/* TITLE */}
      <h3 className=" text-custom-black text-md font-medium leading-tight text-center select-none">
        {skill.name}
      </h3>

      {/* DESCRIPTION */}
      <p className="hidden sm:flex opacity-0 translate-y-16 group-hover:translate-y-0 group-hover:opacity-100 text-custom-black text-[12px] transition-all duration-500 ease-in-out px-1 text-center">
        {skill.description}
      </p>
    </div>
  );
}
