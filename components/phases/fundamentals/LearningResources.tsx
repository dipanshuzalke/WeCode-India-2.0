import React, { useState } from "react";
import type { Resource } from "@/types";
import ResourceCard from "./ResourceCard";

interface LearningResourcesProps {
  resources: Resource[];
}

const LearningResources: React.FC<LearningResourcesProps> = ({ resources }) => {
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());

  const toggleCardExpansion = (id: number) => {
    const newExpandedCards = new Set(expandedCards);
    if (newExpandedCards.has(id)) {
      newExpandedCards.delete(id);
    } else {
      newExpandedCards.add(id);
    }
    setExpandedCards(newExpandedCards);
  };

  const handleExplore = (resource: Resource) => {
    // Handle explore action - you can add navigation or modal logic here
    console.log("Explore resource:", resource.title);
  };

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
          <ResourceCard 
            key={resource.id} 
            resource={resource}
            isExpanded={expandedCards.has(resource.id)}
            onToggleExpand={() => toggleCardExpansion(resource.id)}
            onExplore={() => handleExplore(resource)}
          />
        ))}
      </div>
    </section>
  );
};

export default LearningResources;
