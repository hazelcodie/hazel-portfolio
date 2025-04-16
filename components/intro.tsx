"use client";

import Image from "next/image";
import profile from "@/public/images/profile.png";

const Intro = () => {
  return (
    <section
      id="intro"
      className="flex flex-col items-center justify-start w-full min-h-screen px-10 pt-20 bg-fuchsia-100"
    >
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          {/* Text Section */}
          <div className="flex flex-col justify-center gap-4 ">
            <h1 className="text-2xl md:text-3xl lg:text-4xl text-black font-bold">
              I&apos;m Hazel and I specialized in
            </h1>

            <div className="flex flex-col items-start gap-3">
              <span className="bg-[#A0CAE0] text-white px-4 py-2 rounded-lg text-[22px] font-medium leading-snug inline-block">
                UI and UX Design
              </span>
              <span className="bg-[#E8AAD1] text-white px-8 py-2 rounded-lg text-[22px] font-medium inline-block ml-8">
                Front-end Development
              </span>
              <span className="bg-[#2d49c2] text-white px-6 py-2 rounded-lg text-[22px] font-medium inline-block ml-3">
                Web Development
              </span>
            </div>

            <button className="mt-4 px-4 py-2 border border-black text-black hover:bg-black hover:text-white transition w-fit">
              <a href="#design-project"> Projects </a>
            </button>
          </div>

          {/* Image Section */}
          <div className="flex items-center justify-center lg:justify-end">
            <Image
              src={profile}
              alt="Hazel Profile"
              width={300}
              height={300}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
