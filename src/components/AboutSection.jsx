import { Briefcase, Code, Brain, Award } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="pt-16 pb-12 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Full Stack Developer & AI Enthusiast
            </h3>

            <p className="text-muted-foreground">
              Electronics & Communication Engineering student (Cybersecurity specialization) with strong programming fundamentals in Java, C, and Python. I specialize in building full-stack web applications, REST APIs, and intelligent IoT solutions that solve real-world problems.
            </p>

            <p className="text-muted-foreground">
              Proven track record in competitive programming with first-prize wins at international hackathons (VISAI Tech Expo, Pragyan Techfest). Passionate about translating algorithmic thinking into working systems that combine backend robustness with seamless user experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/resume.pdf"
                download="Selvaraj_M_Resume.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                View CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="gradient-border p-5 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-full bg-primary/10 shrink-0">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Full Stack Development</h4>
                  <p className="text-muted-foreground text-sm">
                    Building robust backend systems and responsive frontends using MERN stack, REST APIs, and modern frameworks.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-5 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-full bg-primary/10 shrink-0">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">AI & Machine Learning</h4>
                  <p className="text-muted-foreground text-sm">
                    Applying TensorFlow and OpenCV to build intelligent, data-driven systems for real-world problem solving.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-5 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-full bg-primary/10 shrink-0">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">DSA & Problem Solving</h4>
                  <p className="text-muted-foreground text-sm">
                    Strong foundation in Data Structures, Algorithms, and competitive programming for optimized solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-5 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-full bg-primary/10 shrink-0">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Leadership & Outreach</h4>
                  <ul className="text-muted-foreground text-sm list-disc list-inside space-y-0.5 marker:text-primary">
                    <li>Chairperson – IEEE CAS Society, Vel Tech</li>
                    <li>Student Ambassador – AICTE IDEA Lab, Vel Tech</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};