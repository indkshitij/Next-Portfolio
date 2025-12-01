"use client";

import CursorWrapper from "@/lib/Wrapper/CursorWrapper";
import Link from "next/link";
import { ReactNode, useState } from "react";

interface CTAButtonProps {
  content: string;
  path?: string;
  icon?: ReactNode;
  hoverTextColor?: string;
  bgColor?: string;
  textColor?: string;
  hoverBubbleColor?: string;
  borderColor?: string;
}

const CTAButton = ({
  content,
  path = "#",
  icon,
  bgColor = "bg-white",
  textColor = "text-custom-black",
  hoverTextColor = "#ffffff",
  hoverBubbleColor = "bg-[linear-gradient(180deg,#498DE6_0%,#2C62B9_50%,#103893_100%)]",
  borderColor = "border-transparent",
}: CTAButtonProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href={path}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          color: hovered ? hoverTextColor : undefined,
        }}
        className={`
          group relative ${bgColor} min-w-60 px-6 py-3 rounded-lg flex justify-center items-center gap-3
          cursor-pointer overflow-hidden transition-all duration-300 ease-out
          shadow-[0_4px_12px_rgba(0,0,0,0.25)]
          hover:shadow-[0_5px_14px_rgba(0,0,0,0.4)]
          hover:scale-[1.02] border-0  hover:${borderColor}
        `}
      >
        {/* Expanding bubble */}
        <span
          className={`
            absolute left-5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full z-10
            ${hoverBubbleColor}
            transition-transform duration-300 ease-in-out
            scale-0 group-hover:scale-[45]
            
          `}
        ></span>

        {/* Text + Icon */}
        <span
          className={`
            flex justify-center items-center gap-2.5 pl-5 relative z-10 font-semibold
             text-sm sm:text-[16px] tracking-wide transition-all duration-0
            ${textColor}
          `}
          style={{
            color: hovered ? hoverTextColor : undefined,
          }}
        >
          {content}

          {icon && (
            <span
              className="relative z-20 transition-all duration-300"
              style={{
                transform: hovered ? "translateX(4px)" : "translateX(0px)",
              }}
            >
              {icon}
            </span>
          )}
        </span>
      </div>
    </Link>
  );
};

export default CTAButton;
