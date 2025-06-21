"use client";

import React from "react";
import PageHeader from "@/components/phases/domain/PageHeader";
import LearningPath from "@/components/phases/domain/LearningPath";
import DomainsSection from "@/components/phases/domain/DomainsSection";

const Phase3DevelopmentPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader />
      <LearningPath />
      <DomainsSection />
    </div>
  );
};

export default Phase3DevelopmentPage;
