import { Progress } from "@/components/ui/progress";

interface PhaseProgressProps {
  progress: number;
  isLocked?: boolean;
}

export const PhaseProgress = ({ progress, isLocked = false }: PhaseProgressProps) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className={`text-sm font-medium ${isLocked ? 'text-muted-foreground' : ''}`}>
          Progress
        </div>
        <div className="text-sm text-muted-foreground">{progress}%</div>
      </div>
      <Progress value={progress} className={isLocked ? "bg-muted" : ""} />
    </div>
  );
};