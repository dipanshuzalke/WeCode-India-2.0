import { NextRequest, NextResponse } from 'next/server';
import {
  createAiInterviewPrisma,
  getAiInterviewsByUserPrisma,
  // createInterviewFeedbackPrisma,
  // getInterviewFeedbacksPrisma,
} from '@/lib/actions/general.action';
import { prismaClient } from '@/lib/prisma';
import { generateObject } from 'ai';
import { openai } from '@ai-sdk/openai';
import { feedbackSchema } from '@/constants';

// POST: Create AiInterview or InterviewFeedback
// Pass { type: 'interview', ... } or { type: 'feedback', ... } in body
export async function POST(req: NextRequest) {
  const body = await req.json();
  if (body.type === 'interview') {
    const { role, level, questions, techstack, userId, type, finalized } = body;
    // Check for existing interview with feedback
    const existingInterview = await prismaClient.aiInterview.findFirst({
      where: {
        userId,
        role,
        level,
        techstack: { equals: techstack },
      },
      include: {
        feedbacks: true,
      },
    });
    if (existingInterview && existingInterview.feedbacks && existingInterview.feedbacks.length > 0) {
      return NextResponse.json({
        success: false,
        error: 'You have already completed this interview and received feedback.',
      }, { status: 400 });
    }
    try {
      const interview = await createAiInterviewPrisma({
        role,
        level,
        questions,
        techstack,
        userId,
        type,
        finalized,
      });
      return NextResponse.json({ success: true, interview });
    } catch (error) {
      return NextResponse.json({ success: false, error: error?.toString() }, { status: 500 });
    }
  } else if (body.type === 'feedback') {
    console.log("POST /api/interview type=feedback called");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { interviewId, userId: _userId, transcript, feedbackId: _feedbackId } = body;
    try {
      // Format transcript for AI
      const formattedTranscript = transcript
        .map((sentence: { role: string; content: string }) => `- ${sentence.role}: ${sentence.content}\n`)
        .join("");

      // Try/catch for AI feedback generation
      let object;
      try {
        const result = await generateObject({
          model: openai("gpt-4-turbo"),
          schema: feedbackSchema,
          prompt: `
            You are an AI interviewer analyzing a mock interview. Your task is to evaluate the candidate based on structured categories. Be thorough and detailed in your analysis. Don't be lenient with the candidate. If there are mistakes or areas for improvement, point them out.
            Transcript:
            ${formattedTranscript}

            Please score the candidate from 0 to 100 in the following areas. Do not add categories other than the ones provided:
            - **Communication Skills**: Clarity, articulation, structured responses.
            - **Technical Knowledge**: Understanding of key concepts for the role.
            - **Problem-Solving**: Ability to analyze problems and propose solutions.
            - **Cultural & Role Fit**: Alignment with company values and job role.
            - **Confidence & Clarity**: Confidence in responses, engagement, and clarity.
          `,
          system:
            "You are a professional interviewer analyzing a mock interview. Your task is to evaluate the candidate based on structured categories",
        });
        object = result.object;
      } catch (aiError) {
        console.error("AI feedback generation error:", aiError);
        return NextResponse.json({ success: false, error: aiError?.toString() }, { status: 500 });
      }

      console.log("AI feedback object:", object);
      console.log("Saving feedback for interviewId:", interviewId);

      // Save feedback with Prisma
      try {
        const feedback = await prismaClient.interviewFeedback.create({
          data: {
            interviewId,
            totalScore: object.totalScore,
            categoryScores: object.categoryScores,
            strengths: object.strengths,
            areasForImprovement: object.areasForImprovement,
            finalAssessment: object.finalAssessment,
          },
        });
        return NextResponse.json({ success: true, feedback });
      } catch (err) {
        console.error("Prisma error:", err);
        return NextResponse.json({ success: false, error: err?.toString() }, { status: 500 });
      }
    } catch (error) {
      return NextResponse.json({ success: false, error: error?.toString() }, { status: 500 });
    }
  } else {
    return NextResponse.json({ success: false, error: 'Invalid type in body' }, { status: 400 });
  }
}

// GET: Fetch AiInterviews (by userId) or InterviewFeedbacks (by interviewId)
// Use ?userId=... to get interviews, ?interviewId=... to get feedbacks
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get('userId');
  const interviewId = searchParams.get('interviewId');
  try {
    if (interviewId) {
      // Fetch a single interview and its feedbacks
      const interview = await prismaClient.aiInterview.findUnique({
        where: { id: interviewId },
      });
      const feedbacks = await prismaClient.interviewFeedback.findMany({
        where: { interviewId },
        orderBy: { createdAt: 'desc' },
      });
      return NextResponse.json({ success: true, interviews: interview ? [interview] : [], feedbacks });
    } else if (userId) {
      const interviews = await getAiInterviewsByUserPrisma(userId);
      return NextResponse.json({ success: true, interviews });
    } else {
      return NextResponse.json({ success: false, error: 'Missing userId or interviewId' }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json({ success: false, error: error?.toString() }, { status: 500 });
  }
} 