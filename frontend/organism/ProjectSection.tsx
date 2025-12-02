import SectionHeading from "@/frontend/atoms/SectionHeading";
import SectionContainer from "@/lib/Wrapper/SectionContainer";
import ProjectCard from "../molecules/ProjectCard";
import { PROJECT_DATA } from "@/lib/DummyData";

const ProjectSection = () => {
  return (
    <SectionContainer>
      <div>
        <SectionHeading
          badge="Projects"
          badgeColor="bg-blue-600"
          heading="Featured Projects"
          description="A showcase of the products and AI-driven applications I’ve built—crafted for real use, performance, and scalability."
          badgePosition="-rotate-3"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-5 md:px-15">
          {PROJECT_DATA.map((p, index) => (
            <ProjectCard project={p} key={index} />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default ProjectSection;
