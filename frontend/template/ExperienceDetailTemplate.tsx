"use client";

import { EXPERIENCE_DATA } from "@/lib/DummyData";
import { useParams } from "next/navigation";

const ExperienceDetailTemplate = () => {
  const params = useParams();
  const experienceId = params?._id;

  const exp = EXPERIENCE_DATA.find((e) => e._id === experienceId);

  if (!exp)
    return (
      <div className="p-10 text-center text-2xl font-semibold">
        EXPERIENCE not found ❌
      </div>
    );

  return <div>ExperienceDetailTemplate</div>;
};

export default ExperienceDetailTemplate;
