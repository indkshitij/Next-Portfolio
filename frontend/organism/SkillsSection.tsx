"use client";

import SectionContainer from "@/lib/Wrapper/SectionContainer";
import SectionHeading from "@/frontend/atoms/SectionHeading";
import SkillCard from "../atoms/SkillCard";
import { SKILLS_DATA } from "@/lib/DummyData";

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

        <div className="mt-14 rounded-lg border border-gray/10 overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {SKILLS_DATA.map((skill, idx) => (
              <SkillCard key={idx} skill={skill} />
            ))}
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
