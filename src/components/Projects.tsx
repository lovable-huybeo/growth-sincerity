import { Lightbulb, Users, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    icon: Lightbulb,
    title: "Brighten Children's Smile",
    description: "Volunteer project across hospitals and shelters in Ho Chi Minh City",
    details: [
      "Multi-location coordination",
      "Activity design and implementation",
      "Team leadership and support"
    ]
  },
  {
    icon: Users,
    title: "Uni-Y Subproject",
    description: "Youth-led initiative focused on community development",
    details: [
      "Community engagement strategy",
      "Leadership growth programs",
      "Youth empowerment activities"
    ]
  },
  {
    icon: Globe,
    title: "SJI Exchange Program",
    description: "Cultural and academic program with Singaporean students",
    details: [
      "Supported 8 international students",
      "Cultural showcase and activities",
      "Cross-cultural engagement facilitation"
    ]
  }
];

const Projects = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-center">
          Key Projects
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Initiatives that create meaningful impact in communities
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card key={index} className="border-none shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-8 space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                  <ul className="space-y-2 pt-2">
                    {project.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-growth mt-1">•</span>
                        <span className="text-sm text-foreground/80">{detail}</span>
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

export default Projects;
