"use client";

import Image from "next/image";
import profile from "@/public/images/profile.png";

const Intro = () => {
  return (
    <div className="w-full pt-[4vh] md:pt-[12vh] bg-fuchsia-100 overflow-hidden">
      <div className="flex justify-center flex-col w-4/5 h-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 h-full">
          
          <div className="flex flex-col justify-center gap-4">
            <h1 className="text-2xl md:text-3xl lg:text-4xl text-black font-bold">
              I'm Hazel and I specialized in
            </h1>

            <div className="flex flex-col gap-3">
              <span className="bg-[#c7e6f7] text-black px-4 py-2 rounded-lg text-lg w-fit">
                UI and UX Design
              </span>
              <span className="bg-[#f8d4e4] text-black px-4 py-2 rounded-lg text-lg w-fit">
                Front-end Development
              </span>
              <span className="bg-[#2d49c2] text-white px-4 py-2 rounded-lg text-lg w-fit">
                Web Development
              </span>
            </div>

            <button className="mt-4 px-4 py-2 border border-black text-black hover:bg-black hover:text-white transition w-fit">
              Projects
            </button>
          </div>

          {/* Right Side - Profile Image */}
          <div className="flex items-center justify-center lg:justify-end h-full">
            <Image
              src={profile}
              alt="Hazel Profile"
              width={300}
              height={300}
              className=" object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
