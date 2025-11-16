import { MessageCircle, Briefcase, Code } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const skillCategories = [
  {
    icon: MessageCircle,
    title: "Professional Skills",
    skills: [
      "Intercultural Communication",
      "Project Coordination",
      "Leadership & Team Management",
      "Public Speaking & Presentation",
      "Community Engagement"
    ]
  },
  {
    icon: Briefcase,
    title: "Languages",
    skills: [
      "English (IELTS 6.5)",
      "Chinese (HSK3, HSKK)",
      "Vietnamese (Native)",
      "Cross-cultural Communication"
    ]
  },
  {
    icon: Code,
    title: "Technical Skills",
    skills: [
      "Canva",
      "Google Workspace",
      "Research & Reporting",
      "Project Documentation",
      "Event Planning Tools"
    ]
  }
];

const Skills = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-bold mb-16 text-center">
          Skills
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="border-none shadow-soft">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-growth/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-growth" />
                    </div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>
                  
                  <ul className="space-y-3">
                    {category.skills.map((skill, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-accent mt-1">•</span>
                        <span className="text-foreground/80">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
