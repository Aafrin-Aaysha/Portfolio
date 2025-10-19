import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const internshipsData = [
  {
    company: "Tech Innovators Inc.",
    role: "Full Stack Developer Intern",
    duration: "Jan 2024 - Jun 2024",
    location: "San Francisco, CA",
    description: "Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality features.",
    highlights: [
      "Built 3 major features improving user engagement by 40%",
      "Optimized API performance reducing response time by 60%",
      "Mentored 2 junior developers"
    ]
  },
  {
    company: "Digital Solutions Ltd.",
    role: "Frontend Developer Intern",
    duration: "Jun 2023 - Dec 2023",
    location: "Remote",
    description: "Specialized in creating responsive and accessible user interfaces. Worked closely with designers to implement pixel-perfect designs.",
    highlights: [
      "Redesigned company website increasing conversion by 25%",
      "Implemented component library used across 5 products",
      "Achieved 100% accessibility compliance"
    ]
  },
  {
    company: "CloudTech Systems",
    role: "Software Engineering Intern",
    duration: "Jan 2023 - May 2023",
    location: "Austin, TX",
    description: "Contributed to cloud infrastructure and DevOps initiatives. Automated deployment processes and improved system reliability.",
    highlights: [
      "Reduced deployment time by 70% through automation",
      "Implemented monitoring solutions for 20+ services",
      "Documented CI/CD best practices"
    ]
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
