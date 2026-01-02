"use client";

import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SectionHeadingProps {
  icon?: ReactNode;
  heading?: string;
  className?: string;
  textColor?: string;
  description?: string;
  badge?: string;
  badgeColor?: string;
  badgePosition?: string;
  descriptionColor?: string;
}

const SectionHeading = ({
  icon,
  heading = "",
  className = "",
  textColor = "text-black",
  description,
  badge,
  badgeColor = "bg-black",
  badgePosition = "-rotate-12",
  descriptionColor = "text-gray-500",
}: SectionHeadingProps) => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    margin: "-10% 0px",
    once: true,
  });

  const words = heading.split(" ");

  return (
    <div
      ref={ref}
      className={`flex flex-col gap-2 items-center justify-center py-4 mb-10 select-none ${className}`}
    >
      {/* ICON */}
      {icon && (
        <div className="text-white flex items-center bg-blue-500/10 rounded-full p-3.5">
          <span className="text-blue-600">{icon}</span>
        </div>
      )}

      {/* BADGE */}
      {badge && (
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{
            duration: 1.25,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          className={`${badgeColor} mb-1.5 font-medium text-[14px] px-2.5 py-1.5 rounded-md ${badgePosition} hover:rotate-0 hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-pointer dark:brightness-75`}
        >
          <p className="text-white text-xs">{badge}</p>
        </motion.div>
      )}

      {/* HEADING */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.1, duration: 0.8 }}
        className={`font-semibold text-center leading-[1.1] tracking-tight text-3xl md:text-4xl dark:text-white/80 transition-transform duration-300 ${textColor}`}
      >
        <motion.span
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.04 },
            },
          }}
        >
          {words.map((word, wi) => (
            <span key={wi} className="inline-block">
              {/* Each letter animation */}
              {word.split("").map((char, ci) => (
                <motion.span
                  key={ci}
                  variants={{
                    hidden: { opacity: 0, y: 5 },
                    show: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.3, ease: "easeOut" },
                    },
                  }}
                  whileHover={{
                    y: -6,
                    scale: 1.15,
                    color: "rgb(36, 99, 235)",
                    transition: {
                      type: "spring",
                      stiffness: 350,
                      damping: 15,
                    },
                  }}
                  className="inline-block cursor-default"
                >
                  {char}
                </motion.span>
              ))}

              <span className="inline-block">&nbsp;</span>
            </span>
          ))}
        </motion.span>
      </motion.h1>

      {/* DESCRIPTION */}
      {description && (
        <motion.p
          className={`font-medium text-center mt-1 ${descriptionColor}`}
        >{description}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;
