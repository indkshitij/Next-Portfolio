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
import { Cover } from "./ui/cover";
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
      <div className="relative w-[96vw] h-[90vh] sm:h-[92vh] bg-white border border-gray-300 dark:border-gray-700 rounded-[20px] overflow-hidden backdrop-blur-md p-1 md:p-10 shadow-xl flex flex-col justify-between items-center">
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
        <div className="mt-40 md:mt-0 h-2/4 px-4 relative z-10 flex flex-col justify-center items-center gap-5 text-center">
          <div className="flex flex-col justify-center items-center gap-2 md:gap-8 text-center">
            <OpenBadge />
            <div className="text-center flex justify-center items-center flex-col">
              <AnimatedHeading heading={`Hi, I'm `} name="Kshitij" />

              <p className="mt-2 sm:mt-0 mb-2.5 text-[19px] sm:text-[22px] w-full md:max-w-3xl text-light-gray dark:text-gray-300 font-medium leading-relax text-center select-none">
                Creating seamless user experiences with Next.js, TypeScript &
                AI-driven UI . Passionate about modern web engineering.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-2.5 sm:gap-5 mt-2">
                <CTAButton
                  content="Let's Connect"
                  path="/contact"
                  icon={<Icons icon="circle-right" size={20} />}
                  bgColor="bg-custom-black"
                  textColor="text-white"
                  hoverTextColor="#ffffff"
                  hoverBubbleColor="bg-[linear-gradient(135deg,#60A5FA_0%,#2563EB_100%)]"
                  cursorDescription="💬 Start a Conversation"
                  cursorBgColor="bg-custom-black"
                  cursorTextColor="text-white"
                />
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
                  bgColor="bg-white"
                  textColor="text-custom-black"
                  hoverTextColor="#ffffff"
                  hoverBubbleColor="bg-[linear-gradient(135deg,#60A5FA_0%,#2563EB_100%)]"
                  cursorDescription="👀 Take a Look at My Resume"
                  cursorBgColor="bg-custom-black"
                  cursorTextColor="text-white"
                />
              </div>
            </div>
          </div>
        </div>

        {/* second row */}
        <div className="mb-5 md:mb-0 h-1/4 flex justify-center md:justify-between items-end w-full">
          {/* Thought */}
          <div className="hidden md:flex w-2/5 text-left cursor-default select-none">
            <div className="flex items-center gap-2.5 w-fit bg-blue-50 rounded-md text-blue-font font-semibold text-[17px] px-4 py-1.5">
              <Icons icon="star-shine" />
              <span className="inline-block">
                Designing through Pixels & Passion
              </span>
            </div>
          </div>

          {/* explore btn */}
          <div className="w-full md:w-1/5">
            <ExploreBtn />
          </div>

          {/* time */}
          <div className="w-2/5 hidden md:flex justify-end cursor-default select-none">
            <span className="w-fit uppercase bg-zinc-100 rounded-md text-light-gray font-semibold text-lg px-4 py-1.5 ">
              {time}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
