import Intro from "@/components/intro";
import AboutMe from "@/components/about-me";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
      {/* Intro Section */}
      <section className="snap-start flex items-center justify-center min-h-screen">
        <Intro />
      </section>

      {/* About Me Section */}
      <section className="snap-start flex items-center justify-center min-h-screen">
        <AboutMe />
      </section>

      {/* Skills Section */}
      <section className="snap-start flex items-center justify-center min-h-screen">
        <Skills />
      </section>
    </div>
  );
}
