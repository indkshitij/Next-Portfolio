"use client";

import { motion } from "framer-motion";
import { Cover } from "@/components/ui/cover";
interface HeadingProps {
  heading?: string;
  name?: string;
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

export default function AnimatedHeading({
  heading = "Hi, I'm ",
  name = "Kshitij",
  className,
}: HeadingProps) {
  const words = heading.split(" ");
  return (
    <>
      <div className="flex items-center flex-col sm:flex-row ">
        <motion.h1
          variants={letterContainer}
          initial="hidden"
          animate="visible"
          className={`font-bold text-center select-none leading-[1.1] tracking-tight text-7xl xl:text-9xl text-black dark:text-gray-200 transition-transform duration-300 ${className} sm:-mr-8 mr-0`}
        >
          {words.map((word, wordIndex) => {
            const innerLetters = word.split("").map((char, i) => (
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
            ));

            return (
              <span key={wordIndex} className="inline-block">
                {innerLetters}
                <span className="inline-block">&nbsp;</span>
              </span>
            );
          })}
        </motion.h1>
        <Cover className="font-bold dark:text-zinc-300 text-center select-none leading-[1.1] tracking-tight text-7xl xl:text-9xl ">
          {name}
        </Cover>
      </div>
    </>
  );
}
