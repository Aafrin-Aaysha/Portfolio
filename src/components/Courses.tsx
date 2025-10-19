import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Award } from "lucide-react";

const coursesData = [
  {
    title: "Advanced React & TypeScript",
    provider: "Udemy",
    date: "2024",
    description: "Mastered modern React patterns, hooks, and TypeScript integration for enterprise applications.",
    badge: "Certificate",
    link: "#"
  },
  {
    title: "Full Stack Web Development",
    provider: "Coursera",
    date: "2023",
    description: "Comprehensive course covering MERN stack, REST APIs, and database design.",
    badge: "Verified",
    link: "#"
  },
  {
    title: "Cloud Architecture & DevOps",
    provider: "AWS",
    date: "2023",
    description: "Cloud computing fundamentals, CI/CD pipelines, and containerization with Docker.",
    badge: "Certified",
    link: "#"
  },
  {
    title: "UI/UX Design Fundamentals",
    provider: "Google",
    date: "2022",
    description: "User-centered design principles, prototyping, and modern design tools.",
    badge: "Certificate",
    link: "#"
  }
];

const Courses = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="courses" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
            Courses & Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-16" />

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {coursesData.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="glass-card h-full hover:scale-105 transition-all duration-300 group cursor-pointer border-2 border-transparent hover:border-primary hover:glow-primary">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Award className="w-8 h-8 text-primary group-hover:text-secondary transition-colors" />
                      <Badge variant="secondary" className="bg-secondary/20 text-secondary border border-secondary/50">
                        {course.badge}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {course.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {course.provider} • {course.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80 mb-4">{course.description}</p>
                    <a 
                      href={course.link}
                      className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors group/link"
                    >
                      View Certificate
                      <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </a>
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

export default Courses;
