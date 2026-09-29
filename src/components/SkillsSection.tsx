
import { useEffect, useRef } from "react";
import SkillBadge from "./SkillBadge";
import AnimatedText from "./AnimatedText";

type SkillLevel = "beginner" | "intermediate" | "advanced";

// Badge shade reflects level: lighter = beginner, solid = advanced.
const skillGroups: { title: string; skills: { name: string; level: SkillLevel }[] }[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Java", level: "intermediate" },
      { name: "HTML/CSS", level: "intermediate" },
      { name: "JavaScript", level: "intermediate" },
      { name: "Python", level: "intermediate" },
      { name: "C#", level: "intermediate" },
      { name: "SQL", level: "intermediate" },
      { name: "C", level: "beginner" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "Node.js", level: "intermediate" },
      { name: "Express", level: "intermediate" },
      { name: "Bootstrap", level: "intermediate" },
      { name: "Unity", level: "intermediate" },
      { name: "p5.js", level: "intermediate" },
      { name: "React", level: "beginner" },
    ],
  },
  {
    title: "Design & Creative Tools",
    skills: [
      { name: "Figma", level: "advanced" },
      { name: "Wireframing", level: "advanced" },
      { name: "Prototyping", level: "advanced" },
      { name: "UI/UX Design", level: "advanced" },
      { name: "Design Systems", level: "intermediate" },
      { name: "User Research", level: "intermediate" },
      { name: "Illustrator", level: "intermediate" },
      { name: "Wix", level: "intermediate" },
    ],
  },
  {
    title: "Product & Collaboration",
    skills: [
      { name: "Product Management", level: "intermediate" },
      { name: "Project Planning", level: "intermediate" },
      { name: "Asana", level: "intermediate" },
      { name: "GitHub", level: "intermediate" },
      { name: "Cross-functional Teamwork", level: "advanced" },
    ],
  },
];

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
              From writing code to designing in Figma to running projects, these are
              the tools and skills I use to take ideas from concept to finished product.
            </p>
          </AnimatedText>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillGroups.map((group, index) => (
            <AnimatedText key={group.title} delay={700 + index * 200} className="space-y-6">
              <div className="p-6 rounded-xl border bg-card shadow-sm h-full">
                <h4 className="text-xl font-semibold mb-6 text-gradient">
                  {group.title}
                </h4>
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <SkillBadge key={skill.name} name={skill.name} level={skill.level} />
                  ))}
                </div>
              </div>
            </AnimatedText>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
