"use client";

import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

export default function ExploreBtn({ path }: { path?: string }) {
  return (
    <motion.a
      href={path || "#"}
      className="flex flex-col justify-center items-center gap-2 cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.6 }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.p
        className="text-lg sm:text-xl font-medium text-zinc-600 dark:text-zinc-300 ease-in-out duration-300"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        Explore My Work
      </motion.p>

      <motion.div
        className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-400 ease-in-out duration-300 p-3 rounded-full shadow-lg"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.3, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.15 }}
      >
        <FaChevronDown className="text-xl text-white" />
      </motion.div>
    </motion.a>
  );
}
