import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, BookOpen, Cloud, Utensils, Globe, Github, ExternalLink, Layout } from "lucide-react";

const projectsData = [
  {
    title: "Agentic Honeypot – AI-based Scam Detection System",
    description: "Designed and developed an automated honeypot system to simulate vulnerable services and capture malicious activity. Implemented backend monitoring, logging, and automated interaction modules.",
    tech: ["Python", "REST APIs", "Automation", "Logging"],
    github: "https://github.com/Aafrin-Aaysha/agentic-honeypot",
    demo: "",
    gradient: "from-primary to-accent",
    icon: Shield
  },
  {
    title: "Research Paper Analyzer – RAG-based AI Application",
    description: "Built a Retrieval-Augmented Generation (RAG) system to analyze and summarize research papers. Implemented document processing, embedding, and question-answering pipeline.",
    tech: ["Python", "LLM", "RAG", "Web Application"],
    github: "",
    demo: "",
    gradient: "from-secondary to-primary",
    icon: BookOpen
  },
  {
    title: "Load Balancer for College Result Website",
    description: "Developed a load balancing system to distribute incoming requests across multiple servers. Improved system availability and reduced server overload during peak traffic.",
    tech: ["Python", "React", "Distributed Systems"],
    github: "https://github.com/Aafrin-Aaysha/load-balancer",
    demo: "https://college-result-portal.netlify.app/",
    gradient: "from-accent to-secondary",
    icon: Cloud
  },
  {
    title: "Restaurant Website – Full Stack Application",
    description: "Built a full-stack food ordering application with authentication, cart, and admin dashboard. Developed REST APIs and integrated MongoDB database.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    github: "",
    demo: "",
    gradient: "from-primary to-secondary",
    icon: Utensils
  },
  {
    title: "Zubizo – Invitation Stationery Business Website",
    description: "Designed and developed a responsive production-level business website. Implemented backend integration and modern UI design.",
    tech: ["React.js", "Node.js", "MongoDB"],
    github: "",
    demo: "",
    gradient: "from-secondary to-accent",
    icon: Globe
  },
  {
    title: "Portfolio",
    description: "Designed and developed a modern, font-bold responsive personal portfolio using Figma for wireframing and layout planning, and implemented it using React, Vite, and Tailwind CSS with focus on usability, accessibility, and visual hierarchy.",
    tech: ["Figma", "React", "Tailwind CSS", "Vite"],
    github: "https://github.com/Aafrin-Aaysha/Portfolio",
    demo: "https://aafrinaaysha-portfolio.netlify.app/",
    gradient: "from-accent to-primary",
    icon: Layout
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
            {projectsData.map((project, index) => {
              const Icon = project.icon;
              return (
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
                        {Icon && <Icon className="w-8 h-8 text-primary group-hover:rotate-12 transition-transform" />}
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
                      <div className="flex gap-3 mt-auto">
                        {project.github && project.github !== "#" && (
                          <Button variant="neon" size="sm" asChild>
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4 mr-2" />
                              Code
                            </a>
                          </Button>
                        )}
                        {project.demo && project.demo !== "#" && (
                          <Button variant="outline" size="sm" asChild>
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
