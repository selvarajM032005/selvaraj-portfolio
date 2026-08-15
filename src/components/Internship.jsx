import { Briefcase, Calendar, MapPin, Award } from "lucide-react";
import { useState } from "react";

const internships = [
  {
    id: 1,
    company: "Universiti Sains Islam Malaysia (USIM)",
    position: "Junior Full Stack Developer & System Analyst Intern",
    duration: "Till 31 Jul 2026",
    location: "Online",
    description:
      "Developed responsive full-stack web applications using HTML5, CSS3, JavaScript, React.js, Node.js, and Express.js. Designed and integrated RESTful APIs with MongoDB/SQL databases for CRUD operations. Assisted in system analysis, workflow optimization, and application enhancement with database management and comprehensive debugging.",
    skills: ["React.js", "Node.js", "Express.js", "REST APIs", "MongoDB", "SQL", "System Analysis", "MERN Stack"],
    achievements: [
      "Designed and integrated RESTful APIs with frontend systems",
      "Optimized database queries and improved application performance",
      "Implemented user authentication and responsive UI design",
      "Conducted system analysis and workflow optimization initiatives",
    ],
    certificateUrl: null,
  },
  {
    id: 2,
    company: "Ashok Leyland",
    position: "Project Intern – Agri Bot (AI-Based Smart Farming System)",
    duration: "Mar 2024 – Sep 2024",
    location: "Chennai",
    description:  
      "Developed an IoT-enabled smart farming rover using ESP32 with real-time sensor data acquisition and automated irrigation monitoring. Integrated environmental sensors and embedded firmware for autonomous decision-making. Applied computer vision techniques for crop and weed detection to support precision agriculture.",
    skills: ["ESP32", "Embedded Systems", "IoT", "AI/Computer Vision", "Sensor Integration", "Real-time Data Handling"],
    achievements: [
      "Developed AI-based smart farming rover prototype with autonomous capabilities",
      "Implemented IoT sensor integration for real-time environmental monitoring",
      "Applied computer vision algorithms for crop and weed detection",
      "Enabled remote monitoring through IoT-based data transmission and visualization",
    ],
    certificateUrl: "/certificates/ashok-leyland.pdf",
  },
];

const InternshipCertificateModal = ({ certificate, onClose }) => {
  if (!certificate) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/70 z-50"
        onClick={onClose}
      />
      <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none p-4">
        <div
          className="bg-card rounded-lg shadow-2xl p-8 w-full max-w-4xl max-h-[90vh] overflow-y-auto pointer-events-auto relative border border-primary/30"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-muted-foreground hover:text-primary transition-colors text-2xl font-bold"
          >
            ✕
          </button>

          {/* Certificate Header */}
          <div className="text-center mb-8">
            <div className="inline-block p-3 bg-primary/10 rounded-lg mb-4">
              <Award className="text-primary" size={32} />
            </div>
            <h3 className="text-3xl font-bold text-primary mb-3">{certificate.company}</h3>
            <p className="text-lg font-semibold text-foreground mb-2">{certificate.position}</p>
            <p className="text-sm text-muted-foreground">{certificate.location} • {certificate.duration}</p>
          </div>

          {/* Description */}
          <div className="mb-8 p-5 bg-secondary/20 rounded-lg border border-secondary/30">
            <p className="text-muted-foreground leading-relaxed text-justify">
              {certificate.description}
            </p>
          </div>

          {/* Download Section */}
          <div className="text-center mb-8">
            <a
              href={certificate.certificateUrl}
              download
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-bold text-base shadow-lg hover:shadow-xl"
            >
              📥 Download Certificate
            </a>
          </div>

          {/* PDF Preview */}
          {certificate.certificateUrl?.endsWith('.pdf') && (
            <div className="border-t border-border pt-8">
              <p className="text-sm font-bold text-foreground mb-4 text-center">Certificate Preview:</p>
              <div className="bg-secondary/10 rounded-lg overflow-hidden">
                <iframe
                  src={certificate.certificateUrl}
                  className="w-full h-96 border-0"
                  title="Certificate"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export const InternshipSection = () => {
  const [certificateModal, setCertificateModal] = useState(null);

  const handleViewCertificate = (internship) => {
    setCertificateModal(internship);
  };

  const handleCloseCertificate = () => {
    setCertificateModal(null);
  };

  return (
    <section id="internship" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            My <span className="text-primary">Internships</span>
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto text-base">
            Practical experience gained through internships at leading companies.
            These opportunities have shaped my professional skills and expertise.
          </p>
        </div>

        {/* Internships Grid */}
        <div className="space-y-6">
          {internships.map((internship) => (
            <div
              key={internship.id}
              className="bg-gradient-to-r from-card to-card/80 rounded-xl p-7 shadow-lg border border-primary/20 transition-all duration-300 hover:shadow-xl hover:border-primary/40"
            >
              {/* Header Section */}
              <div className="mb-5">
                <div className="flex items-start gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Briefcase className="text-primary flex-shrink-0" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-primary mb-1">
                      {internship.position}
                    </h3>
                    <p className="text-lg font-semibold text-foreground">
                      {internship.company}
                    </p>
                  </div>
                </div>
              </div>

              {/* Meta Information - Horizontal Layout */}
              <div className="flex flex-wrap gap-6 mb-6 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-primary" />
                  <span className="text-muted-foreground">{internship.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-primary" />
                  <span className="text-muted-foreground">{internship.location}</span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6 p-4 bg-secondary/20 rounded-lg border border-secondary/30">
                <p className="text-muted-foreground leading-relaxed text-justify">
                  {internship.description}
                </p>
              </div>

              {/* Two Column Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Achievements */}
                <div>
                  <h4 className="text-base font-bold text-primary mb-3 flex items-center gap-2">
                    <Award size={20} className="text-primary" />
                    Key Achievements
                  </h4>
                  <ul className="list-disc list-outside space-y-2 text-sm text-muted-foreground ml-6 text-left">
                    {internship.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-foreground/90 text-left">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills */}
                <div>
                  <h4 className="text-base font-bold text-primary mb-3">
                    Skills & Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {internship.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-xs font-semibold border-2 border-primary/50 rounded-full bg-primary/5 text-primary hover:bg-primary/15 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Certificate Button - Only for Ashok Leyland */}
              {internship.certificateUrl && (
                <div className="pt-5 border-t border-border">
                  <button
                    onClick={() => handleViewCertificate(internship)}
                    className="px-6 py-2.5 text-sm font-bold bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg"
                  >
                    🎓 View Certificate
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      <InternshipCertificateModal
        certificate={certificateModal}
        onClose={handleCloseCertificate}
      />
    </section>
  );
};