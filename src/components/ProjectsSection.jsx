import { X, Target, Lightbulb, TrendingUp, Layers, Trophy } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Full Stack Web Application (MERN)",
    summary: "Responsive full-stack app built with React, Node.js, and MongoDB.",
    image: "/projects/project4.png",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    role: "Full Stack Developer",
    duration: "6 weeks",
    problem:
      "The client needed a scalable web platform to manage user-generated records, but existing spreadsheet-based workflows were slow, error-prone, and impossible to access outside the office. There was no authentication layer, no audit trail, and no way for multiple people to work concurrently without overwriting each other's changes.",
    solution:
      "Designed and built a full-stack application with a React.js front end and an Express.js/Node.js REST API backed by MongoDB. Implemented JWT-based authentication and role-based access control, structured the backend into modular controllers and services for maintainability, and built out complete CRUD flows with optimistic UI updates and server-side validation to prevent data corruption from concurrent edits.",
    impact: [
      "Replaced manual spreadsheet workflows with a single source of truth accessible from any device",
      "Cut average record update time from minutes to seconds with real-time CRUD operations",
      "Established a modular backend architecture that supports adding new resource types without refactoring core logic",
    ],
  },
  {
    id: 2,
    title: "AI-Based Agri Bot (Smart Farming System)",
    summary: "IoT smart-farming rover with computer vision for crop detection.",
    image: "/projects/project2.jpeg",
    tags: ["Python", "OpenCV", "TensorFlow", "ESP32", "IoT"],
    role: "ML & Embedded Systems Engineer",
    duration: "10 weeks",
    problemSource: "Problem statement provided at VISAI 2024",
    problem:
      "Small-scale farmers often lack the labor and expertise to continuously monitor crop health and soil conditions across a field, leading to delayed responses to pest damage, uneven irrigation, and lower yields.",
    solution:
      "Built an autonomous rover combining computer vision and IoT sensing. Used OpenCV for real-time image preprocessing and a TensorFlow model trained on crop-health imagery to classify plant condition and detect early signs of disease or pest damage. An ESP32 microcontroller streamed soil moisture, temperature, and humidity data alongside the vision output, giving the system enough context to flag problem zones in the field for targeted intervention rather than blanket treatment.",
    impact: [
      "Enabled field-level crop health detection without manual scouting",
      "Combined sensor and vision data to reduce false positives versus vision-only detection",
      "Produced a low-cost, extensible hardware platform suited for smallholder farms",
    ],
    fundingBadges: ["Seed Funded", "NIDHI PRAYAS Funded"],
    achievements: [
      "Selected for the NIDHI PRAYAS grant of ₹2,50,000 to transform \"Nurabot\" into a fully functional agricultural automation product",
      "Awarded seed funding of ₹20,000 from Vel Tech Research Park",
      "1st Prize at NIT Trichy – Pragyan 2025 (Ingenium Project Hackathon), cash award of ₹35,000",
    ],
  },
  {
    id: 3,
    title: "Smart Retail Monitoring System",
    summary: "Computer-vision system for automated product & stock detection.",
    image: "/projects/project3.jpeg",
    tags: ["Python", "OpenCV", "TensorFlow", "Computer Vision"],
    role: "Computer Vision Engineer",
    duration: "8 weeks",
    problemSource: "Problem statement provided at VISAI 2025",
    problem:
      "Retail staff were spending significant time on manual shelf audits to track stock levels and product placement, which led to stockouts going unnoticed for hours and inconsistent planogram compliance across store sections.",
    solution:
      "Developed a computer-vision pipeline that continuously analyzes shelf imagery to detect product presence, count stock levels, and flag gaps or misplacements. Used OpenCV for image preprocessing and region extraction, and trained a TensorFlow classification model to identify product categories, feeding results into an analytics layer that surfaces low-stock alerts and shelf-compliance reports.",
    impact: [
      "Automated a process that previously required manual, in-person shelf walks",
      "Surfaced low-stock conditions in near real time instead of at the next scheduled audit",
      "Generated structured analytics data that store managers could act on directly",
    ],
    achievements: [
      "1st Prize at VISAI 2025, cash award of ₹8,000",
    ],
  },
  {
    id: 4,
    title: "AI-Based Smart Health Monitoring System",
    summary: "ML-powered health monitor using ECG, SpO2, and heart-rate data.",
    image: "/projects/project1.jpeg",
    tags: ["Python", "TensorFlow", "ESP32", "IoT", "ThingSpeak"],
    role: "IoT & ML Developer",
    duration: "8 weeks",
    problemSource: "Problem statement provided at L&T TechGium 2026",
    problem:
      "Continuous vital-sign monitoring is typically limited to clinical settings, leaving patients with chronic conditions or elderly individuals without an affordable way to track early warning signs of health deterioration at home.",
    solution:
      "Built a wearable-adjacent monitoring system that captures heart rate, SpO2, temperature, and ECG readings through sensors connected to an ESP32, which streams data to ThingSpeak for cloud storage and visualization. Trained a machine learning model on the collected vitals to classify readings as normal or at-risk, enabling proactive alerts rather than relying on periodic manual checks.",
    impact: [
      "Delivered continuous, low-cost vital-sign tracking outside of a clinical setting",
      "Enabled cloud-based historical trend analysis via ThingSpeak dashboards",
      "Provided ML-driven risk classification to flag abnormal readings for early intervention",
    ],
    achievements: [
      "Recognized at L&T TechGium 2026",
    ],
  },
];

const ProjectDetailModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/70 z-50" onClick={onClose} />
      <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none p-4">
        <div
          className="bg-card rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto pointer-events-auto relative border border-primary/30"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-1.5 rounded-full bg-background/80 text-muted-foreground hover:text-primary transition-colors"
          >
            <X size={20} />
          </button>

          <div className="h-64 md:h-72 overflow-hidden bg-black/40 flex items-center justify-center">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="p-6 md:p-8 text-left">
            <h3 className="text-2xl font-bold text-primary mb-1 text-left">{project.title}</h3>
            <p className="text-sm text-muted-foreground mb-5 text-left">
              {project.role} · {project.duration}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs font-medium border border-border rounded-full bg-secondary text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="space-y-5">
              <section className="rounded-lg border border-border bg-secondary/20 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Target size={18} className="text-primary shrink-0" />
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-foreground text-left">
                    Problem Statement
                  </h4>
                </div>
                {project.problemSource && (
                  <p className="text-xs font-semibold text-primary mb-2 text-left">
                    {project.problemSource}
                  </p>
                )}
                <p className="text-muted-foreground leading-relaxed text-sm text-left">
                  {project.problem}
                </p>
              </section>

              <section className="rounded-lg border border-border bg-secondary/20 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Lightbulb size={18} className="text-primary shrink-0" />
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-foreground text-left">
                    Solution & Approach
                  </h4>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm text-left">
                  {project.solution}
                </p>
              </section>

              <section className="rounded-lg border border-border bg-secondary/20 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp size={18} className="text-primary shrink-0" />
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-foreground text-left">
                    Impact & Results
                  </h4>
                </div>
                <ul className="space-y-2 text-left">
                  {project.impact.map((point, i) => (
                    <li key={i} className="flex gap-2 text-sm text-muted-foreground leading-relaxed text-left">
                      <span className="text-primary shrink-0">•</span>
                      <span className="text-left">{point}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {project.achievements && project.achievements.length > 0 && (
                <section className="rounded-lg border border-amber-500/30 bg-amber-500/[0.06] p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Trophy size={18} className="text-amber-400 shrink-0" />
                    <h4 className="text-sm font-semibold uppercase tracking-wide text-foreground text-left">
                      Achievements & Recognition
                    </h4>
                  </div>
                  <ul className="space-y-2 text-left">
                    {project.achievements.map((point, i) => (
                      <li key={i} className="flex gap-2 text-sm text-muted-foreground leading-relaxed text-left">
                        <span className="text-amber-400 shrink-0">•</span>
                        <span className="text-left">{point}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              <section className="rounded-lg border border-border bg-secondary/20 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Layers size={18} className="text-primary shrink-0" />
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-foreground text-left">
                    Tech Stack
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium border border-border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Click a card to see the full
          case study for each build.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover text-left cursor-pointer"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-1 text-left">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 text-left">
                  {project.summary}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[11px] font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {(project.problemSource || project.fundingBadges || (project.achievements && project.achievements.length > 0)) && (
                  <div className="mb-4">
                    {project.problemSource && (
                      <p className="text-xs text-primary font-medium mb-1.5">
                        {project.problemSource}
                      </p>
                    )}
                    {project.fundingBadges && project.fundingBadges.length > 0 ? (
                      <div className="flex flex-wrap gap-1.5">
                        {project.fundingBadges.map((badge) => (
                          <span
                            key={badge}
                            className="flex items-center gap-1 px-2 py-0.5 text-[11px] font-medium border border-amber-500/40 rounded-full bg-amber-500/10 text-amber-400"
                          >
                            <Trophy size={11} />
                            {badge}
                          </span>
                        ))}
                      </div>
                    ) : (
                      project.achievements && project.achievements.length > 0 && (
                        <div className="space-y-1">
                          {project.achievements.slice(0, 2).map((achievement, i) => (
                            <div key={i} className="flex items-start gap-1.5">
                              <Trophy size={14} className="text-primary mt-0.5 shrink-0" />
                              <p className="text-xs text-muted-foreground leading-snug">
                                {achievement}
                              </p>
                            </div>
                          ))}
                        </div>
                      )
                    )}
                  </div>
                )}
                <span className="text-primary text-sm font-semibold group-hover:underline">
                  View Case Study →
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};