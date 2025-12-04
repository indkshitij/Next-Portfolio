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
import { normalizeTechName, TECH_ICONS } from "@/lib/MapTechnologiesLogo";
import NeoFinance from "@/assets/project/neofinance.png";
import BrainwaveAi from "@/assets/project/brainwaveai.png";
import PortfolioCMS from "@/assets/project/portfolioCMS.png";

export const RESUME_LINK = "kjbiu";

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

export const SKILLS_DATA = [
  // ---------------------------
  // 1. LANGUAGES
  // ---------------------------
  {
    name: "JavaScript",
    normalized: normalizeTechName("JavaScript"),
    icon: TECH_ICONS[normalizeTechName("JavaScript")],
    description: "Dynamic programming language powering the modern web.",
  },
  {
    name: "TypeScript",
    normalized: normalizeTechName("TypeScript"),
    icon: TECH_ICONS[normalizeTechName("TypeScript")],
    description: "Strongly typed JavaScript for scalable applications.",
  },
  {
    name: "Python",
    normalized: normalizeTechName("Python"),
    icon: TECH_ICONS[normalizeTechName("Python")],
    description: "High-level language for automation, AI, and backend APIs.",
  },
  {
    name: "HTML5",
    normalized: normalizeTechName("HTML5"),
    icon: TECH_ICONS[normalizeTechName("HTML5")],
    description: "Semantic markup for structuring modern web content.",
  },
  {
    name: "CSS3",
    normalized: normalizeTechName("CSS3"),
    icon: TECH_ICONS[normalizeTechName("CSS3")],
    description: "Stylesheet language for responsive and elegant UI.",
  },

  // ---------------------------
  // 2. FRONTEND
  // ---------------------------
  {
    name: "React.js",
    normalized: normalizeTechName("React.js"),
    icon: TECH_ICONS[normalizeTechName("React.js")],
    description: "Component-driven UI library for dynamic interfaces.",
  },
  {
    name: "Next.js",
    normalized: normalizeTechName("Next.js"),
    icon: TECH_ICONS[normalizeTechName("Next.js")],
    description: "React framework with SSR, routing, and API routes.",
  },
  {
    name: "Tailwind CSS",
    normalized: normalizeTechName("Tailwind CSS"),
    icon: TECH_ICONS[normalizeTechName("Tailwind CSS")],
    description: "Utility-first CSS framework for fast styling.",
  },
  {
    name: "Material UI",
    normalized: normalizeTechName("Material UI"),
    icon: TECH_ICONS[normalizeTechName("Material UI")],
    description: "Google’s component library for polished UIs.",
  },
  {
    name: "Chakra UI",
    normalized: normalizeTechName("Chakra UI"),
    icon: TECH_ICONS[normalizeTechName("Chakra UI")],
    description: "Accessible React components for clean interfaces.",
  },
  {
    name: "shadcn/ui",
    normalized: normalizeTechName("shadcn/ui"),
    icon: TECH_ICONS[normalizeTechName("shadcn/ui")],
    description: "Beautifully crafted UI components built on Radix.",
  },
  {
    name: "Headless UI",
    normalized: normalizeTechName("Headless UI"),
    icon: TECH_ICONS[normalizeTechName("Headless UI")],
    description: "Unstyled UI primitives for complete design freedom.",
  },
  {
    name: "Radix UI",
    normalized: normalizeTechName("Radix UI"),
    icon: TECH_ICONS[normalizeTechName("Radix UI")],
    description: "Accessible React primitives for custom UIs.",
  },
  {
    name: "Framer Motion",
    normalized: normalizeTechName("Framer Motion"),
    icon: TECH_ICONS[normalizeTechName("Framer Motion")],
    description: "Production-grade animation library for React.",
  },
  {
    name: "Redux Toolkit",
    normalized: normalizeTechName("Redux Toolkit"),
    icon: TECH_ICONS[normalizeTechName("Redux Toolkit")],
    description: "State management for predictable and scalable apps.",
  },
  {
    name: "React Router",
    normalized: normalizeTechName("React Router"),
    icon: TECH_ICONS[normalizeTechName("React Router")],
    description: "Client-side routing for React applications.",
  },

  // ---------------------------
  // 3. BACKEND
  // ---------------------------
  {
    name: "Node.js",
    normalized: normalizeTechName("Node.js"),
    icon: TECH_ICONS[normalizeTechName("Node.js")],
    description: "JavaScript runtime for building fast server-side logic.",
  },
  {
    name: "Express.js",
    normalized: normalizeTechName("Express.js"),
    icon: TECH_ICONS[normalizeTechName("Express.js")],
    description: "Minimalist framework for building REST APIs.",
  },
  {
    name: "REST API",
    normalized: normalizeTechName("REST API"),
    icon: TECH_ICONS[normalizeTechName("REST API")],
    description: "Standard architecture for scalable web services.",
  },
  {
    name: "Socket.IO",
    normalized: normalizeTechName("Socket.IO"),
    icon: TECH_ICONS[normalizeTechName("Socket.IO")],
    description: "Real-time, event-based communication engine.",
  },
  {
    name: "JWT",
    normalized: normalizeTechName("JWT"),
    icon: TECH_ICONS[normalizeTechName("JWT")],
    description: "Secure token-based authentication method.",
  },
  {
    name: "OpenAI API",
    normalized: normalizeTechName("OpenAI API"),
    icon: TECH_ICONS[normalizeTechName("OpenAI API")],
    description: "AI-powered APIs for chat, text, and embeddings.",
  },

  // ---------------------------
  // 4. FULLSTACK / DATABASES
  // ---------------------------
  {
    name: "MongoDB",
    normalized: normalizeTechName("MongoDB"),
    icon: TECH_ICONS[normalizeTechName("MongoDB")],
    description: "Document-based NoSQL database for flexible schemas.",
  },
  {
    name: "Mongoose",
    normalized: normalizeTechName("Mongoose"),
    icon: TECH_ICONS[normalizeTechName("Mongoose")],
    description: "ODM library for MongoDB in Node.js applications.",
  },

  // ---------------------------
  // 5. LIBRARIES / UTILITIES
  // ---------------------------
  {
    name: "Axios",
    normalized: normalizeTechName("Axios"),
    icon: TECH_ICONS[normalizeTechName("Axios")],
    description: "Promise-based HTTP client for API communication.",
  },
  {
    name: "Fetch API",
    normalized: normalizeTechName("Fetch API"),
    icon: TECH_ICONS[normalizeTechName("Fetch API")],
    description: "Native browser API for network requests.",
  },
  {
    name: "Zod",
    normalized: normalizeTechName("Zod"),
    icon: TECH_ICONS[normalizeTechName("Zod")],
    description: "Schema validation for TypeScript applications.",
  },
  {
    name: "Prettier",
    normalized: normalizeTechName("Prettier"),
    icon: TECH_ICONS[normalizeTechName("Prettier")],
    description: "Code formatter ensuring consistent style.",
  },

  // ---------------------------
  // 6. VERSION CONTROL
  // ---------------------------
  {
    name: "Git",
    normalized: normalizeTechName("Git"),
    icon: TECH_ICONS[normalizeTechName("Git")],
    description: "Distributed version control for tracking changes.",
  },
  {
    name: "GitHub",
    normalized: normalizeTechName("GitHub"),
    icon: TECH_ICONS[normalizeTechName("GitHub")],
    description: "Platform for hosting repositories and collaboration.",
  },

  // ---------------------------
  // 7. CLOUD
  // ---------------------------
  {
    name: "Amazon Web Services",
    normalized: normalizeTechName("Amazon Web Services"),
    icon: TECH_ICONS[normalizeTechName("Amazon Web Services")],
    description: "Cloud platform for deployment and scaling apps.",
  },
  {
    name: "Google Cloud",
    normalized: normalizeTechName("Google Cloud"),
    icon: TECH_ICONS[normalizeTechName("Google Cloud")],
    description: "Google’s ecosystem for cloud-based infrastructure.",
  },
  {
    name: "Cloudinary",
    normalized: normalizeTechName("Cloudinary"),
    icon: TECH_ICONS[normalizeTechName("Cloudinary")],
    description: "Media optimization and image hosting platform.",
  },

  // ---------------------------
  // 8. DEPLOYMENT / HOSTING
  // ---------------------------
  {
    name: "Vercel",
    normalized: normalizeTechName("Vercel"),
    icon: TECH_ICONS[normalizeTechName("Vercel")],
    description: "Optimal hosting for Next.js and frontend apps.",
  },
  {
    name: "Render",
    normalized: normalizeTechName("Render"),
    icon: TECH_ICONS[normalizeTechName("Render")],
    description: "Full-service cloud for web services and APIs.",
  },
  {
    name: "Replit",
    normalized: normalizeTechName("Replit"),
    icon: TECH_ICONS[normalizeTechName("Replit")],
    description: "Online IDE and hosting for rapid prototyping.",
  },
  {
    name: "PNPM",
    normalized: normalizeTechName("PNPM"),
    icon: TECH_ICONS[normalizeTechName("PNPM")],
    description: "Fast and disk-efficient package manager.",
  },
  {
    name: "Docker",
    normalized: normalizeTechName("Docker"),
    icon: TECH_ICONS[normalizeTechName("Docker")],
    description: "Containerization for consistent development environments.",
  },
  {
    name: "Kubernetes",
    normalized: normalizeTechName("Kubernetes"),
    icon: TECH_ICONS[normalizeTechName("Kubernetes")],
    description: "Orchestration system for deploying and scaling containers.",
  },

  // ---------------------------
  // 9. OS
  // ---------------------------
  {
    name: "Linux",
    normalized: normalizeTechName("Linux"),
    icon: TECH_ICONS[normalizeTechName("Linux")],
    description: "Open-source OS widely used in servers and development.",
  },
  {
    name: "Microsoft Windows",
    normalized: normalizeTechName("Microsoft Windows"),
    icon: TECH_ICONS[normalizeTechName("Microsoft Windows")],
    description: "Popular operating system for development and productivity.",
  },

  // ---------------------------
  // 10. BROWSERS
  // ---------------------------
  {
    name: "Google Chrome",
    normalized: normalizeTechName("Google Chrome"),
    icon: TECH_ICONS[normalizeTechName("Google Chrome")],
    description: "Most widely used browser for development and testing.",
  },
  {
    name: "Brave Browser",
    normalized: normalizeTechName("Brave Browser"),
    icon: TECH_ICONS[normalizeTechName("Brave Browser")],
    description: "Privacy-focused web browser with built-in shields.",
  },
  {
    name: "Safari",
    normalized: normalizeTechName("Safari"),
    icon: TECH_ICONS[normalizeTechName("Safari")],
    description: "Apple’s fast and privacy-focused web browser.",
  },

  // ---------------------------
  // 11. TOOLS / OTHER
  // ---------------------------
  {
    name: "Figma",
    normalized: normalizeTechName("Figma"),
    icon: TECH_ICONS[normalizeTechName("Figma")],
    description: "Collaborative tool for designing UI/UX.",
  },
  {
    name: "Firebase",
    normalized: normalizeTechName("Firebase"),
    icon: TECH_ICONS[normalizeTechName("Firebase")],
    description: "Backend-as-a-service for authentication and databases.",
  },
  {
    name: "Google Colab",
    normalized: normalizeTechName("Google Colab"),
    icon: TECH_ICONS[normalizeTechName("Google Colab")],
    description: "Notebook environment for ML and Python scripting.",
  },
  {
    name: "Postman",
    normalized: normalizeTechName("Postman"),
    icon: TECH_ICONS[normalizeTechName("Postman")],
    description: "API testing and documentation platform.",
  },
  {
    name: "PowerShell",
    normalized: normalizeTechName("PowerShell"),
    icon: TECH_ICONS[normalizeTechName("PowerShell")],
    description: "Powerful shell and scripting language by Microsoft.",
  },
  {
    name: "Slack",
    normalized: normalizeTechName("Slack"),
    icon: TECH_ICONS[normalizeTechName("Slack")],
    description: "Team messaging and collaboration platform.",
  },
  {
    name: "Canva",
    normalized: normalizeTechName("Canva"),
    icon: TECH_ICONS[normalizeTechName("Canva")],
    description: "Design tool for marketing visuals and branding.",
  },
  {
    name: "Adobe",
    normalized: normalizeTechName("Adobe"),
    icon: TECH_ICONS[normalizeTechName("Adobe")],
    description: "Suite of tools for creative and design workflows.",
  },
  {
    name: "Adobe Firefly",
    normalized: normalizeTechName("Adobe Firefly"),
    icon: TECH_ICONS[normalizeTechName("Adobe Firefly")],
    description: "AI-powered creative assistant for generating assets.",
  },
  {
    name: "HeroUI",
    normalized: normalizeTechName("HeroUI"),
    icon: TECH_ICONS[normalizeTechName("HeroUI")],
    description: "Component library built on Tailwind CSS.",
  },
  {
    name: "Google Gemini",
    normalized: normalizeTechName("Google Gemini"),
    icon: TECH_ICONS[normalizeTechName("Google Gemini")],
    description: "Google’s multimodal AI model for advanced reasoning.",
  },
  {
    name: "Gemma AI",
    normalized: normalizeTechName("Gemma AI"),
    icon: TECH_ICONS[normalizeTechName("Gemma AI")],
    description: "Open-source lightweight AI model by Google.",
  },
  {
    name: "VS Code",
    normalized: normalizeTechName("VS Code"),
    icon: TECH_ICONS[normalizeTechName("VS Code")],
    description: "Feature-rich code editor for rapid development.",
  },

  {
    name: "GitHub Copilot",
    normalized: normalizeTechName("GitHub Copilot"),
    icon: TECH_ICONS[normalizeTechName("GitHub Copilot")],
    description: "AI coding assistant powered by GitHub and OpenAI.",
  },
  {
    name: "Resend",
    normalized: normalizeTechName("Resend"),
    icon: TECH_ICONS[normalizeTechName("Resend")],
    description: "Modern email API for sending and tracking emails.",
  },
  {
    name: "Bash",
    normalized: normalizeTechName("Bash"),
    icon: TECH_ICONS[normalizeTechName("Bash")],
    description: "Command-line shell for automation and scripting.",
  },
];

export const PROJECT_DATA = [
  {
    _id: "1",
    type: "AI",
    category: "Career / Voice AI",
    primaryColor: "#FF8A4C",

    name: "Brainwave AI ",
    nameDescribe: "Intelligent Voice-Based Mock Interview Platform",
    shortDescription:
      "A full-stack voice-based AI mock interview simulator that generates real-time questions, listens to your answers, and provides structured feedback instantly.",
    shortDescription2:
      "A personal portfolio + full admin dashboard CMS that supports dynamic content editing, media uploads, and secure JWT-protected routes.",

    mainDescription: [
      "A personal portfolio + full admin dashboard CMS that supports dynamic content editing, media uploads, and secure JWT-protected routes.",
      "A personal portfolio + full admin dashboard CMS that supports dynamic content editing, media uploads, and secure JWT-protected routes.",
    ],

    projectLink: "https://brainwaveai.onrender.com/",
    githubLink: "https://github.com/indkshitij/BrainwaveAI",

    imageUrl: BrainwaveAi,
    techStack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Vapi AI",
      "Gemini",
      "Clerk",
      "Zod",
    ],

    features: [
      "Voice-based real-time interview simulation",
      "AI-generated questions based on role & experience",
      "Automated feedback with scoring",
      "Behavioral & technical interview modes",
      "Dashboard with interview history",
      "Secure login with Clerk",
    ],

    highlights: [
      "Integrated Vapi AI for real-time voice responses",
      "Used Google GenAI API for feedback scoring",
      "Designed a detailed analytics dashboard",
      "Created scalable REST APIs for interview sessions",
    ],

    problemSolved:
      "Helps job seekers practice interviews with real-time voice interaction and actionable feedback, bridging the gap between preparation and real interviews.",

    roleInProject: [
      "Full-stack development",
      "Voice AI integration",
      "Interview feedback engine",
      "Dashboard and analytics UI",
    ],

    challenges: [
      "Managing accurate voice-to-text interpretations",
      "Generating structured and meaningful feedback",
      "Synchronizing interview sessions in real time",
    ],

    solutions: [
      "Used Vapi AI for reliable voice session handling",
      "Integrated Google Generative AI for content evaluation",
      "Implemented real-time UI state sync + optimized schema",
    ],

    metrics: {
      userGrowth: "150+ mock interviews tested",
      accuracyImprovement: "30% better feedback consistency",
      performance: "Fast processing under 2 seconds",
    },

    description: `A full-stack voice-based AI mock interview simulator that generates real-time questions, listens to your answers, and provides structured feedback instantly. A full-stack voice-based AI mock interview simulator that generates real-time questions, listens to your answers, and provides structured feedback instantly. A full-stack voice-based AI mock interview simulator that generates real-time questions, listens to your answers, and provides structured feedback instantly. A full-stack voice-based AI mock interview simulator that generates real-time questions, listens to your answers, and provides structured feedback instantly.`,

    inDepthDetail: [
      "This project introduces a full-stack voice-based AI mock interview simulator designed to replicate real-time interview scenarios. It generates dynamic questions, listens to user responses, and provides structured feedback instantly. The system aims to improve communication skills, boost confidence, and offer an interactive environment for candidates preparing for technical and behavioral interviews.",

      "Using advanced speech recognition and natural language understanding, the simulator evaluates spoken answers with high accuracy. It identifies strengths, highlights mistakes, and suggests improvements. Users can practice multiple interview rounds, track their progress, and receive detailed performance insights to enhance fluency, clarity, and professional delivery.",

      "Built as a full-stack application, the platform integrates a modern frontend, scalable backend, and real-time voice processing. It supports continuous question generation using AI-driven models, ensuring each session feels fresh and tailored. The system can adapt to various difficulty levels depending on the user's expertise and interview goals.",

      "The mock interview experience includes real-time feedback, score breakdowns, and personalized improvement tips. Each response is recorded, transcribed, and analyzed to measure relevance, structure, and confidence level. The platform also detects filler words, long pauses, and unclear points to help users refine their communication style.",

      "Users can choose domains such as software engineering, data science, product management, or general HR interviews. The application creates a simulated environment that closely resembles actual interview settings. It helps beginners practice safely while offering experienced candidates a tool to fine-tune their responses and polish their speaking skills.",

      "The system’s dashboard visualizes performance metrics, historical progress, and recommended next steps. With its interactive voice-based approach, the simulator transforms traditional interview preparation into an engaging, AI-assisted learning experience suitable for students, job seekers, and professionals.",
    ],
    createdAt: "2025-01-01T00:00:00Z",
    updatedAt: "2025-01-10T00:00:00Z",
  },

  // -------------------------------------------------------

  {
    _id: "2",
    type: "Full-stack",
    category: "Finance / AI Automation",
    primaryColor: "#4C9AFF",

    name: "Neo Finance",
    nameDescribe: "AI-Enabled Personal Finance Manager",
    shortDescription:
      "A modern MERN-based personal finance assistant with AI-powered bill scanning, budgeting, analytics, and event-driven alerts.",
    shortDescription2:
      "A personal portfolio + full admin dashboard CMS that supports dynamic content editing, media uploads, and secure JWT-protected routes.",
    mainDescription: [
      "A personal portfolio + full admin dashboard CMS that supports dynamic content editing, media uploads, and secure JWT-protected routes.",
      "A personal portfolio + full admin dashboard CMS that supports dynamic content editing, media uploads, and secure JWT-protected routes.",
    ],
    projectLink: "https://neo-finance.onrender.com/",
    githubLink: "https://github.com/indkshitij/Neo-Finance",

    imageUrl: NeoFinance,

    techStack: [
      "React",
      "Tailwind",
      "shadcn/ui",
      "Node.js",
      "Express",
      "MongoDB",
      "Gemini",
      "Clerk",
      "Svix",
      "Inngest",
      "Resend",
      "Arcjet",
    ],

    features: [
      "AI-powered receipt/bill scanning",
      "Income & expense tracking",
      "Automated budgeting alerts",
      "Email notifications",
      "Event-driven workflows",
      "Secure authentication",
    ],

    highlights: [
      "OCR pipeline using Google GenAI",
      "Event-driven alerts using Inngest",
      "Webhook syncing with Clerk + Svix",
      "Dynamic data visualization using Recharts",
    ],

    problemSolved:
      "Reduces manual effort in managing finances by automatically extracting bill details, tracking expenses, and alerting users on overspending.",

    roleInProject: [
      "Full-stack MERN developer",
      "AI OCR integration",
      "After-upload bill parsing system",
      "UI/UX and dashboard components",
    ],

    challenges: [
      "Accurate OCR extraction",
      "Real-time syncing with webhooks",
      "Handling large financial datasets efficiently",
    ],

    solutions: [
      "Used Generative AI for structured OCR extraction",
      "Implemented server-side events with Inngest",
      "Optimized Mongo queries & added indexing",
    ],

    metrics: {
      ocrAccuracy: "92% accurate bill detection",
      performance: "35% faster client-side rendering",
      automation: "Over 60% reduced manual entry",
    },

    description: `<div class="flex flex-wrap gap-2 text-xs mb-4">
      <span class="px-2 py-0.5 border-orange-400 text-orange-400 font-medium border rounded">React</span>
      <span class="px-2 py-0.5 border-orange-400 text-orange-400 font-medium border rounded">MongoDB</span>
      <span class="px-2 py-0.5 border-orange-400 text-orange-400 font-medium border rounded">Google GenAI</span>
    </div>
    <span class="font-semibold">Neo Finance</span> is a personal finance manager with <span class="italic">AI-powered receipt scanning and automated alerts</span>.`,

    inDepthDetail: ["<<< USE YOUR EXISTING FULL HTML DETAIL HERE >>>"],

    createdAt: "2025-01-02T00:00:00Z",
    updatedAt: "2025-01-10T00:00:00Z",
  },

  // -------------------------------------------------------

  {
    _id: "3",
    type: "Full-stack",
    category: "Developer Tools",
    primaryColor: "#FFC04C",

    name: "Portfolio Admin Dashboard",
    nameDescribe: " MERN Based Content Management System",
    shortDescription:
      "A personal portfolio + full admin dashboard CMS that supports dynamic content editing, media uploads, and secure JWT-protected routes.",
    shortDescription2:
      "A personal portfolio + full admin dashboard CMS that supports dynamic content editing, media uploads, and secure JWT-protected routes.",
    mainDescription: [
      "A personal portfolio + full admin dashboard CMS that supports dynamic content editing, media uploads, and secure JWT-protected routes.",
      "A personal portfolio + full admin dashboard CMS that supports dynamic content editing, media uploads, and secure JWT-protected routes.",
    ],
    projectLink: "https://kshitij-singh.onrender.com/",
    githubLink: "https://github.com/indkshitij/Kshitij-Portfolio",

    imageUrl: PortfolioCMS,
    techStack: [
      "React",
      "Vite",
      "Tailwind",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Cloudinary",
    ],

    features: [
      "Dynamic project & skills management",
      "CRUD operations via admin panel",
      "JWT authentication",
      "Image uploads via Multer + Cloudinary",
      "Fully responsive UI",
      "Real-time content updates",
    ],

    highlights: [
      "CMS-like admin dashboard",
      "Cloudinary integration",
      "Secure token-based routes",
      "Separate public and admin UI",
    ],

    problemSolved:
      "Helps developers manage their portfolio dynamically without redeployment or code changes.",

    roleInProject: [
      "Full-stack MERN developer",
      "Admin dashboard architecture",
      "Image upload integration",
      "Public portfolio UI",
    ],

    challenges: [
      "Ensuring secure admin access",
      "Building scalable CRUD modules",
      "Handling images efficiently",
    ],

    solutions: [
      "JWT tokens + cookie-based auth",
      "Modular controllers with Mongoose models",
      "Cloudinary uploads with optimized transformations",
    ],

    metrics: {
      performance: "40% faster UI render with lazy loading",
      cmsUsage: "100+ content updates without redeploy",
      security: "Zero unauthorized access incidents",
    },

    description: `<div class="flex flex-wrap gap-2 text-xs mb-4">
      <span class="px-2 py-0.5 border-orange-400 text-orange-400 font-medium border rounded">React</span>
      <span class="px-2 py-0.5 border-orange-400 text-orange-400 font-medium border rounded">Node.js</span>
      <span class="px-2 py-0.5 border-orange-400 text-orange-400 font-medium border rounded">JWT</span>
      <span class="px-2 py-0.5 border-orange-400 text-orange-400 font-medium border rounded">MongoDB</span>
    </div>
    A <span class="font-semibold">developer-focused CMS</span> for managing portfolio content in real time.`,

    inDepthDetail: ["<<< USE YOUR EXISTING FULL HTML DETAIL HERE >>>"],

    createdAt: "2025-01-03T00:00:00Z",
    updatedAt: "2025-01-10T00:00:00Z",
  },
];

export const SKILLS = [
  // 1. LANGUAGES
  "JavaScript",
  "TypeScript",
  "Python",
  "HTML5",
  "CSS3",

  // 2. FRONTEND
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "Material UI",
  "Chakra UI",
  "shadcn/ui",
  "Headless UI",
  "Radix UI",
  "Framer Motion",
  "Redux Toolkit",
  "React Router",

  // 3. BACKEND
  "Node.js",
  "Express.js",
  "REST API",
  "Socket.IO",
  "JWT",
  "OpenAI API",

  // 4. FULLSTACK / DATABASES
  "MongoDB",
  "Mongoose",

  // 5. LIBRARIES / UTILITIES
  "Axios",
  "Fetch API",
  "Zod",
  "Prettier",

  // 6. VERSION CONTROL
  "Git",
  "GitHub",

  // 7. CLOUD
  "Amazon Web Services",
  "Google Cloud",
  "Cloudinary",

  // 8. DEPLOYMENT / HOSTING
  "Vercel",
  "Render",
  "Replit",
  "PNPM",
  "Docker",
  "Kubernetes",

  // 9. OS
  "Linux",
  "Microsoft Windows",

  // 10. BROWSERS
  "Google Chrome",
  "Brave Browser",
  "Safari",

  // 11. TOOLS / OTHER
  "Figma",
  "Firebase",
  "Google Colab",
  "Postman",
  "PowerShell",
  "Slack",
  "Canva",
  "Adobe",
  "Adobe Firefly",
  "HeroUI",
  "Google Gemini",
  "Gemma AI",
  "VS Code",
  "AI 360",
  "GitHub Copilot",
  "Resend",
  "Bash",
];
// TOTAL: 62 SKILLS

export const myskills = [
  // ---------------------------
  // 1. LANGUAGES
  // ---------------------------
  { _id: 1, key: "javascript", label: "JavaScript" },
  { _id: 2, key: "typescript", label: "TypeScript" },
  { _id: 3, key: "python", label: "Python" },
  { _id: 5, key: "html", label: "HTML5" },
  { _id: 6, key: "css3", label: "CSS3" },

  // ---------------------------
  // 2. FRONTEND
  // ---------------------------
  { _id: 7, key: "react", label: "React.js" },
  { _id: 8, key: "nextjs", label: "Next.js" },
  { _id: 9, key: "tailwindcss", label: "Tailwind CSS" },
  { _id: 10, key: "materialui", label: "Material UI" },
  { _id: 11, key: "chakraui", label: "Chakra UI" },
  { _id: 12, key: "shadcnui", label: "shadcn/ui" },
  { _id: 13, key: "headlessui", label: "Headless UI" },
  { _id: 14, key: "radixui", label: "Radix UI" },
  { _id: 15, key: "framer", label: "Framer Motion" },
  { _id: 16, key: "redux", label: "Redux Toolkit" },
  { _id: 17, key: "reactrouter", label: "React Router" },

  // ---------------------------
  // 3. BACKEND
  // ---------------------------
  { _id: 18, key: "nodejs", label: "Node.js" },
  { _id: 19, key: "express", label: "Express.js" },
  { _id: 20, key: "restapi", label: "REST API" },
  { _id: 21, key: "socketio", label: "Socket.IO" },
  { _id: 22, key: "jwt", label: "JWT" },
  { _id: 23, key: "openai", label: "OpenAI API" },

  // ---------------------------
  // 4. FULLSTACK / DATABASES
  // ---------------------------
  { _id: 24, key: "mongodb", label: "MongoDB" },
  { _id: 25, key: "mongoose", label: "Mongoose" },

  // ---------------------------
  // 5. LIBRARIES / UTILITIES
  // ---------------------------
  { _id: 26, key: "axios", label: "Axios" },
  { _id: 27, key: "fetch", label: "Fetch API" },
  { _id: 28, key: "zod", label: "Zod" },
  { _id: 29, key: "prettier", label: "Prettier" },

  // ---------------------------
  // 6. VERSION CONTROL
  // ---------------------------
  { _id: 30, key: "git", label: "Git" },
  { _id: 31, key: "github", label: "GitHub" },

  // ---------------------------
  // 7. CLOUD
  // ---------------------------
  { _id: 32, key: "aws", label: "Amazon Web Services (AWS)" },
  { _id: 33, key: "gcloud", label: "Google Cloud" },
  { _id: 34, key: "cloudinary", label: "Cloudinary" },

  // ---------------------------
  // 8. DEPLOYMENT / HOSTING
  // ---------------------------
  { _id: 35, key: "vercel", label: "Vercel" },
  { _id: 36, key: "render", label: "Render" },
  { _id: 37, key: "replit", label: "Replit" },
  { _id: 38, key: "pnpm", label: "PNPM" },
  { _id: 39, key: "docker", label: "Docker" },
  { _id: 40, key: "kubernetes", label: "Kubernetes" },

  // ---------------------------
  // 9. OS
  // ---------------------------
  { _id: 41, key: "linux", label: "Linux" },
  { _id: 42, key: "microsoft", label: "Microsoft Windows" },

  // ---------------------------
  // 10. BROWSERS
  // ---------------------------
  { _id: 43, key: "chrome", label: "Google Chrome" },
  { _id: 44, key: "brave", label: "Brave Browser" },

  // ---------------------------
  // 11. TOOLS / OTHER
  // ---------------------------
  { _id: 45, key: "figma", label: "Figma" },
  { _id: 46, key: "firebase", label: "Firebase" },
  { _id: 47, key: "colab", label: "Google Colab" },
  { _id: 48, key: "postman", label: "Postman" },
  { _id: 49, key: "powershell", label: "PowerShell" },
  { _id: 50, key: "slack", label: "Slack" },
  { _id: 51, key: "canva", label: "Canva" },
  { _id: 52, key: "adobe", label: "Adobe" },
  { _id: 53, key: "adobe-firefly", label: "Adobe Firefly" },
  { _id: 54, key: "heroui", label: "HeroUI" },
  { _id: 55, key: "gemini", label: "Google Gemini" },
  { _id: 56, key: "gemma", label: "Gemma AI" },
  { _id: 57, key: "vscode", label: "VS Code" },
  { _id: 58, key: "ai360", label: "AI 360" },
  { _id: 59, key: "ai", label: "Artificial Intelligence" },
  { _id: 60, key: "copilotgithub", label: "GitHub Copilot" },
  { _id: 61, key: "resend", label: "Resend" },
  { _id: 62, key: "bash", label: "Bash" },
];
