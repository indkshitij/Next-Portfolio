"use client";

import CursorWrapper from "@/lib/Wrapper/CursorWrapper";
import { EducationInterface } from "@/interfaces/interface";
import { formatDateMonthYear } from "@/lib/backendUtils/helperFunction";
import Image from "next/image";
import Icons from "@/lib/Icons";
import GraduationCap from "@/assets/education/graduation-cap.png";
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

const EducationCard = ({
  edu,
  index,
}: {
  edu: EducationInterface;
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
    rgba(255, 255, 255, 0.65) 0%,
    rgba(255, 255, 255, 0.35) 15%,
    rgba(255, 255, 255, 0.15) 30%,
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

  if (!edu) return null;

  return (
    <CursorWrapper
      startIcon={
        <Image src={GraduationCap} alt="Loading" className="w-8 h-8" />
      }
      description="View Details"
    >
      <Link href={`/education/education-detail/${edu._id}`}>
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
          <motion.div
            style={{ background: glareBackground }}
            className="pointer-events-none  absolute inset-0  rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[2] "
          />

          <div className="h-52 px-5 sm:px-12 pt-5 sm:pt-7 pb-2">
            <div className="relative space-y-1 transition-all ">
              {/* DEGREE */}
              <h1 className="text-2xl sm:text-3xl font-semibold leading-tight text-custom-black dark:text-white transition-colors   group-hover:text-white ">
                {edu.degree}
              </h1>

              {/* SPECIALIZATION */}
              <p className="text-medium sm:text-lg font-medium text-custom-black dark:text-gray-300 transition-colors group-hover:text-blue-100 ">
                {edu.specialization}
              </p>

              {/* INSTITUTE */}
              <p className="text-medium sm:text-lg font-medium text-light-gray transition-colors group-hover:text-blue-200">
                {edu.institute}
              </p>

              {/* BADGES */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-1 sm:pt-2.5">
                {/* DATE BADGE */}
                <p className=" flex items-center gap-2 w-fit uppercase bg-blue-50 rounded-3xl text-blue-700  font-semibold text-sm px-3 py-1.5 transition-all ">
                  <Icons icon="calendar" size={16} />
                  {formatDateMonthYear(edu.startDate)} —{" "}
                  {formatDateMonthYear(edu.endDate)}
                </p>

                {/* GRADE BADGE */}
                <p className=" flex items-center gap-2 w-fit uppercase bg-green-50 rounded-3xl text-green-600  font-semibold text-sm px-3 py-1.5 transition-all ">
                  <Icons icon="score-badge" size={16} />
                  {edu.grade?.type}: {edu.grade?.value}
                </p>
              </div>
            </div>
          </div>
          <div className="p-3 h-60 sm:h-68 max-h-88">
            <div
              className="relative overflow-hidden h-full w-full rounded-3xl p-5 "
              style={{ background: gradient }}
            >
              {/* DESCRIPTION */}
              <div className="opacity-0 translate-y-2 group-hover:opacity-100 group-hover:text-white group-hover:translate-y-0 transition-all">
                <span className="text-base leading-relaxed text-white font-medium">
                  {edu.shortDescription}
                </span>
              </div>
              {/* IMAGE RIGHT SIDE – FLOATS DOWN + ZOOMS */}
              {edu.image && (
                <div className="absolute top-10 sm:top-8 -left-3 sm:left-0 w-92 md:w-128 overflow-hidden translate-y-4 group-hover:translate-y-28 transition-transform duration-500 z-[2]">
                  <Image
                    src={edu.image}
                    alt={edu.degree || "No Image"}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full rounded-2xl group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </Link>
    </CursorWrapper>
  );
};

export default EducationCard;
