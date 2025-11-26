"use client";

import CursorWrapper from "@/lib/Wrapper/CursorWrapper";
import { EducationInterface } from "@/interfaces/interface";
import { formatDateMonthYear } from "@/lib/backendUtils/helperFunction";
import { useRouter } from "next/navigation";
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

const EducationCard = ({ edu, index }: { edu: EducationInterface; index: number }) => {
  const router = useRouter();
  const gradient = index % 2 === 0 ? GRADIENTS.orange : GRADIENTS.blue;
  /** ------------- ALL HOOKS MUST COME FIRST ------------- */
  const rotateDepth = 20;
  const translateDepth = 24;

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

  /** ------------- MUST COME AFTER HOOKS ------------- */
  if (!edu) return null;

  const handleClick = () =>
    router.push(`/education/education-detail/${edu._id}`);

  return (
    <CursorWrapper
      startIcon={
        <Image src={GraduationCap} alt="Loading" className="w-8 h-8" />
      }
      endIcon={<Icons icon="circle-right-fill" size={30} />}
      description="View Details"
    >
      {" "}
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, translateX, translateY }}
        onClick={handleClick}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className={cn(`
          group min-h-120 relative overflow-hidden rounded-[35px] p-10 bg-white dark:bg-custom-black shadow-lg border border-black/5 dark:border-white/10 transition-all cursor-none hover:shadow-2xl perspective-distant transform-3d
        `)}
      >
        <motion.div
          style={{ background: glareBackground }}
          className=" pointer-events-none  absolute inset-0  rounded-[35px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[3] "
        />

        <div className="relative space-y-2 transition-all ">
          {/* DEGREE */}
          <h1 className=" text-3xl font-semibold leading-tight text-custom-black dark:text-white transition-colors   group-hover:text-white ">
            {edu.degree}
          </h1>

          {/* SPECIALIZATION */}
          <p className="text-lg font-medium text-custom-black dark:text-gray-300 transition-colors group-hover:text-blue-100 ">
            {edu.specialization}
          </p>

          {/* INSTITUTE */}
          <p className=" text-lg font-medium text-light-gray transition-colors group-hover:text-blue-200">
            {edu.institute}
          </p>

          {/* BADGES */}
          <div className="flex flex-col sm:flex-row gap-3 pt-3">
            {/* DATE BADGE */}
            <p className=" flex items-center gap-2 w-fit uppercase bg-blue-50 rounded-3xl text-blue-700  font-semibold text-sm px-4 py-1.5 transition-all group-hover:bg-blue-800 group-hover:text-white">
              <Icons icon="calendar" size={16} />
              {formatDateMonthYear(edu.startDate)} —{" "}
              {formatDateMonthYear(edu.endDate)}
            </p>

            {/* GRADE BADGE */}
            <p className=" flex items-center gap-2 w-fit uppercase bg-green-50 rounded-3xl text-green-600  font-semibold text-sm px-4 py-1.5 transition-all group-hover:bg-blue-800 group-hover:text-white">
              <Icons icon="score-badge" size={16} />
              {edu.grade?.type}: {edu.grade?.value}
            </p>
          </div>

          {/* DESCRIPTION */}
          <div className=" mt-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
            <p className="text-base leading-relaxed text-light-gray group-hover:text-white font-medium">
              {edu.shortDescription}
            </p>
          </div>
        </div>

        {/* IMAGE RIGHT SIDE – FLOATS DOWN + ZOOMS */}
        {edu.image && (
          <div className="absolute -right-16 -bottom-8 w-80 md:w-120 rounded-2xl overflow-hidden translate-y-4 group-hover:translate-y-20 transition-transform duration-500 z-[2]">
            <Image
              src={edu.image}
              alt={edu.degree || "No Image"}
              width={400}
              height={400}
              className="object-cover w-full h-full rounded-2xl group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        )}
      </motion.div>
    </CursorWrapper>
  );
};

export default EducationCard;
