"use client";

import CursorWrapper from "@/lib/Wrapper/CursorWrapper";
import { ExperienceInterface } from "@/interfaces/interface";
import { formatDateMonthYear } from "@/lib/backendUtils/helperFunction";
import Image from "next/image";
import Icons from "@/lib/Icons";
import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { TECH_ICONS, normalizeTechName } from "@/lib/MapTechnologiesLogo";
import Tooltip from "../atoms/ToolTip";
import Badge from "../atoms/Badge";
import { COMPANY_GRADIENT } from "@/lib/UIUtils";

const ExperienceCard = ({
  experience,
}: {
  experience: ExperienceInterface;
}) => {
  /** ------------- ALL HOOKS MUST COME FIRST ------------- */
  const rotateDepth = 14.5;
  const translateDepth = 18;

  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, {
    stiffness: 180,
    damping: 24,
    mass: 0.6,
  });

  const mouseYSpring = useSpring(y, {
    stiffness: 180,
    damping: 24,
    mass: 0.6,
  });

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    [`-${rotateDepth}deg`, `${rotateDepth}deg`]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    [`${rotateDepth}deg`, `-${rotateDepth}deg`]
  );

  const translateX = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    [`-${translateDepth}px`, `${translateDepth}px`]
  );
  const translateY = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    [`${translateDepth}px`, `-${translateDepth}px`]
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <CursorWrapper
      startIcon={
        <Image
          src={experience?.logo}
          alt={`${experience?.companyName} Logo`}
          className="w-5 h-5 rounded-full"
        />
      }
      description={experience?.companyName}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, translateX, translateY }}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.015 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={cn( 
          ` m-1 group min-h-fit sm:min-h-full relative overflow-hidden rounded-xl bg-white dark:bg-custom-black shadow-xl border border-gray-200 dark:border-white/10 transition-all hover:shadow-2xl perspective-distant transform-3d flex flex-col justify-between`
        )}
      >
        {" "}
        <Link href={`/experience/experience-detail/${experience._id}`}>
          {/* TOP SECTION — DETAILS */}
          <div className="h-fit px-5 sm:px-10 pt-5 sm:pt-8 pb-5 ">
            <div className="relative space-y-1.5 transition-all">
              <h1 className="text-2xl font-medium leading-tight text-custom-black ">
                {experience?.jobTitle} at{" "}
                <span
                  className={`italic `}
                  style={{ color: experience?.primaryColor || "#000" }}
                >
                  {experience?.companyName}
                </span>
              </h1>

              {/* COMPANY DESCRPTION */}

              <p className="text-base leading-relaxed text-light-gray mt-2.5 mb-6">
                {experience?.shortDescription}
              </p>

              <div className="flex flex-col gap-4 sm:gap-2 sm:flex-row justify-between items-start sm:items-center ">
                {/* TECHNOLOGY */}
                <div className="flex items-center">
                  {experience.technologies
                    .slice(0, 8)
                    .reverse()
                    .map((tech, index) => {
                      const normalized = normalizeTechName(tech);
                      const Icon = TECH_ICONS[normalized] || TECH_ICONS.default;

                      return (
                        <Tooltip
                          key={index}
                          position="top"
                          content={<span className="font-medium">{tech}</span>}
                        >
                          <div
                            className={cn(
                              "relative w-10 h-10 flex items-center justify-center rounded-full overflow-hidden",
                              // Background + Glass
                              "bg-white dark:bg-gray-100 backdrop-blur-md",
                              // Border Ring + Subtle Gradient Outline
                              "border border-white/40 dark:border-white/20",
                              "shadow-[0_2px_6px_rgba(0,0,0,0.15)]",
                              // Overlap
                              "-mr-4 cursor-pointer",
                              // Hover Effects
                              "transition-all duration-200 ease-out",
                              "hover:scale-[1.15] hover:-translate-y-1 hover:z-20",
                              "hover:shadow-[0_4px_12px_rgba(0,0,0,0.25)]",
                              // GLOW RING
                              "after:absolute after:inset-0 after:rounded-full",
                              "after:ring-0 after:transition-all after:duration-300",
                              "hover:after:ring-4 hover:after:ring-white/30 hover:after:ring-offset-0"
                            )}
                          >
                            <Image
                              src={Icon}
                              alt={tech}
                              width={28}
                              height={28}
                              className="object-contain"
                            />
                          </div>
                        </Tooltip>
                      );
                    })}
                </div>

                {/* BADGES */}

                <Badge
                  icon={<Icons icon="calendar" size={16} />}
                  content={`${formatDateMonthYear(experience?.startDate)} - ${
                    experience?.isPresent
                      ? "Present"
                      : experience?.endDate
                        ? formatDateMonthYear(experience.endDate)
                        : "Unknown"
                  }`}
                />
              </div>
            </div>
          </div>
          {/* BOTTOM SECTION — GRADIENT PANEL */}
          <div className="p-2 md:p-3 h-90 sm:h-80">
            <div
              className="relative overflow-hidden h-full w-full rounded-xl p-2.5 md:p-5"
              style={{ background: COMPANY_GRADIENT(experience?.companyName) }}
            >
              {/* DESCRIPTION */}
              <div className="opacity-100 md:opacity-0 md:translate-y-70 group-hover:opacity-100 text-white group-hover:translate-y-0 transition-all ease-in-out duration-700">
                <span className="text-sm md:text-base leading-relaxed text-white font-medium">
                  {experience?.companyDescription}
                </span>
              </div>

              {/* IMAGE */}
              <div className="absolute top-36 sm:top-6 -left-2 sm:left-0 w-92 md:w-150 overflow-hidden translate-y-4 group-hover:translate-y-28 transition-transform duration-500 z-2">
                <Image
                  src={experience?.image}
                  alt={experience?.companyName || "No Image"}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>{" "}
        </Link>
      </motion.div>
    </CursorWrapper>
  );
};

export default ExperienceCard;
