import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Star, Award, Zap, Crown } from "lucide-react";

const achievementsData = [
  {
    title: "Top 2% National Finalist – India AI Impact Buildathon",
    organization: "HCL Guvi",
    description: "Selected as a Top 2% National Finalist among 40,000+ participants across India for developing an Agentic AI Honeypot system.",
    category: "AI / Hackathon / National Recognition",
    icon: Award,
    year: "2026",
    color: "text-accent"
  },
  {
    title: "Best Intern Award",
    organization: "ILife Technologies",
    description: "Received Best Intern recognition for exceptional contributions to UI/UX and full-stack development.",
    category: "Professional Recognition",
    icon: Trophy,
    year: "2023",
    color: "text-secondary"
  }
];

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
            Achievements & Awards
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-16" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto justify-items-center">

            {achievementsData.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-6 rounded-lg text-center hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-primary hover:glow-primary group w-full h-full flex flex-col items-center"
                >
                  <div className="relative inline-block mb-4">
                    <div className={`absolute inset-0 ${achievement.color} blur-xl opacity-50 group-hover:opacity-100 transition-opacity`}></div>
                    <Icon className={`w-16 h-16 ${achievement.color} relative group-hover:scale-110 transition-transform`} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {achievement.title}
                  </h3>
                  {achievement.organization && (
                    <p className="font-medium text-primary mb-1">{achievement.organization}</p>
                  )}
                  <p className="text-sm text-muted-foreground mb-3">
                    {achievement.year} {achievement.category ? `• ${achievement.category}` : ''}
                  </p>
                  <p className="text-sm text-foreground/80 leading-relaxed mt-auto">
                    {achievement.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
