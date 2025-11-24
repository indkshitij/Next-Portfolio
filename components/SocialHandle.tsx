"use client";
import { ReactNode } from "react";
import { useAppSelector } from "@/lib/store/hooks";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiLeetcode, SiLinktree } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

type SocialKeys =
  | "github"
  | "linkedin"
  | "instagram"
  | "leetcode"
  | "email"
  | "linktree";

interface SocialLinks {
  github?: string;
  linkedin?: string;
  instagram?: string;
  leetcode?: string;
  email?: string;
  linktree?: string;
}

interface ProfileData {
  socials?: SocialLinks;
}

const socialStyles: Record<SocialKeys, string> = {
  github: "#24292e",
  linkedin: "#0A66C2",
  instagram: "#E1306C",
  leetcode: "#FFA116",
  email: "#EA4335",
  linktree: "#43E660",
};

interface RootState {
  profile: {
    data: ProfileData | null;
    loading: boolean;
    error: string | null;
  };
}
const SocialHandle = () => {
  const { data } = useAppSelector((state: RootState) => state?.profile);

  const socials: {
    key: SocialKeys;
    name: string;
    icon: ReactNode;
    url?: string;
  }[] = [
    {
      key: "linkedin",
      name: "LinkedIn",
      icon: <FaLinkedin />,
      url: data?.socials?.linkedin,
    },
    {
      key: "github",
      name: "GitHub",
      icon: <FaGithub />,
      url: data?.socials?.github,
    },
    {
      key: "leetcode",
      name: "LeetCode",
      icon: <SiLeetcode />,
      url: data?.socials?.leetcode,
    },
    {
      key: "email",
      name: "Email",
      icon: <MdEmail />,
      url: data?.socials?.email,
    },
    {
      key: "instagram",
      name: "Instagram",
      icon: <FaInstagram />,
      url: data?.socials?.instagram,
    },
    {
      key: "linktree",
      name: "Linktree",
      icon: <SiLinktree />,
      url: data?.socials?.linktree,
    },
  ];

  return (
    <div className=" flex justify-end gap-2 p-3 rounded-full bg-gray-150 text-white shadow-xl backdrop-blur-xl w-fit ">
      {socials
        .filter((s) => s.url)
        .map((s, index) => (
          <Link key={index} href={s?.url || "#"} target="_blank">
            <div
              style={{ ["--bg" as string]: socialStyles[s.key] }}
              className="group relative flex items-center gap-0 px-3 py-2.5 rounded-full cursor-pointer shadow-md dark:border-zinc-400 bg-transparent text-zinc-900 dark:text-gray-200 overflow-hidden transition-all duration-400 ease-in-out hover:text-white hover:shadow-lg"
            >
              {/* Background Bubble */}
              <span
                className="absolute inset-0 rounded-full scale-0 opacity-0 transition-all duration-0 group-hover:scale-110 group-hover:opacity-100"
                style={{ backgroundColor: `var(--bg)` }}
              ></span>

              {/* Icon */}
              <span className="relative text-xl group-hover:text-white transition-all duration-0 group-hover:mr-2">
                {s.icon}
              </span>

              {/* Text */}
              <span className="relative text-md whitespace-nowrap font-semibold text-white max-w-0 opacity-0 overflow-hidden transition-all duration-400 ease-in-out group-hover:max-w-[120px] group-hover:opacity-100">
                {s.name}
              </span>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default SocialHandle;
