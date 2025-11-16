import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-2xl overflow-hidden shadow-medium">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-growth/20 flex items-center justify-center">
                <span className="text-6xl font-bold text-muted-foreground">HUY</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left space-y-6 max-w-2xl">
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
              Nguyen Pham <br />
              <span className="text-accent">Quoc Huy</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground font-light leading-relaxed">
              Empowering people through sincerity and meaningful engagement
            </p>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-4">
              <span className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium">
                Human Development
              </span>
              <span className="px-4 py-2 rounded-full bg-growth/10 text-growth text-sm font-medium">
                Sincerity
              </span>
              <span className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium">
                Enthusiasm
              </span>
            </div>

            <div className="pt-6">
              <Button 
                onClick={scrollToAbout}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-medium hover:shadow-lg transition-all"
              >
                Learn More
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
