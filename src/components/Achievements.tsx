import { Trophy, Award, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const achievements = [
  {
    icon: Trophy,
    title: "E-Factor X 2024",
    description: "Winner of English debate competition",
    organization: "HCMUE"
  },
  {
    icon: Award,
    title: "Entrepreneurship Competition 2022",
    description: "Consolation prize for innovative garment design",
    organization: "HCMUE"
  },
  {
    icon: Target,
    title: "Multiple Leadership Roles",
    description: "Led diverse teams in international programs",
    organization: "YMCA Vietnam, Frogsleap"
  }
];

const Achievements = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-bold mb-16 text-center">
          Achievements
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Card key={index} className="border-none shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mx-auto">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold">{achievement.title}</h3>
                  <p className="text-foreground/80">{achievement.description}</p>
                  <p className="text-sm text-muted-foreground">{achievement.organization}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
