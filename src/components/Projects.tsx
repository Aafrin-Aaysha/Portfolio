import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Code } from "lucide-react";

const projectsData = [
  {
    title: "AI-Powered Task Manager",
    description: "Smart task management app with AI-driven prioritization and scheduling recommendations.",
    tech: ["React", "TypeScript", "OpenAI", "Tailwind CSS"],
    github: "#",
    demo: "#",
    gradient: "from-primary to-secondary"
  },
  {
    title: "E-Commerce Platform",
    description: "Full-featured online store with payment integration, inventory management, and analytics.",
    tech: ["Next.js", "Stripe", "PostgreSQL", "Prisma"],
    github: "#",
    demo: "#",
    gradient: "from-secondary to-accent"
  },
  {
    title: "Real-Time Chat Application",
    description: "Secure messaging platform with end-to-end encryption and file sharing capabilities.",
    tech: ["React", "Socket.io", "Node.js", "MongoDB"],
    github: "#",
    demo: "#",
    gradient: "from-accent to-primary"
  },
  {
    title: "Portfolio Analytics Dashboard",
    description: "Interactive dashboard for tracking investment portfolios with real-time market data.",
    tech: ["Vue.js", "Chart.js", "Firebase", "REST APIs"],
    github: "#",
    demo: "#",
    gradient: "from-primary via-accent to-secondary"
  }
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-16" />

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projectsData.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Card className="glass-card h-full hover:scale-105 transition-all duration-300 group border-2 border-transparent hover:border-primary overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Code className="w-8 h-8 text-primary group-hover:rotate-12 transition-transform" />
                    </div>
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-foreground/70 leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button variant="neon" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
