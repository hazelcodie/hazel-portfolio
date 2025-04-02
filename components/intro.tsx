"use client";

import { WordRotate } from "@/components/magicui/word-rotate";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { LaptopMinimalCheck } from "lucide-react";
import Link from "next/link";

const Intro = () => {
  return (
    <div className="flex flex-col gap-5 items-center justify-center">
      <div className="flex flex-col items-center justify-center ">
        <h1 className="text-5xl font-bold text-center text-black dark:text-white">
          Hello, I'm Hazel , I specialized in</h1>
        <WordRotate
          className="text-4xl font-bold text-black dark:text-white"
          words={[ "UI/UX Design", "Front-End Development", "Web Development"]}
          duration={3000}
        />
      </div>
      <Link href="/projects">
      <InteractiveHoverButton className="mt-5 px-6 py-3 text-md font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 justify-center items-center">
        Projects
      </InteractiveHoverButton>
      </Link>
    </div>
  );
};

export default Intro;
