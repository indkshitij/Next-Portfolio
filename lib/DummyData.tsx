import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import Icons from "@/lib/Icons";
import SchoolImage from "@/assets/education/school.png";
import CollegeImage from "@/assets/education/college.png";
import AgileImg from "@/assets/experience/agile.png";
import ForescribeImg from "@/assets/experience/forescribe.png";
import AgileLogoImg from "@/assets/experience/agileLogo.png";
import ForescribeLogoImg from "@/assets/experience/forescribeLogo.png";

export const NAV_ITEMS = [
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

export const SOCIAL_LINKS = [
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

export const EDUCATION_DATA = [
  {
    _id: "btech_cse_ai_ml",
    image: CollegeImage,
    institute: "School of Information Technology, RGPV",
    degree: "Bachelor of Technology",
    specialization:
      "Computer Science and Engineering (Artificial Intelligence & Machine Learning)",
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

export const EXPERIENCE_DATA = [
  {
    _id: "forescribe_frontend_intern",
    image: ForescribeImg,
    logo: ForescribeLogoImg,
    primaryColor: "#7A4DFF",

    jobTitle: "Frontend Developer Intern",
    companyName: "Forescribe",
    location: "Remote",
    companyURL: "https://forescribe.com",
    companyDescription:
  "Forescribe is an AI-powered SaaS spend intelligence platform that helps enterprises optimize software usage, reduce costs, and streamline license management through advanced analytics and automation.",


    roleType: "Internship",
    jobLevel: "Junior",
    employmentType: "Remote",
    teamSize: 8,
    contributionType: ["Frontend Engineering", "UI Development"],
    workSummary:
      "Contributing to enterprise SaaS spend intelligence dashboards with scalable UI architecture.",

    startDate: "2025-11-01T00:00:00Z",
    endDate: "",
    isPresent: true,

    shortDescription:
      "Building fast, scalable, and responsive frontend interfaces for an AI-driven SaaS spend management platform.",

    longDescription:
      "As a Frontend Developer Intern at Forescribe, I contribute to the development of high-quality, production-grade UI for an AI-powered SaaS spend intelligence platform. My work involves building responsive components using Next.js, TypeScript, and Tailwind CSS, optimizing complex dashboards, and integrating real-time analytics APIs. I collaborate with backend engineers, designers, and product managers, ensuring smooth feature rollouts and maintaining scalable frontend architecture. I also focus heavily on code quality, performance optimization, accessibility, and reusable design patterns aligned with enterprise standards.",

    highlights: [
      "Developed responsive UI for live SaaS spend & license utilization dashboards",
      "Reduced UI render time by refactoring heavy components and optimizing API calls",
      "Streamlined frontend-backend workflow, reducing bugs by 30%",
      "Improved feature delivery workflow by 20%",
      "Created modular components reused across 10+ screens",
      "Improved design-system UI consistency",
      "Integrated Recharts/Chart.js for analytics visualizations",
    ],

    technologies: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "REST APIs",
      "Git/Github",
      "CI/CD",
      "Figma",
      "Chart Libraries",
    ],

    // NEW
    keyProjects: [
      {
        name: "Enterprise SaaS Spend Dashboard",
        description:
          "Built responsive analytics screens with real-time API data, charts, and state management.",
        link: "",
      },
      {
        name: "Modular UI Component Library",
        description:
          "Created reusable Next.js components integrated across different enterprise dashboards.",
        link: "",
      },
    ],

    toolsUsed: ["Figma", "Jira", "VS Code", "Postman", "GitHub"],

    achievements: [
      "Boosted UI performance by 40% on analytics-heavy screens",
      "Developed reusable UI system adopted across multiple dashboard modules",
      "Helped reduce UI API errors by redesigning error-handling utilities",
    ],

    metrics: {
      performanceImprovement: "40% faster UI render",
      bugReduction: "30% fewer UI bugs",
      featureDeliverySpeed: "20% faster development cycle",
    },
  },

  {
    _id: "agile_support_webdev",
    image: AgileImg,
    logo: AgileLogoImg,
    primaryColor: "#4DB6C3",

    jobTitle: "Web Developer Intern",
    companyName: "Agile Support",
    location: "Remote",
    companyURL: "https://agilesupport.com",
    companyDescription:
  "Agile Support is a technology services company providing modern web development, product engineering, and digital solutions for global clients using Agile and MERN-based development workflows.",


    // NEW FIELDS
    roleType: "Internship",
    jobLevel: "Junior",
    employmentType: "Remote",
    teamSize: 5,
    contributionType: ["Frontend", "Backend", "Authentication"],
    workSummary:
      "Delivered responsive UI, authentication flows, and full-stack features using MERN.",

    startDate: "2023-01-01T00:00:00Z",
    endDate: "2024-01-01T00:00:00Z",
    isPresent: false,

    shortDescription:
      "Developed modern web applications with secure authentication, optimized performance, and responsive UI.",

    longDescription:
      "At Agile Support, I worked as a Web Developer Intern responsible for building full-stack web applications using MERN technologies. I implemented secure authentication flows, dashboard interfaces, and modular UI components. I collaborated using Agile methodology, participated in sprints, performed code reviews, and ensured clean, maintainable code. I also focused on optimization techniques like code-splitting, lazy loading, and API caching to deliver a smooth user experience for production environments.",

    highlights: [
      "Built responsive UIs using React.js and Tailwind CSS",
      "Integrated JWT authentication with protected routes",
      "Implemented REST APIs using Node.js and Express",
      "Followed Agile/Scrum process with Jira and Trello",
      "Optimized UI performance via caching & lazy loading",
      "Collaborated across design and backend teams",
      "Deployed features regularly to staging environments",
    ],

    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
      "Clerk Auth",
      "GitHub",
      "Agile / Scrum",
      "Figma",
    ],

    // NEW
    keyProjects: [
      {
        name: "Client Admin Dashboard",
        description:
          "Developed key dashboard screens, API integrations, and authentication flows.",
        link: "",
      },
      {
        name: "Full Stack CRM Tool",
        description:
          "Built CRUD APIs, UI forms, and implemented role-based access control.",
        link: "",
      },
    ],

    toolsUsed: ["VS Code", "Postman", "Jira", "Trello", "GitHub"],

    achievements: [
      "Improved website performance by 35% via lazy loading",
      "Built secure authentication used across client projects",
      "Reduced UI bugs by 25% by implementing reusable form utilities",
    ],

    metrics: {
      performanceImprovement: "35% faster UI",
      bugReduction: "25% fewer bugs",
      featureDeliverySpeed: "15% faster delivery",
    },
  },
];

export const EXPERTISE = [
  {
    slug: "dsa",
    title: "DSA & Problem Solving",
    desc: "Designing efficient algorithms with strong pattern and optimization skills.",
  },
  {
    slug: "fullstack",
    title: "Full-Stack Development",
    desc: "Delivering complete features across frontend, backend, and deployment layers.",
  },
  {
    slug: "backend",
    title: "Backend Engineering",
    desc: "Building scalable services with structured controllers, services, and clean APIs.",
  },
  {
    slug: "database",
    title: "Databases & ORM",
    desc: "Designing optimized schemas with indexing, relations, and data integrity.",
  },
  {
    slug: "auth",
    title: "Authentication & Security",
    desc: "Implementing secure auth flows with JWT, hashing, sessions, RBAC, and best practices.",
  },

  {
    slug: "frontend",
    title: "Frontend Engineering",
    desc: "Crafting fast, accessible, and maintainable user interfaces.",
  },
  {
    slug: "uiux",
    title: "UI/UX Implementation",
    desc: "Translating designs into intuitive, pixel-perfect, user-friendly experiences.",
  },
  {
    slug: "responsive",
    title: "Responsive Design",
    desc: "Ensuring layouts adapt flawlessly to all device sizes and breakpoints.",
  },
  {
    slug: "designsystem",
    title: "Design Systems",
    desc: "Creating reusable component libraries that scale across teams and products.",
  },
  {
    slug: "performance",
    title: "Performance Optimization",
    desc: "Enhancing UI speed by minimizing re-renders, payload size, and bottlenecks.",
  },

  {
    slug: "api",
    title: "API Integration",
    desc: "Connecting frontend to backend through efficient fetch patterns and caching.",
  },
  {
    slug: "debug",
    title: "Debugging Tools",
    desc: "Identifying and fixing issues rapidly using logs, tracing, and dev tooling.",
  },
  {
    slug: "testing",
    title: "Testing",
    desc: "Ensuring reliability with component, integration, and workflow testing.",
  },

  {
    slug: "cloud",
    title: "Cloud & Deployments",
    desc: "Deploying apps with CI/CD pipelines, cloud hosting, and environment setup.",
  },

  {
    slug: "aiapps",
    title: "AI-powered Apps",
    desc: "Building features with LLMs, intelligent workflows, and automation logic.",
  },
  {
    slug: "aiml",
    title: "AI/ML Fundamentals",
    desc: "Applying model intuition, data preparation, and feature engineering basics.",
  },

  {
    slug: "cleancode",
    title: "Clean Coding",
    desc: "Writing modular, maintainable code that scales across complex systems.",
  },
  {
    slug: "git",
    title: "Version Control",
    desc: "Managing branches, reviews, commits, and automated pipelines effectively.",
  },

  {
    slug: "product",
    title: "Product Thinking",
    desc: "Designing solutions rooted in user needs, impact, and real workflows.",
  },
  {
    slug: "leadership",
    title: "Ownership & Leadership",
    desc: "Driving teams, decisions, and features with clarity and accountability.",
  },
];

export const SKILLS = [
  // Programming Languages
  "C++",
  "JavaScript",
  "TypeScript",
  "HTML5",
  "CSS3",

  // Frontend
  "React",
  "Next.js",
  "Tailwind CSS",
  "React Router",

  // Backend
  "Node.js",
  "Express.js",
  "REST API",

  // Database & Cloud
  "MongoDB",
  "Mongoose",
  "Azure",

  // Tools
  "Git",
  "GitHub",
  "Docker",
  "Postman",
  "VS Code",
  "Figma",
];

export const RESUME_LINK = "#"