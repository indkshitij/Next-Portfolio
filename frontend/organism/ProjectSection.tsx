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

        <div className="relative flex flex-col items-center gap-[500px]  mt-80 -mb-52">
          {PROJECT_DATA.map((p, index) => (
            <div className="sticky top-[50%] translate-y-[-50%]" key={index}>
              <ProjectCard project={p} />
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default ProjectSection;
