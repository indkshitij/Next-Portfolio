import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeading from "@/frontend/atoms/PageHeading";
import SectionContainer from "@/lib/Wrapper/SectionContainer";
import { PROJECT_DATA } from "@/lib/DummyData";
import ProjectCard from "@/frontend/molecules/ProjectCard";

export const metadata = {
  title: "Projects",
};

const page = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <PageHeading
        heading="Projects & Case Studies"
        subheading="A collection of thoughtfully engineered projects  
          built with a focus on real-world impact and clean execution."
      />
      <div className="bg-[#F8FAFB]">
        <SectionContainer>
          {/* <div className="grid grid-cols-1 md:grid-cols-1 gap-6 md:gap-5 md:px-15"> */}
          <div className="relative flex flex-col items-center gap-[500px]  mt-50 -mb-36">
            {PROJECT_DATA.map((p, index) => (
              <div className="sticky top-[50%] translate-y-[-50%]" key={index}>
                <ProjectCard project={p} />
              </div>
            ))}
          </div>
        </SectionContainer>
      </div>
      <div className="dark:bg-black ">
        <Footer />
      </div>
    </div>
  );
};

export default page;
