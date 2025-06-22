"use client";
import { LandingHero } from "@/components/landing/landing-hero";
import { LandingFeatures } from "@/components/landing/landing-features";
import  CTA from "@/components/landing/landing-cta";
import Roadmap from "@/components/landing/roadmap";
import Domains from "@/components/landing/domains";
import SparklesSection from "@/components/landing/landing-end";

export default function Home() {

  return (
    <div className="flex flex-col">
      <LandingHero />
      <LandingFeatures />
      <Roadmap />
      <Domains />
      <CTA />
      <SparklesSection />
    </div>
  );
}
