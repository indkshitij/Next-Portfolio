"use client";

import SectionContainer from "@/lib/Wrapper/SectionContainer";
import SectionHeading from "@/frontend/atoms/SectionHeading";
import SkillCard from "../atoms/SkillCard";
import { SKILLS_DATA } from "@/lib/DummyData";
import LinkButton from "../atoms/LinkButton";
import Icons from "@/lib/Icons";

export default function SkillsSection() {
  return (
    <div className="">
      <SectionContainer>
        <SectionHeading
          badge="Skills"
          badgeColor="bg-emerald-500"
          heading="My Skillset"
          badgePosition="rotate-3"
          description="A collection of technologies and tools I work with to build modern, scalable digital solutions."
        />

        <div className="relative mt-14 rounded-lg border border-gray/10 overflow-hidden">
          <div className="grid grid-cols-2  lg:grid-cols-5">
            {SKILLS_DATA.slice(0, 25).map((skill, idx) => (
              <SkillCard key={idx} skill={skill} />
            ))}
          </div>
          
          <div className="absolute bottom-0 bg-gradient-to-t from-[#F8FAFB] dark:from-black from-60% to-transparent to-100% flex justify-center items-center h-40 w-full">
            <LinkButton
              content="See My Full Skillset"
              path="/skills"
              icon={
                <Icons icon="circle-right" className="-rotate-45" size={20} />
              }
              bgColor="bg-white dark:bg-gray-300"
              textColor="text-black"
              hoverTextColor="#ffffff"
              hoverBubbleColor="bg-[linear-gradient(135deg,#60A5FA_0%,#2563EB_100%)]"
            />
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
