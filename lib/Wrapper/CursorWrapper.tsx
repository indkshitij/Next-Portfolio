"use client";

import React, { ReactNode, useState } from "react";

interface CursorWrapperProps {
  children: ReactNode;
  startIcon?: ReactNode;
  description?: string;
  endIcon?: ReactNode;
  bgColor?: string;
  textColor?: string;
  textSize?: string;
}

const CursorWrapper = ({
  children,
  startIcon,
  description = "View More",
  endIcon,
  bgColor = "bg-custom-black",
  textColor = "text-white",
  textSize = "text-md",
}: CursorWrapperProps) => {
  const [hovering, setHovering] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    setPos({ x: e.clientX + 80, y: e.clientY + 40 });
  };

  return (
    <div
      className={` relative w-fit h-fit ${
        hovering ? "cursor-none" : "cursor-default"
      }`}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onMouseMove={handleMove}
    >
      {/* Floating Tooltip */}
      {hovering && (
        <div
          className={`p-1.5 pointer-events-none fixed z-[9999] rounded-full font-medium shadow-lg  flex items-center gap-1 transform -translate-x-1/2 -translate-y-1/2 ${textSize} ${bgColor} ${textColor}`}
          style={{ left: pos.x, top: pos.y }}
        >
          {startIcon && (
            <span className="flex items-center w-fit h-fit">{startIcon}</span>
          )}

          <span className={`px-1 w-fit h-fit ${!startIcon && "pl-2.5"} ${!endIcon && "pr-2.5"} ${!startIcon && startIcon && "px-2.5"}`}>{description}</span>

          {endIcon && (
            <span className="flex items-center w-fit h-fit">{endIcon}</span>
          )}
        </div>
      )}

      {/* Hide cursor inside card */}
      <div className={hovering ? "cursor-none" : ""}>{children}</div>
    </div>
  );
};

export default CursorWrapper;
