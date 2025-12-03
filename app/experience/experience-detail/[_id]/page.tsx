import ExperienceDetailTemplate from "@/frontend/template/ExperienceDetailTemplate";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Experience",
};

const page = () => {
  return (
    <div className="bg-[#F8FAFB]">
      <Navbar />
      <ExperienceDetailTemplate /> 
      <Footer />
    </div>
  );
};

export default page;
