import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Star, Award, Zap } from "lucide-react";

const achievementsData = [
  {
    title: "Best Innovation Award",
    description: "Recognized for developing an AI-powered solution that improved team productivity by 50%",
    icon: Trophy,
    year: "2024",
    color: "text-accent"
  },
  {
    title: "Hackathon Winner",
    description: "First place at TechCrunch Disrupt 2023 for building a revolutionary fintech app",
    icon: Star,
    year: "2023",
    color: "text-primary"
  },
  {
    title: "Open Source Contributor",
    description: "Made significant contributions to major open-source projects with 500+ stars on GitHub",
    icon: Award,
    year: "2023",
    color: "text-secondary"
  },
  {
    title: "Top Performer",
    description: "Achieved highest performance rating for exceptional code quality and team collaboration",
    icon: Zap,
    year: "2024",
    color: "text-accent"
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {achievementsData.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-6 rounded-lg text-center hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-primary hover:glow-primary group"
                >
                  <div className="relative inline-block mb-4">
                    <div className={`absolute inset-0 ${achievement.color} blur-xl opacity-50 group-hover:opacity-100 transition-opacity`}></div>
                    <Icon className={`w-16 h-16 ${achievement.color} relative group-hover:scale-110 transition-transform`} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {achievement.year}
                  </p>
                  <p className="text-sm text-foreground/80 leading-relaxed">
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
