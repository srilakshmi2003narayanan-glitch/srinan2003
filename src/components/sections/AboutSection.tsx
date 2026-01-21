import { Target, Zap, Wrench } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Focused on contributing to manufacturing and production roles"
    },
    {
      icon: Zap,
      title: "Quick Learner",
      description: "Rapidly adapts to new technologies and industrial practices"
    },
    {
      icon: Wrench,
      title: "Hands-On",
      description: "Practical experience from BHEL and NLC internships"
    }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <p className="text-accent font-semibold tracking-wider uppercase text-sm mb-3">
              About Me
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Profile Summary
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
          </div>

          {/* Main Content */}
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card mb-12 animate-slide-up">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Motivated and detail-oriented <span className="text-foreground font-semibold">Mechanical Engineering undergraduate (4th year)</span> with 
              strong academic performance and hands-on industrial exposure through internships at 
              <span className="text-accent font-semibold"> BHEL</span> and <span className="text-accent font-semibold">NLC India Limited</span>. 
              Possesses solid knowledge of core mechanical engineering subjects, CAD tools, and industrial maintenance practices. 
              Eager to contribute to manufacturing, production, maintenance, or design-oriented roles while 
              continuously enhancing technical and professional skills.
            </p>
          </div>

          {/* Highlight Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={item.title}
                className="bg-card rounded-xl p-6 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <item.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
