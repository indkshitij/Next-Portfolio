import SectionHeading from "@/frontend/atoms/SectionHeading";
import Icons from "@/lib/Icons";
import SectionContainer from "@/lib/Wrapper/SectionContainer";


const ProjectSection = () => {
  return (
    <SectionContainer>
    <div>
          <SectionHeading icon={<Icons icon="project" className="w-6 h-6 md:w-10 md:h-10"/>} heading="Project Section" />
      
        ProjectSection</div></SectionContainer>
  )
}

export default ProjectSection