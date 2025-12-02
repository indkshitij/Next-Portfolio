"use client";

import { PROJECT_DATA } from "@/lib/DummyData";
import { useParams } from "next/navigation";
import PageHeading from "../atoms/PageHeading";
import BackButton from "../atoms/BackButton";
import Icons from "@/lib/Icons";
import SectionContainer from "@/lib/Wrapper/SectionContainer";
import Image from "next/image";
import { PROJECT_GRADIENTS } from "@/lib/UIUtils";
import { FaGithub } from "react-icons/fa";

import {
  ArrowUpRightFromCircle,
  Swords,
  Lightbulb,BookMarked,
  ListChecks,
  Sparkles,
  Wand2,
  Cog,NotepadText,
} from "lucide-react";

import LinkButton from "../atoms/LinkButton";
import PointsBlock from "../atoms/PointsBlock";

const ProjectDetailTemplate = () => {
  const params = useParams();
  const projectId = params?._id;

  const project = PROJECT_DATA.find((e) => e._id === projectId);

  if (!project)
    return (
      <div className="p-10 text-center text-2xl font-semibold">
        Project not found ❌
      </div>
    );

  return (
    <div className="relative cursor-default pb-20">
      {/* Back Button */}
      <div className="absolute top-10 left-10 z-10">
        <BackButton
          icon={<Icons icon="circle-right" className="rotate-180" size={20} />}
        />
      </div>

      {/* Heading */}
      <PageHeading
        heading={
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            <span
              style={{
                color: project?.primaryColor || "#2563eb",
              }}
            >
              {project?.name}
            </span>{" "}
            – {project?.nameDescribe}
          </h1>
        }
        subheading={
          <p className="font-medium text-gray-700 leading-relaxed">
            {project.shortDescription}
          </p>
        }
      />

      <SectionContainer>
        {/* IMAGE + DESCRIPTION BLOCK */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 items-start mt-4">
          {/* LEFT – IMAGE & LINKS */}
          <div className="space-y-5">
            <div
              className="relative overflow-hidden rounded-2xl h-88 p-5 shadow-md border border-gray-200/60"
              style={{
                background: PROJECT_GRADIENTS(project.name),
              }}
            >
              <div className="absolute top-24 sm:top-6 left-0 w-full overflow-hidden transition-all duration-500">
                {project.imageUrl && (
                  <Image
                    src={project?.imageUrl}
                    alt={project?.name || "Project Image"}
                    className="object-cover w-full h-full drop-shadow-xl"
                  />
                )}
              </div>
            </div>

            {/* LINKS */}
            <div className="grid grid-cols-2 gap-3">
              {project.githubLink && (
                <LinkButton
                  content="Source Code"
                  path={project.githubLink}
                  icon={<FaGithub size={22} />}
                  bgColor="bg-white"
                  textColor="text-gray-900"
                  hoverTextColor="#fff"
                  hoverBubbleColor="bg-gradient-to-br from-blue-400 to-blue-600"
                />
              )}

              {project.projectLink && (
                <LinkButton
                  content="Live Demo"
                  path={project.projectLink}
                  icon={<ArrowUpRightFromCircle size={22} />}
                  bgColor="bg-white"
                  textColor="text-gray-900"
                  hoverTextColor="#fff"
                  hoverBubbleColor="bg-gradient-to-br from-blue-400 to-blue-600"
                />
              )}
            </div>
          </div>

          {/* RIGHT – DESCRIPTION */}
          <div className="space-y-5 w-full">
            {project.description && (
              <PointsBlock
                title="Project Description"
                Icon={<NotepadText strokeWidth={1.5} />}
                text={project.description}
                dotVisible={false}
              />
            )}
          </div>
        </div>

        {/* DETAILS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
          {project.techStack && (
            <PointsBlock
              title="Tech Stack Used"
              Icon={<Cog strokeWidth={1.5} />}
              techStack={project.techStack}
              dotVisible={false}
            />
          )}

          {project.problemSolved && (
            <PointsBlock
              title="Problem Solved"
              Icon={<Lightbulb strokeWidth={1.5} />}
              text={project.problemSolved}
            />
          )}

          {project.features && (
            <PointsBlock
              title="Features"
              Icon={<ListChecks strokeWidth={1.5} />}
              items={project.features}
            />
          )}

          {project.highlights && (
            <PointsBlock
              title="Highlights"
              Icon={<Sparkles strokeWidth={1.5} />}
              items={project.highlights}
            />
          )}

          {project.challenges && (
            <PointsBlock
              title="Challenges"
              Icon={<Swords strokeWidth={1.5} />}
              items={project.challenges}
            />
          )}

          {project.solutions && (
            <PointsBlock
              title="Solutions"
              Icon={<Wand2 strokeWidth={1.5} />}
              items={project.solutions}
            />
          )}

          {/* In Depth – Full Width */}
          <div className="sm:col-span-2">
            {project.inDepthDetail && (
              <PointsBlock
                title="In Detail"
                Icon={<BookMarked strokeWidth={1.5} />}
                items={project.inDepthDetail}
                dotVisible={false}
              />
            )}
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default ProjectDetailTemplate;
