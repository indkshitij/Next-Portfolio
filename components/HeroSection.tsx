"use client";

import { useAppSelector } from "@/lib/store/hooks";
import AnimatedHeading from "@/atoms/AnimatedHeading";
import OpenBadge from "@/atoms/OpenBadge";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import ExploreBtn from "@/atoms/ExploreBtn";
import { useState, useEffect } from "react";
import Icons from "@/lib/Icons";

export default function HeroSection() {
  const { data, loading } = useAppSelector((state) => state.profile);
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });

      setTime(formatted);
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <p className="text-gray-600 dark:text-gray-300 animate-pulse text-lg">
          Loading...
        </p>
      </div>
    );
  }

  return (
    <section className="relative w-full min-h-screen flex justify-center items-center bg-white dark:bg-black transition-colors">
      <div
        className="relative w-[96vw] h-[92vh] border border-gray-300 dark:border-gray-700 
        rounded-[36px] overflow-hidden backdrop-blur-md p-10
        bg-white/60 dark:bg-black/40 shadow-[0_0_30px_rgba(0,0,0,0.1)]"
      >
        <div className="absolute inset-0 pointer-events-none">
          <BackgroundRippleEffect />
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col justify-center items-center gap-5 h-full px-4 text-center">
          <div className="flex flex-col justify-center items-center gap-5">
            <OpenBadge />
            <AnimatedHeading heading={`Hi, I'm Kshitij`} />

            <p className="text-lg sm:text-2xl max-w-3xl text-zinc-500 dark:text-gray-300 font-medium leading-relaxed">
              Creating seamless user experiences with Next.js, TypeScript &
              AI-driven UI . Passionate about modern web engineering.
            </p>
          </div>

          {/* second row */}
          <div className="absolute bottom-0 flex justify-between items-end w-full">
            <div className="w-1/3 text-left">
              <div className="w-fit bg-blue-50 rounded-2xl text-blue-600 font-semibold text-lg px-5 py-1.5 flex items-center gap-1">
                <Icons icon="star-shine" />
                <span className=" ">Designing through Pixels & Passion</span>
              </div>
            </div>
            <div className="w-1/3">
              <ExploreBtn />
            </div>
            <div className="w-1/3 text-right">
              <span className="w-fit uppercase bg-zinc-100 rounded-2xl text-zinc-500 font-semibold text-lg px-5 py-1.5 ">
                {time}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
