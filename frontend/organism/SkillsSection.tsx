import SectionHeading from "@/frontend/atoms/SectionHeading";
import Icons from "@/lib/Icons";
import SectionContainer from "@/lib/Wrapper/SectionContainer";

const SkillsSection = () => {
  return (
    <SectionContainer>
      <div>
        <SectionHeading
          icon={<Icons icon="skills" className="w-6 h-6 md:w-10 md:h-10" />}
          heading="Skills Section"
        />
        Skills
      </div>
    </SectionContainer>
  );
};

export default SkillsSection;
