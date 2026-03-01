import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";
import techzar from "../assets/certificates/techzarinfo.jpg";
import ilife from "../assets/certificates/ilife.jpg";

const internshipsData = [
  {
    company: "TechZarInfo, Trichy",
    role: "Full Stack Development Intern",
    duration: "May 2025",
    location: "Trichy, Tamil Nadu",
    description: "Developed full-stack web applications using React, Node.js, and MongoDB; supported REST API development, testing, and performance optimization.",
    highlights: [
      "Built scalable backend services using Node.js and Express",
      "Managed database schemas and queries with MongoDB",
      "Optimized frontend performance and responsiveness",
      "Collaborated on API design and documentation"
    ],
    certificate: techzar,
  },
  {
    company: "ILife Technologies, Trichy",
    role: "Full Stack Development Intern",
    duration: "February 2023",
    location: "Trichy, Tamil Nadu",
    description: "Designed responsive UI components using HTML, CSS, JavaScript, and React; collaborated with UI/UX teams and received Best Intern recognition.",
    highlights: [
      "Developed interactive UI elements with modern React patterns",
      "Ensured cross-browser compatibility and accessibility",
      "Participated in daily stand-ups and sprint planning",
      "Awarded 'Best Intern' for exceptional design contributions"
    ],
    certificate: ilife
  }
];

const Internships = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="internships" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
            Internship Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-16" />

          <div className="max-w-4xl mx-auto space-y-8">
            {internshipsData.map((internship, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className="glass-card p-6 md:p-8 rounded-lg hover:scale-102 transition-all duration-300 border-l-4 border-primary hover:glow-primary">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-2">
                        {internship.role}
                      </h3>
                      <p className="text-xl text-foreground font-semibold mb-3">
                        {internship.company}
                      </p>
                    </div>
                    <Briefcase className="w-12 h-12 text-secondary hidden md:block" />
                  </div>

                  <div className="flex flex-wrap gap-4 mb-4 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{internship.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{internship.location}</span>
                    </div>
                  </div>

                  <p className="text-foreground/80 mb-4 leading-relaxed">
                    {internship.description}
                  </p>

                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-secondary">Key Achievements:</p>
                    <ul className="space-y-2">
                      {internship.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary mt-1">▹</span>
                          <span className="text-foreground/80">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {internship.certificate && (
                    <div className="mt-6 pt-4 border-t border-border">
                      <a
                        href={internship.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors group/link"
                      >
                        View Certificate
                        <ExternalLink className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  )}

                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Internships;
