import SectionHeading from "@/frontend/atoms/SectionHeading";
import Icons from "@/lib/Icons";
import SectionContainer from "@/lib/Wrapper/SectionContainer";


const ExperienceSection = () => {
  return (
    <SectionContainer>
    <div>
        <SectionHeading icon={<Icons icon="experience" className="w-6 h-6 md:w-10 md:h-10"/>} heading="Experience Section" />
      
        ExperienceSection</div></SectionContainer>
  )
}

export default ExperienceSection