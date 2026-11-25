export type ExpertiseCategoryId =
  | "frontend"
  | "backend"
  | "animation"
  | "workflow";

export type TechnologyIconId =
  | "react"
  | "nextjs"
  | "javascript"
  | "typescript"
  | "html"
  | "css"
  | "tailwind"
  | "mongodb"
  | "betterauth"
  | "framer"
  | "git"
  | "github"
  | "vscode";

export type Technology = {
  id: string;
  name: string;
  icon: TechnologyIconId;
};

export type ExpertiseCategory = {
  id: ExpertiseCategoryId;
  number: string;
  title: string;
  headline: string;
  description: string;
  technologies: Technology[];
};

export type ExpertiseData = {
  label: string;
  heading: string;
  subtitle: string;
  categories: ExpertiseCategory[];
};

export const expertiseData: ExpertiseData = {
  label: "02 / WHAT I WORK WITH",
  heading: "My Expertise",
  subtitle:
    "The technologies and tools I use to build modern digital experiences.",
  categories: [
    {
      id: "frontend",
      number: "01",
      title: "Frontend Development",
      headline: "Crafting modern web experiences.",
      description:
        "Building responsive, accessible interfaces with a modern React and Next.js workflow.",
      technologies: [
        { id: "react", name: "React.js", icon: "react" },
        { id: "nextjs", name: "Next.js", icon: "nextjs" },
        { id: "javascript", name: "JavaScript", icon: "javascript" },
        { id: "typescript", name: "TypeScript", icon: "typescript" },
        { id: "html", name: "HTML", icon: "html" },
        { id: "css", name: "CSS", icon: "css" },
        { id: "tailwind", name: "Tailwind CSS", icon: "tailwind" },
      ],
    },
    {
      id: "backend",
      number: "02",
      title: "Backend & Authentication",
      headline: "Building reliable foundations.",
      description:
        "Data storage and secure authentication for full-stack applications that need a dependable foundation.",
      technologies: [
        { id: "mongodb", name: "MongoDB", icon: "mongodb" },
        { id: "betterauth", name: "Better Auth", icon: "betterauth" },
      ],
    },
    {
      id: "animation",
      number: "03",
      title: "Animation & Interaction",
      headline: "Bringing interfaces to life.",
      description:
        "Purposeful motion and micro-interactions that make interfaces feel responsive and alive.",
      technologies: [
        { id: "framer", name: "Framer Motion", icon: "framer" },
      ],
    },
    {
      id: "workflow",
      number: "04",
      title: "Development Workflow",
      headline: "Tools behind my workflow.",
      description:
        "Version control, collaboration, and a focused editor setup that keep development organized.",
      technologies: [
        { id: "git", name: "Git", icon: "git" },
        { id: "github", name: "GitHub", icon: "github" },
        { id: "vscode", name: "VS Code", icon: "vscode" },
      ],
    },
  ],
};
