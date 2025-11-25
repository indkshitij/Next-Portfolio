"use client";

import { useAppSelector } from "@/lib/store/hooks";
import AnimatedHeading from "@/atoms/AnimatedHeading";
import OpenBadge from "@/atoms/OpenBadge";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import ExploreBtn from "@/atoms/ExploreBtn";
import { useState, useEffect } from "react";
import Icons from "@/lib/Icons";
import Logo from "@/atoms/Logo";
import SocialHandle from "@/molecules/SocialHandle";
import CTAButton from "@/atoms/CTAButton";

export default function HeroSection() {
  const { loading } = useAppSelector((state) => state.profile);
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
    <section className="relative w-full min-h-[92vh] sm:min-h-screen flex justify-center items-center">
      <div className="relative w-[94vw] h-[90vh] sm:h-[92vh] border border-gray-300 dark:border-gray-700 rounded-[36px] overflow-hidden backdrop-blur-md p-1 md:p-10 shadow-xl flex flex-col justify-between items-center">
        <div className="absolute inset-0 pointer-events-none">
          <BackgroundRippleEffect />
        </div>

        <div className="h-1/4 z-50 hidden md:flex justify-between w-full">
          <div className="w-20 h-20 ">
            <Logo />
          </div>
          <div className="">
            <SocialHandle />
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-36 md:mt-0 h-2/4 px-4 relative z-10 flex flex-col justify-center items-center gap-5 text-center">
          <div className="flex flex-col justify-center items-center gap-2 md:gap-8 text-center">
            <OpenBadge />
            <div className="text-center flex justify-center items-center flex-col">
              <AnimatedHeading heading={`Hi, I'm Kshitij`} />

              <p className="mb-2.5 text-[19px] sm:text-[22px] w-full md:max-w-3xl text-light-gray dark:text-gray-300 font-medium leading-relax text-center">
                Creating seamless user experiences with Next.js, TypeScript &
                AI-driven UI . Passionate about modern web engineering.
              </p>
              <CTAButton content={"Let's Connect"} path="#" icon={<Icons icon="circle-right"/>}/>
            </div>
          </div>
        </div>

        {/* second row */}
        <div className="mb-10 md:mb-2 h-1/4 flex justify-center md:justify-between items-end w-full">
          {/* Thought */}
          <div className="hidden md:flex w-2/5 text-left">
            <div className="flex items-center gap-1 w-fit bg-blue-50 rounded-2xl text-blue-600 font-semibold text-lg px-5 py-1.5">
              <Icons icon="star-shine" />
              <span className="inline-block">Designing through Pixels & Passion</span>
            </div>
          </div>

          {/* explore btn */}
          <div className="w-full md:w-1/5">
            <ExploreBtn />
          </div>

          {/* time */}
          <div className="w-2/5 hidden md:flex justify-end">
            <span className="w-fit uppercase bg-zinc-100 rounded-2xl text-light-gray font-semibold text-lg px-5 py-1.5 ">
              {time}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
