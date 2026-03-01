import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Award } from "lucide-react";
import android from "../assets/certificates/android.jpg";
import fsd from "../assets/certificates/fsd.jpg";
import python from "../assets/certificates/python.jpg";
import dbms from "../assets/certificates/dbms.jpg";
import genAi from "../assets/certificates/generative-ai-sawit.png";
import powerBi from "../assets/certificates/powerbi-guvi-hcl.png";

const coursesData = [
  {
    title: "SAWIT.AI Learnathon - Generative AI Fundamentals",
    provider: "HCL GUVI, NASSCOM, AICTE",
    date: "Feb 2026",
    description: "Hands-on participation in building Generative AI models and learning about cutting-edge AI technologies.",
    badge: "Certified",
    link: genAi,
    image: genAi
  },
  {
    title: "Build Dashboards in Power BI with Python Data",
    provider: "HCL GUVI",
    date: "Jan 2026",
    description: "Learned how to transform, analyze, and visualize Python data using Microsoft Power BI dashboards.",
    badge: "Certified",
    link: powerBi,
    image: powerBi
  },
  {
    title: "Python Pro Bootcamp Certification",
    provider: "Udemy",
    date: "Oct, 2025",
    description: "Hands-on Python training covering OOP, scripting, and automation.",
    badge: "Certified",
    link: python,
    image: python
  },
  {
    title: "Full Stack Development Certification",
    provider: "Udemy",
    date: "May 2025",
    description: "Comprehensive course covering MERN stack, REST APIs, and database design.",
    badge: "Certified",
    link: fsd,
    image: fsd
  },
  {
    title: "Database Management Systems",
    provider: "NPTEL",
    date: "2025",
    description: "Learned database design, normalization, and SQL fundamentals.",
    badge: "Certified",
    link: dbms,
    image: dbms
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
                className="flex"
              >
                <Card className="glass-card flex flex-col h-full hover:scale-105 transition-all duration-300 group cursor-pointer border-2 border-transparent hover:border-primary hover:glow-primary overflow-hidden">
                  <div className="relative w-full h-48 overflow-hidden bg-black/40 border-b border-border p-2">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Award className="w-12 h-12 text-primary" />
                    </div>
                  </div>

                  <CardHeader className="flex-none">
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="secondary" className="bg-secondary/20 text-secondary border border-secondary/50">
                        {course.badge}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {course.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground mt-2">
                      {course.provider} • {course.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col justify-between">
                    <p className="text-foreground/80 mb-6 flex-grow">{course.description}</p>
                    <a
                      href={course.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors group/link mt-auto font-medium"
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
