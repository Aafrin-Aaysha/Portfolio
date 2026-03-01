import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import avatarImg from "@/assets/profile.png";
import { Code2, Sparkles, Rocket } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text"
          >
            About Me
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-16"
          />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="flex justify-center">
              <div className="relative ">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-50 animate-pulse"></div>
                <img
                  src={avatarImg}
                  alt="Profile"
                  className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-primary glow-primary"
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <div className="space-y-4">
                <p className="text-lg text-foreground/90 leading-relaxed">
                  I am an aspiring AI/ML Engineer and Software Developer with hands-on experience in building intelligent systems, full-stack web applications, and data-driven dashboards.
                </p>

                <p className="text-lg text-foreground/90 leading-relaxed">
                  My work focuses on Machine Learning, Natural Language Processing, and scalable web development using Python, React, and modern frameworks.
                </p>

                <p className="text-lg text-foreground/90 leading-relaxed">
                  I have developed AI-based systems including a Code-Mixed Language Identification model and an Agentic AI Honeypot for cybersecurity.
                </p>

                <p className="text-lg text-foreground/90 leading-relaxed">
                  I am passionate about solving real-world problems using AI, designing intuitive user interfaces, and building efficient full-stack applications.
                </p>
              </div>

              <div className="pt-6">
                <p className="text-lg font-semibold text-primary mb-3">Currently seeking opportunities in:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {["AI / Machine Learning Engineering", "Software Engineering", "Full-Stack Development", "UI/UX Engineering"].map((role, i) => (
                    <div key={i} className="flex items-center gap-2 text-foreground/80">
                      <Sparkles className="w-4 h-4 text-accent" />
                      <span>{role}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
