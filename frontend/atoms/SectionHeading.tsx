"use client";

import { ReactNode, useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SectionHeadingProps {
  icon?: ReactNode;
  heading?: string;
  className?: string;
  speed?: number;
  textColor?: string;
  description?: string;
  badge?: string;
  badgeColor?: string;
  badgePosition?: string;
  descriptionColor?: string;
}

const chars = "!<>-_\\/[]{}—=+*^?#_ ";

const SectionHeading = ({
  icon,
  heading,
  className = "",
  speed = 200,
  textColor = "text-custom-black",
  description,
  badge,
  badgeColor = "bg-custom-black",
  badgePosition = "-rotate-12",
  descriptionColor = "text-light-gray",
}: SectionHeadingProps) => {
  const [displayText, setDisplayText] = useState<string>("");
  const ref = useRef(null);

  const isInView = useInView(ref, {
    margin: "0% 0px",
    once: true,
  });

  useEffect(() => {
    if (!heading || !isInView) return;

    const total = heading.length;
    let frame = 0;

    const interval = setInterval(() => {
      frame++;

      const newText = heading
        .split("")
        .map((char, i) => {
          if (char === " ") return " ";
          if (i < frame) return char;
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");

      setDisplayText(newText);

      if (frame >= total) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [heading, isInView, speed]);

  const encryptedWords = displayText.split(" ");

  return (
    <div
      ref={ref}
      className={`flex flex-col gap-2 items-center justify-center py-4 mb-10 select-none  ${className}`}
    >
      {icon && (
        <div className="text-white flex items-center bg-blue-500/10 rounded-full p-3.5">
          <span className="text-blue-font">{icon}</span>
        </div>
      )}

      {badge && (
        <motion.div
          animate={{ scale: [1, 1.15, 1] }} 
          transition={{
            duration: 1.25,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          className={`${badgeColor} mb-1.5 font-medium text-[14px] px-2.5 py-1.5 rounded-md ${badgePosition} hover:rotate-0 hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-pointer`}
        >
          <p className="text-white text-xs">{badge}</p>
        </motion.div>
      )}

      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.1, duration: 0.8 }}
        className={`font-semibold text-center leading-[1.1] tracking-tight text-4xl  dark:text-white transition-transform duration-300 ${textColor}`}
      >
        {encryptedWords.map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block">
            {/* Split each word into characters for hover animation */}
            {word.split("").map((char, i) => (
              <motion.span
                key={i}
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

            {/* Add space between every word */}
            <span className="inline-block">&nbsp;</span>
          </span>
        ))}
      </motion.h1>

      {description && (
        <p className={`font-medium text-center mt-1 ${descriptionColor}`}>{description}</p>
      )}
    </div>
  );
};

export default SectionHeading;
