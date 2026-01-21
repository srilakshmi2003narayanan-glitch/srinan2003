import { GraduationCap, Calendar, Award } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "Bachelor of Engineering – Mechanical Engineering",
      institution: "Government College of Engineering, Srirangam, Trichy",
      period: "Expected: May 2026",
      score: "CGPA: 8.13 / 10 (up to 6th semester)",
      isCurrent: true,
      coursework: [
        "Engineering Mechanics",
        "Strength of Materials",
        "Fluid Mechanics & Machinery",
        "Engineering Thermodynamics",
        "Heat and Mass Transfer",
        "Manufacturing Processes",
        "Theory of Machines",
        "Design of Machine Elements",
        "Metrology and Measurements",
        "Hydraulics and Pneumatics",
        "Gas Dynamics & Jet Propulsion",
        "Operations Research"
      ]
    },
    {
      degree: "Higher Secondary Education (Class XII)",
      institution: "Govt Boys Higher Secondary School, Valavanur, Villupuram (DT)",
      period: "May 2022",
      score: "Score: 86%",
      isCurrent: false
    },
    {
      degree: "Secondary Education (Class X)",
      institution: "Govt Higher Secondary School, Neganur",
      period: "May 2020",
      score: "Score: 87.2%",
      isCurrent: false
    }
  ];

  return (
    <section id="education" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-accent font-semibold tracking-wider uppercase text-sm mb-3">
            Academic Journey
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Education
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

          {education.map((item, index) => (
            <div 
              key={index} 
              className="relative pl-0 md:pl-20 mb-12 last:mb-0 animate-slide-in-left"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 top-2 w-5 h-5 bg-accent rounded-full border-4 border-background hidden md:block shadow-accent-glow" />

              {/* Card */}
              <div className={`bg-card rounded-2xl p-6 md:p-8 shadow-card ${item.isCurrent ? 'border-2 border-accent/30' : ''}`}>
                {item.isCurrent && (
                  <span className="inline-block bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full mb-4">
                    Current
                  </span>
                )}
                
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-heading font-bold text-xl md:text-2xl text-foreground mb-2">
                      {item.degree}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <GraduationCap size={18} className="text-accent" />
                      <span>{item.institution}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar size={16} />
                      <span>{item.period}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-accent/10 px-3 py-1 rounded-lg">
                      <Award size={16} className="text-accent" />
                      <span className="font-semibold text-foreground">{item.score}</span>
                    </div>
                  </div>
                </div>

                {/* Coursework */}
                {item.coursework && (
                  <div className="mt-6 pt-6 border-t border-border">
                    <h4 className="font-semibold text-foreground mb-4">Key Coursework</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.coursework.map((course) => (
                        <span 
                          key={course}
                          className="bg-secondary text-secondary-foreground text-sm px-3 py-1.5 rounded-lg"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
