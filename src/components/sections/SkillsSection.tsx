import { PenTool, Settings, Shield, Cog } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Design & Drafting",
      icon: PenTool,
      skills: ["AutoCAD", "SolidWorks"]
    },
    {
      title: "Manufacturing & Production",
      icon: Cog,
      skills: ["Manufacturing Processes", "Production Technology", "Industrial Workflows"]
    },
    {
      title: "Mechanical Systems",
      icon: Settings,
      skills: [
        "Industrial Maintenance",
        "Machine Elements",
        "Failure Analysis",
        "Reliability Engineering"
      ]
    },
    {
      title: "Safety & Quality",
      icon: Shield,
      skills: ["Industrial Safety Standards", "Quality Practices", "Heavy Industry Protocols"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-accent font-semibold tracking-wider uppercase text-sm mb-3">
            Expertise
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-lg transition-all duration-300 group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                  <category.icon className="w-7 h-7 text-primary-foreground group-hover:text-accent-foreground transition-colors" />
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="bg-secondary text-secondary-foreground font-medium px-4 py-2 rounded-lg border border-border hover:border-accent hover:bg-accent/5 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
