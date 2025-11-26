"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const Header = () => {
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
    <AnimatePresence>
      <motion.div
        initial={{ y: -810, opacity: 0 }}
        animate={{ y: visible ? 0 : -80, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="sticky top-0 z-10 w-[99.5vw] px-10 max-w-screen h-20 flex items-center justify-end 
      bg-white dark:bg-zinc-900/70 backdrop-blur-xl border-b border-neutral-300 dark:border-zinc-700"
      >
       
        <Button
          variant="destructive"
          className="px-5 py-2 rounded-lg font-medium transition hover:scale-105 active:scale-95"
        >
          Logout
        </Button>
      </motion.div>
    </AnimatePresence>
  );
};

export default Header;
