"use client";

import AnimatedHeading from "@/frontend/atoms/AnimatedHeading";
import OpenBadge from "@/frontend/atoms/OpenBadge";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import ExploreBtn from "@/frontend/atoms/ExploreBtn";
import { useState, useEffect } from "react";
import Icons from "@/lib/Icons";
import Logo from "@/frontend/atoms/Logo";
import SocialHandle from "@/frontend/molecules/SocialHandle";
import CTAButton from "@/frontend/atoms/CTAButton";
import { RESUME_LINK } from "@/lib/DummyData";

export default function HeroSection() {
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

  return (
    <section className="relative w-full min-h-[92vh] sm:min-h-screen flex justify-center items-center bg-transparent">
      <div className="relative w-[97vw] h-[90vh] sm:h-[95vh] bg-white dark:bg-white/5 border border-gray-300 dark:border-none rounded-[20px] overflow-hidden backdrop-blur-md p-1 md:p-6 shadow-xl flex flex-col justify-between items-center">
        <div className="absolute inset-0 pointer-events-none">
          <BackgroundRippleEffect rows={12} cols={27} cellSize={60} />
        </div>

        <div className="h-1/4 sm:h-1/5 z-50 hidden md:flex justify-between w-full">
          <div className="w-fit h-20">
            <Logo />
          </div>
          <div className="">
            <SocialHandle />
          </div>
        </div>

        {/* Main Content */}

        <div className="mt-40 md:-mt-20 h-2/4 sm:h-3/5 px-4 relative z-10  flex flex-col justify-center items-center gap-5 md:gap-10 text-center">
          <OpenBadge />
          <div className="text-center flex justify-center items-center flex-col ">
            <AnimatedHeading heading={`Hi, I'm `} name="Kshitij" />

            <p className="mt-2.5 mb-2.5 text-md sm:text-xl w-full md:max-w-3xl text-gray-500 dark:text-gray-300 font-medium leading-relax text-center select-none">
              Creating seamless user experiences with Next.js, TypeScript &
              AI-driven UI . Passionate about modern web engineering.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-2.5 sm:gap-5 mt-2">
              <CTAButton
                content="Let's Connect"
                path="/contact"
                icon={<Icons icon="circle-right" size={20} />}
                bgColor="bg-black dark:bg-zinc-800"
                textColor="text-white dark:text-gray-300"
                hoverTextColor="#ffffff"
                hoverBubbleColor="bg-[linear-gradient(135deg,#60A5FA_0%,#2563EB_100%)]"
              />
              {RESUME_LINK &&
                RESUME_LINK.trim() !== "" &&
                RESUME_LINK.trim() !== "#" && (
                  <CTAButton
                    content="View My Resume"
                    path={RESUME_LINK}
                    icon={
                      <Icons
                        icon="circle-right"
                        className="-rotate-45"
                        size={20}
                      />
                    }
                    bgColor="bg-white dark:bg-gray-300"
                    textColor="text-black"
                    hoverTextColor="#ffffff"
                    hoverBubbleColor="bg-[linear-gradient(135deg,#60A5FA_0%,#2563EB_100%)]"
                  />
                )}
            </div>
          </div>
        </div>

        {/* second row */}
        <div className="mb-5 md:mb-0 h-1/4 sm:h-1/5 flex justify-center md:justify-between items-end w-full">
          {/* Thought */}
          <div className="hidden md:flex w-2/5 text-left cursor-default select-none">
            <div className="flex items-center gap-2.5 w-fit bg-blue-50 dark:bg-gray-100/15 dark:brightness-90 rounded-md text-blue-500 dark:text-gray-400 font-medium text-base px-4 py-2">
              <Icons icon="star-shine" size={22} className="" />
              <span className="inline-block ">
                Designing through Pixels & Passion
              </span>
            </div>
          </div>

          {/* explore btn */}
          <div className="w-full md:w-1/5">
            <ExploreBtn path="#work" />
          </div>

          {/* time */}
          <div className="w-2/5 hidden md:flex justify-end cursor-default select-none">
            <span className="w-fit uppercase bg-zinc-100 dark:bg-zinc-100/10 rounded-lg text-gray-400 font-semibold text-lg px-4 py-2 flex justify-center items-center gap-2.5 tracking-wider">
              <Icons icon="clock" />
              {time}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
