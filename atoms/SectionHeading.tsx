"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  icon?: ReactNode;
  heading?: string;
  className?: string;
}

const letterContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04 },
  },
};

const letterAnimation = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const SectionHeading = ({
  icon,
  heading,
  className = "",
}: SectionHeadingProps) => {
  const words = heading?.split(" ");

  return (
    <div
      className={`flex flex-col gap-2 items-center justify-center py-4 select-none ${className}`}
    >
      {icon && (
        <div className="text-custom-black text-white flex items-center bg-blue-500/10 rounded-full p-3.5">
          <span className="text-blue-font"> {icon}</span>
        </div>
      )}

      <motion.h1
        variants={letterContainer}
        initial="hidden"
        animate="visible"
        className="font-extrabold text-center select-none leading-[1.1] tracking-tight text-4xl md:text-5xl text-custom-black dark:text-white transition-transform duration-300"
      >
        {words?.map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block">
            {word.split("").map((char, i) => (
              <motion.span
                key={i}
                variants={letterAnimation}
                whileHover={{
                  y: -8,
                  scale: 1.18,
                  color: "rgb(36, 99, 235)",
                  transition: { type: "spring", stiffness: 400, damping: 12 },
                }}
                className="inline-block cursor-default"
              >
                {char}
              </motion.span>
            ))}
            <span className="inline-block">&nbsp;</span>
          </span>
        ))}
      </motion.h1>
    </div>
  );
};

export default SectionHeading;
