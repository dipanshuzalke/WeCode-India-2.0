import Image from "next/image";
import { redirect } from "next/navigation";

import Agent from "@/components/ai-interviewer/Agent";
import { getRandomInterviewCover } from "@/lib/utils";
import DisplayTechIcons from "@/components/ai-interviewer/DisplayTechIcons";

const InterviewDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  // Fetch interview and feedback data from API
  const interviewRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/interview?userId=&interviewId=${id}`);
  const interviewData = await interviewRes.json();
  // Debug log
  console.log("[InterviewDetails] id:", id, "interviewData:", interviewData);
  // interviewData.feedbacks is an array, interviewData.interviews is an array
  const interview = interviewData.interviews?.[0] || null;
  const feedback = interviewData.feedbacks?.[0] || null;

  if (!interview) redirect("/phases/interview-prep");

  // You may want to fetch user info from session if needed
  // For now, just pass empty string for userName and userId

  return (
    <>
      <div className="flex flex-row gap-4 justify-between">
        <div className="flex flex-row gap-4 items-center max-sm:flex-col">
          <div className="flex flex-row gap-4 items-center">
            <Image
              src={getRandomInterviewCover()}
              alt="cover-image"
              width={40}
              height={40}
              className="rounded-full object-cover size-[40px]"
            />
            <h3 className="capitalize">{interview.role} Interview</h3>
          </div>

          <DisplayTechIcons techStack={interview.techstack} />
        </div>

        <p className="bg-dark-200 px-4 py-2 rounded-lg h-fit">
          {interview.type}
        </p>
      </div>

      <Agent
        userName={""}
        userId={""}
        interviewId={id}
        type="interview"
        questions={interview.questions}
        feedbackId={feedback?.id}
      />

      {/* Show feedback summary if feedback exists */}
      {feedback && (
        <section className="section-feedback mt-8">
          <div className="flex flex-row justify-center">
            <h2 className="text-2xl font-semibold">
              Feedback Summary
            </h2>
          </div>

          <div className="flex flex-row justify-center ">
            <div className="flex flex-row gap-5">
              {/* Overall Impression */}
              <div className="flex flex-row gap-2 items-center">
                <Image src="/star.svg" width={22} height={22} alt="star" />
                <p>
                  Overall Impression: {" "}
                  <span className="text-primary-200 font-bold">
                    {feedback?.totalScore}
                  </span>
                  /100
                </p>
              </div>

              {/* Date */}
              <div className="flex flex-row gap-2">
                <Image src="/calendar.svg" width={22} height={22} alt="calendar" />
                <p>
                  {feedback?.createdAt
                    ? new Date(feedback.createdAt).toLocaleString()
                    : "N/A"}
                </p>
              </div>
            </div>
          </div>

          <hr />

          <p>{feedback?.finalAssessment}</p>

          {/* Interview Breakdown */}
          <div className="flex flex-col gap-4">
            <h3>Breakdown of the Interview:</h3>
            {feedback?.categoryScores?.map((category: { name: string; score: number; comment: string }, index: number) => (
              <div key={index}>
                <p className="font-bold">
                  {index + 1}. {category.name} ({category.score}/100)
                </p>
                <p>{category.comment}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <h4>Strengths</h4>
            <ul>
              {feedback?.strengths?.map((strength: string, index: number) => (
                <li key={index}>{strength}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h4>Areas for Improvement</h4>
            <ul>
              {feedback?.areasForImprovement?.map((area: string, index: number) => (
                <li key={index}>{area}</li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
};

export default InterviewDetails;
