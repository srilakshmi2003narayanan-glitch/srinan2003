import { Mail, MapPin, Phone, Linkedin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-hero relative flex items-center overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary-foreground/30 rotate-45" />
        <div className="absolute bottom-32 right-20 w-48 h-48 border border-primary-foreground/20 rounded-full" />
        <div className="absolute top-1/3 right-1/4 w-24 h-24 border border-primary-foreground/25" />
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-primary-foreground animate-fade-in">
            <p className="text-accent font-semibold tracking-wider uppercase text-sm mb-4">
              Mechanical Engineering
            </p>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Srilakshminarayanan
              <span className="block text-accent">K</span>
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
              Motivated Mechanical Engineering undergraduate with hands-on industrial experience 
              at BHEL, ready to contribute to manufacturing, production, and design-oriented roles.
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <MapPin size={18} className="text-accent" />
                <span>Trichy, India</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <Phone size={18} className="text-accent" />
                <span>9789615259</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl" asChild>
                <a href="mailto:srilakshmi2003narayanan@gmail.com">
                  <Mail size={20} />
                  Get in Touch
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a 
                  href="https://linkedin.com/in/srilakshminarayanan-k-a4883b283" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Linkedin size={20} />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>

          {/* Right - Photo */}
          <div className="flex justify-center lg:justify-end animate-slide-up">
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 border-2 border-accent/30 rounded-2xl transform rotate-3" />
              <div className="absolute -inset-4 border-2 border-primary-foreground/20 rounded-2xl transform -rotate-3" />
              
              {/* Photo container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl animate-float">
                <img 
                  src={profilePhoto} 
                  alt="Srilakshminarayanan K" 
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              </div>

              {/* Accent badge */}
              <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-6 py-3 rounded-lg shadow-lg font-heading font-semibold">
                GPA: 8.13/10
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 hover:text-accent transition-colors animate-bounce"
        aria-label="Scroll to about section"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default HeroSection;
