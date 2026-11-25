export type AboutSocialId = "github" | "linkedin";
export type AboutDetailId = "location" | "focus" | "learning";
export type AboutHighlightId = "mern" | "projects" | "learning";

export type AboutSocial = {
  id: AboutSocialId;
  label: string;
  href: string;
};

export type AboutDetail = {
  id: AboutDetailId;
  label: string;
  value: string;
};

export type AboutHighlight = {
  id: AboutHighlightId;
  number: string;
  title: string;
  description: string;
};

export const aboutData = {
  label: "GET TO KNOW ME",
  heading: {
    lead: "More than just",
    accent: "writing code.",
    accessible: "More than just writing code.",
  },
  paragraphs: [
    "I'm Shovon, a MERN Stack Developer passionate about building modern, responsive, and user-friendly web applications.",
    "I enjoy turning ideas into practical solutions, exploring new technologies, and creating meaningful digital experiences. Through hands-on projects, I'm continuously improving my skills in frontend and backend development.",
    "I believe great development is not just about writing code — it's about solving problems and creating experiences that matter.",
  ],
  profile: {
    label: "Developer profile",
    index: "01",
    initials: "SK",
    name: "Shovon Kumar Das",
    role: "MERN Stack Developer",
    details: [
      {
        id: "location",
        label: "Based in",
        value: "Dhaka, Bangladesh",
      },
      {
        id: "focus",
        label: "Current focus",
        value: "Next.js & Modern Web Development",
      },
      {
        id: "learning",
        label: "Currently",
        value: "Hands-on Learning & Project Building",
      },
    ] satisfies AboutDetail[],
  },
  socialsLabel: "Elsewhere",
  socials: [
    {
      id: "github",
      label: "GitHub",
      href: "https://github.com/ShovonDas-Dev",
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/shovonkumardas",
    },
  ] satisfies AboutSocial[],
  highlightsLabel: "What I focus on",
  highlights: [
    {
      id: "mern",
      number: "01",
      title: "MERN Stack",
      description: "Full-stack web development.",
    },
    {
      id: "projects",
      number: "02",
      title: "Hands-on Projects",
      description: "Building practical web applications.",
    },
    {
      id: "learning",
      number: "03",
      title: "Continuous Learning",
      description:
        "Exploring modern technologies and improving development skills.",
    },
  ] satisfies AboutHighlight[],
} as const;
