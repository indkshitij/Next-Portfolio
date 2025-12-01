import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/frontend/organism/ContactSection";
import PageHeading from "@/frontend/atoms/PageHeading";
import SectionContainer from "@/lib/Wrapper/SectionContainer";
import { Globe } from "@/frontend/atoms/Globe";
import ContactForm from "@/frontend/molecules/ContactForm";

const page = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <PageHeading
        heading="Let’s Build Something Great"
        subheading="Whether you have a question or a project idea, I’m always open to collaboration and new opportunities."
      />
      <div className="bg-[#F8FAFB] pt-5 pb-10">
        <SectionContainer>
          <div className="relative flex flex-col-reverse sm:flex-row gap-10 items-start">
            <div className="w-full -mb-28 sm:mb-0">
              <Globe />
            </div>

            <div className="w-full">
              <ContactForm />
            </div>
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
