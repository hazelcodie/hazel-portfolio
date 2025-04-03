import { Button } from "@/components/ui/button";

interface Project {
    title: string; 
    description: string;
    link: string;
    code: string;
    video: string;
    technologies: string[];
  }
  
  const projectsData:  Project[] = [
    {
      title: "Event Management System",
      description: "A web application for managing events, including registration and ticketing.",
      link: "https://example.com/project1",
      code: "https://github.com/hazelcodie/eventsmanagementsystem",
      video: "https://www.youtube.com/watch?v=example",
      technologies: ["Laravel", "PHP", "Blade", "MySQL"],
    },
    {
      title: "To Do List",
      description: "A simple to-do list application to manage tasks.",
      link: "https://example.com/project1",
      code: "https://github.com/hazelcodie/toDolist",
      video: "https://www.youtube.com/watch?v=example",
      technologies: ["Laravel", "PHP", "Blade", "MySQL"],
    },
    {
      title: "To Do List",
      description: "A simple to-do list application to manage tasks.",
      link: "https://example.com/project1",
      code: "https://github.com/hazelcodie/toDolist",
      video: "https://www.youtube.com/watch?v=example",
      technologies: ["Laravel", "PHP", "Blade", "MySQL"],
    }
  
  ]
  const Projects = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-8">
        <h1 className="text-5xl font-bold text-center text-black dark:text-white">
          My Projects
        </h1>
        <div className="grid grid-cols-2 gap-4">
          {projectsData?.map((item,index) =>
             <div className="flex flex-col border border-gray-100 rounded-md">
                <video src={item.video} autoPlay muted className="w-full h-full rounded-t-md"/>
                <div className=" flex flex-col gap-3 p-4">
                    <h2 className="text-lg font-bold">{item.title}</h2>
                    <p className="text-sm text-gray-500">{item.description}</p>
                    <div className="flex gap-1 flex-wrap">
                        {item.technologies.map((tech, index) => (
                            <div key={index}  className="flex border border-gray-200 rounded-md px-2 py-1 text-sm bg-gray-500 text-white">{tech}</div>
                        ))}
                    </div>
                    <div className="flex gap-2 mt-2">
                        <Button variant="default">View</Button>
                        <Button variant="outline">Code</Button>
                    </div>
                </div>
                
            </div>)}
        </div>
      </div>
    );
  }
  
  export default Projects;