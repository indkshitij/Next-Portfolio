"use client";

import Icons from "@/lib/Icons";
import { motion } from "framer-motion";

export default function ExploreBtn({ path }: { path?: string }) {
  return (
    <motion.a
      href={path || "#"}
      className="flex flex-col justify-center items-center gap-2 cursor-pointer"
      initial={{ y: 0 }}
      animate={{ y: [0, -30, 12, -10, 0] }}
      transition={{
        duration: 1.35,
        repeat: Infinity,
        repeatDelay: 2.5,
        ease: "easeInOut",
      }}
    >
      <p className="text-center text-lg tracking-tight font-bold text-light-gray">
        Explore My Work
      </p>

      <motion.div
        className="bg-blue-font hover:bg-blue-font dark:bg-blue-400 p-1 md:p-1.5 rounded-full shadow-lg"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1,
          repeat: Infinity,
        }}
      >
        <Icons className=" text-white" icon="chevron-down" />
      </motion.div>
    </motion.a>
  );
}
