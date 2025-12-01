"use client";

import Sidebar from "@/frontend/molecules/Sidebar";
import Header from "@/frontend/molecules/admin/Header";
import { useAppSelector } from "@/lib/store/hooks";
import { motion } from "framer-motion";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Profile | Admin',
};

const Page = () => {
  const open = useAppSelector((state) => state.sidebar.open);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-custom-black flex">
      <Sidebar />

      <div className="flex flex-col w-full">
        <Header />

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className={`
            transition-all duration-300
            ${open ? "md:ml-60" : "md:ml-16"}  
            ml-0  /* mobile: no margin */
          `}
        >
          
          <motion.main
            className="px-6 py-2 overflow-y-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.4 }}
          >
           {/* All Content Goes There */}

          </motion.main>
        </motion.div>
      </div>
    </div>
  );
};

export default Page;
