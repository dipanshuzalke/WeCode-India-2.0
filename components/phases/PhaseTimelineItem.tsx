import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phase } from "@/types/phases";
import { PhaseCard } from "./PhaseCard";
import { LearningPoints } from "./LearningPoints";
import { PhaseProgress } from "./PhaseProgress";

interface PhaseTimelineItemProps {
  phase: Phase;
}

const getButtonText = (title: string): string => {
  if (title.includes("Fundamentals")) return "Explore Fundamentals";
  if (title.includes("DSA")) return "Explore DSA";
  if (title.includes("Development")) return "Explore Development";
  if (title.includes("Profile")) return "Explore Profile Building";
  return "Explore Interview Preparation";
};

export const PhaseTimelineItem = ({ phase }: PhaseTimelineItemProps) => {
  const IconComponent = phase.icon;
  // const isLocked = phase.isLocked;
  const borderClass = "border-primary";
  const iconColor =  "text-primary";
  const titleColor = "";
  
  return (
    <div className="group relative">
      <div className="flex items-center justify-center">
        <div className={`flex h-16 w-16 items-center justify-center rounded-full bg-background border-4 ${borderClass} z-10`}>
          <IconComponent className={`h-6 w-6 ${iconColor}`} />
        </div>
      </div>
      <div className="mt-8 grid gap-24 md:grid-cols-2">
        <div className="flex flex-col space-y-4">
          <h2 className={`text-3xl font-bold ${titleColor}`}>
            {phase.title}
          </h2>
          <p className="text-muted-foreground">
            {phase.description}
          </p>
          <PhaseProgress progress={phase.progress}  />
          <LearningPoints points={phase.learningPoints} />
          <Button asChild>
            <Link href={phase.href}>
              {getButtonText(phase.title)}
            </Link>
          </Button>
        </div>
        <div className="flex items-center justify-center">
          <PhaseCard phase={phase} />
        </div>
      </div>
    </div>
  );
};