import EducationDetailTemplate from "@/frontend/template/EducationDetailTemplate";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Education",
};

// export async function generateMetadata({ params }: { params: { _id: string } }) {
//   const educationId = params._id;
//   const edu = EDUCATION_DATA.find((e) => e._id === educationId);

//   return {
//     title: edu ? `${edu.degree} - ${edu.institute}` : "Education Not Found",
//     description: edu?.shortDescription ?? "Education details",
//   };
// }

const page = () => {
  return (
  <div className="bg-[#F8FAFB] dark:bg-black">
      <Navbar />
      <EducationDetailTemplate /> 
      <Footer />
    </div>);
};

export default page;
