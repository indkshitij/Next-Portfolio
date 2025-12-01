"use client";

import { motion } from "framer-motion";
import Badge from "./Badge";

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
       className="shadow-xl rounded-lg "
    >
      <Badge
        className="cursor-pointer"
        content={
          <div className="flex items-center gap-4 p-0.5">
            {/* Pulse Dot */}
            <motion.span
              className="relative w-3 h-3 rounded-full bg-green-font"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <motion.span
                className="absolute inset-0 rounded-full bg-green-font opacity-40"
                animate={{ scale: [1, 2, 1], opacity: [0.5, 0] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.span>

            {/* Text */}
            <span className="text-[0.9rem] font-semibold tracking-wide text-gray-800 dark:text-gray-200">
              Open To Opportunities
            </span>
          </div>
        }
      />
    </motion.div>
  );
}
