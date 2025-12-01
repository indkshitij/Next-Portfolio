import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { EDUCATION_DATA } from "@/lib/DummyData";
import EducationCard from "@/frontend/molecules/EducationCard";
import PageHeading from "@/frontend/atoms/PageHeading";
import SectionContainer from "@/lib/Wrapper/SectionContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Education',
};

const page = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <PageHeading
        heading="Education & Learning Journey"
        subheading="A foundation built on continuous learning, technical curiosity, and a passion for problem-solving."
      />
      <div className="bg-[#F8FAFB] pt-5 pb-10">
        <SectionContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-5 md:px-15">
            {EDUCATION_DATA.map((edu, index) => (
              <EducationCard edu={edu} index={index} key={index} />
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
