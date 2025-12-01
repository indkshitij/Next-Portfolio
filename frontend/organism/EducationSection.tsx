import SectionHeading from "@/frontend/atoms/SectionHeading";
import SectionContainer from "@/lib/Wrapper/SectionContainer";
import EducationCard from "@/frontend/molecules/EducationCard";
import { EDUCATION_DATA } from "@/lib/DummyData";

const EducationSection = () => {
  return (
    <SectionContainer>
      <SectionHeading
        badge="Education"
        badgeColor="bg-emerald-600"
        heading="Academic Background"
        description="A brief overview of my formal education and qualifications."
        badgePosition="rotate-3"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
        {EDUCATION_DATA.map((edu, index) => (
          <EducationCard edu={edu} index={index} key={index} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default EducationSection;
