import { Briefcase, MapPin, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    organization: "YMCA Vietnam",
    role: "Project Development",
    period: "July 2024 - Present",
    location: "Ho Chi Minh City",
    highlights: [
      "Designed sub-project for Uni-Y on youth empowerment",
      "Organized multi-site volunteer events including Brighten Children's Smile",
      "Coordinated with local partners across hospitals and shelters"
    ]
  },
  {
    organization: "Frogsleap Vietnam",
    role: "General Buddy",
    period: "Oct 2024 - Nov 2024",
    location: "Ho Chi Minh City",
    highlights: [
      "Facilitated exchange with 8 students from St Joseph's Institution Singapore",
      "Supported cross-cultural activities and Vietnamese cultural showcase",
      "Led team of 10 members in community engagement"
    ]
  },
  {
    organization: "WeCare 26",
    role: "Interpreting Volunteer",
    period: "Sep 2024 (12 days)",
    location: "Phu Lam, Vietnam",
    highlights: [
      "Worked with 30+ ITE Singapore students on educational activities",
      "Assisted in construction tasks for Phu Lam primary school",
      "Strengthened intercultural understanding through governance exchanges"
    ]
  },
  {
    organization: "Regen Asian Summit",
    role: "Vietnamese Representative",
    period: "July 2025",
    location: "Singapore",
    highlights: [
      "Represented Vietnam in regional youth summit",
      "Joined workshops on biomimicry and regenerative climate action",
      "Co-created inter-Asia networks for regenerative future"
    ]
  }
];

const Experience = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-center">
          Experience
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Building connections and creating impact through meaningful collaboration
        </p>
        
        <div className="max-w-5xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-none shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Briefcase className="h-7 w-7 text-accent" />
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{exp.organization}</h3>
                      <p className="text-lg text-accent font-semibold mb-3">{exp.role}</p>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-growth mt-1">•</span>
                          <span className="text-foreground/80">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
