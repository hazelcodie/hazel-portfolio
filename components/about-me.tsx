import Image from "next/image";

const AboutMe = () => {
  return (
    <section
      id="about-me"
      className="flex items-start justify-center min-h-screen px-8 py-12 bg-[#faf4f4]"
    >
      <div className="flex flex-col max-w-6xl w-full">
        <div className="flex justify-center mb-8">
          <Image
            src="/images/about-me-logo.png"
            alt="Who am I?"
            className="w-55 h-40"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          <div className="flex-1">
            <p className="text-sm leading-relaxed text-gray-800 text-justify">
              Hi! I'm Hazel Delda, a Bachelor of Science in Computer Science student.
              I'm a goal-driven individual with a passion for creating
              meaningful and functional digital experiences. I specialize in web
              development and UI/UX design, combining creativity and technology
              to bring ideas to life.
              <br />
              <br />
              While my main focus is on frontend and user-centered design, I'm
              also exploring other areas in tech — continuously learning and
              growing beyond my core expertise.
            </p>
          </div>

          <div className="flex-1 flex flex-col gap-8">
            <div className="bg-[#d9e3ea] p-4 rounded-md shadow-md">
              <h3 className="font-semibold text-sm text-gray-700 mb-2">
                EDUCATION
              </h3>
              <p className="text-sm text-gray-600 text-bold">
                Biliran Province State University
                <span className="italic"> 2021-2025</span>
              </p>
              <p className="text-sm text-gray-600">
                Bachelor of Science in Computer Science
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-bold">GWA:</span> 1.39
              </p>
            </div>
            <div className="bg-[#d9e3ea] p-4 rounded-md shadow-md">
              <h3 className="font-semibold text-sm text-gray-700 mb-2">
                WORK EXPERIENCE
              </h3>

              <p className="text-sm font-medium text-gray-700">
                Central Visayas Information Sharing Network Foundation, Inc.
                (CVISNET) – Intern
              </p>
              <p className="text-sm text-gray-500 italic mb-2">
                January – March 2025
              </p>

              <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                <li>
                  Developed a fully functional event management system using
                  Laravel.
                </li>
                <li>
                  Created a website using WordPress and various plugins to
                  enhance functionality.
                </li>
                <li>
                  Redesigned the BEST Barangay website using Figma for improved
                  user experience.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
