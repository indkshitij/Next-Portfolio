"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/lib/DummyData";

const Menu = () => {
  const pathname = usePathname();

  return (
    <>
      <div className=" flex gap-2 p-2.5 rounded-xl bg-custom-black text-white border border-zinc-700 shadow-xl backdrop-blur-xl w-fit ">
        {NAV_ITEMS.map((item, index) => {
          const isActive = pathname === item.link;

          return (
            <Link key={index} href={item.link}>
              <div
                className={cn(
                  "group flex items-center gap-0 px-2 py-2.5 rounded-lg transition-all duration-300 ease-in-out cursor-pointer overflow-hidden",
                  isActive
                    ? "bg-white text-custom-black shadow-md"
                    : "hover:bg-white/10 text-white"
                )}
              >
                <span
                  className={`text-2xl transition-all duration-300 ease-in-out px-1 group-hover:px-3 ",
                    ${!isActive && "group-hover:-translate-x-2"}`}
                >
                  {item.icon}
                </span>

                <span
                  className={`text-md opacity-0 font-medium whitespace-nowrap overflow-hidden transition-all duration-200 ease-in-out max-w-0 group-hover:opacity-100 group-hover:max-w-[120px]`}
                >
                  {item.name}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Menu;
