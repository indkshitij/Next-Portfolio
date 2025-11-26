"use client";

import { motion } from "framer-motion";

export default function OpenBadge() {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [0, -5, 0] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
      className="w-fit rounded-full px-6 py-2 flex items-center gap-3 border border-gray-200 dark:border-white/10  bg-white/70 dark:bg-white/5 backdrop-blur-md shadow-sm dark:shadow-none hover:shadow-lg transition-shadow duration-300"
    >
      {/* Animated Pulse Dot */}
      <motion.span
        className="relative w-3 h-3 rounded-full bg-green-font "
        animate={{ scale: [1, 1.4, 1] }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Halo Pulse */}
        <motion.span
          className="absolute inset-0 rounded-full bg-green-font opacity-40"
          animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.span>

      {/* Text */}
      <span className="text-[0.9rem] font-semibold tracking-wide text-gray-800 dark:text-gray-200">
        Open To Opportunities
      </span>
    </motion.div>
  );
}
