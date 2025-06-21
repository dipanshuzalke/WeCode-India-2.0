import PhasesHero from "@/components/phases/PhasesHero";
import { PhaseTimelineItem } from "@/components/phases/PhaseTimelineItem";

import { phases } from "@/data/phase";

export default function PhasesPage() {
  return (
    <div className="container py-12 mx-auto">
      <PhasesHero />
      <div className="relative mt-16 mb-24">
        <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-border"></div>

        <div className="space-y-12 md:space-y-24">
          {phases.map((phase) => (
            <PhaseTimelineItem key={phase.id} phase={phase} />
          ))}
        </div>
      </div>
    </div>
  );
}
