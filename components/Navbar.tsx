"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SocialHandle from "./SocialHandle";
import Menu from "./Menu";


export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setVisible(currentScroll < lastScrollYRef.current || currentScroll < 10);
      lastScrollYRef.current = currentScroll;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ y: -810, opacity: 0 }}
          animate={{ y: visible ? 0 : -80, opacity: visible ? 1 : 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="flex justify-between items-center fixed top-6 inset-x-0 mx-auto z-[9999] w-full py-5 px-10"
        >
          <div className="w-1/3 flex justify-start"></div>

          <div className="w-1/3 flex justify-center">
            {/* <Menubar /> */}
            <Menu/>
          </div>

          <div className="w-1/3 flex justify-end">
            <SocialHandle />
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
