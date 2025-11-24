"use client";

import { motion } from "framer-motion";

export default function OpenBadge() {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [0, -6, 0] }}
      transition={{
        duration: 1.8,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
      className="border border-gray-300 dark:border-gray-600 w-fit rounded-full px-5 py-1.5 flex items-center gap-2.5 bg-white dark:bg-transparent"
    >
      <motion.span
        className="w-2.5 h-2.5 rounded-full bg-green-600 shadow-[0_0_6px_2px_rgba(34,197,94,0.6)]"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
        }}
      />

      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
        Open To Opportunities
      </span>
    </motion.div>
  );
}
