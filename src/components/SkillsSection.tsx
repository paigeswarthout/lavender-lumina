
import { useEffect, useRef } from "react";
import SkillBadge from "./SkillBadge";
import AnimatedText from "./AnimatedText";

// Sample skills data
const skills = {
  programming: [
    { name: "JavaScript", level: "intermediate" },
    { name: "Python", level: "intermediate" },
    { name: "Java", level: "advanced" },
    { name: "C#", level: "intermediate" },
    { name: "HTML/CSS", level: "advanced" },
  ],
  frameworks: [
    { name: "React", level: "beginner" },
    { name: "Node.js", level: "intermediate" },
    { name: "Express", level: "intermediate" },
    { name: "Unity", level: "intermediate" },
    { name: "p5.js", level: "intermediate" },
  ],
  design: [
    { name: "Figma", level: "advanced" },
    { name: "Illustrator", level: "intermediate" },
    { name: "UI/UX Design", level: "intermediate" },
    { name: "Wireframing", level: "advanced" },
  ],
};

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100");
          entry.target.classList.remove("opacity-0", "translate-y-10");
        }
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 px-6 transition-opacity duration-1000 opacity-0 translate-y-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <AnimatedText>
            <h2 className="text-3xl font-bold">
              <span className="inline-block px-3 py-1 rounded-lg bg-primary/10 text-primary mb-4">
                My Skills
              </span>
            </h2>
          </AnimatedText>
          
          <AnimatedText delay={300}>
            <h3 className="text-2xl md:text-4xl font-bold mb-6">
              Technologies & Tools
            </h3>
          </AnimatedText>
          
          <AnimatedText delay={500}>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              As a Computer Science and Interactive Media student, I've developed
              a diverse skill set across various technologies, programming languages,
              and design tools.
            </p>
          </AnimatedText>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <AnimatedText delay={700} className="space-y-6">
            <div className="p-6 rounded-xl border bg-card shadow-sm">
              <h4 className="text-xl font-semibold mb-6 text-gradient">
                Programming Languages
              </h4>
              <div className="flex flex-wrap gap-3">
                {skills.programming.map((skill) => (
                  <SkillBadge
                    key={skill.name}
                    name={skill.name}
                    level={skill.level as "beginner" | "intermediate" | "advanced"}
                  />
                ))}
              </div>
            </div>
          </AnimatedText>
          
          <AnimatedText delay={900} className="space-y-6">
            <div className="p-6 rounded-xl border bg-card shadow-sm">
              <h4 className="text-xl font-semibold mb-6 text-gradient">
                Frameworks & Libraries
              </h4>
              <div className="flex flex-wrap gap-3">
                {skills.frameworks.map((skill) => (
                  <SkillBadge
                    key={skill.name}
                    name={skill.name}
                    level={skill.level as "beginner" | "intermediate" | "advanced"}
                  />
                ))}
              </div>
            </div>
          </AnimatedText>
          
          <AnimatedText delay={1100} className="space-y-6">
            <div className="p-6 rounded-xl border bg-card shadow-sm">
              <h4 className="text-xl font-semibold mb-6 text-gradient">
                Design & Creative Tools
              </h4>
              <div className="flex flex-wrap gap-3">
                {skills.design.map((skill) => (
                  <SkillBadge
                    key={skill.name}
                    name={skill.name}
                    level={skill.level as "beginner" | "intermediate" | "advanced"}
                  />
                ))}
              </div>
            </div>
          </AnimatedText>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
