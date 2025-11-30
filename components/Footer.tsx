"use client";

import SectionContainer from "@/lib/Wrapper/SectionContainer";
import ContainerTextFlip from "@/frontend/atoms/ContainerTextFlip";
import TriggerToast from "@/frontend/atoms/TriggerToast";
import CursorWrapper from "@/lib/Wrapper/CursorWrapper";
import SmallButton from "@/frontend/atoms/SmallButton";
import Icons from "@/lib/Icons";
import { RESUME_LINK } from "@/lib/DummyData";
import SocialHandle from "@/frontend/molecules/SocialHandle";
import Typewriter from "@/frontend/atoms/Typewriter";

const Footer = () => {
  const email = "ind.kshitijsingh@gmail.com";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      TriggerToast({
        message: "📧 Email copied!",
        type: "success",
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
    <footer
      className="w-full text-white relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #498DE6 0%, #2C62B9 50%, #103893 100%)",
      }}
    >
      <div className="pt-5 sm:pt-10 pb-36 sm:pb-52">
        <SectionContainer>
          <div className="flex flex-col md:flex-row justify-between items-start gap-10 sm:gap-20">
            {/* LEFT SECTION */}
            <div className="md:w-1/2 w-full flex flex-col items-start gap-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl  font-bold tracking-wide">
                Let’s <br /> Connect
              </h1>

              <p className="text-white/80 text-base font-medium max-w-sm">
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
              <div className="flex flex-col sm:flex-row justify-center items-center gap-2.5 sm:gap-5 mt-2">
                <SmallButton
                  content="Let's Connect"
                  path="/contact"
                  icon={<Icons icon="circle-right" size={20} />}
                  bgColor="bg-white"
                  textColor="text-custom-black"
                  hoverTextColor="#ffffff"
                  hoverBubbleColor="bg-[linear-gradient(135deg,#60A5FA_0%,#2563EB_100%)]"
                  cursorDescription="💬 Start a Conversation"
                />
                <SmallButton
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
                  cursorDescription="👀 Take a Look at My Resume"
                />
              </div>

              <div className="flex items-center gap-4 bg-gray-100 rounded-lg py-1.5 pl-3 pr-1.5 sm:py-2 sm:pl-4 sm:pr-2 w-fit">
                <p
                  className="sm:min-w-69 text-lg text-gray-500 whitespace-nowrap overflow-hidden border-r-2 border-blue-font select-none "
                  style={{ width: email.length * 10 + "px" }}
                >
                  <Typewriter text={email}/>
                  {/* {email} */}
                </p>
                <CursorWrapper description="📧 Click to copy my email">
                  <button
                    onClick={copyEmail}
                    className=" relative px-6 py-2.5 rounded-md text-white text-sm font-medium bg-blue-font transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:bg-blue-700 hover:shadow-[0_6px_18px_rgba(0,0,0,0.35)] active:translate-y-0 overflow-hidden"
                  >
                    {/* Shine Effect */}
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 translate-x-[-150%] group-hover:translate-x-[150%] transition-all duration-700 ease-out"></span>
                    Copy
                  </button>
                </CursorWrapper>
              </div>
            </div>
          </div>
        </SectionContainer>
      </div>

      {/* FLOATING LETTERS */}
      <div className="leading-none tracking-0 mt-0 flex gap-0 sm:gap-4 select-none text-[100px] sm:text-[250px] font-black absolute -bottom-10 sm:-bottom-42 right-1 sm:right-2 translate-y-[-50%]">
        {"KSHITIJ".split("").map((char, i) => (
          <span
            key={i}
            className="text-white/20 transition-all duration-300 hover:text-white inline-block leading-none"
            style={{
              WebkitTextStroke: "4px transparent",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.setProperty(
                "-webkit-text-stroke",
                "4px #60A5FA"
              );
              e.currentTarget.style.textShadow =
                "0 0 20px rgba(96,165,250,0.9), 0 0 20px rgba(96,165,250,0.8)";
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
