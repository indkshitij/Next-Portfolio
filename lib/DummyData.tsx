import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiLeetcode, SiLinktree } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import Icons from "@/lib/Icons";


export const navItems = [
  { link: "/", icon: <Icons icon="home" />, name: "Home" },
  { link: "/project", icon: <Icons icon="project" />, name: "Projects" },
  { link: "/education", icon: <Icons icon="education" />, name: "Educations" },
  {
    link: "/experience",
    icon: <Icons icon="experience" />,
    name: "Experiences",
  },
  { link: "/skills", icon: <Icons icon="skills" />, name: "Skills" },
  { link: "/contact", icon: <Icons icon="contact" />, name: "Contact" },
];

export const useSocialLinks = [
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/kshitijsingh07/",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    url: "https://github.com/indkshitij",
  },
  {
    name: "LeetCode",
    icon: <SiLeetcode />,
    url: "https://leetcode.com/u/1kshitij/",
  },
  {
    name: "Email",
    icon: <MdEmail />,
    url: "mailto:ind.kshitijsingh@gmail.com",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    url: "https://www.instagram.com/kkkshitij/",
  },
  // {
  //   name: "Linktree",
  //   icon: <SiLinktree />,
  //   url: "https://linktr.ee/1kshitij",
  // },
];
