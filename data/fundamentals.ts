import {
  BookOpen,
  GitBranch,
  Terminal,
  Brain,
} from "lucide-react";
import type { LanguageOption, Resource } from "@/types";

export const resources: Resource[] = [
  {
    id: 1,
    icon: BookOpen,
    title: "Programming Basics",
    description: "Master the fundamental concepts of programming",
    topics: [
      "Learn basic programming concepts: variables, data types, loops, and conditionals.",
      "Practise daily coding problems.",
      "Write simple programs like a calculator or number guessing game.",
      "Create 2 begineer projects."
    ],
    duration: "4-6 weeks",
    difficulty: "Beginner",
    status: "completed",
    resources: [],
  },
  {
    id: 2,
    icon: GitBranch,
    title: "Github & Linkedin Setup",
    description: "Learn how to setup professional profile page.",
    topics: [
      "Setup Github & Linkedin profiles.",
      "Post a begineer project to github and connect with peers.",
      "Learn git basics: version control, commits, branches & pull requests."
    ],
    duration: "2-3 weeks",
    difficulty: "Beginner",
    status: "completed",
    resources: [],
  },
  {
    id: 3,
    icon: Brain,
    title: "Introduction to DSA",
    description: "Develop analytical thinking and debugging skills",
    topics: [
      "Study arrays, linked lists, stacks, and queues.",
      "Practise solving begineer-level problems.",
      "Work on baisc project (eg-task tacker).",
      "Solve 20 DSA problems.",
      "Build 1 DSA related project.",
    ],
    duration: "3-4 weeks",
    difficulty: "Beginner to Intermediate",
    status: "completed",
    resources: [],
  },
  {
    id: 4,
    icon: Terminal,
    title: "Web Development Basics",
    description: "Learn about basic web development technologies.",
    topics: [
      "Learn HTML, CSS, Javascript.",
      "Create 2 responsive web pages.",
      "Start a professional portfolio website showcasing your skills and deploy too",
    ],
    duration: "3-4 weeks",
    difficulty: "Beginner",
    status: "completed",
    resources: [],
  },
];

export const fundamentalLanguages: LanguageOption[] = [
  {
    name: "C",
    description: "A foundational language for system programming and high-performance applications.",
    pros: ["Fast", "Portable", "Widely used in OS and embedded systems"],
    icon: "🌐",
    popularity: "98%",
  },
  {
    name: "Python",
    description: "Beginner-friendly, versatile, and widely used in data science and web development.",
    pros: ["Easy syntax", "Great libraries", "Popular for DSA"],
    icon: "🐍",
    popularity: "99%",
  },
  {
    name: "JavaScript",
    description: "Essential for web development",
    pros: ["Web-focused", "High demand", "Full-stack capable"],
    icon: "🌐",
    popularity: "98%",
  },
];

export const dsaLanguages: LanguageOption[] = [
  {
    name: "Java",
    description: "Enterprise-ready and structured",
    pros: ["Strong typing", "Enterprise use", "Android development"],
    icon: "☕",
    popularity: "87%",
  },
  {
    name: "C++",
    description: "Performance-oriented programming",
    pros: ["Fast execution", "System programming", "Game development"],
    icon: "⚡",
    popularity: "72%",
  }
];