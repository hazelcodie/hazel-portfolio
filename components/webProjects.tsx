'use client'

import { Button } from "@/components/ui/button";
import { useState } from "react";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  link: string;
  code: string;
  video: string;
  technologies: string[];
}

const projectsData: Project[] = [
  {
    title: "Event Management System",
    description:
      "A web application for managing events, including registration and ticketing.",
    link: "https://example.com/project1",
    code: "https://github.com/hazelcodie/eventsmanagementsystem",
    video: "/videos/eventMSPreview.mp4",
    technologies: ["Laravel", "PHP", "Blade", "MySQL", "Tailwind", "Figma"],
  },
  {
    title: "To Do List",
    description: "A simple to-do list application to manage tasks.",
    link: "https://example.com/project1",
    code: "https://github.com/hazelcodie/toDolist",
    video: "/videos/TODO-List.mp4",
    technologies: ["Laravel", "PHP", "Blade", "Tailwind", "MySQL"],
  },
  {
    title: "SkinSense",
    description: "Website of SkinSense(Thesis Projects). ",
    link: "https://example.com/project1",
    code: "",
    video: "/videos/skinsenseVid-preview.mp4",
    technologies: ["WordPress"],
  },
  {
    title: "Hazel-Portfolio",
    description: "A personal portfolio showcasing my projects.",
    link: "https://example.com/project1",
    code: "https://github.com/hazelcodie/hazel-portfolio",
    video: "/videos/portfolio-preview.mp4",
    technologies: ["NextJs ", "React", "Tailwind", "Shadcn", "MagicUI"],  
  },
];

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState<string | null>(null);

  const openModal = (projectTitle: string) => {
    setCurrentProject(projectTitle);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentProject(null);
  };

  return (
    <div id="web-projects" className="flex flex-col items-center justify-center min-h-screen px-4 md:px-18">
      <div className="flex justify-center mb-8 mt-7">
        <Image
          src="/images/webprojects-logo.png"
          alt="skills"
          width={230}
          height={180}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-6xl">
        {projectsData?.map((item, index) => (
          <div key={index} className="flex flex-col border border-gray-200 rounded-md w-full">
            <video
              src={item.video}
              autoPlay
              muted
              loop
              className="w-full h-auto rounded-t-md object-cover"
            />
            <div className="flex flex-col gap-3 p-4">
              <h2 className="text-lg font-bold">{item.title}</h2>
              <p className="text-sm text-gray-500">{item.description}</p>

              <div className="flex gap-1 flex-wrap">
                {item.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-md px-2 py-1 text-sm bg-gray-500 text-white"
                  >
                    {tech}
                  </div>
                ))}
              </div>

              <div className="flex gap-2 mt-2 flex-wrap">
                <Button
                  variant="default"
                  className="w-full sm:w-auto"
                  onClick={() => openModal(item.title)}
                >
                  View
                </Button>
                <a
                  href={item.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button variant="outline" className="w-full">Code</Button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
          <div className="bg-white rounded-lg p-6 w-11/12 max-w-md">
            <h2 className="text-lg font-bold mb-4">Notice</h2>
            <p className="text-sm text-gray-700">
              The project <span className="font-semibold">{currentProject}</span> is not yet deployed. Please check back later!
            </p>
            <div className="flex justify-end mt-4">
              <Button variant="default" onClick={closeModal}>
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
