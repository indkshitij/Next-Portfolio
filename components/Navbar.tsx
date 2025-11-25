"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Menu from "../molecules/Menu";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setVisible(currentScroll < lastScrollYRef.current || currentScroll < 20);
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
          className="flex justify-center items-center fixed top-5 md:top-10 left-0 inset-x-0 mx-auto z-50 w-fit "
        >
          <div className="hidden md:block">
            <Menu />
          </div>

          <div className="block md:hidden">
            <MobileNavbar />
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
