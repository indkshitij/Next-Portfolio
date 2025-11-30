import SectionHeading from "@/frontend/atoms/SectionHeading";

import SectionContainer from "@/lib/Wrapper/SectionContainer";

const SkillsSection = () => {
  return (
    <SectionContainer>
      <div>
        <SectionHeading
          badge="Skills"
          badgeColor="bg-emerald-600"
          heading="My Skillset"
          description="A clear overview of the technologies and tools I work with to build modern, scalable solutions."
        />
        Skills
      </div>
    </SectionContainer>
  );
};

export default SkillsSection;
