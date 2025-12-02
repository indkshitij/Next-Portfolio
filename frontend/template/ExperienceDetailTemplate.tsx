"use client";

import { EXPERIENCE_DATA } from "@/lib/DummyData";
import { useParams } from "next/navigation";
import PageHeading from "../atoms/PageHeading";
import BackButton from "../atoms/BackButton";
import Icons from "@/lib/Icons";

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

  return (
    <div className="relative">
      <div className="absolute top-10 left-10 z-10">
        <BackButton
          icon={<Icons icon="circle-right" className="rotate-180" size={20} />}
        />
      </div>
      <PageHeading
        heading={
          <h1 className="text-3xl sm:text-4xl font-medium">
            {exp?.jobTitle} at{" "}
            <span style={{ color: exp?.primaryColor || "#000" }}>
              {exp?.companyName} !
            </span>
          </h1>
        }
        subheading={<p className="font-medium"> {exp.shortDescription}</p>}
      />
    </div>
  );
};



export default ExperienceDetailTemplate;
