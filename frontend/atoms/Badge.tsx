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
          "relative flex items-center gap-2 px-3 py-1.5 rounded-lg select-none group",
          "bg-white/20 dark:bg-white/10 backdrop-blur-md",
          "border border-white/40 dark:border-white/20",
          "shadow-[inset_0_0_4px_rgba(255,255,255,0.45),_0_3px_10px_rgba(0,0,0,0.15)] transition-all duration-300 ease-in-out hover:scale-[1.05] hover:-translate-y-0.5 hover:transform-3d group-hover:animate-spin-slow",
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
          <span className="text-sm font-semibold text-black dark:text-white tracking-wide">
            {content}
          </span>
        )}

        {/* SHINE EFFECT */}
        <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-70 transition-all duration-500 pointer-events-none shine" />

        {/* PULSE WAVE */}
        <span className="absolute inset-0 rounded-full scale-0 group-hover:scale-[2] group-hover:opacity-0 opacity-20 bg-white/30 blur-md transition-all duration-500" />
      </div>

      {/* Internal Animations */}
      <style jsx>{`
        .animate-spin-slow {
          animation: spin 5s linear infinite;
        }

        .shine {
          background: linear-gradient(
            120deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.65) 45%,
            rgba(255, 255, 255, 0) 80%
          );
          transform: translateX(-150%);
        }

        .group:hover .shine {
          animation: shineMove 1s ease-in-out forwards;
        }

        @keyframes shineMove {
          from {
            transform: translateX(-150%);
          }
          to {
            transform: translateX(150%);
          }
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
};

export default Badge;
