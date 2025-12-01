import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SkillCard from "@/frontend/atoms/SkillCard";
import { SKILLS_DATA } from "@/lib/DummyData";
import PageHeading from "@/frontend/atoms/PageHeading";
import SectionContainer from "@/lib/Wrapper/SectionContainer";
import ExpertiseSection from "@/frontend/organism/ExpertiseSection";
const page = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="bg-[#F8FAFB]">
        {" "}
        <PageHeading
          heading="Skills & Expertise"
          subheading="A blend of technical mastery and modern toolsets crafted to build fast, elegant, and scalable digital experiences."
        />
        <SectionContainer>
          <div className="mt-14 rounded-lg border border-gray/10 overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {SKILLS_DATA.map((skill, idx) => (
                <SkillCard key={idx} skill={skill} />
              ))}
            </div>
          </div>
        </SectionContainer>
        <ExpertiseSection />
      </div>
      <div className="dark:bg-black ">
        <Footer />
      </div>
    </div>
  );
};

export default page;
