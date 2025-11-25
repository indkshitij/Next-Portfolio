"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Icons from "@/lib/Icons";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { toggleSidebar, setSidebar } from "@/lib/store/features/sidebar";

const navLinks = [
  { name: "Dashboard", href: "/admin/dashboard", icon: "home" },
  { name: "Profile", href: "/admin/profile", icon: "profile" },
  { name: "Projects", href: "/admin/projects", icon: "project" },
  { name: "Skills", href: "/admin/skills", icon: "skills" },
  { name: "Experience", href: "/admin/experience", icon: "experience" },
  { name: "Education", href: "/admin/education", icon: "education" },
  { name: "Contact", href: "/admin/contact", icon: "contact" },
];

const CollapseArrow = ({ open }: { open: boolean }) => (
  <svg width="22" height="22" stroke="currentColor" strokeWidth="2">
    <path d={open ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"} />
  </svg>
);

export default function Sidebar() {
  const dispatch = useAppDispatch();
  const open = useAppSelector((state) => state.sidebar.open);
  const pathname = usePathname();

  return (
    <>
      {/* MOBILE MENU BUTTON */}
      {!open && (
        <button
          onClick={() => dispatch(setSidebar(true))}
          className="md:hidden fixed top-4 left-4 z-50 text-zinc-900 dark:text-white p-3 rounded-xl shadow-lg bg-white dark:bg-zinc-900"
        >
          <Icons icon="menu" />
        </button>
      )}

      {/* SIDEBAR */}
      <motion.aside
        animate={{ width: open ? 250 : 80 }}
        transition={{ duration: 0.35, ease: "easeInOut" }} // ONLY fires on open/close
        className="fixed top-0 left-0 h-full border-r bg-white/60 dark:bg-zinc-900/70 
          backdrop-blur-xl shadow-lg border-neutral-300 dark:border-neutral-700 z-[999]"
      >
        {/* HEADER */}
        <div className="flex items-center justify-between h-20 px-4 border-b border-neutral-300 dark:border-neutral-700">
          {/* LOGO - animates only when appearing/disappearing */}
          <AnimatePresence mode="wait">
            {open && (
              <motion.h1
                key="logo"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="text-xl font-bold"
              >
                K<span className="text-blue-500">.</span>
              </motion.h1>
            )}
          </AnimatePresence>

          {/* COLLAPSE BUTTON */}
          <button
            onClick={() => dispatch(toggleSidebar())}
            className="p-2 rounded-lg hover:bg-neutral-200/50 dark:hover:bg-neutral-800 transition"
          >
            <CollapseArrow open={open} />
          </button>
        </div>

        {/* NAV LINKS */}
        <nav className="mt-4 flex flex-col gap-2 px-2">
          {navLinks.map(({ name, href, icon }, i) => {
            const active = pathname === href;

            return (
              <Link key={i} href={href}>
                <div
                  className={`relative flex items-center p-4 rounded-xl cursor-pointer transition-colors duration-300
                    ${
                      active
                        ? "bg-blue-500 text-white shadow-md"
                        : "hover:bg-neutral-200/50 dark:hover:bg-neutral-800"
                    }`}
                >
                  <Icons icon={icon} />

                  {/* TEXT (Visible only when expanded) */}
                  {open && (
                    <span className="ml-4 font-medium whitespace-nowrap">
                      {name}
                    </span>
                  )}

                  {/* Tooltip when collapsed */}
                  {!open && (
                    <span className="absolute left-full ml-3 px-3 py-1 rounded-md text-sm bg-black text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition">
                      {name}
                    </span>
                  )}
                </div>
              </Link>
            );
          })}
        </nav>
      </motion.aside>

      {/* MOBILE OVERLAY */}
      {open && (
        <motion.div
          onClick={() => dispatch(setSidebar(false))}
          animate={{ opacity: 0.4 }}
          exit={{ opacity: 0 }}
          className="md:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-30"
        />
      )}
    </>
  );
}
