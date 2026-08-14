import { Briefcase, Calendar, MapPin, Award } from "lucide-react";

const internships = [
  {
    id: 1,
    company: "Universiti Sains Islam Malaysia (USIM)",
    position: "Junior Full Stack Developer & System Analyst Intern",
    duration: "Ongoing",
    location: "Malaysia",
    description:
      "Developed responsive full-stack web applications using HTML5, CSS3, JavaScript, React.js, Node.js, and Express.js. Designed and integrated RESTful APIs with MongoDB/SQL databases for CRUD operations. Assisted in system analysis, workflow optimization, and application enhancement with database management and comprehensive debugging.",
    skills: ["React.js", "Node.js", "Express.js", "REST APIs", "MongoDB", "SQL", "System Analysis", "MERN Stack"],
    achievements: [
      "Designed and integrated RESTful APIs with frontend systems",
      "Optimized database queries and improved application performance",
      "Implemented user authentication and responsive UI design",
      "Conducted system analysis and workflow optimization initiatives",
    ],
  },
  {
    id: 2,
    company: "Ashok Leyland",
    position: "Project Intern – Agri Bot (AI-Based Smart Farming System)",
    duration: "Mar 2024 – Jun 2024",
    location: "India",
    description:
      "Developed an IoT-enabled smart farming rover using ESP32 with real-time sensor data acquisition and automated irrigation monitoring. Integrated environmental sensors and embedded firmware for autonomous decision-making. Applied computer vision techniques for crop and weed detection to support precision agriculture.",
    skills: ["ESP32", "Embedded Systems", "IoT", "AI/Computer Vision", "Sensor Integration", "Real-time Data Handling"],
    achievements: [
      "Developed AI-based smart farming rover prototype with autonomous capabilities",
      "Implemented IoT sensor integration for real-time environmental monitoring",
      "Applied computer vision algorithms for crop and weed detection",
      "Enabled remote monitoring through IoT-based data transmission and visualization",
    ],
  },
];

export const InternshipSection = () => {
  return (
    <section id="internship" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          My <span className="text-primary">Internships</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Practical experience gained through internships at leading companies.
          These opportunities have shaped my professional skills and expertise.
        </p>

        <div className="space-y-6">
          {internships.map((internship) => (
            <div
              key={internship.id}
              className="bg-card rounded-lg p-6 shadow-xs card-hover border border-border/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="text-primary" size={20} />
                    <h3 className="text-xl font-semibold text-foreground">
                      {internship.position}
                    </h3>
                  </div>
                  <p className="text-lg text-primary font-medium">
                    {internship.company}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  <span>{internship.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={16} />
                  <span>{internship.location}</span>
                </div>
              </div>

              <p className="text-muted-foreground mb-4">
                {internship.description}
              </p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2 flex items-center gap-1">
                  <Award size={16} className="text-primary" />
                  Key Achievements
                </h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  {internship.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold mb-2">Skills Used</h4>
                <div className="flex flex-wrap gap-2">
                  {internship.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
 