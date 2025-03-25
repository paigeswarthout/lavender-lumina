
import { useEffect, useRef } from "react";
import AnimatedText from "./AnimatedText";

const AboutSection = () => {
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
      id="about"
      ref={sectionRef}
      className="py-20 px-6 transition-opacity duration-1000 opacity-0 translate-y-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Paige Swarthout"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-lg bg-primary/20 -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 rounded-lg bg-accent/20 -z-10"></div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 space-y-6">
            <AnimatedText>
              <h2 className="text-3xl font-bold">
                <span className="inline-block px-3 py-1 rounded-lg bg-primary/10 text-primary mb-4">
                  About Me
                </span>
              </h2>
            </AnimatedText>
            
            <AnimatedText delay={300}>
              <h3 className="text-2xl md:text-4xl font-bold mb-6">
                Blending Technology & Creativity
              </h3>
            </AnimatedText>
            
            <AnimatedText delay={500}>
              <p className="text-muted-foreground mb-4">
                I'm a Computer Science and Interactive Media student passionate about creating 
                digital experiences that are both functional and beautiful. With a strong 
                foundation in programming and design, I enjoy tackling complex problems and 
                turning ideas into reality.
              </p>
            </AnimatedText>
            
            <AnimatedText delay={700}>
              <p className="text-muted-foreground mb-6">
                When I'm not coding or designing, you can find me exploring new technologies, 
                working on personal projects, or collaborating with other creative minds. I believe 
                in the power of technology to transform and enhance our lives, and I'm excited to 
                contribute to that vision.
              </p>
            </AnimatedText>
            
            <AnimatedText delay={900}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Education</h4>
                  <p className="text-sm text-muted-foreground">
                    BS in Computer Science & Interactive Media
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Location</h4>
                  <p className="text-sm text-muted-foreground">
                    New York, NY
                  </p>
                </div>
              </div>
            </AnimatedText>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
