import { ChevronRight } from "lucide-react";

interface LearningPointsProps {
  points: string[];
  isLocked?: boolean;
}

export const LearningPoints = ({ points, isLocked = false }: LearningPointsProps) => {
  return (
    <div className="flex flex-col space-y-2">
      <h3 className={`font-medium ${isLocked ? 'text-muted-foreground' : ''}`}>
        What you&apos;ll learn:
      </h3>
      <ul className="grid gap-1 text-sm">
        {points.map((point, index) => (
          <li key={index} className="flex items-center gap-2">
            <ChevronRight className={`h-4 w-4 ${isLocked ? 'text-muted-foreground' : 'text-primary'}`} />
            <span className={isLocked ? 'text-muted-foreground' : ''}>
              {point}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};