
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
                  src="/lovable-uploads/b43a4cd1-34db-428e-b32b-8c3496628bb5.png"
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
                Where Design Meets Code
              </h3>
            </AnimatedText>
            
            <AnimatedText delay={500}>
              <p className="text-muted-foreground mb-4">
                I'm a Computer Science and Interactive Media student at the University of Miami
                who designs and builds digital products, from first sketches in Figma to working,
                tested experiences. I care about interfaces that feel clear, intentional, and a
                little delightful to use.
              </p>
            </AnimatedText>
            
            <AnimatedText delay={700}>
              <p className="text-muted-foreground mb-6">
                I've designed for real clients and live products: redesigning the website for an
                energy platform serving 150+ municipalities during a UX internship in Cape Town,
                and completing a 12-week UI/UX internship at a health and wellness startup. Today
                I manage four XR/VR research projects as a product manager at the Virtual
                Experiences Simulation Lab, keeping researchers, developers, and faculty working
                toward the same goals. Whether I'm designing, building, or leading a project, I love
                turning complex ideas into experiences that feel simple.
              </p>
            </AnimatedText>
            
            <AnimatedText delay={900}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Education</h4>
                  <p className="text-sm text-muted-foreground">
                    BA in Computer Science & Interactive Media with a minor in Marketing
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Location</h4>
                  <p className="text-sm text-muted-foreground">
                    Miami, FL
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
