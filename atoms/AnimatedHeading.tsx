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
    transition: { staggerChildren: 0.04 },
  },
};

const letterAnimation = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export default function AnimatedHeading({ heading, className }: HeadingProps) {
  const words = heading.split(" "); 
  
  return (
    <motion.h1
      variants={letterContainer}
      initial="hidden"
      animate="visible"
      className={`font-extrabold text-center select-none leading-[1.1] tracking-tight 
      text-8xl xl:text-9xl text-custom-black dark:text-white 
      transition-transform duration-300 ${className}`}
    >
     {words.map((word, wordIndex) => (
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
  );
}
