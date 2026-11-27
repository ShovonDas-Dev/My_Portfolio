// ALL content for the Featured Projects section lives in this file.
// Edit text, links, screenshots and glow colors here — nothing else needs changing.

export const featuredProjects = [
  {
    id: "reparo",
    number: "01",
    title: "Reparo",
    type: "Full stack · Repair service platform",
    tagline: "Book trusted appliance repairs in minutes.",
    description:
      "Homeowners book appliance repairs online instead of calling around for availability. Each booking moves through request, assignment and completion with status updates for both sides.",
    features: [
      "Customer and technician flows",
      "Service booking",
      "Management dashboard",
    ],
    techStack: ["TypeScript","Next.js", "Node.js", "Express", "MongoDB","BetterAuth","Tailwind CSS"],
    image: "/projects/reparo.png",
    liveLink: "https://reparo-client.vercel.app/",
    githubLink: "https://github.com/ShovonDas-Dev/Reparo-Client",
    glowColor: "#3b82f6", // blue
  },
  {
    id: "studio-space",
    number: "02",
    title: "Studio-space",
    type: "Frontend · Studio rental marketplace",
    tagline: "Discover studios, book by the hour.",
    description:
      "People who need a photo or video studio can compare spaces and book an available hour without messaging back and forth. Listings show photos, amenities and pricing up front.",
    // TODO: edit to match the real project
    features: [
      "Studio listings with filters",
      "Hourly booking flow",
      "Responsive gallery layout",
    ],
    techStack: ["TypeScript","Next.js","BatterAuth", "Tailwind CSS","Mongodb"],
    image: "/projects/studio-space.png",
    liveLink: "https://studio-space-nine-lac.vercel.app/",
    githubLink: "https://github.com/ShovonDas-Dev/StudioSpace",
    glowColor: "#22c55e", // green
  },
  {
    id: "bazardor",
    number: "03",
    title: "BazarDor",
    type: "Full stack · Daily market prices (Bengali)",
    tagline: "Know today's market price before you go.",
    description:
      "Shoppers check today's prices for rice, oil, vegetables and other essentials before heading to the market. The app records daily average, minimum and maximum prices for each product.",
    features: [
      "Daily product prices",
      "Market comparison",
      "Product details",
    ],
    techStack: ["TypeScript","Next.js","BatterAuth", "Tailwind CSS"],
    image: "/projects/bazardor.png",
    liveLink: "http://bazar-dor-yp8h.vercel.app/",
    githubLink: "https://github.com/ShovonDas-Dev/Bazar-Dor",
    glowColor: "#f97316", // orange
  },
];

export const sectionContent = {
  label: "Selected work",
  title: "Projects I've built",
  subtitle: "Pick a project to preview it right here on the page.",
  githubProfileLink: "https://github.com/ShovonDas-Dev",
};
