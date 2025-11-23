"use client";

import { useState, useEffect, useRef } from "react"; // ⬅️ useRef added
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

// Icons
import { HiOutlineHomeModern } from "react-icons/hi2";
import { BsFolder2Open, BsSuitcaseLg } from "react-icons/bs";
import { VscTools } from "react-icons/vsc";
import { PiNotePencil, PiGraduationCap } from "react-icons/pi";

const navItems = [
  { link: "/", icon: <HiOutlineHomeModern />, name: "Home" },
  { link: "/project", icon: <BsFolder2Open />, name: "Projects" },
  { link: "/education", icon: <PiGraduationCap />, name: "Education" },
  { link: "/experience", icon: <BsSuitcaseLg />, name: "Experience" },
  { link: "/skills", icon: <VscTools />, name: "Skills" },
  { link: "/contact", icon: <PiNotePencil />, name: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);

  const lastScrollYRef = useRef(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setVisible(
        currentScrollY < lastScrollYRef.current || currentScrollY < 10
      );
      lastScrollYRef.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        className={cn(
          "flex max-w-fit fixed top-6 inset-x-0 mx-auto z-[9999] px-6 py-3 rounded-full",
          "backdrop-blur-lg border border-black/10 dark:border-white/10 shadow-lg",
          "bg-white/50 dark:bg-black/70"
        )}
      >
        {navItems.map((item, index) => {
          const active = pathname === item.link;

          return (
            <Link
              key={index}
              href={item.link}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300",
                active
                  ? "text-orange-500 scale-110"
                  : "text-gray-600 dark:text-gray-300 hover:text-orange-400 hover:scale-105"
              )}
            >
              {/* <span className="text-lg">{item.icon}</span> */}
              <span className="hidden sm:inline text-sm">{item.name}</span>
            </Link>
          );
        })}
      </motion.div>
    </AnimatePresence>
  );
}
