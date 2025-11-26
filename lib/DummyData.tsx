import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import Icons from "@/lib/Icons";
import SchoolImage from "@/assets/education/school.png";
import CollegeImage from "@/assets/education/college.png";

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

export const educationsData = [
  {
    _id: "btech_cse_ai_ml",
    image: CollegeImage,
    institute: "School of Information Technology, RGPV",
    degree: "Bachelor of Technology",
    specialization: "Computer Science and Engineering (Artificial Intelligence & Machine Learning)",
    startDate: "2022-11-01T00:00:00Z",
    endDate: "2026-06-01T00:00:00Z",

    grade: {
      type: "CGPA",
      value: "7.99",
    },
    location: "Bhopal, Madhya Pradesh, India",

    shortDescription:
      "Specialized in AI & Machine Learning with hands-on experience in full-stack development, data science, and core CS fundamentals.",

    longDescription:
      "Completed a comprehensive B.Tech program focused on Artificial Intelligence, Machine Learning, and Computer Science engineering. Gained strong foundations in software engineering, algorithms, operating systems, cloud computing, and data management. Built multiple academic and personal projects involving Next.js, MERN stack, Python ML models, automation tools, and AI-driven applications. Participated in hackathons, coding competitions, seminars, and technical student clubs.",

    highlights: [
      "Specialization in AI & ML (Deep Learning, NLP, Computer Vision)",
      "Completed courses in DSA, OS, DBMS, CN, ML, and Cloud Computing",
      "Built multiple AI and full-stack applications",
      "Hackathon participation & coding contest experience",
      "Member of coding clubs and technical communities",
    ],

    keywords: [
      "AI",
      "Machine Learning",
      "CSE",
      "Deep Learning",
      "Full Stack Developer",
      "Next.js",
      "React.js",
      "DSA",
      "Cloud Computing",
      "DBMS",
      "Python",
      "TensorFlow",
      "Neural Networks",
      "Computer Vision",
    ],
  },

  {
    _id: "class_12_pcm",
    image: SchoolImage,
    institute: "B.B.S. Memorial Higher Senior Secondary School",
    degree: "Higher Secondary Education",
    specialization: "PCM (Physics, Chemistry, Mathematics)",
    startDate: "2021-03-01T00:00:00Z",
    endDate: "2022-04-01T00:00:00Z",

    grade: {
      type: "Percentage",
      value: "87%",
    },
    location: "India",

    shortDescription:
      "Completed higher secondary education with a strong foundation in Mathematics and Science.",

    longDescription:
      "Completed senior secondary education with PCM specialization, developing strong mathematical and analytical reasoning skills. Actively participated in science exhibitions, Olympiads, and academic competitions. Built a solid base for future studies in engineering and computational problem solving.",

    highlights: [
      "Strong performance in Mathematics and Science",
      "Participated in Olympiads and science exhibitions",
      "Developed strong logical reasoning and analytical skills",
      "Consistent academic performer",
    ],

    keywords: [
      "PCM",
      "Mathematics",
      "Physics",
      "Chemistry",
      "Logical Reasoning",
      "Analytical Thinking",
      "STEM",
      "Problem Solving",
      "Senior Secondary",
    ],
  },
];
