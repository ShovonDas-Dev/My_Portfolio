export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

export interface ProjectsData {
  label: string;
  heading: string;
  description: string;
  projects: Project[];
}

export const projectsData: ProjectsData = {
  label: "SELECTED WORK",
  heading: "Some things I've built.",
  description:
    "A collection of projects where I turn ideas into functional and meaningful digital experiences.",
  projects: [
    {
      id: "studiospace",
      number: "01",
      title: "StudioSpace",
      category: "Full Stack Web Application",
      description:
        "A creative-space marketplace where photographers, filmmakers, and creators discover and book inspiring studios by the hour.",
      image: "/images/projects/studiospace.png",
      technologies: ["Next.js", "Tailwind CSS", "Better Auth", "MongoDB", "Express.js"],
      liveUrl: "https://studio-space-nine-lac.vercel.app/",
      githubUrl: "https://github.com/ShovonDas-Dev/StudioSpace",
      featured: true,
    },
    {
      id: "reparo",
      number: "02",
      title: "Reparo",
      category: "Booking & Dashboard Platform",
      description:
        "A repair-service platform that connects customers with trusted technicians through dedicated dashboards for admins, technicians, and customers.",
      image: "/images/projects/reparo.png",
      technologies: ["Next.js", "Tailwind CSS", "Express.js", "MongoDB", "Better Auth"],
      liveUrl: "https://reparo-client.vercel.app/",
      githubUrl: "https://github.com/ShovonDas-Dev/Reparo-Client",
      featured: false,
    },
    {
      id: "fitlog",
      number: "03",
      title: "FitLog",
      category: "Fitness Web Application",
      description:
        "A workout library and daily plan tracker where you browse exercises, build today's plan, and watch minutes and calories add up.",
      image: "/images/projects/fitlog.png",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "DaisyUI"],
      liveUrl: "https://fitlog96.vercel.app/",
      githubUrl: "https://github.com/ShovonDas-Dev/Assignment6",
      featured: false,
    },
    {
      id: "bazardor",
      number: "04",
      title: "BazarDor",
      category: "Market Price Web Application",
      description:
        "A daily market-price companion for Bangladesh that tracks everyday essentials with average, min, max, and price-trend insights.",
      image: "/images/projects/bazardor.png",
      technologies: ["Next.js", "React", "JavaScript", "Tailwind CSS"],
      liveUrl: "https://bazar-dor-yp8h.vercel.app/",
      githubUrl: "https://github.com/ShovonDas-Dev/Bazar-Dor",
      featured: false,
    },
  ],
};
