import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeading from "@/frontend/atoms/PageHeading";
import SectionContainer from "@/lib/Wrapper/SectionContainer";
import ExperienceCard from "@/frontend/molecules/ExperienceCard";
import { EXPERIENCE_DATA } from "@/lib/DummyData";

export const metadata = {
  title: 'Experience',
};

const page = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <PageHeading
        heading="Professional Experience"
        subheading="Hands-on contributions across product development, UI/UX engineering, and high-quality code delivery."
      />
      <div className="bg-[#F8FAFB] dark:bg-black pb-10">
        <SectionContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-5 md:px-15">
            {EXPERIENCE_DATA.map((exp, index) => (
              <ExperienceCard experience={exp} key={index} />
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
