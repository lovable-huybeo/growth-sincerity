import Hero from "@/components/Hero";
import About from "@/components/About";
import CoreValues from "@/components/CoreValues";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import International from "@/components/International";
import Achievements from "@/components/Achievements";
import Skills from "@/components/Skills";
import Reflection from "@/components/Reflection";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <CoreValues />
      <Education />
      <Experience />
      <Projects />
      <International />
      <Achievements />
      <Skills />
      <Reflection />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm">
            © 2025 Nguyen Pham Quoc Huy. Built with passion and purpose.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
