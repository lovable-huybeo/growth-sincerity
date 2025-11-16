import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-center">
          Get In Touch
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Thank you for reading my portfolio. I look forward to learning, connecting, and growing with you.
        </p>
        
        <div className="max-w-4xl mx-auto">
          <Card className="border-none shadow-medium">
            <CardContent className="p-8 lg:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Contact Info */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Email</p>
                      <a 
                        href="mailto:quochuynguyenpham1510@gmail.com"
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        quochuynguyenpham1510@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-growth/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-growth" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Phone</p>
                      <a 
                        href="tel:+84988473107"
                        className="text-muted-foreground hover:text-growth transition-colors"
                      >
                        +84 988 473 107
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Location</p>
                      <p className="text-muted-foreground">
                        Binh Thanh District<br />
                        Ho Chi Minh City, Vietnam
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* LinkedIn QR Code Placeholder */}
                <div className="flex flex-col items-center justify-center space-y-4 bg-muted/30 rounded-xl p-8">
                  <div className="w-48 h-48 bg-background rounded-lg flex items-center justify-center border-2 border-dashed border-border">
                    <div className="text-center">
                      <Linkedin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">LinkedIn QR Code</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground text-center">
                    Scan to connect on LinkedIn
                  </p>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-border text-center">
                <Button 
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground"
                  onClick={() => window.location.href = 'mailto:quochuynguyenpham1510@gmail.com'}
                >
                  Send Me a Message
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
