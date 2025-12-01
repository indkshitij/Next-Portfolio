"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";

interface PageHeadingProps {
  heading?: string | ReactNode;
  subheading?: string;
  className?: string;
}

const PageHeading = ({
  heading = "Build lamps the right way",
  subheading = "",
  className = "",
}: PageHeadingProps) => {
  return (
    <LampContainer className={className}>
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0.5, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.25,
          duration: 0.75,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-white via-gray-200 to-gray-500 bg-clip-text text-transparent text-center text-4xl md:text-7xl font-semibold tracking-tight drop-shadow-[0_4px_20px_rgba(255,255,255,0.15)]"
      >
        {heading}
      </motion.h1>

      {/* Subheading */}
      {subheading && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.35,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-4 text-slate-300 text-center text-md md:text-lg max-w-2xl leading-relaxed"
        >
          {subheading}
        </motion.p>
      )}
    </LampContainer>
  );
};

export default PageHeading;
