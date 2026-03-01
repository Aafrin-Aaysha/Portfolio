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
              <p className="text-lg text-foreground/90 leading-relaxed">
                I'm a passionate developer with a love for creating innovative solutions 
                that make a difference. With expertise in modern web technologies and a 
                keen eye for design, I bring ideas to life through code.
              </p>
              
              <p className="text-lg text-foreground/90 leading-relaxed">
                My journey in tech has been driven by curiosity and a constant desire to 
                learn. I specialize in full-stack development, with a focus on creating 
                seamless user experiences and robust backend systems.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="glass-card p-4 rounded-lg text-center hover:scale-105 transition-transform">
                  <Code2 className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <p className="text-sm font-semibold">Clean Code</p>
                </div>
                <div className="glass-card p-4 rounded-lg text-center hover:scale-105 transition-transform">
                  <Sparkles className="w-8 h-8 mx-auto mb-2 text-secondary" />
                  <p className="text-sm font-semibold">Innovation</p>
                </div>
                <div className="glass-card p-4 rounded-lg text-center hover:scale-105 transition-transform">
                  <Rocket className="w-8 h-8 mx-auto mb-2 text-accent" />
                  <p className="text-sm font-semibold">Fast Delivery</p>
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
