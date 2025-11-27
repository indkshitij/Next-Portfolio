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
  useMotionTemplate,
} from "motion/react";
import { cn } from "@/lib/utils";
import { GRADIENTS } from "@/lib/UIUtils";
import Link from "next/link";
import { TECH_ICONS, normalizeTechName } from "@/lib/MapTechnologiesLogo";
import Tooltip from "./ToolTip";

const ExperienceCard = ({
  experience,
  index,
}: {
  experience: ExperienceInterface;
  index: number;
}) => {
  const gradient = index % 2 === 0 ? GRADIENTS.orange : GRADIENTS.blue;
  /** ------------- ALL HOOKS MUST COME FIRST ------------- */
  const rotateDepth = 17.5;
  const translateDepth = 20;

  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 25, mass: 0.5 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 25, mass: 0.5 });

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

  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], [0, 100]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], [0, 100]);

  const glareBackground = useMotionTemplate`
   radial-gradient(
     circle at ${glareX}% ${glareY}%,
     rgba(255, 255, 255, 0.35) 0%,
     rgba(255, 255, 255, 0.20) 15%,
     rgba(255, 255, 255, 0.10) 30%,
     rgba(255, 255, 255, 0) 60%
   )
 `;

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
          className="w-8 h-8  rounded-full"
        />
      }
      description={experience?.companyName}
    >
      <Link href={`/experience/experience-detail/${experience._id}`}>
        <motion.div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY, translateX, translateY }}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.02 }}
          className={cn(
            `group min-h-88 sm:min-h-120 relative overflow-hidden rounded-3xl bg-white dark:bg-custom-black shadow-xl border border-gray-200 dark:border-white/10 transition-all hover:shadow-2xl perspective-distant transform-3d flex flex-col justify-center`
          )}
        >
          {/* GLARE LAYER */}
          <motion.div
            style={{ background: glareBackground }}
            className="pointer-events-none absolute inset-0  rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-2 "
          />

          {/* TOP SECTION — DETAILS */}
          <div className="h-56 px-5 sm:px-12 pt-5 sm:pt-7 pb-2">
            <div className="relative space-y-1 transition-all">
              <h1 className="text-2xl sm:text-3xl font-semibold leading-tight text-custom-black dark:text-white transition-colors group-hover:text-white">
                {experience?.jobTitle} at{" "}
                <span
                  className={`italic `}
                  style={{ color: experience?.primaryColor || "#000" }}
                >
                  {experience?.companyName}
                </span>
              </h1>

              {/* COMPANY DESCRPTION */}
               
                <p className="text-base leading-relaxed text-light-gray font-medium mt-1 mb-2.5">
                  {experience?.shortDescription}
                </p>
              

              <div className="flex flex-col gap-2 sm:flex-row justify-between items-center ">
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
                          content={
                            <div className="flex items-center gap-2 ">
                              <div
                                className={cn(
                                  "p-1 rounded-full backdrop-blur-md",
                                  "bg-white/20 dark:bg-white/10",
                                  "border border-white/30 dark:border-white/10 shadow-md"
                                )}
                              >
                                <Image
                                  src={Icon}
                                  alt={tech}
                                  width={18}
                                  height={18}
                                  className="object-contain"
                                />
                              </div>
                              <span className="font-medium">{tech}</span>
                            </div>
                          }
                        >
                          <div
                            className={cn(
                              "relative w-10 h-10 flex items-center justify-center rounded-full backdrop-blur-md hover:backdrop-blur-none ",
                              "hover:bg-white bg-white/20 dark:bg-white/10",
                              "border border-white/30 dark:border-white/10 shadow-md",
                              "cursor-pointer transition-all duration-100",
                              " hover:-translate-y-1 hover:z-20 hover:shadow-xl -mr-4"
                            )}
                          >
                            <Image
                              src={Icon}
                              alt={tech}
                              width={24}
                              height={24}
                              className="object-contain"
                            />
                          </div>
                        </Tooltip>
                      );
                    })}
                </div>

                {/* BADGES */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-1 sm:pt-2.5">
                  {/* DATE BADGE */}
                  <p className=" flex items-center gap-2 w-fit uppercase bg-blue-50 rounded-3xl text-blue-700  font-semibold text-sm px-3 py-1.5 transition-all ">
                    <Icons icon="calendar" size={16} />
                    {formatDateMonthYear(experience?.startDate)} —{" "}
                    {experience?.isPresent
                      ? "Present"
                      : experience?.endDate
                      ? formatDateMonthYear(experience.endDate)
                      : "Unknown"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM SECTION — GRADIENT PANEL */}
          <div className="p-2 md:p-3 h-70 sm:h-68 max-h-88">
            <div
              className="relative overflow-hidden h-full w-full rounded-3xl p-2.5 md:p-5"
              style={{ background: gradient }}
            >
              {/* DESCRIPTION */}
              <div className="opacity-100 md:opacity-0 translate-x-0 md:-translate-x-[110%] group-hover:translate-x-0 translate-y-2 group-hover:opacity-100 group-hover:text-white group-hover:translate-y-0 transition-all duration-400">
                <span className="text-base leading-relaxed text-white font-medium">
                  {experience?.companyDescription}
                </span>
              </div>

              {/* IMAGE */}
              <div className="absolute top-24 sm:top-6 -left-3 sm:left-5 w-92 md:w-128 overflow-hidden translate-y-4 group-hover:translate-y-28 transition-transform duration-500 z-2">
                <Image
                  src={experience?.image}
                  alt={experience?.companyName}
                  width={500}
                  height={300}
                  className="object-cover w-full h-full rounded-2xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </Link>
    </CursorWrapper>
  );
};

export default ExperienceCard;
