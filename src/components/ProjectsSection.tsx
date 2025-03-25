
import { useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";
import AnimatedText from "./AnimatedText";

// Sample projects data
const projects = [
  {
    id: 1,
    title: "Interactive Data Visualization",
    description: "An interactive web application that visualizes complex datasets through engaging and intuitive interfaces.",
    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["React", "D3.js", "Data Visualization", "UX Design"],
    link: "#",
  },
  {
    id: 2,
    title: "Augmented Reality Experience",
    description: "A mobile AR application that overlays digital content on the physical world, creating immersive educational experiences.",
    imageSrc: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["Unity", "AR", "Mobile Development", "3D Modeling"],
    link: "#",
  },
  {
    id: 3,
    title: "Algorithmic Art Generator",
    description: "A creative coding project that generates unique artwork based on mathematical algorithms and user input.",
    imageSrc: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["Processing", "p5.js", "Generative Art", "Algorithms"],
    link: "#",
  },
];

const ProjectsSection = () => {
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
      id="projects"
      ref={sectionRef}
      className="py-20 px-6 bg-secondary/50 transition-opacity duration-1000 opacity-0 translate-y-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <AnimatedText>
            <h2 className="text-3xl font-bold">
              <span className="inline-block px-3 py-1 rounded-lg bg-primary/10 text-primary mb-4">
                My Projects
              </span>
            </h2>
          </AnimatedText>
          
          <AnimatedText delay={300}>
            <h3 className="text-2xl md:text-4xl font-bold mb-6">
              Showcasing My Creative Work
            </h3>
          </AnimatedText>
          
          <AnimatedText delay={500}>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore my portfolio of projects spanning interactive media, web development,
              and creative computing. Each project represents my passion for blending technology
              with artistic expression.
            </p>
          </AnimatedText>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedText key={project.id} delay={700 + index * 200}>
              <ProjectCard
                title={project.title}
                description={project.description}
                imageSrc={project.imageSrc}
                tags={project.tags}
                link={project.link}
              />
            </AnimatedText>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
