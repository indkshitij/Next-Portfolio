"use client";

import SectionContainer from "@/lib/Wrapper/SectionContainer";
import SectionHeading from "@/frontend/atoms/SectionHeading";
import { motion } from "framer-motion";
import Image from "next/image";
import { SKILLS_DATA } from "@/lib/DummyData";

export default function SkillsSection() {
  return (
    <div className="">
      <SectionContainer>
        <SectionHeading
          badge="Skills"
          badgeColor="bg-emerald-500"
          heading="My Skillset"
          // textColor="text-white"
          // descriptionColor="text-gray-300"
          badgePosition="rotate-3"
          description="A collection of technologies and tools I work with to build modern, scalable digital solutions."
        />

        <div className="mt-14 rounded-lg border border-gray/10 overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {SKILLS_DATA.map((skill, idx) => (
              <SkillCard key={idx} skill={skill}  />
            ))}
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}

function SkillCard({
  skill,
}: {
  skill: {
    name: string;
    normalized: string;
    icon: string;
    description: string;
  };
}) {
  return (
    <div className="group relative h-44 w-full px-4 py-4 border border-gray/10 flex flex-col items-center justify-center gap-3 transition-all duration-500 hover:bg-gray/5 overflow-hidden cursor-pointer">
      {/* ICON */}
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{
          duration: 1.4,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.15, y: -6 }}
        className="p-4 sm:mt-10 group-hover:py-0 group-hover:mt-0 transition-all duration-500"
      >
        <Image
          src={skill.icon}
          alt={skill.name}
          width={40}
          height={40}
          className="object-contain"
        />
      </motion.div>

      {/* TITLE */}
      <h3 className=" text-custom-black text-md font-medium leading-tight text-center select-none">
        {skill.name}
      </h3>

      {/* DESCRIPTION */}
      <p className="hidden sm:flex opacity-0 translate-y-16 group-hover:translate-y-0 group-hover:opacity-100 text-custom-black text-[12px] transition-all duration-500 ease-in-out px-1 text-center">
        {skill.description}
      </p>
    </div>
  );
}
