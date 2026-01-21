import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: "srilakshmi2003narayanan@gmail.com",
      href: "mailto:srilakshmi2003narayanan@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9789615259",
      href: "tel:+919789615259"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Trichy, Tamil Nadu, India",
      href: null
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "srilakshminarayanan-k-a4883b283",
      href: "https://linkedin.com/in/srilakshminarayanan-k-a4883b283"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-40 h-40 border border-primary-foreground/20 rounded-full" />
        <div className="absolute bottom-20 left-10 w-24 h-24 border border-primary-foreground/30 rotate-45" />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-accent font-semibold tracking-wider uppercase text-sm mb-3">
            Let's Connect
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </div>

        {/* Contact Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-primary-foreground/10 animate-slide-up">
            <p className="text-primary-foreground/80 text-lg text-center mb-10">
              I'm currently seeking opportunities in manufacturing, production, maintenance, 
              or design-oriented roles. Feel free to reach out!
            </p>

            {/* Contact Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href || "#"}
                  target={item.href?.startsWith("http") ? "_blank" : undefined}
                  rel={item.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`flex items-center gap-4 p-5 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 hover:border-accent/50 transition-all duration-300 group ${!item.href ? 'cursor-default' : ''}`}
                >
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent transition-colors">
                    <item.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <div>
                    <p className="text-primary-foreground/60 text-sm">{item.label}</p>
                    <p className="text-primary-foreground font-medium">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button variant="hero" size="xl" asChild>
                <a href="mailto:srilakshmi2003narayanan@gmail.com">
                  <Send size={20} />
                  Send Me a Message
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-6 mt-16 pt-8 border-t border-primary-foreground/10">
        <p className="text-primary-foreground/50 text-center text-sm">
          © {new Date().getFullYear()} Srilakshminarayanan K. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
