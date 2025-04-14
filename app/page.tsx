import Navbar from "@/components/navbar";
import Intro from "@/components/intro";
import AboutMe from "@/components/about-me";
import { TerminalDemo } from "@/components/skills";
import {DesignProject} from "@/components/designProject";
import Menu from "@/components/menu";
import Projects from "@/components/webProjects";
import Achievements from "@/components/achievements";
import "./globals.css";


export default function Home() {
  return (
    <div className="snap-y snap-mandatory min-h-screen overflow-y-scroll  overflow-x-hidden bg-fuchsia-100">
        
        <Navbar />
        <Intro />
        <AboutMe />
        <TerminalDemo />
        <DesignProject/>
        <Menu />
        <Projects />
        <Achievements />
    </div>
  );
}
