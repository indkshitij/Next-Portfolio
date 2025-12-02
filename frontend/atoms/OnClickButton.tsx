"use client";

import { useState } from "react";
import { ReactNode } from "react";

interface onClickButtonProps {
  content: string;
  onClick?: any;
  icon?: ReactNode;
  hoverTextColor?: string;
  bgColor?: string;
  textColor?: string;
  hoverBubbleColor?: string;
  borderColor?: string;
  cursorDescription?: string;
  cursorBgColor?: string;
  cursorTextColor?: string;
  minWidth?: string;
}
const OnClickButton = ({
  content,
  onClick,
  icon,
  bgColor = "bg-white",
  textColor = "text-custom-black",
  hoverTextColor = "#ffffff",
  hoverBubbleColor = "bg-[linear-gradient(180deg,#498DE6_0%,#2C62B9_50%,#103893_100%)]",
  borderColor = "border-transparent",
  minWidth = "min-w-30 sm:min-w-48",
}: onClickButtonProps) => {
  const isLaptop =
    typeof window !== "undefined" &&
    window.matchMedia("(min-width: 1024px)").matches;

  const [hovered, setHovered] = useState<boolean>(false);
  const [clicked, setClicked] = useState(false);

  return (
    <div
      onClick={(e) => {
        setClicked(true);
        onClick?.(e);
        setTimeout(() => setClicked(false), 150);
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        color: hovered ? hoverTextColor : undefined,
        transform: clicked ? "scale(0.96)" : undefined,
        transition: "transform 120ms ease, color 250ms ease",
      }}
      className={` group relative ${bgColor} px-4 py-2.5 rounded-md flex items-center gap-3 cursor-pointer overflow-hidden transition-all duration-300 ease-in-out shadow-[0_4px_12px_rgba(0,0,0,0.25)] hover:scale-[1.02] hover:shadow-[0_5px_14px_rgba(0,0,0,0.4)] border-0 hover:${borderColor} ${minWidth}`}
    >
      {/* Expanding bubble */}
      <span
        className={` absolute left-5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full z-10 ${hoverBubbleColor} transition-transform duration-500 ease-in-out scale-0 group-hover:scale-[45] `}
      ></span>

      {/* Text + Icon */}
      <span
        className={`w-full text-center flex justify-center items-center gap-2.5 px-2 sm:px-5 relative z-20 font-medium text-[14px] sm:text-[16px] transition-all duration-300 ${textColor} `}
        style={{
          color: hovered && isLaptop ? hoverTextColor : undefined,
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
  );
};

export default OnClickButton;
