import SectionHeading from "@/frontend/atoms/SectionHeading";
import Icons from "@/lib/Icons";
import SectionContainer from "@/lib/Wrapper/SectionContainer";
import ExperienceCard from "../molecules/ExperienceCard";
import { EXPERIENCE_DATA } from "@/lib/DummyData";

const ExperienceSection = () => {
  return (
    <SectionContainer>
      <div>
        <SectionHeading
          badge="Experience"
          badgeColor="bg-violet-600"
          heading="Professional Experience"
          description="Highlights of where I've worked and the impact I've delivered."
          badgePosition="-rotate-10"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          {EXPERIENCE_DATA.map((exp, index) => (
            <ExperienceCard experience={exp} key={index} />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default ExperienceSection;
