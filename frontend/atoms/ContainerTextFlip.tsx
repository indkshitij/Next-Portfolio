"use client";

import React, { useState, useEffect, useRef, useId } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

interface ContainerTextFlipProps {
  words: string[];
  interval?: number;
  animationDuration?: number;
  className?: string;
  textClassName?: string;
}

const ContainerTextFlip = ({
  words = ["Fulltime", "Internship", "Contract", "Freelancing"],
  interval = 2000,
  animationDuration = 400,
  className,
  textClassName,
}: ContainerTextFlipProps) => {
  const id = useId();
  const [index, setIndex] = useState(0);

  const ghostRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number | null>(null);
  const [height, setHeight] = useState<number | null>(null);

  // Measure BEFORE animation → using ghost element
  const measure = (word: string) => {
    if (ghostRef.current) {
      ghostRef.current.innerHTML = word;
      const rect = ghostRef.current.getBoundingClientRect();
      setWidth(rect.width);
      setHeight(rect.height);
    }
  };

  useEffect(() => {
    measure(words[index]); // measure instantly before showing
  }, [index]);

  // Interval switching
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => {
        const next = (i + 1) % words.length;
        measure(words[next]); // measure NEXT WORD before switching
        return next;
      });
    }, interval);

    return () => clearInterval(id);
  }, [words, interval]);

  return (
    <>
      <motion.div
        className={cn("relative", className)}
        style={{
          width: width ?? "auto",
          height: height ?? "auto",
          display: "inline-flex",
          alignItems: "center",
        }}
        animate={width !== null ? { width } : undefined}
        transition={{ duration: 0.25 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={`${words[index]}-${id}`}
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 25 }}
            transition={{
              duration: animationDuration / 1000,
              ease: "easeInOut",
            }}
            className={cn(textClassName)}
          >
            {words[index]}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* GHOST ELEMENT for measurement (not visible) */}
      <div
        ref={ghostRef}
        className="absolute opacity-0 pointer-events-none whitespace-normal"
        style={{ position: "absolute", visibility: "hidden" }}
      ></div>
    </>
  );
};

export default ContainerTextFlip;
