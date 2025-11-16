const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-center">
            About Me
          </h2>
          
          <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-soft">
            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              I am a <span className="font-semibold text-accent">Business English student</span> who believes 
              that true impact begins with human development. I value sincerity, meaningful communication, 
              and enthusiasm in every project.
            </p>
            
            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              My work involves <span className="font-semibold text-growth">supporting communities</span>, 
              connecting people across cultures, and creating opportunities for growth. Through volunteer 
              initiatives, exchange programs, and youth empowerment projects, I strive to create meaningful 
              impact.
            </p>
            
            <p className="text-lg leading-relaxed text-foreground/90">
              I aim to become a communicator who inspires others through 
              <span className="font-semibold text-accent"> clarity, empathy, and commitment</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
