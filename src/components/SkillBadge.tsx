
import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  name: string;
  level?: "beginner" | "intermediate" | "advanced";
  className?: string;
}

const SkillBadge = ({
  name,
  level = "intermediate",
  className,
}: SkillBadgeProps) => {
  const levelColorMap = {
    beginner: "bg-accent/30",
    intermediate: "bg-accent/50",
    advanced: "bg-accent",
  };

  return (
    <div
      className={cn(
        "px-4 py-2 rounded-full",
        levelColorMap[level],
        "transition-all duration-300 hover:scale-105",
        "border border-border shadow-sm",
        className
      )}
    >
      <span className="font-medium text-sm">{name}</span>
    </div>
  );
};

export default SkillBadge;
