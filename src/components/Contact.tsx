import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com", color: "hover:text-primary" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com", color: "hover:text-primary" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com", color: "hover:text-primary" },
  { icon: Mail, label: "Email", href: "mailto:your.email@example.com", color: "hover:text-primary" }
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-8" />

          <motion.p 
            className="text-xl text-muted-foreground mb-12"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I'm always interested in hearing about new projects and opportunities.
            Let's create something amazing together!
          </motion.p>

          <motion.div 
            className="flex flex-wrap justify-center gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="glass-card p-6 rounded-lg border-2 border-transparent hover:border-primary transition-all duration-300 hover:glow-primary">
                    <Icon className={`w-8 h-8 text-muted-foreground ${link.color} transition-colors`} />
                  </div>
                  <p className="text-sm mt-2 text-muted-foreground group-hover:text-primary transition-colors">
                    {link.label}
                  </p>
                </motion.a>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button 
              variant="gradient" 
              size="lg"
              asChild
            >
              <a href="mailto:your.email@example.com">
                <Mail className="w-5 h-5" />
                Get In Touch
              </a>
            </Button>
          </motion.div>

          <motion.div 
            className="mt-16 pt-8 border-t border-border"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p className="text-muted-foreground">
              © 2024 Your Name. Built with React, TypeScript & Framer Motion
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
