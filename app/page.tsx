import Navbar from "@/components/navbar";
import Intro from "@/components/intro";
import AboutMe from "@/components/about-me";
import { TerminalDemo } from "@/components/skills";
import {DesignProject} from "@/components/designProject";
import "./globals.css";
import { Dock, DockIcon } from "@/components/magicui/dock";


export default function Home() {
  return (
    <div className="snap-y snap-mandatory min-h-screen overflow-y-scroll  overflow-x-hidden bg-fuchsia-100">
        <Dock>
          <DockIcon>
        <Navbar />
        <Intro />
        <AboutMe />
        <TerminalDemo />
        <DesignProject/>
          </DockIcon>
        </Dock>
    </div>
  );
}
