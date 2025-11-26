"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsMoonStars, BsSunFill } from "react-icons/bs";

export default function ThemeToggler() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timeout = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(timeout);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-12 h-12 max-w-fit rounded-full px-1 
      transition-all bg-gray-300 dark:bg-gray-700 flex justify-center items-center cursor-pointer"
    >
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg 
        bg-white dark:bg-black"
      >
        <AnimatePresence mode="wait">
          {isDark ? (
            <motion.div
              key="moon"
              initial={{ opacity: 0, rotate: -45 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 45 }}
              transition={{ duration: 0.2 }}
            >
              <BsMoonStars className="text-yellow-400" size={20} />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ opacity: 0, rotate: 45 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -45 }}
              transition={{ duration: 0.2 }}
            >
              <BsSunFill className="text-yellow-600" size={20} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <motion.span
        layout
        className="absolute inset-0 rounded-full"
        animate={{
          backgroundColor: isDark
            ? "rgba(34,197,94,0.2)"
            : "rgba(251,191,36,0.25)",
        }}
        transition={{ duration: 0.1 }}
      />
    </button>
  );
}
