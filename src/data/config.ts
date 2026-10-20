import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Layers,
  Database,
  Wrench,
  Sparkles,
  Globe,
  Github,
  Linkedin,
  Mail,
  GraduationCap,
  Briefcase,
  Ruler,
  Award,
  Bot,
} from "lucide-react";

export const profile = {
  name: "Fiza Ishaq",
  role: "Web Developer",
  introduction:
    "I build responsive websites and web applications with modern technologies, turning ideas into clean, fast and user-friendly digital experiences.",
  location: "Lahore, Pakistan",
  availability: "Open to frontend opportunities",
  email: "fizaishaq03@gmail.com",
  university: "Lahore College for Women University",
  universityShort: "LCWU",
};

export const emailSubject = "Hello Fiza — message from your portfolio";
export const emailBody = "Hi Fiza,\n\n";

export const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(
  emailSubject
)}&body=${encodeURIComponent(emailBody)}`;

export const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  profile.email
)}&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(
  emailBody
)}`;

export const resume = {
  url: "/Fiza-Ishaq-CV.pdf",
  fileName: "Fiza-Ishaq-CV.pdf",
};

export type SocialLink = {
  label: string;
  handle: string;
  url: string;
  icon: LucideIcon;
};

export const socials: SocialLink[] = [
  {
    label: "GitHub",
    handle: "github.com/fiza-ishaq",
    url: "https://github.com/fiza-ishaq",
    icon: Github,
  },
  {
    label: "LinkedIn",
    handle: "linkedin.com/in/fiza-ishaq",
    url: "https://www.linkedin.com/in/fiza-ishaq-b431b8418",
    icon: Linkedin,
  },
];

export const emailLink = { label: "Email", icon: Mail };

export type AboutBlock = { title: string; text: string };

export const aboutBlocks: AboutBlock[] = [
  {
    title: "Background",
    text: "I'm a final-year Computer Science student at Lahore College for Women University. Alongside my degree I've completed a React and headless CMS internship and built responsive websites, a WordPress plugin, and AI-powered web apps.",
  },
  {
    title: "Technical interests",
    text: "I enjoy frontend development with React and TypeScript, API integration, and headless CMS setups. I'm also drawn to Generative AI and agentic AI — especially where they make everyday web tools more useful.",
  },
  {
    title: "Career goal",
    text: "I want to grow into a frontend developer who ships clean, accessible products with real users in mind, and to keep learning how AI can be built into them responsibly.",
  },
];

export type SkillGroup = {
  title: string;
  icon: LucideIcon;
  accent: "teal" | "violet" | "sky" | "amber";
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming languages",
    icon: Code2,
    accent: "teal",
    skills: ["JavaScript", "TypeScript", "Python", "HTML5", "CSS3"],
  },
  {
    title: "Frontend & backend",
    icon: Layers,
    accent: "violet",
    skills: [
      "React.js",
      "Tailwind CSS",
      "Responsive Design",
      "Node.js",
      "FastAPI",
      "REST APIs",
      "WordPress",
      "Headless CMS",
    ],
  },
  {
    title: "Databases",
    icon: Database,
    accent: "sky",
    skills: ["Supabase"],
  },
  {
    title: "Development tools",
    icon: Wrench,
    accent: "amber",
    skills: ["Git", "GitHub", "VS Code", "Vite", "Vercel", "Gemini AI"],
  },
];

export type Project = {
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  icon: LucideIcon;
  accent: "teal" | "violet" | "sky";
  liveUrl: string;
};

export const projects: Project[] = [
  {
    title: "NEXA Digital",
    tagline: "Digital Agency Website",
    description:
      "A responsive agency website that presents services, project details, and testimonials. Its contact form delivers messages straight to the inbox.",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Supabase", "Resend", "Vercel"],
    icon: Globe,
    accent: "teal",
    liveUrl: "https://nexadigital-pk.vercel.app/",
  },
  {
    title: "HireLens AI",
    tagline: "Resume Screening & Candidate Evaluation",
    description:
      "An AI-powered screening platform that evaluates candidate–job fit, generates match scores, and gives reviewers structured insights using Generative AI.",
    tags: ["React", "TypeScript", "Gemini AI", "Tailwind CSS", "Node.js"],
    icon: Sparkles,
    accent: "violet",
    liveUrl: "https://new-folder-fawn-iota.vercel.app/",
  },
  {
    title: "TenderBot Pakistan",
    tagline: "AI-Powered Tender Discovery & Analysis",
    description:
      "An AI tender assistant that analyzes PPRA tender documents, checks eligibility, flags missing documents, and generates submission checklists using RAG and semantic matching.",
    tags: ["Gemini", "RAG", "Semantic Search", "FAISS", "ChromaDB"],
    icon: Bot,
    accent: "teal",
    liveUrl: "https://tender-bot-8.vercel.app/",
  },
];

export const education = {
  degree: "Bachelor of Science in Computer Science",
  institution: "Lahore College for Women University",
  period: "2023 – 2027",
  expectedGraduation: "Expected 2027",
  gpa: "3.26",
  status: "In progress",
  icon: GraduationCap,
  note: "Studying computer science with a focus on web development, and applying it through internships and personal projects.",
  // Edit this list to match your actual transcript.
  coursework: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Database Systems",
    "Web Engineering",
    "Software Engineering",
    "Artificial Intelligence",
  ],
};

export type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  place: string;
  icon: LucideIcon;
  accent: "teal" | "violet" | "sky";
  points: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "React & CMS Headless Developer Intern",
    org: "Webostock",
    period: "Jun 2026 – Aug 2026",
    place: "Lahore",
    icon: Briefcase,
    accent: "teal",
    points: [
      "Built responsive web interfaces with React.js, JavaScript, HTML, and CSS.",
      "Integrated a headless CMS with React applications using REST APIs.",
      "Created reusable React components and shipped frontend features.",
      "Used Git and GitHub for version control, debugging, and code management.",
    ],
  },
  {
    role: "2D Floor Plan Designer",
    org: "Benchmark",
    period: "Jun 2025 – Feb 2026",
    place: "Lahore",
    icon: Ruler,
    accent: "violet",
    points: [
      "Created detailed 2D residential floor plans using Property Vision software.",
      "Designed layouts with rooms, walls, doors, windows, and architectural elements.",
      "Turned design requirements into accurate, well-organized drawings.",
    ],
  },
  {
    role: "Teacher",
    org: "Unique Academy",
    period: "Jun 2023 – Jun 2024",
    place: "Lahore",
    icon: GraduationCap,
    accent: "sky",
    points: [
      "Delivered lessons and guided students according to their learning needs.",
      "Prepared learning materials and monitored academic progress.",
      "Built communication, classroom management, and problem-solving skills.",
    ],
  },
];

export type Certification = {
  title: string;
  issuer: string;
  date: string;
  icon: LucideIcon;
};

export const certifications: Certification[] = [
  {
    title: "ACT AI",
    issuer: "AI SkillBridge",
    date: "Jul 2026",
    icon: Award,
  },
  {
    title: "Generative AI and Agentic AI Application Developer",
    issuer: "Aspire Pakistan",
    date: "Oct 2026",
    icon: Award,
  },
];

// Header navigation (as per portfolio structure)
export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const;

// Every section id on the page, in order (used for active-link tracking)
export const sectionIds = [
  "home",
  "about",
  "projects",
  "skills",
  "education",
  "experience",
  "contact",
] as const;
