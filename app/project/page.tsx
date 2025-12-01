import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeading from "@/frontend/atoms/PageHeading";
import SectionContainer from "@/lib/Wrapper/SectionContainer";

export const metadata = {
  title: 'Projects',
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
          <div className="font-logo my-24 text-center text-9xl font-bold text-black">
            {" "}Working...
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
