// Utility functions for roadmap generation

export interface RoadmapInput {
  goal: string;
  skillLevel: string;
  months: number;
  dailyHours?: number;
  targetCompaniesOrRoles?: string | null;
}

export interface CapstoneProject {
  title: string;
  desc: string;
  actions: string[];
}

export interface MockPlatform {
  platform: string;
  url: string;
  details: string;
}

export interface MockSection {
  desc: string;
  recs: MockPlatform[];
  schedule: string;
}

export interface RevisionSection {
  tips: string[];
}

export function generateCapstoneProjects(goal: string, skillLevel: string): CapstoneProject[] {
  const isBeginner = skillLevel.toLowerCase() === "beginner";
  if (/data\s*science|machine\s*learning|ai|ml/i.test(goal)) {
    return [
      isBeginner
        ? {
            title: "ML Project: End-to-End Regression or Classification",
            desc: "Build and evaluate a simple predictive model (e.g., house prices, titanic) using scikit-learn or TensorFlow. Deploy via HuggingFace Spaces or Streamlit Share.",
            actions: [
              "Upload code to GitHub with README instructions.",
              "Share results/visualizations in a blog or LinkedIn post.",
            ],
          }
        : {
            title: "Full-Stack ML Pipeline/Novel AI App",
            desc: "Collect or use open datasets, engineer features, train/finetune models, and deploy as a live API or web app (FastAPI, Streamlit, Gradio). Optionally, experiment with an LLM or generative AI model and document learnings.",
            actions: [
              "Host a demo, document model evaluation, and share with peers.",
              "Prepare a technical report and publish portfolio/project page.",
            ],
          }
    ];
  } else if (/web\s*dev|frontend|backend|full|mern|react|next\.js|javascript|typescript/i.test(goal)) {
    return [
      isBeginner
        ? {
            title: "Personal Portfolio or Blog Website (React/Next.js)",
            desc: "Build and deploy a styled personal site that includes about, projects, and contact form. Use modern CSS, responsive design, and host on Vercel/Netlify.",
            actions: [
              "Add at least 3 projects (real or practice) to showcase.",
              "Write a reflection/learners log on what you built.",
            ],
          }
        : {
            title: "Full-Stack SaaS Dashboard or Custom App",
            desc: "Design and implement a real product—user authentication, database (Supabase, PostgreSQL), clean API endpoints, responsive and accessible frontend (React + shadcn/ui/Tailwind). Optional: Add CI/CD and tests.",
            actions: [
              "Deploy app (Vercel/Render), share GitHub repo with README.",
              "Request code review from a mentor or peer for feedback.",
            ],
          }
    ];
  } else if (/coding\s*interview|dsa|leetcode|programming|competitive/i.test(goal)) {
    return [
      isBeginner
        ? {
            title: "DSA Problem Solving Marathon",
            desc: "Aim to solve 60–80 core questions from LeetCode ('Blind 75'), InterviewBit, or GFG DSA Sheet. Review each after solving and note key patterns.",
            actions: [
              "Maintain a tracker spreadsheet or GitHub gist of topics/solutions.",
              "Write summary notes for each DSA topic (arrays, trees, DP, etc).",
            ],
          }
        : {
            title: "Challenge: 150+ LeetCode + 2 Live Coding Contests",
            desc: "Aggressively target mixed-difficulty questions, complete live virtual contests (LeetCode or Codeforces), and analyze leaderboard performance.",
            actions: [
              "Publish a blog post sharing your top 5 takeaways.",
              "Attempt re-solving 10 hardest questions with 1-week gap.",
            ],
          }
    ];
  } else {
    return [
      {
        title: "Capstone Project or Real-World Challenge",
        desc: "Select a practical deliverable that matches your goal: e.g., research a new framework/technology, build a mini SaaS, publish an essay, or contribute to open-source. Ensure the outcome is public and demonstrable.",
        actions: ["Share your work on GitHub and present to a peer/mentor."],
      }
    ];
  }
}

export function generateMockInterviewSection(goal: string, targetCompaniesOrRoles?: string): MockSection {
  if (/coding\s*interview|dsa|leetcode|competitive/i.test(goal)) {
    return {
      desc: "Ace interviews with structured mock tests. Use these trusted platforms for timed assessments and feedback.",
      recs: [
        {
          platform: "LeetCode Mock Interviews",
          url: "https://leetcode.com/interview/",
          details: "Simulate real company interviews and timed tests (LeetCode Premium optional).",
        },
        {
          platform: "Pramp",
          url: "https://www.pramp.com/",
          details: "Free peer-to-peer interview practice with live feedback.",
        },
        {
          platform: "InterviewBit",
          url: "https://www.interviewbit.com/courses/interview-preparation/",
          details: "Curated question sets and company-wise mocks.",
        },
      ],
      schedule: "Attempt 2–3 timed mocks per week and review mistakes after each session.",
    };
  } else if (/gate|exam|test|upsc|gre|toefl|ielts/i.test(goal + (targetCompaniesOrRoles ?? ""))) {
    return {
      desc: "Practice with up-to-date mock tests for your exam/goal, simulating real exam conditions every week.",
      recs: [
        {
          platform: "GFG Test Series",
          url: "https://practice.geeksforgeeks.org/mock-test-series",
          details: "Topic-wise and full-length GATE/CS tests. Review solutions in detail.",
        },
        {
          platform: "Eduncle",
          url: "https://www.eduncle.com/exams/gate/mock-test",
          details: "Free GATE/CS/Subject-wise mock tests, explanations included.",
        },
      ],
      schedule: "Schedule one full-length mock every weekend, and one topic-wise mock mid-week.",
    };
  } else if (/web|full|frontend|backend|mern|react/i.test(goal)) {
    return {
      desc: "Sharpen practical & interview skills: test with coding challenge platforms and practice system design rounds.",
      recs: [
        {
          platform: "Frontend Mentor",
          url: "https://www.frontendmentor.io/challenges",
          details: "UI challenge contests to build and review real designs.",
        },
        {
          platform: "Dev Challenges",
          url: "https://devchallenges.io/challenges",
          details: "Full-stack, backend, and React challenge platform.",
        },
        {
          platform: "Excalidraw Interview Kit",
          url: "https://excalidraw.com/#system-design",
          details: "Practice drawing system design diagrams on whiteboard.",
        },
      ],
      schedule: "Complete two coding/UI challenges and one system design round simulation per week.",
    };
  } else {
    return {
      desc: "Practice real-world assessment relevant to your goal (presentation, demo, written paper, etc). Consider peer or mentor feedback.",
      recs: [
        {
          platform: "YouTube Peer Review",
          url: "https://www.youtube.com/results?search_query=mock+interview+2025",
          details: "Watch current mock interviews and note strategies.",
        },
        {
          platform: "LinkedIn Events",
          url: "https://www.linkedin.com/events/search/?keywords=mock%20interview",
          details: "Find/participate in group peer review events.",
        },
      ],
      schedule: "Present or submit your work once/week for critique.",
    };
  }
}

export function generateRevisionSection(): RevisionSection {
  return {
    tips: [
      "List out all topics (from your month/weekly plans) and categorize as 'strong', 'weak', 'needs review'.",
      "Dedicate last 1–2 weeks to focused revision, prioritizing your weak topics.",
      "Use digital/physical flashcards (e.g., Anki, Quizlet) for formulas, patterns, or code snippets.",
      "Redraw mind maps or summary diagrams for each subject area.",
      "Keep a 'Mistakes & Insights' journal—write one learning every session.",
      "Schedule a 'final reflection' session to review your progress, update your resume/portfolio, and plan next steps.",
    ],
  };
}

export function generateRoadmapPlan(roadmapInput: RoadmapInput) {
  const { goal, skillLevel, targetCompaniesOrRoles } = roadmapInput;
  const goalSlug = goal.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return {
    capstones: generateCapstoneProjects(goal, skillLevel),
    mockSection: generateMockInterviewSection(goal, targetCompaniesOrRoles || undefined),
    revisionSection: generateRevisionSection(),
    goalSlug,
  };
} 
