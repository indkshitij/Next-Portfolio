import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProjectDetailTemplate from "@/frontend/template/ProjectDetailTemplate";

export const metadata = {
  title: "Project",
};

const page = () => {
  return (
    <div className="bg-[#F8FAFB] dark:bg-black">
      <Navbar />
      <ProjectDetailTemplate />
      <Footer />
    </div>
  );
};

export default page;
