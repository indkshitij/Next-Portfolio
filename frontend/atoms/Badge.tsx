"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  icon?: React.ReactNode;
  content?: string | React.ReactNode;
  className?: string;
}

const Badge = ({ icon, content, className }: BadgeProps) => {
  return (
    <>
      <div
        className={cn(
          "relative flex items-center gap-2 px-3 py-1.5 rounded-md select-none group overflow-hidden",
          // Glass background
          "bg-white/15 dark:bg-white/10 backdrop-blur-lg",
          // Premium border
          "border border-white/40 dark:border-white/20",
          // Soft shadows
          "shadow-[0_4px_14px_rgba(0,0,0,0.12),_inset_0_1px_1.5px_rgba(255,255,255,0.35)]",
          // Interaction
          "transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.18)]",
          className
        )}
      >
        {/* ICON */}
        {icon && (
          <span className="w-5 h-5 flex items-center drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]">
            {icon}
          </span>
        )}

        {/* TEXT */}
        {content && (
          <span className="text-sm font-medium text-black dark:text-white tracking-wide">
            {content}
          </span>
        )}

        {/* Shine Sweep */}
        <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none shine" />

        {/* Soft Pulse */}
        <span className="absolute inset-0 rounded-xl scale-0 group-hover:scale-125 group-hover:opacity-0 opacity-20 bg-white/30 dark:bg-white/10 blur-xl transition-all duration-700" />
      </div>

      {/* Internal Animations */}
      <style jsx>{`
        .shine {
          background: linear-gradient(
            120deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.8) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: translateX(-180%);
        }

        .group:hover .shine {
          animation: shineMove 0.8s ease-out forwards;
        }

        @keyframes shineMove {
          from {
            transform: translateX(-180%);
          }
          to {
            transform: translateX(180%);
          }
        }
      `}</style>
    </>
  );
};

export default Badge;
