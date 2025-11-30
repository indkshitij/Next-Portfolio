"use client";

import { motion, stagger, useAnimate } from "motion/react";
import { useEffect } from "react";

interface TypewriterProps {
  text: string;
  cursorColor?: string;
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  repeatDelay?: number;
}

export default function Typewriter({
  text,
  cursorColor = "#3b82f6",
  className = "",
  typingSpeed = 0.12, // slower typing
  deletingSpeed = 0.1, // faster delete
  repeatDelay = 2.5, // pause before delete + before retype
}: TypewriterProps) {
  const characters = text.split("");

  const [scope, animate] = useAnimate();

  useEffect(() => {
    const run = async () => {
      while (true) {
        // RESET TO HIDDEN
        await animate("span", { opacity: 0, display: "none" }, { duration: 0 });

        // TYPE EFFECT
        await animate(
          "span",
          { opacity: 1, display: "inline-block" },
          {
            delay: stagger(typingSpeed),
            duration: typingSpeed,
            ease: "easeOut",
          }
        );

        // WAIT BEFORE DELETING
        await new Promise((res) => setTimeout(res, repeatDelay * 1000));

        // DELETE EFFECT (reverse stagger)
        await animate(
          "span",
          { opacity: 0, display: "none" },
          {
            delay: stagger(-deletingSpeed),
            duration: deletingSpeed,
            ease: "easeIn",
          }
        );

        // WAIT BEFORE TYPING AGAIN
        await new Promise((res) => setTimeout(res, repeatDelay * 1000));
      }
    };

    run();
  }, []);

  return (
    <span className={`inline-flex items-center ${className}`}>
      <motion.span ref={scope}>
        {characters.map((c, i) => (
          <motion.span key={i} className="opacity-0 hidden">
            {c}
          </motion.span>
        ))}
      </motion.span>

      {/* cursor */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{ backgroundColor: cursorColor }}
        className="inline-block w-[3px] h-[2em] ml-1 rounded-sm"
      />
    </span>
  );
}
