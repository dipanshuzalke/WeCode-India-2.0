import React from "react";
import type { Resource } from "@/types";
import ResourceCard from "./ResourceCard";

interface LearningResourcesProps {
  resources: Resource[];
  viewMode: "grid" | "list";
  onViewModeChange: (mode: "grid" | "list") => void;
}

const LearningResources: React.FC<LearningResourcesProps> = ({ resources }) => {
  return (
    <section>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">Learning Resources</h2>
        <p className="text-muted-foreground">
          Comprehensive modules to master programming fundamentals
        </p>
      </div>

      <div className={"grid lg:grid-cols-2 gap-6"}>
        {resources.map((resource) => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
      </div>
    </section>
  );
};

export default LearningResources;
