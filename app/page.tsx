"use client";

import { LandingHero } from "@/components/landing/landing-hero";
import { LandingFeatures } from "@/components/landing/landing-features";
import CTA from "@/components/landing/landing-cta";
import Roadmap from "@/components/landing/roadmap";
import Domains from "@/components/landing/domains";
import SparklesSection from "@/components/landing/landing-end";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/phases");
    }
  }, [status, router]);

  // 👇 prevent rendering landing page during loading or redirect
  if (status === "loading" || status === "authenticated") {
    return null;
  }

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
