import { Users, Heart, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    icon: Users,
    title: "Human Development",
    description: "I believe people grow through shared experiences and meaningful opportunities. My projects center on creating environments where individuals can learn, connect, and progress.",
    color: "growth"
  },
  {
    icon: Heart,
    title: "Sincerity",
    description: "I work with honesty and respect, prioritizing authentic interactions and transparent communication in all collaborations.",
    color: "accent"
  },
  {
    icon: Sparkles,
    title: "Enthusiasm",
    description: "I bring positive energy and commitment to every team, believing that passion fuels creativity and long-lasting impact.",
    color: "accent"
  }
];

const CoreValues = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-center">
          Core Values & Philosophy
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          The principles that guide my work and interactions
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card key={index} className="border-none shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-8 space-y-4">
                  <div className={`w-14 h-14 rounded-xl bg-${value.color}/10 flex items-center justify-center`}>
                    <Icon className={`h-7 w-7 text-${value.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold">{value.title}</h3>
                  <p className="text-foreground/80 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
