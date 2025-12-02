"use client";

import { PROJECT_DATA } from "@/lib/DummyData";
import { useParams } from "next/navigation";

const ProjectDetailTemplate = () => {
   const params = useParams();
    const projectId = params?._id;
  
    const pro = PROJECT_DATA.find((e) => e._id === projectId);
  
    if (!pro)
      return (
        <div className="p-10 text-center text-2xl font-semibold">
          Project not found ❌
        </div>
      );
  return (
    <div>ProjectDetailTemplate</div>
  )
}

export default ProjectDetailTemplate