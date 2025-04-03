import Image from "next/image"

const Skills = () => {
  return (
    <section id="skills" className="flex flex-col items-center justify-center min-h-screen text-white">
      <h2 className="text-2xl font-bold text-black">SKILLS</h2>
      <p className="text-gray-400 mb-6 text-center">Technologies I've been working with recently</p>
      <div className="flex gap-10">
        <div className="flex flex-col items-center">
          <Image src="/images/designKit.png" alt="DesignKit" width={150} height={150} className="w-32 h-32" />
          <p className="mt-2 text-lg">DesignKit</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/images/devKit.png" alt="DevKit" width={128} height={128} className="w-32 h-32" />
          <p className="mt-2 text-lg">DevKit</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
