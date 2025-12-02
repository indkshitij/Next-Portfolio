"use client";

import SectionContainer from "@/lib/Wrapper/SectionContainer";
import ContainerTextFlip from "@/frontend/atoms/ContainerTextFlip";
import TriggerToast from "@/frontend/atoms/TriggerToast";
import LinkButton from "@/frontend/atoms/LinkButton";
import Icons from "@/lib/Icons";
import { RESUME_LINK } from "@/lib/DummyData";
import SocialHandle from "@/frontend/molecules/SocialHandle";
import Typewriter from "@/frontend/atoms/Typewriter";
import OnClickButton from "@/frontend/atoms/OnClickButton";

const Footer = () => {
  const email = "ind.kshitijsingh@gmail.com";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      TriggerToast({
        message: "📧 Email copied!",
        type: "success",
        variant: "solid",
      });
    } catch (err) {
      console.log(err);
      TriggerToast({
        message: "Failed to copy email",
        type: "error",
      });
    }
  };

  return (
    <footer className="w-full text-white/85 relative overflow-hidden bg-custom-black">
      <div className="pt-5 sm:pt-10 pb-36 sm:pb-52">
        <SectionContainer>
          <div className="flex flex-col md:flex-row justify-between items-start gap-10 sm:gap-20">
            {/* LEFT SECTION */}
            <div className="md:w-1/2 w-full flex flex-col items-start gap-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide">
                Let’s <br /> Connect
              </h1>

              <p className="text-gray-300/90 text-base font-medium max-w-sm">
                Feel free to reach out for collaborations, opportunities, or
                just a friendly conversation!
              </p>
              <SocialHandle />
            </div>

            <div className="md:w-1/2 w-full flex flex-col items-start gap-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide select-none">
                Open For <br />{" "}
                <span className="w-fit">
                  <ContainerTextFlip
                    interval={2000}
                    animationDuration={400}
                    words={[
                      "Fulltime",
                      "Internship",
                      "Contract",
                      "Freelancing",
                    ]}
                  />{" "}
                  role
                </span>
              </h1>

              {/* Resume Button */}
              <div className="grid grid-cols-2 gap-4 mt-2">
                {/* TOP LEFT */}
                <LinkButton
                  content="Let's Connect"
                  path="/contact"
                  icon={<Icons icon="circle-right" size={20} />}
                  bgColor="bg-white"
                  textColor="text-custom-black"
                  hoverTextColor="#ffffff"
                  hoverBubbleColor="bg-[linear-gradient(135deg,#60A5FA_0%,#2563EB_100%)]"
                />

                {/* TOP RIGHT (only if resume exists) */}
                {RESUME_LINK && RESUME_LINK.trim() !== "" && RESUME_LINK.trim() !== "#" && (
                  <LinkButton
                    content="View Resume"
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
                  />
                )}

                {/* BOTTOM FULL-WIDTH ROW */}
                <div className="col-span-2 flex items-center gap-4 bg-gray-100 rounded-lg py-1.5 pl-3 pr-1.5 sm:py-2 sm:pl-4 sm:pr-2">
                  <p className="w-full text-md sm:text-lg text-gray-500 whitespace-nowrap overflow-hidden border-r-2 border-blue-font select-none">
                    <Typewriter text={email} />
                  </p>

                  <OnClickButton
                    onClick={copyEmail}
                    content="Copy"
                    minWidth="min-w-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>
      </div>

      {/* FLOATING LETTERS */}
      <div className="z-50 leading-none tracking-0 mt-0 flex gap-0 sm:gap-4 select-none text-[100px] sm:text-[250px] font-black absolute -bottom-10 sm:-bottom-42 right-1 sm:right-2 translate-y-[-50%]">
        {"KSHITIJ".split("").map((char, i) => (
          <span
            key={i}
            className="text-white/20 transition-all duration-200 hover:text-white inline-block leading-none"
            style={{
              WebkitTextStroke: "4px transparent",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.setProperty(
                "-webkit-text-stroke",
                "4px #ffffff"
              );

              e.currentTarget.style.textShadow =
                "0 0 20px #e5e5e5, 0 0 20px #1a1c1d";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.setProperty(
                "-webkit-text-stroke",
                "4px transparent"
              );
              e.currentTarget.style.textShadow = "none";
            }}
          >
            {char}
          </span>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
