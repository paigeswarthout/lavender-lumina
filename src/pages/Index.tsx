
import { useEffect } from "react";
import MainLayout from "@/layouts/MainLayout";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".scroll-animation");
      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (elementPosition.top < windowHeight * 0.9) {
          element.classList.add("animated");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <MainLayout>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </MainLayout>
  );
};

export default Index;
