"use client";
import React from "react";
import HeroSection from "@/components/phases/fundamentals/HeroSection";
import LanguageSelection from "@/components/phases/fundamentals/LanguageSelection";
import LearningResources from "@/components/phases/fundamentals/LearningResources";
import NextPhaseCTA from "@/components/phases/fundamentals/NextPhaseCTA";
import { resources, fundamentalLanguages, dsaLanguages } from "@/data/fundamentals";

const FundamentalsPage = () => {

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />

      <div className="container mx-auto flex flex-col px-4 py-12 space-y-16">
        <LanguageSelection
          languages={fundamentalLanguages}
          title="Choose Your First Language"
          subtitle="Start your journey with a foundational language."
        />
        <div className="pt-8">
          <LanguageSelection
            languages={dsaLanguages}
            title="Choose any one for DSA and master it"
            subtitle="Pick a language to practice Data Structures & Algorithms."
          />
        </div>
        <LearningResources
          resources={resources}
        />
        <NextPhaseCTA />
      </div>
    </div>
  );
};

export default FundamentalsPage;
