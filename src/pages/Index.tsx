import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Internships from "@/components/Internships";
import Achievements from "@/components/Achievements";
import Courses from "@/components/Courses";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Internships />
      <Education />
      <Courses />
      <Achievements />
      <Contact />
    </div>
  );
};

export default Index;
