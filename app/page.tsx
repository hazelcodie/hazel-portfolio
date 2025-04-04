import Intro from "@/components/intro";
import AboutMe from "@/components/about-me";
import {TerminalDemo} from "@/components/skills";

export default function Home() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll bg-fuchsia-100">
      <section className=" flex items-center justify-center min-h-screen">
        <Intro />
      </section>
      
      <section className="flex items-center justify-center min-h-screen">
        <AboutMe />
      </section>

      <section className="flex items-center justify-center min-h-screen">
       <TerminalDemo />
      </section>

    </div>
  );
}
