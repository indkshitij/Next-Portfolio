"use client";

import Link from "next/link";
import { useState } from "react";
import { ReactNode } from "react";

interface LinkButtonProps {
  content: string;
  path?: string;
  icon?: ReactNode;
  hoverTextColor?: string;
  bgColor?: string;
  textColor?: string;
  hoverBubbleColor?: string;
  borderColor?: string;
  cursorDescription?: string;
  cursorBgColor?: string;
  cursorTextColor?: string;
}
const LinkButton = ({
  content,
  path = "#",
  icon,
  bgColor = "bg-white",
  textColor = "text-custom-black",
  hoverTextColor = "#ffffff",
  hoverBubbleColor = "bg-[linear-gradient(180deg,#498DE6_0%,#2C62B9_50%,#103893_100%)]",
  borderColor = "border-transparent",
}: LinkButtonProps) => {
  const [hovered, setHovered] = useState(false);

  return (
 
      <Link href={path}>
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            color: hovered ? hoverTextColor : undefined,
          }}
          className={` group relative ${bgColor} px-4 py-2.5 rounded-md flex items-center gap-3 cursor-pointer overflow-hidden transition-all duration-300 ease-in-out shadow-[0_4px_12px_rgba(0,0,0,0.25)] hover:scale-[1.02] hover:shadow-[0_5px_14px_rgba(0,0,0,0.4)] border-0 hover:${borderColor} `}
        >
          {/* Expanding bubble */}
          <span
            className={` absolute left-5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full z-10 ${hoverBubbleColor} transition-transform duration-500 ease-in-out scale-0 group-hover:scale-[45] `}
          ></span>

          {/* Text + Icon */}
          <span
            className={`min-w-30 sm:min-w-48 w-full flex justify-center items-center gap-2.5 px-2 sm:px-5 relative z-20 font-medium text-[14px] sm:text-[16px] transition-all duration-300 ${textColor} text-center`}
            style={{
              color: hovered ? hoverTextColor : undefined,
            }}
          >
            {content}

            {icon && (
              <span className="relative z-20 transition-all duration-300">
                {icon}
              </span>
            )}
          </span>
        </div>
      </Link>
  );
};

export default LinkButton;
