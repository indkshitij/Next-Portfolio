"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export default function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.4, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          duration: 0.8,
          ease: "easeOut",
        }}
        className="bg-gradient-to-br from-white to-slate-300 
                   bg-clip-text text-transparent text-center 
                   text-4xl md:text-7xl font-semibold tracking-tight 
                   drop-shadow-[0_4px_20px_rgba(255,255,255,0.15)]"
      >
        Build lamps <br /> the right way
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.35,
          duration: 0.6,
          ease: "easeOut",
        }}
        className="mt-4 text-slate-300 text-center text-lg md:text-xl max-w-2xl"
      >
        Perfect lighting aesthetics crafted with precision, motion and glow.
      </motion.p>
    </LampContainer>
  );
}

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-[55vh] flex-col items-center justify-center overflow-hidden bg-black w-full z-0",
        className
      )}
    >
      {/* ============================= */}
      {/*        BACKGROUND LAMP        */}
      {/* ============================= */}

      <div className="absolute inset-0 flex items-center justify-center scale-y-125 isolate">

        {/* LEFT BEAM */}
        <motion.div
          initial={{ opacity: 0.35, width: "12rem" }}
          whileInView={{ opacity: 0.9, width: "28rem" }}
          transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
          style={{
            backgroundImage: "conic-gradient(var(--conic-position), var(--tw-gradient-stops))",
          }}
          className="absolute right-1/2 h-56 w-[28rem] bg-gradient-conic 
                     from-cyan-400 via-transparent to-transparent
                     [--conic-position:from_70deg_at_center_top]"
        >
          {/* Fades to dark smoothly */}
          <div className="absolute inset-x-0 bottom-0 h-36 bg-black 
                          [mask-image:linear-gradient(to_top,white,transparent)]"></div>
          <div className="absolute left-0 top-0 h-full w-32 bg-black 
                          [mask-image:linear-gradient(to_right,white,transparent)]"></div>
        </motion.div>

        {/* RIGHT BEAM */}
        <motion.div
          initial={{ opacity: 0.35, width: "12rem" }}
          whileInView={{ opacity: 0.9, width: "28rem" }}
          transition={{ delay: 0.25, duration: 1, ease: "easeOut" }}
          style={{
            backgroundImage: "conic-gradient(var(--conic-position), var(--tw-gradient-stops))",
          }}
          className="absolute left-1/2 h-56 w-[28rem] bg-gradient-conic 
                     from-transparent via-transparent to-cyan-400
                     [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute inset-x-0 bottom-0 h-36 bg-black 
                          [mask-image:linear-gradient(to_top,white,transparent)]"></div>
          <div className="absolute right-0 top-0 h-full w-32 bg-black 
                          [mask-image:linear-gradient(to_left,white,transparent)]"></div>
        </motion.div>

        {/* DARK BASE BLUR */}
        <div className="absolute bottom-0 h-40 w-full bg-black/80 blur-2xl"></div>

        {/* CENTER GLOW */}
        <div className="absolute top-[42%] h-36 w-[26rem] rounded-full 
                        bg-cyan-500/40 blur-[80px] opacity-80"></div>

        {/* INNER CORE GLOW */}
        <motion.div
          initial={{ width: "6rem" }}
          whileInView={{ width: "14rem" }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="absolute top-[40%] h-28 w-56 rounded-full 
                     bg-cyan-300/60 blur-[60px]"
        />

        {/* LINE */}
        <motion.div
          initial={{ width: "12rem" }}
          whileInView={{ width: "26rem" }}
          transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
          className="absolute top-[34%] h-[2px] bg-cyan-300/80 
                     shadow-[0_0_25px_6px_rgba(0,255,255,0.4)]"
        />
      </div>

      {/* ============================= */}
      {/*         CONTENT LAYER         */}
      {/* ============================= */}
      <div className="relative z-50 flex flex-col items-center px-6">
        {children}
      </div>
    </div>
  );
};
