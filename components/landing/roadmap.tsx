"use client";

import React from "react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import { BookOpen, Layers, Code2, FileCode2, GraduationCap } from "lucide-react";

const timelineData = [
  {
    id: 1,
    title: "Fundamentals",
    date: "Jan 2024",
    content: "Build a strong foundation with programming basics, Git, and development setup",
    category: "Planning",
    icon: BookOpen,
    relatedIds: [2],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "DSA",
    date: "Feb 2024",
    content: "Master core DSA concepts and problem-solving techniques.",
    category: "Design",
    icon: Layers,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 3,
    title: "Development",
    date: "Mar 2024",
    content: "Learn web, mobile, or other development paths with hands-on projects.",
    category: "Development",
    icon: Code2,
    relatedIds: [2, 4],
    status: "in-progress" as const,
    energy: 60,
  },
  {
    id: 4,
    title: "Profile Building",
    date: "Apr 2024",
    content: "Create impressive portfolios, optimize GitHub and LinkedIn profiles.",
    category: "Testing",
    icon: FileCode2,
    relatedIds: [3, 5],
    status: "pending" as const,
    energy: 30,
  },
  {
    id: 5,
    title: "Interview Prep",
    date: "May 2024",
    content: "Practice technical interviews, system design, and HR questions.",
    category: "Release",
    icon: GraduationCap,
    relatedIds: [4],
    status: "pending" as const,
    energy: 10,
  },
];

export default function Roadmap() {
  return (
    <section className="py-10">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Your Learning Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Follow our structured roadmap designed to take you from a beginner to a job-ready developer through distinct learning phases.
          </p>
        </div>
        <RadialOrbitalTimeline timelineData={timelineData} />
      </div>
    </section>
  );
}