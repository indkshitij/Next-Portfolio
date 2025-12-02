"use client";

import { useRouter } from "next/navigation";
import { ReactNode, useState } from "react";

const BackButton = ({
  content = "Back",
  icon,
}: {
  content?: string | ReactNode;
  icon?: string | ReactNode;
}) => {
  const router = useRouter();

  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={() => router.back()}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        color: hovered ? "#ffffff" : undefined,
      }}
      className={` group relative bg-white px-4 py-2.5 rounded-md flex items-center gap-3 cursor-pointer overflow-hidden transition-all duration-300 ease-in-out shadow-[0_4px_12px_rgba(0,0,0,0.25)] hover:scale-[1.02] hover:shadow-[0_5px_14px_rgba(0,0,0,0.4)] border-0 hover:border-transparent `}
    >
      {/* Expanding bubble */}
      <span
        className={` absolute left-5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full z-10 bg-[linear-gradient(180deg,#498DE6_0%,#2C62B9_50%,#103893_100%)] transition-transform duration-500 ease-in-out scale-0 group-hover:scale-[45] `}
      ></span>

      {/* Text + Icon */}
      <span
        className={`flex justify-center items-center gap-2.5 px-2 sm:px-5 relative z-20 font-medium text-[14px] sm:text-[16px] transition-all duration-500 text-custom-black `}
        style={{
          color: hovered ? "#ffffff" : undefined,
        }}
      >
        {icon && (
          <span className="relative z-20 transition-all duration-300">
            {icon}
          </span>
        )}
        {content}
      </span>
    </div>
  );
};

export default BackButton;
