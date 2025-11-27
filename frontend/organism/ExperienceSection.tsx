import SectionHeading from "@/frontend/atoms/SectionHeading";
import Icons from "@/lib/Icons";
import SectionContainer from "@/lib/Wrapper/SectionContainer";
import ExperienceCard from "../atoms/ExperienceCard";
import { experiencesData } from "@/lib/DummyData";

const ExperienceSection = () => {
  return (
    <SectionContainer>
      <div>
        <SectionHeading
          icon={<Icons icon="experience" className="w-6 h-6 md:w-10 md:h-10" />}
          heading="Experience Section"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          {experiencesData.map((exp, index) => (
            <ExperienceCard experience={exp} index={index} key={index} />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default ExperienceSection;
