import { ReactNode } from "react";
import { motion } from "framer-motion";
import { normalizeTechName, TECH_ICONS } from "@/lib/MapTechnologiesLogo";
import Badge from "./Badge";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface PointsBlockProps {
  title?: string | ReactNode;
  Icon?: ReactNode;
  bg?: string;
  items?: string[];
  text?: string | ReactNode;
  dotVisible?: boolean;
  textColor?: string;
  headingColor?: string;
  bgIconColor?: string;
  dotColor?: string;
  bordered?: boolean;
  animated?: boolean;
  techStack?: string[];
  badgeWithImage?: boolean;
}

const PointsBlock = ({
  title,
  Icon,
  bg = " hover:bg-white/10",
  items,
  text,
  dotVisible = true,
  textColor = "text-gray-700",
  headingColor = "text-gray-900",
  bgIconColor = "bg-white/30 dark:bg-white/10 ",
  dotColor = "bg-gray-700",
  bordered = false,
  animated = true,
  techStack,
  badgeWithImage = true,
}: PointsBlockProps) => {
  return (
    <motion.div
      initial={animated ? { opacity: 0, y: 15 } : {}}
      animate={animated ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={`group relative ${bg} ${textColor} w-full h-full rounded-2xl p-7 sm:p-10 transition-all duration-500   ${bordered ? "border border-gray-200" : ""}
      shadow-[inset_-10px_-3px_10px_rgba(0,0,0,0.15),inset_0px_4px_8px_1px_rgba(0,0,0,0.25)]
        transition-all duration-300
     `}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div
          className={cn(
            "relative flex items-center gap-2 p-3 rounded-lg select-none group overflow-hidden backdrop-blur-lg border border-white/40 dark:border-white/20 shadow-[0_4px_14px_rgba(0,0,0,0.12),_inset_0_1px_1.5px_rgba(255,255,255,0.35)] transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:shadow-[0_8px_20px_rgba(0,0,0,0.18)]",
            bgIconColor
          )}
        >
          {/* ICON */}
          {Icon && (
            <span className="w-5 h-5 flex items-center drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]">
              {Icon}
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

        <h5
          className={`text-xl font-semibold tracking-tight leading-none ${headingColor}`}
        >
          {title}
        </h5>
      </div>

      {/* List */}
      {items && (
        <ul className="space-y-3 mt-3">
          {items.map((p, idx) => (
            <li key={idx} className="flex gap-3 items-start">
              {dotVisible && (
                <span
                  className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${dotColor}`}
                ></span>
              )}
              <p className="leading-relaxed opacity-90 tracking-wide text-justify ">
                {p}
              </p>
            </li>
          ))}
        </ul>
      )}

      {/* Text Block */}
      {text && !items && !techStack && (
        <p className="leading-relaxed mt-3 opacity-90 tracking-wide text-justify">
          {text}
        </p>
      )}

      {/* Tech Stack */}
      {techStack && !items && !text && (
        <div className="flex flex-wrap gap-2 mt-1">
          {techStack.map((tech, idx) => {
            const normalized = normalizeTechName(tech);
            const Icon = TECH_ICONS[normalized] || TECH_ICONS.default;

            return (
              <Badge
                key={idx}
                content={
                  <div className="flex items-center gap-2">
                    {badgeWithImage && (
                      <Image
                        src={Icon}
                        alt={tech}
                        width={22}
                        height={22}
                        className="object-contain rounded-sm"
                      />
                    )}
                    <p className="font-medium tracking-wide">{tech}</p>
                  </div>
                }
              />
            );
          })}
        </div>
      )}
    </motion.div>
  );
};

export default PointsBlock;
