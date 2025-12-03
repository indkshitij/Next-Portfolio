"use client";

import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";

interface TypewriterProps {
  text?: string;
  cursorColor?: string;
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  repeatDelay?: number;
}

export default function Typewriter({
  text="",
  cursorColor = "#3b82f6",
  className = "",
  typingSpeed = 0.15,
  deletingSpeed = 0.08,
  repeatDelay = 1.1,
}: TypewriterProps) {
  const letters = text.split("");
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const run = async () => {
      while (true) {
        // Reset
        await animate("span.wrap", { opacity: 0, width: 0 }, { duration: 0 });

        // TYPE
        await animate(
          "span.wrap",
          { opacity: 1, width: "auto" },
          {
            delay: stagger(typingSpeed),
            duration: typingSpeed,
            ease: "easeOut",
          }
        );

        await new Promise((r) => setTimeout(r, repeatDelay * 1000));

        // DELETE 
        await animate(
          "span.wrap",
          { opacity: 0, width: 0 },
          {
            delay: stagger(deletingSpeed, { from: "last" }),
            duration: deletingSpeed,
            ease: "easeInOut",
          }
        );

        await new Promise((r) => setTimeout(r, repeatDelay * 1000));
      }
    };

    run();
  }, []);

  return (
    <span className={`inline-flex items-center ${className}`}>
      
      <motion.span ref={scope} className="inline-flex">
        {letters.map((c, i) => (
          <span
            key={i}
            className="wrap inline-flex overflow-hidden opacity-0"
            style={{ width: 0 }}
          >
            <span>{c}</span>
          </span>
        ))}
      </motion.span>

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        style={{ backgroundColor: cursorColor }}
        className="inline-block w-[3px] h-[2em] ml-1 rounded-sm"
      />
    </span>
  );
}
