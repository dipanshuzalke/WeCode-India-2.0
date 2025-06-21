import {
  Target,
  Layers,
  Code,
  Cloud,
} from "lucide-react";

export const learningPath = [
  {
    phase: "Foundation",
    title: "Choose Your Domain",
    description:
      "Select the development domain that aligns with your career goals",
    icon: Target,
    status: "active",
  },
  {
    phase: "Planning",
    title: "Project Architecture",
    description:
      "Design the system architecture and plan your development approach",
    icon: Layers,
    status: "upcoming",
  },
  {
    phase: "Development",
    title: "Build & Iterate",
    description:
      "Implement features incrementally with regular testing and feedback",
    icon: Code,
    status: "upcoming",
  },
  {
    phase: "Deployment",
    title: "Launch & Monitor",
    description:
      "Deploy your application and implement monitoring and maintenance",
    icon: Cloud,
    status: "upcoming",
  },
];