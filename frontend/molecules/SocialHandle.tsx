"use client";
import Link from "next/link";
import { SOCIAL_LINKS } from "@/lib/DummyData";
import { getColorByName } from "@/lib/HelperFunctions";

export const SocialHandle = () => {
  return (
    <>
      <div className=" flex justify-end gap-2 p-2 rounded-xl bg-gray-150 text-white shadow-[0_0_7px_rgba(0,0,0,0.25)] w-fit bg-white">
        {SOCIAL_LINKS.filter((s) => s.url).map((s, index) => (
          <Link key={index} href={s?.url || "#"} target="_blank">
            <div
              style={{
                ["--bg" as string]: getColorByName(s.name.toLowerCase()),
              }}
              className="group relative flex items-center gap-0 px-2 hover:px-3 py-2.5 rounded-lg cursor-pointer bg-white dark:border-zinc-400 text-custom-black dark:text-gray-200 overflow-hidden transition-all duration-300 ease-in-out hover:text-white hover:shadow-lg "
            >
              <span
                className="absolute inset-0 rounded-lg scale-0 opacity-0 transition-all duration-0 group-hover:scale-110 group-hover:opacity-100"
                style={{ backgroundColor: `var(--bg)` }}
              ></span>

              <span className="relative text-2xl group-hover:text-white transition-all duration-0 group-hover:mr-2">
                {s.icon}
              </span>

              <span className="relative text-md whitespace-nowrap font-semibold text-white max-w-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:max-w-[120px] group-hover:opacity-100">
                {s.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default SocialHandle;
