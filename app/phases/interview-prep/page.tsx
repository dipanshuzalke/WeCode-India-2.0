"use client";

import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import InterviewCard from "@/components/ai-interviewer/InterviewCard";
import { Play, Sparkles, Brain, TrendingUp, Clock, Calendar } from "lucide-react";

interface Feedback {
  id: string;
  interviewId: string;
  totalScore: number;
  categoryScores: Array<{
    name: string;
    score: number;
    comment: string;
  }>;
  strengths: string[];
  areasForImprovement: string[];
  finalAssessment: string;
  createdAt: string;
}

interface Interview {
  id: string;
  role: string;
  level: string;
  questions: string[];
  techstack: string[];
  createdAt: string;
  userId: string;
  type: string;
  finalized: boolean;
  feedbacks?: Feedback[];
}

function Home() {
  const { data: session } = useSession();
  const userId = session?.user?.id;
  const [userInterviews, setUserInterviews] = useState<Interview[]>([]);

  useEffect(() => {
    if (!userId) return;
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/interview?userId=${userId}`)
      .then(res => res.ok ? res.json() : { interviews: [] })
      .then(data => setUserInterviews(data.interviews || []));
  }, [userId]);

  const hasPastInterviews = userInterviews.length > 0;

  const pendingCount = userInterviews.filter(
    interview => !Array.isArray(interview.feedbacks) || interview.feedbacks.length === 0
  ).length;

  const completedCount = userInterviews.filter(
    interview => Array.isArray(interview.feedbacks) && interview.feedbacks.length > 0
  ).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-14">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge 
                  variant="secondary" 
                  className="w-fit px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20 hover:bg-primary/15 transition-colors"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  AI-Powered Practice
                </Badge>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
                  Get Interview-Ready with{' '}
                  <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                    AI-Powered
                  </span>{' '}
                  Practice & Feedback
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  Practice real interview questions with our advanced AI system and receive 
                  instant, personalized feedback to boost your confidence and performance.
                </p>
              </div>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild 
                  size="lg"
                  className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02]"
                >
                  <Link href="/phases/interview-prep/generate-interview">
                    <Play className="w-5 h-5 mr-2 group-hover:translate-x-0.5 transition-transform" />
                    Start an Interview
                  </Link>
                </Button>
                
                {hasPastInterviews && (
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="px-8 py-6 text-lg font-medium rounded-xl border-2 hover:bg-muted/50 transition-all duration-200"
                    asChild
                  >
                    <Link href="#interviews">
                      <TrendingUp className="w-5 h-5 mr-2" />
                      View Progress
                    </Link>
                  </Button>
                )}
              </div>

              {/* Stats */}
              {hasPastInterviews && (
                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">{completedCount}</div>
                    <div className="text-sm text-muted-foreground">Completed Interviews</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">{pendingCount}</div>
                    <div className="text-sm text-muted-foreground">Pending Interviews</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">95%</div>
                    <div className="text-sm text-muted-foreground">Success Rate</div>
                  </div>
                </div>
              )}
            </div>

            {/* Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-3xl blur-3xl" />
              <div className="relative bg-gradient-to-br from-background to-muted/30 p-8 rounded-3xl border border-border/50 shadow-2xl">
                <Image
                  src="/robot.png"
                  alt="AI Interview Assistant"
                  width={400}
                  height={400}
                  className="w-full h-auto rounded-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
{/* Interview Feedback & Generated Interviews Section */}
<section id="interviews" className="py-16 lg:py-24 bg-gradient-to-b from-muted/10 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            
            {hasPastInterviews ? (
              <>
                {/* Quick Stats Bar */}
                <Card className="border-border/50 bg-gradient-to-r from-muted/30 to-background shadow-lg">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Brain className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold">{completedCount}</div>
                          <div className="text-sm text-muted-foreground">Completed Interviews</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-yellow-500/10 rounded-lg">
                          <TrendingUp className="w-5 h-5 text-yellow-500" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold">{pendingCount}</div>
                          <div className="text-sm text-muted-foreground">Pending Interviews</div>
                        </div>
                      </div>
                      {/* Keep the other two stat blocks as they are, or update as needed */}
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-blue-500/10 rounded-lg">
                          <Clock className="w-5 h-5 text-blue-500" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold">{Math.round(userInterviews.length * 25)}m</div>
                          <div className="text-sm text-muted-foreground">Practice Time</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-purple-500/10 rounded-lg">
                          <Calendar className="w-5 h-5 text-purple-500" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold">
                            {Math.ceil((Date.now() - new Date(userInterviews[userInterviews.length - 1]?.createdAt || Date.now()).getTime()) / (1000 * 60 * 60 * 24))}d
                          </div>
                          <div className="text-sm text-muted-foreground">Last Session</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Interview Feedbacks Section */}
                <div className="space-y-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-foreground flex items-center gap-3">
                        <div className="w-2 h-8 bg-gradient-to-b from-green-500 to-green-600 rounded-full"></div>
                        Your Interview Feedbacks
                      </h2>
                      <p className="text-muted-foreground mt-2 text-base">
                        Review your completed interviews and track your improvement over time.
                      </p>
                    </div>
                    <Badge variant="secondary" className="px-3 py-1 bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20">
                      {completedCount} Completed
                    </Badge>
                  </div>

                  {/* Compact Interview Cards Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* First row: interviews with feedbacks */}
                    {userInterviews.filter(interview => Array.isArray(interview.feedbacks) && interview.feedbacks.length > 0).map((interview, index) => (
                      <div
                        key={interview.id}
                        className="transform transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
                        style={{
                          animationDelay: `${index * 50}ms`,
                          animation: 'fadeInUp 0.4s ease-out forwards'
                        }}
                      >
                        <InterviewCard
                          userId={userId}
                          interviewId={interview.id}
                          role={interview.role}
                          type={interview.type}
                          techstack={interview.techstack}
                          createdAt={interview.createdAt}
                          feedbacks={interview.feedbacks}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Separator */}
                  <div className="relative my-8">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-border/50"></div>
                    </div>
                    <div className="relative flex justify-center">
                      <div className="bg-background px-6 py-2 rounded-full border border-border/50">
                        <Sparkles className="w-4 h-4 text-muted-foreground" />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-foreground flex items-center gap-3">
                        <div className="w-2 h-8 bg-gradient-to-b from-green-500 to-green-600 rounded-full"></div>
                        Your Generated Interviews
                      </h2>
                      <p className="text-muted-foreground mt-2 text-base">
                        {pendingCount > 0
                          ? "Start or continue your pending interviews. Once completed, you'll receive detailed feedback."
                          : "No pending interviews. All your interviews are completed!"}
                      </p>
                    </div>
                    <Badge variant="secondary" className="px-3 py-1 bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/20">
                      {pendingCount} Pending
                    </Badge>
                  </div>

                  {/* Second row: interviews without feedbacks */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {userInterviews.filter(interview => !Array.isArray(interview.feedbacks) || interview.feedbacks.length === 0).map((interview, index) => (
                      <div
                        key={interview.id}
                        className="transform transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
                        style={{
                          animationDelay: `${index * 50}ms`,
                          animation: 'fadeInUp 0.4s ease-out forwards'
                        }}
                      >
                        <InterviewCard
                          userId={userId}
                          interviewId={interview.id}
                          role={interview.role}
                          type={interview.type}
                          techstack={interview.techstack}
                          createdAt={interview.createdAt}
                          feedbacks={interview.feedbacks}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : "You havn;t taken any interview"}

            </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default Home;