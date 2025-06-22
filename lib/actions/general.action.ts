"use server";

// import { generateObject } from "ai";
// import { google } from "@ai-sdk/google";
// import { feedbackSchema } from "@/constants";
import { prismaClient } from '../prisma';

// --- PRISMA-BASED AI INTERVIEW & FEEDBACK FUNCTIONS ---

// Create a new AiInterview
export async function createAiInterviewPrisma({
  role,
  level,
  questions,
  techstack,
  userId,
  type,
  finalized = false,
}: {
  role: string;
  level: string;
  questions: string[];
  techstack: string[];
  userId: string;
  type: string;
  finalized?: boolean;
}) {
  return prismaClient.aiInterview.create({
    data: {
      role,
      level,
      questions,
      techstack,
      userId,
      type,
      finalized,
    },
  });
}

// Create InterviewFeedback for an AiInterview
export async function createInterviewFeedbackPrisma({
  interviewId,
  totalScore,
  categoryScores,
  strengths,
  areasForImprovement,
  finalAssessment,
}: {
  interviewId: string;
  totalScore: number;
  categoryScores: Record<string, number>; // Should match your TS type, but JSON is accepted
  strengths: string[];
  areasForImprovement: string[];
  finalAssessment: string;
}) {
  return prismaClient.interviewFeedback.create({
    data: {
      interviewId,
      totalScore,
      categoryScores,
      strengths,
      areasForImprovement,
      finalAssessment,
    },
  });
}

// Fetch all AiInterviews for a user (with feedbacks)
export async function getAiInterviewsByUserPrisma(userId: string) {
  return prismaClient.aiInterview.findMany({
    where: { userId },
    include: { feedbacks: true },
    orderBy: { createdAt: 'desc' },
  });
}

// Fetch feedbacks for a specific AiInterview
export async function getInterviewFeedbacksPrisma(interviewId: string) {
  return prismaClient.interviewFeedback.findMany({
    where: { interviewId },
    orderBy: { createdAt: 'desc' },
  });
}

// Fetch a user with all their AiInterviews
export async function getUserWithAiInterviewsPrisma(userId: string) {
  return prismaClient.user.findUnique({
    where: { id: userId },
    include: { aiInterviews: true },
  });
}
