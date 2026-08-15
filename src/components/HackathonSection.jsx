import { Trophy } from "lucide-react";
import { useState } from "react";

const hackathons = [
  {
    id: 1,
    title: "Pragyan International Techfest",
    location: "NIT Trichy, India",
    date: "2024",
    teamSize: 3,
    mainAchievement: "🏆 First Prize Winner",
    problemStatement:
      "Farmers face difficulty identifying weeds accurately and continuously monitoring agricultural fields. Manual weed identification is time-consuming and limits real-time field-level decision making.",
    solution:
      "Built an AI-powered agricultural rover for precision farming that uses computer vision, machine learning, IoT sensors, and LiDAR to detect weeds and support real-time field monitoring.",
    contributions: [
      "Collected and prepared a custom crop and weed image dataset",
      "Developed the computer-vision pipeline for real-time weed detection",
      "Implemented image preprocessing and feature extraction",
      "Integrated LiDAR and sensor-fusion components for autonomous navigation",
    ],
    achievementDetails: [
      "Achieved an F1 score of 0.88 for weed detection",
      "Demonstrated real-time automated agricultural monitoring",
    ],
    technologies: ["Python", "TensorFlow", "OpenCV", "Computer Vision", "IoT", "LiDAR"],
    certificateUrl: "/certificates/pragyan-2024.jpeg",
  },
  {
    id: 2,
    title: "VISAI International Hackathon",
    location: "Vel Tech University, India",
    date: "2024",
    teamSize: 3,
    mainAchievement: "🏆 First Prize Winner",
    problemStatement:
      "Traditional retail inventory monitoring relies heavily on manual checking, which can cause delayed detection of stock shortages and inefficient inventory management.",
    solution:
      "Developed a computer-vision-based retail monitoring system that performs real-time product detection, tracks inventory availability, and generates automated alerts.",
    contributions: [
      "Developed the computer-vision product detection pipeline",
      "Implemented real-time image processing",
      "Built inventory tracking logic",
      "Integrated automated stock availability alerts",
    ],
    achievementDetails: [
      "Automated product detection and inventory monitoring",
      "Demonstrated the system for real-time retail monitoring",
    ],
    technologies: ["Python", "OpenCV", "TensorFlow", "Computer Vision", "Deep Learning"],
    certificateUrl: "/certificates/visai-2024.jpeg",
  },
  {
    id: 3,
    title: "TAFE Perambur Plant — Innovista '25",
    location: "TAFE Perambur Plant, India",
    date: "2025",
    teamSize: 2,
    mainAchievement: "🏆 Special Prize Award",
    problemStatement:
      "Industrial manufacturing environments require continuous monitoring of equipment to identify abnormal conditions early and reduce unexpected machine failures.",
    solution:
      "Developed an IoT-enabled industrial monitoring and predictive-maintenance solution that collects real-time machine data and applies machine-learning techniques to identify potential maintenance requirements.",
    contributions: [
      "Integrated IoT sensors for real-time machine monitoring",
      "Developed the data acquisition and monitoring pipeline",
      "Applied machine-learning techniques for predictive maintenance",
      "Worked on real-time processing and system automation",
    ],
    achievementDetails: [
      "Recognized for an innovative approach to industrial automation",
      "Successfully presented the solution to industry leadership",
    ],
    technologies: ["IoT", "Embedded Systems", "Machine Learning", "Automation", "Real-time Processing"],
    certificateUrl: "/certificates/tafe-2025.jpeg",
  },
  {
    id: 4,
    title: "L&T Techgium Hackathon",
    location: "India (National)",
    date: "2026",
    teamSize: 3,
    mainAchievement: "🏆 Finalist — Top 37 Teams Nationwide",
    problemStatement:
      "The selected industrial problem required an innovative, practical, scalable, and technically feasible technology solution to address a real-world engineering challenge.",
    solution:
      "Developed a full-stack technology solution addressing the proposed industrial problem through software engineering, system design, application development, and problem-solving.",
    contributions: [
      "Designed the overall system architecture and application flow",
      "Developed key full-stack components and core application logic",
      "Integrated and tested the complete solution",
      "Presented the solution to industry experts",
    ],
    achievementDetails: [
      "Selected from 64,000+ students across 540+ institutes",
      "Presented the solution to industry experts at the national level",
    ],
    technologies: ["Full-Stack Development", "System Design", "Problem Solving", "Innovation"],
    certificateUrl: "/certificates/lt-techgium-2026.jpeg",
  },
];

const CertificateModal = ({ certificate, onClose }) => {
  if (!certificate) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/70 z-50"
        onClick={onClose}
      />
      <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none p-4">
        <div
          className="bg-card rounded-lg shadow-2xl p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto pointer-events-auto relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-muted-foreground hover:text-primary transition-colors text-xl font-bold z-10"
          >
            ✕
          </button>

          {/* Certificate Image */}
          <div className="w-full h-auto">
            <img
              src={certificate.certificateUrl}
              alt="Certificate"
              className="w-full h-auto rounded-lg border border-primary/30"
              onError={(e) => {
                e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23f5f5f5' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' font-size='20' fill='%23999' text-anchor='middle' dy='.3em'%3ECertificate Image Not Found%3C/text%3E%3C/svg%3E";
              }}
            />
          </div>

          {/* Certificate Info */}
          <div className="mt-6 text-center">
            <h3 className="text-lg font-bold text-primary mb-2">{certificate.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{certificate.location} • {certificate.date}</p>
            
            {/* Download Button */}
            <a
              href={certificate.certificateUrl}
              download
              className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Download Certificate
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

const CompactCard = ({ hackathon, onViewMore, onViewCertificate }) => {
  const displayTechs = hackathon.technologies.slice(0, 3);

  return (
    <div
      className="bg-card rounded-lg p-5 border border-border/50 transition-all duration-300 h-full flex flex-col"
    >
      {/* Header */}
      <div className="flex items-start gap-3 mb-3">
        <Trophy className="text-primary flex-shrink-0 mt-0.5" size={18} />
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-bold text-foreground leading-tight">
            {hackathon.title}
          </h3>
          <p className="text-xs text-muted-foreground mt-1">{hackathon.location}</p>
        </div>
      </div>

      {/* Metadata */}
      <div className="flex gap-2 text-xs text-muted-foreground mb-3 ml-6">
        <span>{hackathon.date}</span>
        <span>•</span>
        <span>{hackathon.teamSize} Members</span>
      </div>

      {/* Main Achievement */}
      <p className="text-sm font-medium text-foreground mb-3 ml-6">
        {hackathon.mainAchievement}
      </p>

      {/* Tech Pills */}
      <div className="flex flex-wrap gap-2 mb-4">
        {displayTechs.map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-2 mt-auto">
        <button
          onClick={() => onViewMore(hackathon.id)}
          className="flex-1 px-3 py-2 text-xs font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
        >
          View More
        </button>
        <button
          onClick={() => onViewCertificate(hackathon)}
          className="flex-1 px-3 py-2 text-xs font-medium border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
        >
          Certificate
        </button>
      </div>
    </div>
  );
};

const SpotlightCard = ({ hackathon, isVisible, onClose, onViewCertificate }) => {
  if (!isVisible || !hackathon) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 z-40"
        onClick={onClose}
      />

      {/* Spotlight Card - Centered without scrollbar */}
      <div
        className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none p-4"
      >
        <div
          className="bg-card rounded-lg border border-primary/30 shadow-2xl p-8 w-full max-w-5xl pointer-events-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-muted-foreground hover:text-primary transition-colors text-xl font-bold"
          >
            ✕
          </button>

          {/* Header */}
          <div className="flex items-start gap-4 mb-6">
            <Trophy className="text-primary flex-shrink-0 mt-1" size={28} />
            <div className="flex-1 min-w-0 pr-8">
              <h2 className="text-3xl font-bold text-primary mb-1">{hackathon.title}</h2>
              <p className="text-sm text-muted-foreground font-medium">
                📍 {hackathon.location} • 📅 {hackathon.date} • 👥 {hackathon.teamSize} Members
              </p>
            </div>
          </div>

          {/* Main Achievement - Highlighted */}
          <div className="mb-6 px-4 py-3 bg-primary/10 border border-primary/20 rounded-lg">
            <p className="text-lg font-bold text-primary text-center">{hackathon.mainAchievement}</p>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-2 gap-8 mb-8">
            {/* Left Column: Problem & Solution */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
                  <span className="text-xl">❓</span> Problem Statement
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed bg-secondary/30 p-3 rounded-lg">
                  {hackathon.problemStatement}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
                  <span className="text-xl">💡</span> Solution
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed bg-secondary/30 p-3 rounded-lg">
                  {hackathon.solution}
                </p>
              </div>
            </div>

            {/* Right Column: Contribution & Achievement */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
                  <span className="text-xl">⚙️</span> My Contribution
                </h3>
                <ul className="list-disc list-outside text-sm text-muted-foreground space-y-2 ml-5">
                  {hackathon.contributions.map((contribution, idx) => (
                    <li key={idx} className="text-foreground/90">{contribution}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
                  <span className="text-xl">🎯</span> Achievement Details
                </h3>
                <ul className="list-disc list-outside text-sm text-muted-foreground space-y-2 ml-5">
                  {hackathon.achievementDetails.map((detail, idx) => (
                    <li key={idx} className="text-foreground/90">{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-8 px-4 py-3 bg-secondary/20 rounded-lg border border-secondary/30">
            <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
              <span className="text-xl">🛠️</span> Technologies Used
            </h3>
            <div className="flex flex-wrap gap-3">
              {hackathon.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 text-sm font-semibold border-2 border-primary/50 rounded-full bg-primary/5 text-primary hover:bg-primary/15 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-6 border-t border-border">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-3 text-base font-bold bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
            >
              Close
            </button>
            <button
              onClick={() => onViewCertificate(hackathon)}
              className="flex-1 px-4 py-3 text-base font-bold border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
            >
              View Certificate
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export const HackathonSection = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [certificateModal, setCertificateModal] = useState(null);
  const selectedHackathon = hackathons.find((h) => h.id === selectedId);

  const handleViewMore = (id) => {
    console.log("View more clicked for:", id);
    setSelectedId(id);
  };

  const handleCloseModal = () => {
    console.log("Modal closed");
    setSelectedId(null);
  };

  const handleViewCertificate = (hackathon) => {
    console.log("Certificate clicked for:", hackathon.title);
    setCertificateModal(hackathon);
  };

  const handleCloseCertificate = () => {
    console.log("Certificate modal closed");
    setCertificateModal(null);
  };

  return (
    <>
      <section id="hackathons" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            <span className="text-primary">Hackathon</span> Participations
          </h2>

          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Click "View More" to explore detailed information about each hackathon experience.
          </p>

          {/* 2×2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hackathons.map((hackathon) => (
              <CompactCard
                key={hackathon.id}
                hackathon={hackathon}
                onViewMore={handleViewMore}
                onViewCertificate={handleViewCertificate}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal Overlay */}
      {selectedId !== null && (
        <SpotlightCard
          hackathon={selectedHackathon}
          isVisible={selectedId !== null}
          onClose={handleCloseModal}
          onViewCertificate={handleViewCertificate}
        />
      )}

      {/* Certificate Modal */}
      <CertificateModal
        certificate={certificateModal}
        onClose={handleCloseCertificate}
      />
    </>
  );
};
