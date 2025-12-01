"use client";

import { ReactNode } from "react";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PageHeadingProps {
  heading: string | ReactNode;
  subheading?: string;
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

const PageHeading = ({ heading, subheading = "", className = "" }: PageHeadingProps) => {
  const words = typeof heading === "string" ? heading.split(" ") : [];

  return (
    <section
      className={cn(
        "relative w-full flex justify-center items-center bg-[#F8FAFB] dark:bg-custom-black px-4 sm:px-6 md:px-10",
        className
      )}
    >
      <div className="pt-32 sm:pt-40 sm:pb-10 relative w-full rounded-b-2xl">
        {/* Background Ripple */}
        <div className="absolute inset-0 pointer-events-none opacity-90">
          <BackgroundRippleEffect rows={5} cols={27} cellSize={60} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-20 flex flex-col items-center text-center"
        >
          {/* HEADING */}
          <motion.h1
            variants={letterContainer}
            initial="hidden"
            animate="visible"
            className={cn(
              "font-bold leading-[1.2] tracking-tight select-none",
              "text-4xl sm:text-5xl md:text-6xl ",
              "text-custom-black dark:text-white"
            )}
          >
            {typeof heading === "string"
              ? words.map((word, wordIndex) => (
                  <span key={wordIndex} className="inline-block mr-2">
                    {word.split("").map((char, i) => (
                      <motion.span
                        key={i}
                        variants={letterAnimation}
                        whileHover={{
                          y: -8,
                          scale: 1.18,
                          color: "rgb(36, 99, 235)",
                          transition: {
                            type: "spring",
                            stiffness: 400,
                            damping: 12,
                          },
                        }}
                        className="inline-block cursor-default"
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                ))
              : heading}
          </motion.h1>

          {/* SUBHEADING */}
          {subheading && (
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
              className="max-w-4xl mt-3 text-base sm:text-lg md:text-xl 
                         text-light-gray dark:text-gray-300 font-medium leading-relaxed"
            >
              {subheading}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default PageHeading;
