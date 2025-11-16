import { Quote } from "lucide-react";

const Reflection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Quote className="h-12 w-12 text-accent mx-auto mb-8 opacity-50" />
          
          <blockquote className="space-y-6">
            <p className="text-2xl lg:text-3xl font-light leading-relaxed text-foreground/90">
              Working with diverse youth teams taught me that growth comes from listening and supporting others.
            </p>
            
            <p className="text-xl lg:text-2xl font-light leading-relaxed text-foreground/80">
              I learned to lead with <span className="font-semibold text-accent">empathy</span>, 
              <span className="font-semibold text-growth"> clarity</span>, and 
              <span className="font-semibold text-accent"> authenticity</span>.
            </p>
            
            <p className="text-xl lg:text-2xl font-light leading-relaxed text-foreground/80">
              My goal is to keep creating spaces where people feel encouraged to learn and flourish.
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Reflection;
