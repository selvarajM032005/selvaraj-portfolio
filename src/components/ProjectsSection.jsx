import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "ESP32-Based Smart Health Monitoring System",
    description:
      "Developed an embedded health monitoring system using ESP32 with ECG and pulse sensors. Integrated ThingSpeak cloud platform for remote monitoring with multilingual web dashboard.",
    image: "/projects/project1.png",
    tags: ["ESP32", "Embedded C", "IoT", "ThingSpeak", "Web Dashboard"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "AI-Based Agri Bot (Smart Farming System)",
    description:
      "Developed an IoT-enabled smart farming rover using ESP32 with sensor integration and computer vision for crop detection. Implemented autonomous irrigation monitoring and precision agriculture.",
    image: "/projects/project2.png",
    tags: ["ESP32", "OpenCV", "IoT", "AI", "Python"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Smart Retail Monitoring System",
    description:
      "Developed a computer vision-based inventory monitoring system for automated product detection and stock tracking. Implemented real-time shelf monitoring with automated analytics reporting.",
    image: "/projects/project3.png",
    tags: ["Python", "OpenCV", "TensorFlow", "Computer Vision"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Full Stack Web Application (MERN)",
    description:
      "Developed a responsive full-stack web application using React, Node.js, Express, and MongoDB. Implemented RESTful APIs, user authentication, and optimized database operations.",
    image: "/projects/project4.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "REST APIs"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/machadop1407"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
