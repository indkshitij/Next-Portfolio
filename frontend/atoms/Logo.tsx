"use client";

import { useRef } from "react";
import Image from "next/image";
import KSLogo from "@/assets/KSLogo.png";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function Logo() {
  const rotateDepth = 17.5;
  const translateDepth = 20;
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

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
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        translateX,
        translateY,
      }}
      initial={{ scale: 1, z: 0 }}
      whileHover={{
        scale: 1.05,
        z: 50,
        transition: { duration: 0.2 },
      }}
      className="w-12 h-12 sm:w-20 sm:h-20 rounded-full flex justify-center items-center bg-custom-black overflow-hidden cursor-pointer shadow-[0_0_15px_rgba(0,0,0,0.25)] relative transform-gpu transition-shadow duration-200 hover:shadow-[0_0_14px_rgba(0,0,0,0.50)]"
    >
      <motion.div
        className="relative w-[70%] h-[70%]"
        style={{ translateZ: "30px" }}
      >
        <Image src={KSLogo} alt="KS Logo" fill className="object-contain" />
      </motion.div>
    </motion.div>
  );
}
