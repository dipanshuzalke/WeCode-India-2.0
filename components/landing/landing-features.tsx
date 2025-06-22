"use client";

import { FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section-with-hover-effects";

export function LandingFeatures() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Everything You Need to Become a Developer
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our platform provides a comprehensive ecosystem designed specifically for college students learning software development.
          </p>
        </div>
        <FeaturesSectionWithHoverEffects />
      </div>
    </section>
  );
}