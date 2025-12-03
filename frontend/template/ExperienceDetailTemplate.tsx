"use client";

import { EXPERIENCE_DATA } from "@/lib/DummyData";
import { useParams } from "next/navigation";
import PageHeading from "../atoms/PageHeading";
import BackButton from "../atoms/BackButton";
import Icons from "@/lib/Icons";
import SectionContainer from "@/lib/Wrapper/SectionContainer";
import Badge from "../atoms/Badge";
import { formatDateMonthYear } from "@/lib/backendUtils/helperFunction";
import {
  ListChecks,
  Lightbulb,
  Star,
  Briefcase,
  Cog,
  ToolCaseIcon,
  FileText,
  MapPinIcon,
} from "lucide-react";

import PointsBlock from "../atoms/PointsBlock";

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
    <div className="relative cursor-default">
      {/* Back Button */}
      <div className="absolute top-15 left-15 z-10">
        <BackButton
          icon={<Icons icon="circle-right" className="rotate-180" size={20} />}
        />
      </div>

      {/* Heading + Logo */}
      <PageHeading
        heading={
          <div className="flex flex-col items-center gap-3">
            <h1 className="text-3xl sm:text-4xl font-semibold text-center">
              {exp.jobTitle} at{" "}
              <span style={{ color: exp?.primaryColor }}>
                {exp.companyName}
              </span>
            </h1>
          </div>
        }
        subheading={
          <p className="font-medium text-gray-700 leading-relaxed">
            {exp.shortDescription}
          </p>
        }
      />
      <div className="-mt-10">
        <SectionContainer>
          <div className="flex justify-end items-center gap-5">
            <Badge
              icon={<Icons icon="calendar" size={18} />}
              content={
                <div className="text-md p-1 -ml-1">
                  {" "}
                  {formatDateMonthYear(exp?.startDate)} -{" "}
                  {exp?.isPresent
                    ? "Present"
                    : exp?.endDate
                      ? formatDateMonthYear(exp.endDate)
                      : "Unknown"}
                </div>
              }
            />
            <Badge
              icon={<MapPinIcon strokeWidth={1.5} size={18} />}
              content={<div className="text-md p-1 -ml-1">{exp?.location}</div>}
            />
          </div>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 mt-6">
            {/* Company Overview */}

            {exp?.longDescription && (
              <PointsBlock
                title="In detail Description"
                Icon={<FileText strokeWidth={1.5} />}
                text={exp.longDescription}
                bordered
              />
            )}
            <div className="grid gap-6 grid-cols-1 ">
              {/* Tech Stack */}
              {exp.technologies && (
                <PointsBlock
                  title="Technical Stack"
                  Icon={<Cog strokeWidth={1.5} />}
                  techStack={exp.technologies}
                  bordered
                />
              )}

              {/* Tools Used */}
              {exp.toolsUsed && (
                <PointsBlock
                  title="Supporting Tools"
                  Icon={<ToolCaseIcon strokeWidth={1.5} />}
                  techStack={exp.toolsUsed}
                  bordered
                />
              )}
            </div>

            {/* Highlights */}
            {exp.highlights && (
              <PointsBlock
                title="Highlights"
                Icon={<ListChecks strokeWidth={1.5} />}
                items={exp.highlights}
                bordered
              />
            )}

            {exp.companyDescription && (
              <PointsBlock
                title="Company Overview"
                Icon={<Briefcase strokeWidth={1.5} />}
                text={exp.companyDescription}
                bordered
              />
            )}

            {/* Key Projects */}
            {exp.keyProjects && (
              <PointsBlock
                title="Contributions"
                Icon={<Lightbulb strokeWidth={1.5} />}
                items={exp.keyProjects.map(
                  (p) => `${p.name}: ${p.description}`
                )}
                bordered
              />
            )}

            {/* Achievements */}
            {exp.achievements && (
              <PointsBlock
                title="Achievements"
                Icon={<Star strokeWidth={1.5} />}
                items={exp.achievements}
                bordered
              />
            )}

            {/* Metrics */}
            {/* {exp.metrics && (
            <PointsBlock
              title="Impact & Metrics"
              Icon={<Gauge strokeWidth={1.5} />}
              items={Object.entries(exp.metrics).map(
                ([key, value]) => `${key.replace(/([A-Z])/g, " $1")}: ${value}`
              )}
              bordered
            />
          )} */}
          </div>
        </SectionContainer>
      </div>
    </div>
  );
};

export default ExperienceDetailTemplate;
