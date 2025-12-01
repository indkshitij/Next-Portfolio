"use client";

import CursorWrapper from "@/lib/Wrapper/CursorWrapper";
import { EducationInterface } from "@/interfaces/interface";
import { formatDateMonthYear } from "@/lib/backendUtils/helperFunction";
import Image from "next/image";
import Icons from "@/lib/Icons";
import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { cn } from "@/lib/utils";
import { GRADIENTS } from "@/lib/UIUtils";
import Link from "next/link";
import Badge from "../atoms/Badge";

const EducationCard = ({
  edu,
  index,
}: {
  edu: EducationInterface;
  index: number;
}) => {
  const gradient = index % 2 === 0 ? GRADIENTS.orange : GRADIENTS.blue;
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

  if (!edu) return null;

  return (
    <CursorWrapper description="View Details 👀">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, translateX, translateY }}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.015 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={cn(
          `m-1 group min-h-fit sm:min-h-full relative overflow-hidden rounded-xl bg-white dark:bg-custom-black shadow-xl border border-gray-200 dark:border-white/10 transition-all hover:shadow-2xl perspective-distant transform-3d flex flex-col justify-between`
        )}
      >
        <Link href={`/education/education-detail/${edu._id}`}>
          <div className="h-fit px-5 sm:px-12 pt-5 sm:pt-8 pb-4">
            <div className="relative space-y-1.5 transition-all ">
              {/* DEGREE */}
              <h1 className="mb-2.5 text-2xl font-medium leading-tight text-custom-black dark:text-white">
                {edu.degree}
              </h1>

              {/* SPECIALIZATION */}
              <p className="text-md sm:text-md font-medium text-custom-black dark:text-gray-300">
                {edu.specialization}
              </p>

              {/* INSTITUTE */}
              <p className="text-md sm:text-md font-medium text-light-gray">
                {edu.institute}
              </p>

              {/* BADGES */}
              <div className="flex flex-col items-start sm:items-center sm:flex-row gap-2 sm:gap-3 pt-1 sm:pt-2">
                {/* DATE BADGE */}
                <Badge
                  icon={<Icons icon="calendar" size={16} />}
                  content={`${formatDateMonthYear(edu.startDate)} —
                  ${formatDateMonthYear(edu.endDate)}`}
                />

                <Badge
                  icon={<Icons icon="score-badge" size={16} />}
                  content={`${edu.grade?.type} —
                  ${edu.grade?.value}`}
                />
              </div>
            </div>
          </div>
          <div className="p-2 md:p-3 h-70 sm:h-80">
            <div
              className="relative overflow-hidden h-full w-full rounded-xl p-2.5 md:p-5 "
              style={{ background: gradient }}
            >
              {/* DESCRIPTION */}
              <div className="opacity-100 md:opacity-0 md:translate-y-70 group-hover:opacity-100 text-white group-hover:translate-y-0 transition-all ease-in-out duration-700">
                <span className="text-sm md:text-base leading-relaxed text-white font-medium">
                  {edu.shortDescription}
                </span>
              </div>

              {/* IMAGE RIGHT SIDE  */}
              {edu.image && (
                <div className="absolute top-24 sm:top-8 -left-3 w-92 md:w-150 overflow-hidden translate-y-4 group-hover:translate-y-28 transition-transform duration-500 z-2">
                  <Image
                    src={edu.image}
                    alt={edu.degree || "No Image"}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              )}
            </div>
          </div>{" "}
        </Link>
      </motion.div>
    </CursorWrapper>
  );
};

export default EducationCard;
