"use client";

import { useRouter } from "next/navigation";
import Icons from "@/lib/Icons";
import { motion } from "framer-motion";

const BackButton = ({ name }: { name?: string }) => {
  const router = useRouter();

  return (
    <motion.button
      onClick={() => router.back()}
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{
        x: -4,
        scale: 1.02,
        boxShadow: "0px 4px 14px rgba(0,0,0,0.12)",
      }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-custom-black border border-gray-300 dark:border-gray-700 text-custom-black dark:text-white shadow-sm transition-all cursor-pointer select-none"
    >
      <motion.span
        whileHover={{ x: -3 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        <Icons icon="chevron-left" size={20} />
      </motion.span>

      <span className="font-medium text-md tracking-tight">
        {name || "Back"}
      </span>
    </motion.button>
  );
};

export default BackButton;
