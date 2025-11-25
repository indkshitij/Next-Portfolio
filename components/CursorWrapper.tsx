"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, MotionValue } from "motion/react";

const CursorWrapper = ({ children }: { children: React.ReactNode }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const show = () => setVisible(true);
    const hide = () => setVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseenter", show);
    window.addEventListener("mouseleave", hide);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseenter", show);
      window.removeEventListener("mouseleave", hide);
    };
  }, []);

  return (
    <div className="relative cursor-none">
      {visible && <CustomCursor x={x} y={y} />}
      {children}
    </div>
  );
};

export default CursorWrapper;

const CustomCursor = ({
  x,
  y,
}: {
  x: MotionValue<number>;
  y: MotionValue<number>;
}) => {
  return (
    <motion.div
      className="pointer-events-none fixed z-[999999]"
      style={{
        top: y,
        left: x,
        transform: "translate(-50%, -50%)",
      }}
      animate={{ scale: 1, opacity: 1 }}
      initial={{ scale: 0.8, opacity: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="text-sky-500 stroke-sky-600"
      >
        <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
      </svg>
    </motion.div>
  );
};
