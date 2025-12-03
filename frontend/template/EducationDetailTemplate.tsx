"use client";

import { EDUCATION_DATA } from "@/lib/DummyData";
import { formatDateMonthYear } from "@/lib/backendUtils/helperFunction";
import BackButton from "@/frontend/atoms/BackButton";
import { useParams } from "next/navigation";
import PageHeading from "../atoms/PageHeading";
import Icons from "@/lib/Icons";
import SectionContainer from "@/lib/Wrapper/SectionContainer";
import Badge from "../atoms/Badge";
import {
  GraduationCap,
  MapPinIcon,
  Calendar,
  MapPin,
  Award,
  Info,
  FileText,
  Sparkles,
  Tags,
} from "lucide-react";
import PointsBlock from "../atoms/PointsBlock";

export default function EducationDetailTemplate() {
  const params = useParams();
  const educationId = params?._id;

  const edu = EDUCATION_DATA.find((e) => e._id === educationId);

  if (!edu)
    return (
      <div className="p-10 text-center text-2xl font-semibold">
        Education not found ❌
      </div>
    );

  return (
    <>
      <div className="relative cursor-default">
        {/* Back Button */}
        <div className="absolute top-15 left-15 z-10">
          <BackButton
            icon={
              <Icons icon="circle-right" className="rotate-180" size={20} />
            }
          />
        </div>
        {/* Heading */}
        <PageHeading
          heading={
            <h1 className=" text-3xl sm:text-4xl font-medium">{edu.degree}</h1>
          }
          subheading={<p className="font-medium"> {edu.shortDescription}</p>}
        />

        <div className="-mt-10">
          <SectionContainer>
            <div className="flex justify-end items-center gap-5">
              <Badge
                icon={<Icons icon="calendar" size={18} />}
                content={
                  <div className="text-md p-1 -ml-1">
                    {formatDateMonthYear(edu?.startDate)} —{" "}
                    {edu?.endDate
                      ? formatDateMonthYear(edu.endDate)
                      : "Present"}
                  </div>
                }
              />

              <Badge
                icon={<Icons icon="score-badge" size={16} />}
                content={
                  <div className="text-md p-1 -ml-1">{`${edu.grade?.type} —
                  ${edu.grade?.value}`}</div>
                }
              />

              <Badge
                icon={<MapPinIcon strokeWidth={1.5} size={18} />}
                content={
                  <div className="text-md p-1 -ml-1">{edu?.location}</div>
                }
              />
            </div>

            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 mt-6">
              {/* Long Description */}
              <PointsBlock
                title="Full Description"
                Icon={<FileText size={20} />}
                text={edu.longDescription}
                bordered
              />

              {/* Highlights */}
              <PointsBlock
                title="Highlights"
                Icon={<Sparkles size={20} />}
                items={edu.highlights}
                bordered
              />

              <div className="col-span-2">
                <PointsBlock
                  title="Keywords"
                  Icon={<Tags size={20} />}
                  techStack={edu.keywords}
                  bordered
                  badgeWithImage={false}
                  
                />
              </div>
            </div>
          </SectionContainer>
        </div>
      </div>
      {/* <div className="min-h-screen w-full bg-gray-50 dark:bg-custom-black py-10 px-4">

      <div className="mb-6">
        <BackButton />
      </div>

      <div className="max-w-6xl mx-auto bg-white dark:bg-[#0b0b0b] rounded-3xl shadow-xl p-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-900/10 rounded-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row gap-10">
          <div className="flex-1 space-y-5">
            <h1 className="text-4xl font-bold text-custom-black dark:text-white leading-tight">
              {edu.degree}
            </h1>

            <p className="text-xl text-blue-700 dark:text-blue-300 font-medium">
              {edu.specialization}
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300">
              {edu.institute}
            </p>

            <div className="flex flex-wrap gap-3 mt-4">
              <span className="flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold text-sm">
                <Icons icon="calendar" size={18} />
                {formatDateMonthYear(edu.startDate)} —{" "}
                {formatDateMonthYear(edu.endDate)}
              </span>

              <span className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold text-sm">
                <Icons icon="score-badge" size={18} />
                {edu.grade?.type}: {edu.grade?.value}
              </span>

              <span className="flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-semibold text-sm">
                <Icons icon="location" size={18} />
                {edu.location}
              </span>
            </div>

            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mt-4">
              {edu.shortDescription}
            </p>
          </div>

          <div className="flex-1 flex justify-center md:justify-end">
            <div className="w-80 h-80 rounded-3xl overflow-hidden shadow-lg">
              <Image
                src={edu.image}
                alt={edu.degree}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>

      {edu.longDescription && (
        <section className="max-w-6xl mx-auto mt-16">
          <h2 className="text-3xl font-bold text-custom-black dark:text-white">
            Overview
          </h2>

          <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            {edu.longDescription}
          </p>
        </section>
      )}

      {edu.highlights?.length > 0 && (
        <section className="max-w-6xl mx-auto mt-16">
          <h2 className="text-3xl font-bold text-custom-black dark:text-white">
            Highlights
          </h2>

          <div className="grid md:grid-cols-2 gap-4 mt-6">
            {edu.highlights.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-white dark:bg-[#0f0f0f] rounded-xl shadow-sm border border-gray-200 dark:border-white/10"
              >
                <Icons icon="star" className="text-yellow-500" size={22} />
                <p className="text-gray-700 dark:text-gray-300">{item}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {edu.keywords?.length > 0 && (
        <section className="max-w-6xl mx-auto mt-16 mb-20">
          <h2 className="text-3xl font-bold text-custom-black dark:text-white">
            Skills & Keywords
          </h2>

          <div className="flex flex-wrap gap-3 mt-5">
            {edu.keywords.map((key, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-200 font-medium text-sm rounded-full"
              >
                {key}
              </span>
            ))}
          </div>
        </section>
      )}
    </div> */}
    </>
  );
}
