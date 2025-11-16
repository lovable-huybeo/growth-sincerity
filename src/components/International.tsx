import { Globe, MapPin } from "lucide-react";

const experiences = [
  {
    year: "2022",
    event: "Started Business English Program",
    location: "HCMUE, Vietnam"
  },
  {
    year: "2024",
    event: "ITE Singapore Exchange (WeCare 26)",
    location: "Vietnam"
  },
  {
    year: "2024",
    event: "SJI Exchange Program",
    location: "Vietnam"
  },
  {
    year: "2025",
    event: "Regen Asian Summit",
    location: "Singapore"
  }
];

const International = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-center">
          International Experience
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Building bridges across cultures and regions
        </p>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent/20" />
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-5 w-7 h-7 rounded-full bg-accent flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-background" />
                  </div>
                  
                  <div className="bg-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl font-bold text-accent">{exp.year}</span>
                      <Globe className="h-5 w-5 text-growth" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{exp.event}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default International;
