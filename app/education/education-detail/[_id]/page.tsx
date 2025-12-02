import EducationDetailTemplate from "@/frontend/template/EducationDetailTemplate";

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
  return <EducationDetailTemplate />;
};

export default page;
