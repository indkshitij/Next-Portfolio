import Link from "next/link";
import { ReactNode } from "react";

interface CTAButtonProps {
  content?: string;
  path?: string;
  icon?: ReactNode;
}

const CTAButton = ({ content, path, icon }: CTAButtonProps) => {
  return (
    <Link href={path || "#"} className="group block w-fit">
      <div className=" relative overflow-hidden px-6 py-3 rounded-full bg-custom-black text-white flex items-center gap-2.5 font-semibold cursor-pointer shadow-[0_4px_12px_rgba(0,0,0,0.25)] transition-all duration-300 group-hover:shadow-[0_3px_12px_rgba(36,99,235,0.45)] ">
        {/* Blue slide background */}
    <span
  style={{
    background: `linear-gradient(
      180deg,
      #498DE6 0%,
      #2C62B9 50%,
      #103893 100%
    )`,
  }}
  className="
    absolute inset-0 rounded-full 
    -translate-x-full 
    group-hover:translate-x-0
    transition-transform duration-500 ease-out
    z-0
  "
></span>


        <span className="relative z-10 text-[18px] font-bold tracking-wide">
          {content}
        </span>

        <span className="p-1 relative z-10 transition-all duration-300 group-hover:translate-x-1">
          {icon}
        </span>
      </div>
    </Link>
  );
};

export default CTAButton;
