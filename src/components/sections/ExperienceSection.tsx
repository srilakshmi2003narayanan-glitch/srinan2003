import { Building2, Calendar, CheckCircle2 } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Mechanical Engineering Intern",
      company: "Bharat Heavy Electricals Limited (BHEL)",
      location: "Tiruchirappalli",
      period: "August 8 – August 21, 2024",
      description: "Gained hands-on exposure to large-scale manufacturing operations in a heavy engineering plant.",
      contributions: [
        "Observed large-scale manufacturing operations in a heavy engineering plant",
        "Gained exposure to plant maintenance systems and industrial workflows",
        "Understood industrial safety standards and practices",
        "Learned practical applications of mechanical engineering concepts in real-time production environments"
      ],
      outcome: "Enhanced understanding of heavy equipment manufacturing, industrial discipline, and workplace safety culture."
    }
  ];

  return (
    <section id="experience" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-accent font-semibold tracking-wider uppercase text-sm mb-3">
            Industrial Exposure
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Experience
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </div>

        {/* Experience Cards */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 md:p-10 shadow-card border-l-4 border-accent animate-slide-up"
            >
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-2">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-2 text-accent font-semibold">
                    <Building2 size={20} />
                    <span>{exp.company}</span>
                  </div>
                  <p className="text-muted-foreground mt-1">{exp.location}</p>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-lg">
                  <Calendar size={18} />
                  <span className="font-medium">{exp.period}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-lg mb-6">
                {exp.description}
              </p>

              {/* Contributions */}
              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-4">Key Learnings & Contributions</h4>
                <ul className="space-y-3">
                  {exp.contributions.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcome */}
              <div className="bg-accent/10 rounded-xl p-5 border border-accent/20">
                <h4 className="font-semibold text-foreground mb-2">Outcome</h4>
                <p className="text-muted-foreground">{exp.outcome}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
