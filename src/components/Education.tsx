import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, Award } from "lucide-react";

const educationData = [
  {
    degree: "MCA (Master of Computer Applications)",
    institution: "Bishop Heber College, Trichy",
    duration: "2024 - 2026",
    cgpa: "8.4/10",
    status: "Currently Pursuing"
  },
  {
    degree: "B.Sc Computer Science",
    institution: "Jamal Mohamed College, Trichy",
    duration: "2021 - 2024",
    cgpa: "8.8/10",
    status: "Completed"
  }
];

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-16" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"></div>

        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-card p-6 hover:glow-primary transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-primary/10 border border-primary/30 group-hover:glow-primary transition-all duration-300">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                        {edu.degree}
                      </h3>
                      <p className="text-muted-foreground font-medium">
                        {edu.institution}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 ml-[52px]">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-secondary" />
                      <span className="text-muted-foreground">{edu.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Award className="w-4 h-4 text-accent" />
                      <span className="text-muted-foreground">CGPA: <span className="text-foreground font-semibold">{edu.cgpa}</span></span>
                    </div>
                  </div>
                </div>
                
                {edu.status === "Currently Pursuing" && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary neon-border animate-pulse">
                    {edu.status}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
