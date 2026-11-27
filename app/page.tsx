import About from "@/components/About/About";
import Expertise from "@/components/Expertise/Expertise";
import FeaturedProjects from "@/components/FeaturedProjects/FeaturedProjects";
import Hero from "@/components/Hero/Hero";
// import Projects from "@/components/Projects/Projects";

export default function Page() {
  return (
    <>
      <Hero />
      <About />
      <Expertise />
      {/* <Projects /> */}
      <FeaturedProjects />
    </>
  );
}
