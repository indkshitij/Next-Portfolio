import SectionHeading from "@/atoms/SectionHeading";
import Icons from "@/lib/Icons";

const SkillsSection = () => {
  return (
    <div>
      <SectionHeading
        icon={<Icons icon="skills" className="w-6 h-6 md:w-10 md:h-10" />}
        heading="Skills Section"
      />
      Skills
    </div>
  );
};

export default SkillsSection;
