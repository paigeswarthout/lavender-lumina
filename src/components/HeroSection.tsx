
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import AnimatedText from "./AnimatedText";

const HeroSection = () => {
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
      id="home"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center pt-20 pb-16 px-6 transition-opacity duration-1000 opacity-0 translate-y-10"
    >
      <div className="max-w-5xl w-full space-y-8">
        <div className="space-y-6 text-center md:text-left">
          <AnimatedText delay={100} className="mb-4">
            <span className="inline-block text-sm md:text-base px-3 py-1 rounded-full bg-primary/10 text-primary mb-4">
              Computer Science & Interactive Media Student
            </span>
          </AnimatedText>
          
          <AnimatedText delay={300} className="mb-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Hi, I'm <span className="text-gradient">Paige Swarthout</span>
            </h1>
          </AnimatedText>
          
          <AnimatedText delay={500}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0">
              I create interactive experiences and digital solutions that blend technology and creativity.
            </p>
          </AnimatedText>
          
          <AnimatedText delay={700} className="pt-8">
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                size="lg" 
                className="px-8 rounded-full shadow-md hover:shadow-lg transition-all"
              >
                <a href="#projects">View My Work</a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 rounded-full"
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </AnimatedText>
        </div>
        
        <AnimatedText delay={900} className="hidden md:block md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 md:max-w-md">
          <div className="relative w-full h-full">
            <div className="rounded-full w-80 h-80 bg-primary/20 absolute -right-4 top-0 animate-float"></div>
            <div className="rounded-full w-60 h-60 bg-accent/30 absolute right-10 top-20 animate-float" style={{ animationDelay: "500ms" }}></div>
          </div>
        </AnimatedText>
      </div>
    </section>
  );
};

export default HeroSection;
