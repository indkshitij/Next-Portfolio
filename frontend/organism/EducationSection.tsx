import SectionHeading from "@/frontend/atoms/SectionHeading";
import Icons from "@/lib/Icons";
import SectionContainer from "@/lib/Wrapper/SectionContainer";
import EducationCard from "@/frontend/atoms/EducationCard";
import { educationsData } from "@/lib/DummyData";

const EducationSection = () => {
  return (
    <SectionContainer>
      <SectionHeading
        icon={<Icons icon="education" className="w-6 h-6 md:w-10 md:h-10" />}
        heading="Education Section"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
        {educationsData.map((edu, index) => (
          <EducationCard edu={edu} index={index} key={index} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default EducationSection;
