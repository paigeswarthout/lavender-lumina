
import { useEffect, useRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  animationClass?: string;
}

const AnimatedText = ({
  children,
  delay = 0,
  className,
  animationClass = "animate-fade-in",
}: AnimatedTextProps) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const textElement = textRef.current;
    
    if (textElement) {
      textElement.style.opacity = "0";
      textElement.style.animationDelay = `${delay}ms`;
      
      setTimeout(() => {
        textElement.style.opacity = "";
        textElement.classList.add(animationClass);
      }, 100);
    }
  }, [delay, animationClass]);

  return (
    <div ref={textRef} className={cn(className)}>
      {children}
    </div>
  );
};

export default AnimatedText;
