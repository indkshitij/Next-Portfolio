"use client";

import { useState } from "react";
import Logo from "@/frontend/atoms/Logo";
import Icons from "@/lib/Icons";
import { NAV_ITEMS, SOCIAL_LINKS } from "@/lib/DummyData";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";

const menuVariants: Variants = {
  open: {
    x: 0,
    y: 12,
    transition: {
      type: "spring",
      stiffness: 140,
      damping: 18,
      mass: 0.6, 
      delayChildren: 0.05, 
      staggerChildren: 0.04,
    },
  },

  closed: {
    x: "110%",
    y: 0,
    transition: {
      type: "spring",
      stiffness: 170,
      damping: 20,
      mass: 0.7,
    },
  },
};

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="h-fit flex items-center justify-between w-[90vw] px-4 py-2 rounded-full bg-custom-black text-white  shadow-xl backdrop-blur-xl">
        {/* Logo */}
        <motion.div whileTap={{ scale: 0.9 }} className="w-12 h-12">
          <Logo />
        </motion.div>

        <motion.button
          whileTap={{ scale: 0.85 }}
          onClick={() => setOpen(!open)}
          className="p-3 rounded-full text-white shadow-md"
        >
          {open ? <Icons icon="close" /> : <Icons icon="menu" />}
        </motion.button>
      </div>

      {/* DROPDOWN MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ duration: 0.25 }}
            className="w-full max-w-[90vw] rounded-2xl bg-custom-black dark:bg-custom-black text-white shadow-xl backdrop-blur-xl px-4 py-5 space-y-2"
          >
            {NAV_ITEMS.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="flex justify-center items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/10 transition-all text-center "
                onClick={() => setOpen(false)}
              >
                <span className="text-center text-3xl font-bold uppercase">
                  {item.name}
                </span>
              </Link>
            ))}

            <div className="mt-5 mb-2.5 flex flex-wrap justify-center items-center gap-5">
              {SOCIAL_LINKS.map((social, index) => {
                return (
                  <Link
                    key={index}
                    href={social.url}
                    className="text-2xl bg-white rounded-full p-2"
                  >
                    <div className="text-custom-black">{social.icon}</div>{" "}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
