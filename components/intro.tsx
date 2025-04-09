"use client";

import Image from "next/image";
import profile from "@/public/images/profile.png";

const Intro = () => {
  return (
   
      <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-20 max-w-6xl mx-auto">
       
        <div className="md:w-1/2 w-full">
          <h1 className="text-[50px] font-bold mb-[33px] text-gray-800  leading-snug text-center">
            I’m Hazel<br/> <span className="italic text-2xl">and I specialized in</span>
          </h1>

          <div className="flex flex-col gap-3">
            <span className="bg-[#c7e6f7] text-black px-4 py-2 rounded-lg text-lg w-fit p">
              UI and UX Design
            </span>
            <span className="bg-[#f8d4e4] text-black px-4 py-2 rounded-lg text-lg w-fit">
              Front-end Development
            </span>
            <span className="bg-[#2d49c2] text-white px-4 py-2 rounded-lg text-lg w-fit">
              Web Development
            </span>
          </div>

          <button className="mt-6 px-4 py-2 border border-black text-black hover:bg-black hover:text-white transition w-fit">
            Projects
          </button>
        </div>
      
        <div className="md:w-1/2 w-full flex justify-center md:justify-end">
          <Image
            src={profile}
            alt="Hazel Profile"
            width={300}
            height={300}
            className="object-contain max-w-full h-auto"
            priority
          />
        </div>
      </section>
   
  );
};

export default Intro;
