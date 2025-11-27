import { useParams } from "next/navigation";
import React from "react";

const ExperienceDetailTemplate = () => {
  const params = useParams();
  console.log(params._id);
  return <div>ExperienceDetailTemplate</div>;
};

export default ExperienceDetailTemplate;
