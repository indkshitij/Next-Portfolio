"use client";

import { ReactNode, useRef } from "react";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { motion, useInView, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface PageHeadingProps {
  heading: string | ReactNode;
  subheading?: string | ReactNode;
  className?: string;
}

/* Parent container: controls stagger */
const letterContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.045 },
  },
};

/* Individual letter animation */
const letterAnimation: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
};

const PageHeading = ({
  heading,
  subheading = "",
  className = "",
}: PageHeadingProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const words = typeof heading === "string" ? heading.split(" ") : [];

  return (
    <section
      className={cn(
        "cursor-default relative w-full flex justify-center items-center bg-[#F8FAFB] dark:bg-custom-black px-4 sm:px-6 md:px-10",
        className
      )}
    >
      <div
        ref={ref}
        className="pt-32 sm:pt-40 sm:pb-10 relative w-full rounded-b-2xl"
      >
        {/* Background Ripple */}
        <div className="absolute inset-0 pointer-events-none opacity-90">
          <BackgroundRippleEffect rows={5} cols={27} cellSize={60} />
        </div>

        {/* Container Animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-20 flex flex-col items-center text-center"
        >
          {/* HEADING WITH SMOOTH STAGGER ANIMATION */}
          <motion.div
            variants={letterContainer}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className={cn(
              "font-semibold leading-[1.2] tracking-tight select-none",
              "text-4xl sm:text-5xl md:text-6xl",
              "text-custom-black dark:text-white"
            )}
          >
            {typeof heading === "string"
              ? words.map((word, wi) => (
                  <span key={wi} className="inline-block mr-2">
                    {word.split("").map((char, ci) => (
                      <motion.span
                        key={ci}
                        variants={letterAnimation}
                        whileHover={{
                          y: -8,
                          scale: 1.16,
                          color: "rgb(36, 99, 235)",
                          transition: {
                            type: "spring",
                            stiffness: 350,
                            damping: 14,
                          },
                        }}
                        className="inline-block"
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                ))
              : heading}
          </motion.div>

          {/* SUBHEADING WITH SMOOTH FADE + BLUR */}
          {subheading && (
            <div
              className={cn(
                "max-w-4xl mt-3 text-base sm:text-lg md:text-xl",
                "text-light-gray dark:text-gray-300 font-medium leading-relaxed"
              )}
            >
              {subheading}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default PageHeading;
