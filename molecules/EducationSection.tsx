import SectionHeading from "@/atoms/SectionHeading";
import Icons from "@/lib/Icons";

const EducationSection = () => {
  return (
    <div>
      <SectionHeading icon={<Icons icon="education" className="w-6 h-6 md:w-10 md:h-10"/>} heading="Education Section" />
      EducationSection
    </div>
  );
};

export default EducationSection;
