import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, BrainCircuit, Layout, Server, Database, Wrench, Cloud, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skillsData = [
    {
        category: "Languages",
        icon: Code2,
        skills: ["Python", "Java", "JavaScript", "C", "C++"],
        color: "text-primary"
    },
    {
        category: "CS Fundamentals",
        icon: BrainCircuit,
        skills: ["Data Structures", "Algorithms", "OOP", "Complexity Analysis"],
        color: "text-accent"
    },
    {
        category: "Backend & Web",
        icon: Server,
        skills: ["React.js", "Node.js", "Express.js", "REST APIs", "Auth", "Security"],
        color: "text-secondary"
    },
    {
        category: "Databases",
        icon: Database,
        skills: ["MongoDB", "MySQL", "SQL", "Database Design", "Performance"],
        color: "text-primary"
    },
    {
        category: "Systems & Cloud",
        icon: Cloud,
        skills: ["Distributed Systems", "Load Balancing", "Docker", "AWS (EC2/S3)"],
        color: "text-accent"
    },
    {
        category: "AI & Data",
        icon: Sparkles,
        skills: ["Generative AI", "RAG", "LLM Integration", "Data Analysis"],
        color: "text-secondary"
    },
    {
        category: "Tools & Practices",
        icon: Wrench,
        skills: ["Git", "Postman", "Power BI", "Tableau", "Figma", "Agile"],
        color: "text-primary"
    }
];

const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="skills" className="py-20 relative" ref={ref}>
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
                        Technical Skills
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-16" />

                    <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {skillsData.map((group, index) => {
                            const Icon = group.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <Card className="glass-card h-full hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-primary group">
                                        <CardHeader className="pb-3 flex flex-row items-center gap-4 space-y-0">
                                            <div className={`p-2 rounded-lg bg-background/50 group-hover:bg-primary/10 transition-colors`}>
                                                <Icon className={`w-8 h-8 ${group.color}`} />
                                            </div>
                                            <CardTitle className="text-xl group-hover:text-primary transition-colors">
                                                {group.category}
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="flex flex-wrap gap-2">
                                                {group.skills.map((skill, i) => (
                                                    <span
                                                        key={i}
                                                        className="px-3 py-1 text-sm rounded-full bg-primary/5 text-foreground border border-primary/20 hover:border-primary/50 transition-colors"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
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

export default Skills;
