
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
  link?: string;
  className?: string;
}

const ProjectCard = ({
  title,
  description,
  imageSrc,
  tags,
  link,
  className,
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl h-full transition-all duration-500",
        "border border-border shadow-sm hover:shadow-md",
        "transform hover:-translate-y-1",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className={cn(
            "w-full h-full object-cover transition-transform duration-700",
            isHovered ? "scale-105" : "scale-100"
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gradient">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-primary font-medium link-underline"
          >
            View Project
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
