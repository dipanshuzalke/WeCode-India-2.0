import React from "react";
import { CheckCircle } from "lucide-react";
import type { Milestone } from "@/types";

interface MilestonesSectionProps {
  milestones: Milestone[];
}

const MilestonesSection: React.FC<MilestonesSectionProps> = ({ milestones }) => {
  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Learning Milestones</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Track your progress through key learning objectives and celebrate
          your achievements.
        </p>
      </div>
      <div className="bg-card border rounded-xl p-8">
        <div className="space-y-6">
          {milestones.map((milestone, index) => (
            <div key={index} className="flex items-start gap-4">
              <div
                className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                  milestone.completed
                    ? "bg-green-50 border-fuchsia-200 text-fuchsia-600"
                    : "bg-muted border-border text-muted-foreground"
                }`}
              >
                {milestone.completed ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  <span className="text-sm font-medium">{index + 1}</span>
                )}
              </div>
              <div className="flex-1 pb-6 border-b border-border last:border-b-0">
                <h3
                  className={`font-semibold mb-1 ${
                    milestone.completed
                      ? "text-fuchsia-600 dark:text-fuchsia-300"
                      : "text-foreground"
                  }`}
                >
                  {milestone.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {milestone.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MilestonesSection;