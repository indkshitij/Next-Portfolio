"use client";

import { useTheme } from "next-themes";
import { BsMoonStars, BsSunFill } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggler() {
  const { setTheme, resolvedTheme } = useTheme();

  if (!resolvedTheme) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`sm:w-16 sm:h-16 rounded-xl flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 ${!isDark && "sm:border-2 border-gray-200"} cursor-pointer bg-transparent ${isDark ? "sm:bg-[#1a1c1d]" : "sm:bg-[#f4f5f6]"}`}
    >
      {/* KEEP WRAPPER FIXED TO PREVENT MOBILE SHIFT */}
      <div className="relative w-8 h-8 flex items-center justify-center">
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.div
              key="moon"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <BsMoonStars size={26} className="text-blue-300" />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <BsSunFill size={26} className="text-yellow-500" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </button>
  );
}
