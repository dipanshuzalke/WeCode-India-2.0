import {
  BookOpen,
  GitBranch,
  Terminal,
  Brain,
} from "lucide-react";
import type { LanguageOption, Milestone } from "@/types";

export interface Resource {
  id: number;
  icon: any;
  title: string;
  description: string;
  topics: string[];
  duration: string;
  difficulty: string;
  status: 'completed' | 'in-progress' | 'not-started';
  resources: {
    name: string;
    type: string;
    url: string;
  }[];
}

export const resources: Resource[] = [
  {
    id: 1,
    icon: BookOpen,
    title: "Programming Basics",
    description: "Master the fundamental concepts of programming",
    topics: [
      "Variables and Data Types",
      "Control Structures (if/else, loops)",
      "Functions and Methods",
      "Object-Oriented Programming",
      "Error Handling",
    ],
    duration: "4-6 weeks",
    difficulty: "Beginner",
    status: "completed",
    resources: [
      { name: "FreeCodeCamp", type: "Interactive", url: "#" },
      { name: "Codecademy", type: "Course", url: "#" },
      { name: "Python.org Tutorial", type: "Documentation", url: "#" },
    ],
  },
  {
    id: 2,
    icon: GitBranch,
    title: "Git & GitHub",
    description: "Learn version control for collaborative development",
    topics: [
      "Git Basics (init, add, commit, push)",
      "Branching and Merging",
      "GitHub Workflow",
      "Pull Requests and Code Review",
      "Collaborative Development",
    ],
    duration: "2-3 weeks",
    difficulty: "Beginner",
    status: "completed",
    resources: [
      { name: "Git Documentation", type: "Official Docs", url: "#" },
      { name: "GitHub Skills", type: "Interactive", url: "#" },
      { name: "Atlassian Git Tutorial", type: "Tutorial", url: "#" },
    ],
  },
  {
    id: 3,
    icon: Brain,
    title: "Problem Solving",
    description: "Develop analytical thinking and debugging skills",
    topics: [
      "Breaking Down Complex Problems",
      "Pseudocode and Flowcharts",
      "Debugging Techniques",
      "Code Organization",
      "Best Practices",
    ],
    duration: "Ongoing",
    difficulty: "Beginner to Intermediate",
    status: "in-progress",
    resources: [
      { name: "HackerRank", type: "Practice", url: "#" },
      { name: "LeetCode Easy", type: "Practice", url: "#" },
      { name: "Codewars", type: "Challenges", url: "#" },
    ],
  },
  {
    id: 4,
    icon: Terminal,
    title: "Development Environment",
    description: "Set up your coding workspace and tools",
    topics: [
      "Code Editors (VS Code, IDEs)",
      "Command Line Basics",
      "Package Managers",
      "Development Tools",
      "Productivity Extensions",
    ],
    duration: "1-2 weeks",
    difficulty: "Beginner",
    status: "not-started",
    resources: [
      { name: "VS Code Documentation", type: "Official", url: "#" },
      { name: "Command Line Tutorial", type: "Interactive", url: "#" },
      { name: "npm Documentation", type: "Package Manager", url: "#" },
    ],
  },
];

export const languageOptions: LanguageOption[] = [
  {
    name: "Python",
    description: "Beginner-friendly with clean syntax",
    pros: ["Easy to learn", "Versatile", "Great community"],
    icon: "🐍",
    popularity: "95%",
  },
  {
    name: "JavaScript",
    description: "Essential for web development",
    pros: ["Web-focused", "High demand", "Full-stack capable"],
    icon: "🌐",
    popularity: "98%",
  },
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
  },
];

export const milestones: Milestone[] = [
  {
    title: "Complete First Program",
    description: "Write and run your first 'Hello World' program",
    completed: true,
  },
  {
    title: "Understand Variables",
    description: "Work with different data types and variables",
    completed: true,
  },
  {
    title: "Master Control Flow",
    description: "Use if statements, loops, and functions effectively",
    completed: true,
  },
  {
    title: "Git Repository Setup",
    description: "Create your first Git repository and make commits",
    completed: false,
  },
  {
    title: "Solve Practice Problems",
    description: "Complete 10 basic programming challenges",
    completed: false,
  },
];

export {};