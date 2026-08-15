import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Programming Languages
  { name: "Java", category: "programming" },
  { name: "JavaScript", category: "programming" },
  { name: "SQL", category: "programming" },

  // Frontend
  { name: "React.js", category: "frontend" },
  { name: "HTML5/CSS3", category: "frontend" },
  { name: "Bootstrap", category: "frontend" },

  // Backend & Databases
  { name: "Node.js", category: "backend" },
  { name: "Express.js", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "REST APIs", category: "backend" },

  // Embedded & IoT
  { name: "ESP32", category: "embedded" },
  { name: "Embedded C", category: "embedded" },
  { name: "IoT", category: "embedded" },
  { name: "Raspberry Pi", category: "embedded" },

  // AI / ML
  { name: "TensorFlow", category: "ai-ml" },
  { name: "OpenCV", category: "ai-ml" },
  { name: "NumPy", category: "ai-ml" },
  { name: "Pandas", category: "ai-ml" },
  { name: "Scikit-learn", category: "ai-ml" },

  // Tools
  { name: "Git/GitHub", category: "tools" },
  { name: "VS Code", category: "tools" },
];

const categories = ["all", "programming", "frontend", "backend", "embedded", "ai-ml", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-all duration-300 capitalize font-medium",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/30 scale-105"
                  : "bg-secondary/70 text-foreground hover:bg-secondary hover:scale-105"
              )}
            >
              {category === "ai-ml" ? "AI/ML" : category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="group relative bg-card border border-border/50 p-5 rounded-xl shadow-xs card-hover overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center justify-center text-center h-full">
                <h3 className="font-semibold text-base group-hover:text-primary transition-colors duration-300">
                  {skill.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};