import { GraduationCap, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Education = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-bold mb-16 text-center">
          Education & Certificates
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {/* University */}
          <Card className="border-none shadow-soft">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="h-6 w-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Business English</h3>
                  <p className="text-lg text-muted-foreground mb-3">
                    Ho Chi Minh City University of Education (HCMUE)
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="px-3 py-1 rounded-full bg-growth/10 text-growth font-medium">
                      2022 - 2026
                    </span>
                    <span className="px-3 py-1 rounded-full bg-accent/10 text-accent font-medium">
                      GPA: 3.55/4.0
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Certificates */}
          <Card className="border-none shadow-soft">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-xl bg-growth/10 flex items-center justify-center flex-shrink-0">
                  <Award className="h-6 w-6 text-growth" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">Language Certificates</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center pb-3 border-b border-border">
                      <span className="font-semibold text-lg">IELTS</span>
                      <span className="text-accent font-bold text-lg">6.5</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-border">
                      <span className="font-semibold text-lg">HSK Level 3</span>
                      <span className="text-growth font-bold text-lg">Certified</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-lg">HSKK</span>
                      <span className="text-growth font-bold text-lg">Certified</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
