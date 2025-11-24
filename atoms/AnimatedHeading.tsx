"use client";

import { motion } from "framer-motion";

interface HeadingProps {
  heading: string;
  className?: string;
}

const letterContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const letterAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function AnimatedHeading({ heading, className }: HeadingProps) {
  return (
    <motion.h1
      variants={letterContainer}
      initial="hidden"
      animate="visible"
      className={`text-5xl sm:text-9xl font-extrabold tracking-tighter flex flex-wrap gap-1 text-zinc-900 dark:text-white select-none hover:scale-110 ease-in-out duration-300  ${className}`}
    >
      {heading.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={letterAnimation}
          whileHover={{
            y: -10,
            scale: 1.2,
            color: "#2b7fff",
            transition: { type: "spring", stiffness: 400, damping: 12 },
          }}
          className="inline-block cursor-pointer"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.h1>
  );
}
