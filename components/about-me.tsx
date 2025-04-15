const AboutMe = () => {
  return (
    <section
      id="about-me"
      className="flex items-start justify-center min-h-screen px-8 py-12 bg-[#faf4f4]"
    >
      <div className="flex flex-col max-w-6xl w-full">
        {/* Logo on Top */}
        <div className="flex justify-center mb-8">
          <img
            src="/images/about-me-logo.png"
            alt="Who am I?"
            className="w-55 h-40"
          />
        </div>

        {/* Two Column Layout */}
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Column */}
          <div className="flex-1">
            <p className="text-sm leading-relaxed text-gray-800">
              Hi! I'm Shella, a Bachelor of Science in Computer Science student. I'm a goal-driven
              individual with a passion for creating meaningful and functional digital experiences.
              I specialize in web development and UI/UX design, combining creativity and technology to
              bring ideas to life.
              <br />
              <br />
              While my main focus is on frontend and user-centered design, I'm also exploring other
              areas in tech — continuously learning and growing beyond my core expertise.
            </p>
          </div>

          {/* Right Column */}
          <div className="flex-1 flex flex-col gap-8">
            <div className="bg-[#d9e3ea] p-4 rounded-md shadow-md">
              <h3 className="font-semibold text-sm text-gray-700 mb-2">EDUCATION</h3>
              <p className="text-sm text-gray-600">Bachelor of Science in Computer Science</p>
            </div>
            <div className="bg-[#d9e3ea] p-4 rounded-md shadow-md">
              <h3 className="font-semibold text-sm text-gray-700 mb-2">WORK EXPERIENCE</h3>
              <p className="text-sm text-gray-600">Coming soon...</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
