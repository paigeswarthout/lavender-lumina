
import { useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";
import AnimatedText from "./AnimatedText";

// Sample projects data
const projects = [
  {
    id: 1,
    title: "Unity Cooking Game",
    description: "A 3D kitchen game created for my Creative Coding class. Used C# scripting and Unity’s physics engine to manage gameplay interactions.",
    imageSrc: "./images/cooking-game.png",
    tags: ["C#", "Unity", "Game Development", "Creative Coding"],
    link: "#",
  },
  {
    id: 2,
    title: "EcoBite – Food Waste Tracker ",
    description: "Designed a responsive website prototype to track food waste across the supply chain, from producers to consumers. Won 3rd place in the 36 hour 2025 Horizon AI Hackathon within the environmental track. Focused on UI/UX flow, accessibility, and user empathy.",
    imageSrc: "./images/ecoByte.png",
    tags: ["Figma", "User Interaction Design", "Mobile Development", "Prototyping"],
    link: "#",
  },
  {
    id: 3,
    title: "TrackIt! - Dynamic To-Do List App",
    description: "A dynamic task management app using SQL-backed lists. Users can create and manage multiple custom to-do lists with clean Bootstrap styling and backend CRUD operations.",
    imageSrc: "./images/trackIt.png",
    tags: ["Node.js", "SQL", "JavaScript", "Bootstrap", "Web Application", "Full Stack"],
    link: "#",
  },
  {
    id: 4,
    title: "Hand-Tracking Drawing Tool",
    description: "Used machine learning and hand tracking to create an interactive canvas where users draw based on hand movement, without physical input devices.",
    imageSrc: "./images/handTracking.png",
    tags: ["Processing", "p5.js", "Generative Art", "Algorithms"],
    link: "#",
  },{
    id: 5,
    title: "Scroll-Reactive Image Gallery",
    description: "Developed a smooth-scrolling website where images dynamically grow and shrink based on the user’s scroll position, creating a fluid, creative, and engaging browsing experience..",
    imageSrc: "./images/scroll.png",
    tags: ["JavaScript", "Animation", "HTML", "CSS", "Web Design", "Front-end Development"],
    link: "#",
  }
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
