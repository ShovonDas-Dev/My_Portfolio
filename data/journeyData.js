// ALL content for the Journey section lives in this file.
// Edit text, years, badges, stats, mockup labels and project links here.

export const journeyContent = {
  label: "My journey",
  title: "My development journey",
  subtitle: "Self-driven learning, one step at a time.",
  timelineLabel: "Development journey timeline",
  contactButtonLabel: "Let's work together",
  contactHref: "#contact",
};

export const journeyStats = [
  { value: 3, label: "Years of learning" },
  { value: 3, label: "Projects built" },
  { value: 4, label: "Core technologies" },
];

// These links are reused from the existing projects data.
export const journeyProjects = [
  {
    id: "reparo",
    title: "Reparo",
    type: "Full stack",
    linkLabel: "Live demo",
    liveUrl: "https://reparo-client.vercel.app/",
  },
  {
    id: "fitlog",
    title: "FitLog",
    type: "Frontend only",
    linkLabel: "Live demo",
    liveUrl: "https://fitlog96.vercel.app/",
  },
  {
    id: "bazardor",
    title: "BazarDor",
    type: "Full stack",
    linkLabel: "Live demo",
    liveUrl: "https://bazar-dor-yp8h.vercel.app/",
  },
];

export const journeySteps = [
  {
    id: "spark",
    year: "2023",
    title: "The Spark",
    text: "Discovered web development and was instantly hooked. I didn't even own a computer yet, so I started learning HTML and CSS on my phone. That's where my habit of learning with whatever I had began.",
    badges: ["HTML", "CSS"],
    visual: "phone",
    tag: "Learning on a phone",
    phone: {
      lines: ["<h1>Hello, web!</h1>", "<p>Start small.</p>", "<p>Keep going.</p>"],
    },
  },
  {
    id: "foundations",
    year: "2024",
    title: "Building the Foundations",
    text: "Bought my first laptop and put the basics to work. I built multiple projects with HTML, CSS and Bootstrap, learning layout, responsive design and how real pages come together.",
    badges: ["HTML", "CSS", "Bootstrap"],
    visual: "laptop",
  },
  {
    id: "javascript-react",
    year: "2024–2025",
    title: "Going Deeper with JavaScript & React",
    text: "Enrolled in a full-stack web development course at Interactive Cares, where I learned JavaScript and React along with the modern tools and practices around them.",
    badges: ["JavaScript", "React", "Interactive Cares"],
    visual: "browser",
    browser: {
      url: "localhost:3000",
      buttonLabel: "Click me",
      counterLabel: "clicks",
    },
  },
  {
    id: "full-stack",
    year: "2025–2026",
    title: "Becoming Full Stack",
    text: "Completed a course at Programming Hero and learned the MERN stack (MongoDB, Express.js, React, Node.js). Built full-stack apps like Reparo and BazarDor, plus FitLog, a frontend workout planner.",
    badges: ["MongoDB", "Express.js", "React", "Node.js", "Programming Hero"],
    visual: "stack",
    stack: [
      { id: "mongodb", name: "MongoDB" },
      { id: "express", name: "Express" },
      { id: "react", name: "React" },
      { id: "node", name: "Node" },
    ],
  },
  {
    id: "now",
    year: "Now",
    title: "Always Building",
    text: "Focused on writing cleaner code, strengthening problem-solving and building projects that solve real problems. Open to junior opportunities where I can learn and contribute.",
    badges: [],
    visual: "now",
    now: {
      statusText: "Currently building & open to opportunities",
    },
  },
];
