"use client";

import React, { useState, useRef } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface TooltipProps {
  text?: string;
  content?: React.ReactNode;
  children: React.ReactNode;
  position?: "top" | "bottom";
  className?: string;
  background?:string;
}

export default function Tooltip({
  text,
  content,
  children,
  position = "top",
  className,
  background="bg-black",
}: TooltipProps) {
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const [show, setShow] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  const handleEnter = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setCoords({
        top: position === "top" ? rect.top - 50 : rect.bottom + 10,
        left: rect.left + rect.width / 2,
      });
      setShow(true);
    }
  };

  const handleLeave = () => setShow(false);

  return (
    <>
      <div
        ref={ref}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className="inline-flex"
      >
        {children}
      </div>

      {createPortal(
        <AnimatePresence>
          {show && (
            <motion.div
              initial={{ opacity: 0, y: 4, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 4, scale: 0.96 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className={cn(
                "fixed z-[9999] px-3 py-1.5 text-white rounded-md text-sm shadow-lg",
                "transform -translate-x-1/2 max-w-80 whitespace-normal",
                background,
                className
              )}
              style={{
                top: coords.top,
                left: coords.left,
              }}
            >
              {content ?? text}
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
