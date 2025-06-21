"use client";
import React from "react";
import HeroSection from "@/components/phases/fundamentals/HeroSection";
import ProgressSection from "@/components/phases/fundamentals/ProgressSection";
import LanguageSelection from "@/components/phases/fundamentals/LanguageSelection";
import LearningResources from "@/components/phases/fundamentals/LearningResources";
import MilestonesSection from "@/components/phases/fundamentals/MilestonesSection";
import NextPhaseCTA from "@/components/phases/fundamentals/NextPhaseCTA";
import { resources, milestones, languageOptions } from "@/data/fundamentals";

const FundamentalsPage = () => {
  const [viewMode, setViewMode] = React.useState<"grid" | "list">("grid");

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ProgressSection progress={75} />

      <div className="container mx-auto px-4 py-12 space-y-16">
        <LanguageSelection languages={languageOptions} />

        <LearningResources
          resources={resources}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
        />

        <MilestonesSection milestones={milestones} />

        <NextPhaseCTA />
      </div>
    </div>
  );
};

export default FundamentalsPage;
