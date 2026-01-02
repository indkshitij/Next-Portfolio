"use client";

import { ProjectInterface } from "@/interfaces/interface";
import CursorWrapper from "@/lib/Wrapper/CursorWrapper";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { TECH_ICONS, normalizeTechName } from "@/lib/MapTechnologiesLogo";
import Tooltip from "../atoms/ToolTip";
import Badge from "../atoms/Badge";
import { PROJECT_GRADIENTS } from "@/lib/UIUtils";
import { FaGithub } from "react-icons/fa";
import { ArrowUpRightFromCircleIcon } from "lucide-react";

interface ProjectCardProps {
  project: ProjectInterface;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <>
      {/* // <CursorWrapper description={`👀 See Details`}> */}
      <div className="bg-black rounded-lg ">
      <div
        className={cn(
          `p-1.5 sm:p-10 group min-h-fit sm:min-h-full relative overflow-hidden rounded-lg bg-[#F8FAFB] dark:bg-gray-100/10 transition-all shadow-[inset_-12px_-5px_12px_rgba(0,0,0,0.15),inset_2px_6px_10px_3px_rgba(0,0,0,0.25)] z-10`
        )}
      >
        {/* <CursorWrapper description={`👀 See Details`}> */}
          <Link href={`/project/project-detail/${project._id}`}>
            <div className="max-w-full sm:max-w-[75vw] flex flex-col-reverse sm:flex-row sm:gap-5 ">
              {/* BOTTOM SECTION — GRADIENT PANEL */}
              <div className="p-2 md:p-3 h-100 max-w-full sm:max-w-[35vw] dark:brightness-65 ">
                <div
                  className="relative overflow-hidden h-full w-full rounded-xl p-2.5 md:p-5 group-hover:-translate-y-2.5 group-hover:shadow-lg transition-all duration-500 ease-in-out dark:border border-zinc-800"
                  style={{ background: PROJECT_GRADIENTS(project.name) }}
                >
                  {/* DESCRIPTION */}
                  <div className="opacity-100 md:opacity-0 md:translate-y-70 group-hover:opacity-100 text-white group-hover:translate-y-0 transition-all ease-in-out duration-700">
                    <span className="text-base leading-relaxed text-white dark:text-gray-200 font-medium">
                      {project?.shortDescription2}
                    </span>
                  </div>

                  {/* IMAGE */}
                  <div className="absolute top-38 sm:top-6 -left-2 sm:left-0 w-92 md:w-150 overflow-hidden translate-y-4 group-hover:translate-y-28 transition-transform duration-500 z-2">
                    {project.imageUrl && (
                      <Image
                        src={project?.imageUrl}
                        alt={project?.name || "No Image"}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                      />
                    )}
                  </div>
                </div>
              </div>
              {/* TOP SECTION — DETAILS */}
              <div className="h-fitrelative flex flex-col justify-between sm:h-100 px-5 sm:px-3 pt-5 sm:pt-3 pb-5 sm:pb-3">
                <div className="h-full space-y-2 flex-1 ">
                  <h1 className="text-xl sm:text-2xl font-medium leading-tight text-black dark:text-gray-200">
                    <span
                      className={`italic`}
                      style={{ color: project?.primaryColor || "#000" }}
                    >
                      {project?.name}
                    </span>{" "}
                    - {project?.nameDescribe}
                  </h1>

                  {/* COMPANY DESCRPTION */}

                  {project?.mainDescription?.map((text, index) => {
                    return (
                      <p
                        key={index}
                        className="text-base leading-relaxed text-gray-400 dark:text-gray-400 mt-2.5 mb-6 sm:mb-1"
                      >
                        {text}
                      </p>
                    );
                  })}
                </div>

                <div className="flex flex-col gap-4 sm:gap-2 sm:flex-row justify-between items-start sm:items-center ">
                  {/* TECHNOLOGY */}
                  <div className="flex items-center">
                    {project.techStack &&
                      project?.techStack
                        .slice(0, 8)
                        .reverse()
                        .map((tech, index) => {
                          const normalized = normalizeTechName(tech);
                          const Icon =
                            TECH_ICONS[normalized] || TECH_ICONS.default;

                          return (
                            <Tooltip
                              key={index}
                              position="top"
                              content={
                                <span className="font-medium">{tech}</span>
                              }
                            >
                              <div
                                className={cn(
                                  "relative w-10 h-10 flex items-center justify-center rounded-full overflow-hidden",
                                  // Background + Glass
                                  "bg-white dark:bg-gray-100/10 dark:brightness-70 backdrop-blur-md",
                                  // Border Ring + Subtle Gradient Outline
                                  "border border-white/40 dark:border-white/20",
                                  "shadow-[0_2px_6px_rgba(0,0,0,0.15)]",
                                  // Overlap
                                  "-mr-4 cursor-pointer",
                                  // Hover Effects
                                  "transition-all duration-200 ease-out",
                                  "hover:scale-[1.15] hover:-translate-y-1 hover:z-20",
                                  "hover:shadow-[0_4px_12px_rgba(0,0,0,0.25)]",
                                  // GLOW RING
                                  "after:absolute after:inset-0 after:rounded-full",
                                  "after:ring-0 after:transition-all after:duration-300",
                                  "hover:after:ring-4 hover:after:ring-white/30 hover:after:ring-offset-0"
                                )}
                              >
                                <Image
                                  src={Icon}
                                  alt={tech}
                                  width={28}
                                  height={28}
                                  className="object-contain rounded-sm"
                                />
                              </div>
                            </Tooltip>
                          );
                        })}
                  </div>

                  {/* BADGES */}
                  <div className="flex justify-center items-center gap-2">
                    {project?.githubLink && (
                      <Tooltip
                        position="top"
                        content={
                          <span className="font-medium">View Source Code</span>
                        }
                      >
                        <Link href={project.githubLink} target="_blank">
                          <Badge
                            icon={<FaGithub size={18} />}
                            content="GitHub"
                            className="transition-transform duration-200 hover:scale-105"
                          />
                        </Link>
                      </Tooltip>
                    )}

                    {project?.projectLink && (
                      <Tooltip
                        position="top"
                        content={
                          <span className="font-medium">Open Live Demo</span>
                        }
                      >
                        <Link href={project.projectLink} target="_blank">
                          <Badge
                            icon={<ArrowUpRightFromCircleIcon size={16} />}
                            content="Live "
                            className="transition-transform duration-200 hover:scale-105"
                          />
                        </Link>
                      </Tooltip>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        {/* </CursorWrapper> */}
      </div></div>
    </>
  );
};

export default ProjectCard;
