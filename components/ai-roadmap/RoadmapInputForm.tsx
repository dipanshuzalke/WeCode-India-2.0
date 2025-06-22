"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";

import Loader from "@/components/Loader";
import {
  generateMonthWisePlan,
  generateWeeklyBreakdown,
} from "@/utils/generateRoadmap";
import { generateRoadmapPlan } from "@/utils/roadmapGenerator";
import { RoadmapInput } from "@/types/roadmapTypes";
import RoadmapFlow from "@/components/ai-roadmap/RoadmapFlow";

const initialState = {
  goal: "",
  skill_level: "",
  months: "",
  daily_hours: "",
  target_companies_or_roles: "",
};

export default function RoadmapInputForm() {
  const router = useRouter();
  const [values, setValues] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const [showPlan, setShowPlan] = useState(false);
  const [roadmapInput, setRoadmapInput] = useState<RoadmapInput | null>(null);
  const [generating, setGenerating] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSkillLevelChange = (newValue: string) => {
    setValues((prev) => ({
      ...prev,
      skill_level: newValue,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { goal, skill_level, months, daily_hours } = values;

    // Validate required fields
    if (!goal?.trim() || !skill_level || !months || !daily_hours) {
      toast({
        title: "Missing required fields",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      setLoading(false);
      return;
    }

    // Validate numeric fields
    const monthsNum = Number(months);
    const hoursNum = Number(daily_hours);
    
    if (isNaN(monthsNum) || monthsNum < 1 || monthsNum > 24) {
      toast({
        title: "Invalid duration",
        description: "Please enter a valid number of months (1-24)",
        variant: "destructive",
      });
      setLoading(false);
      return;
    }

    if (isNaN(hoursNum) || hoursNum < 1 || hoursNum > 16) {
      toast({
        title: "Invalid hours",
        description: "Please enter a valid number of daily hours (1-16)",
        variant: "destructive",
      });
      setLoading(false);
      return;
    }

    const insertData = {
      goal: goal.trim(),
      skillLevel: skill_level,
      months: monthsNum,
      dailyHours: hoursNum,
      targetCompaniesOrRoles: values.target_companies_or_roles?.trim() || null,
    };

    try {
      const res = await fetch("/api/submit-user-roadmap-input", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(insertData),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Failed to submit roadmap");
      }

      const data = await res.json();
      toast({ title: "Success!", description: "Your roadmap has been created." });
      setGenerating(true);
      setTimeout(() => {
        setRoadmapInput({
          goal,
          skillLevel: skill_level,
          months: Number(months),
          dailyHours: Number(daily_hours),
          targetCompaniesOrRoles: values.target_companies_or_roles || "",
        });
        setShowPlan(true);
        setGenerating(false);
        router.replace(`/roadmap/view?id=${data.id}`);
      }, 8000);
    } catch (error: unknown) {
      let message = "Unknown error";
      if (typeof error === "object" && error && "message" in error && typeof (error as { message?: string }).message === "string") {
        message = (error as { message: string }).message;
      }
      toast({
        title: "Failed to submit",
        description: message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (generating) {
    return (
      <div className="min-h-screen bg-white dark:bg-neutral-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-neutral-900 dark:bg-neutral-100 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <svg
                className="w-8 h-8 text-white dark:text-neutral-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h1 className="text-4xl font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight mb-6">
              Creating Your Roadmap
            </h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              We&apos;re crafting a personalized learning path tailored to your goals and schedule. This will just take a moment.
            </p>
          </div>
          <Loader />
        </div>
      </div>
    );
  }

  if (showPlan && roadmapInput) {
    const {
      goal,
      skillLevel,
      months,
    } = roadmapInput;
    const plan = generateMonthWisePlan(goal, skillLevel, months);
    generateWeeklyBreakdown(roadmapInput, plan);

    // Use the new utility for capstone, mock, and revision
    generateRoadmapPlan(roadmapInput);

    return (
      <RoadmapFlow roadmapInput={roadmapInput} />
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-neutral-900 dark:bg-neutral-100 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <svg
              className="w-8 h-8 text-white dark:text-neutral-900"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h1 className="text-4xl font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight mb-6">
            Create Your Learning Roadmap
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Share your learning goals and preferences with us. We&apos;ll create a structured, personalized roadmap to help you achieve your objectives efficiently.
          </p>
        </div>

        {/* Form Container */}
        <form
          className="bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 rounded-3xl overflow-hidden"
          onSubmit={handleSubmit}
        >
          <div className="p-8 sm:p-12 space-y-12">
            {/* Learning Goals Section */}
            <div className="space-y-8">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-950/30 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-blue-600 dark:text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight">
                    Learning Goals
                  </h2>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed ml-11">
                  Define what you want to achieve and your current level of expertise.
                </p>
              </div>

              <div className="space-y-8 ml-11">
                <div className="space-y-3">
                  <label
                    htmlFor="goal"
                    className="block text-sm font-semibold text-neutral-900 dark:text-neutral-100"
                  >
                    What do you want to learn?
                    <span className="text-red-500 ml-1.5" aria-label="required">*</span>
                  </label>
                  <Textarea
                    id="goal"
                    name="goal"
                    value={values.goal}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    placeholder="Describe your learning goals in detail. For example: 'Master full-stack web development to build modern applications' or 'Learn data science and machine learning for career transition'"
                    className="min-h-[120px] px-4 py-4 text-base border-neutral-300 dark:border-neutral-700 rounded-2xl bg-white dark:bg-neutral-900 
                    focus:ring-2 focus:ring-neutral-900 dark:focus:ring-neutral-100 focus:border-transparent
                    transition-all duration-200 ease-out placeholder:text-neutral-500 dark:placeholder:text-neutral-500 resize-none
                    shadow-sm hover:shadow-md focus:shadow-md"
                  />
                </div>

                <div className="space-y-3">
                  <label
                    htmlFor="skill_level"
                    className="block text-sm font-semibold text-neutral-900 dark:text-neutral-100"
                  >
                    Current Skill Level
                    <span className="text-red-500 ml-1.5" aria-label="required">*</span>
                  </label>
                  <Select
                    value={values.skill_level}
                    onValueChange={handleSkillLevelChange}
                    required
                  >
                    <SelectTrigger
                      id="skill_level"
                      name="skill_level"
                      className="w-full h-14 px-4 text-base border-neutral-300 dark:border-neutral-700 rounded-2xl bg-white dark:bg-neutral-900 
                      focus:ring-2 focus:ring-neutral-900 dark:focus:ring-neutral-100 focus:border-transparent
                      transition-all duration-200 ease-out shadow-sm hover:shadow-md"
                      aria-required="true"
                    >
                      <SelectValue placeholder="Select your current expertise level" />
                    </SelectTrigger>
                    <SelectContent className="rounded-2xl border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900">
                      <SelectItem value="Beginner" className="text-base py-4 rounded-xl">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <div>
                            <div className="font-medium">Beginner</div>
                            <div className="text-sm text-neutral-500">Starting from the basics</div>
                          </div>
                        </div>
                      </SelectItem>
                      <SelectItem value="Intermediate" className="text-base py-4 rounded-xl">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                          <div>
                            <div className="font-medium">Intermediate</div>
                            <div className="text-sm text-neutral-500">Have some foundational knowledge</div>
                          </div>
                        </div>
                      </SelectItem>
                      <SelectItem value="Advanced" className="text-base py-4 rounded-xl">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                          <div>
                            <div className="font-medium">Advanced</div>
                            <div className="text-sm text-neutral-500">Experienced, looking to specialize</div>
                          </div>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Time Commitment Section */}
            <div className="space-y-8">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-100 dark:bg-orange-950/30 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-orange-600 dark:text-orange-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight">
                    Time Commitment
                  </h2>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed ml-11">
                  Help us create a realistic schedule that fits your lifestyle.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ml-11">
                <div className="space-y-3">
                  <label
                    htmlFor="months"
                    className="block text-sm font-semibold text-neutral-900 dark:text-neutral-100"
                  >
                    Duration (Months)
                    <span className="text-red-500 ml-1.5" aria-label="required">*</span>
                  </label>
                  <Input
                    id="months"
                    name="months"
                    type="number"
                    min={1}
                    max={24}
                    value={values.months}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    placeholder="6"
                    className="h-14 px-4 text-base border-neutral-300 dark:border-neutral-700 rounded-2xl bg-white dark:bg-neutral-900 
                    focus:ring-2 focus:ring-neutral-900 dark:focus:ring-neutral-100 focus:border-transparent
                    transition-all duration-200 ease-out placeholder:text-neutral-500 dark:placeholder:text-neutral-500
                    shadow-sm hover:shadow-md focus:shadow-md"
                  />
                  <p className="text-xs text-neutral-500 dark:text-neutral-500">1-24 months</p>
                </div>

                <div className="space-y-3">
                  <label
                    htmlFor="daily_hours"
                    className="block text-sm font-semibold text-neutral-900 dark:text-neutral-100"
                  >
                    Daily Hours
                    <span className="text-red-500 ml-1.5" aria-label="required">*</span>
                  </label>
                  <Input
                    id="daily_hours"
                    name="daily_hours"
                    type="number"
                    min={1}
                    max={16}
                    value={values.daily_hours}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    placeholder="2"
                    className="h-14 px-4 text-base border-neutral-300 dark:border-neutral-700 rounded-2xl bg-white dark:bg-neutral-900 
                    focus:ring-2 focus:ring-neutral-900 dark:focus:ring-neutral-100 focus:border-transparent
                    transition-all duration-200 ease-out placeholder:text-neutral-500 dark:placeholder:text-neutral-500
                    shadow-sm hover:shadow-md focus:shadow-md"
                  />
                  <p className="text-xs text-neutral-500 dark:text-neutral-500">1-16 hours per day</p>
                </div>
              </div>
            </div>

            {/* Target Destination Section */}
            <div className="space-y-8">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-950/30 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-purple-600 dark:text-purple-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight">
                    Target Destination
                  </h2>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed ml-11">
                  Share your career aspirations to make your roadmap more targeted. This is optional but helpful.
                </p>
              </div>

              <div className="space-y-3 ml-11">
                <label
                  htmlFor="target_companies_or_roles"
                  className="block text-sm font-semibold text-neutral-900 dark:text-neutral-100"
                >
                  Target Companies, Exams, or Roles
                  <span className="text-neutral-500 ml-2 text-xs font-normal">(Optional)</span>
                </label>
                <Input
                  id="target_companies_or_roles"
                  name="target_companies_or_roles"
                  value={values.target_companies_or_roles}
                  onChange={handleChange}
                  placeholder="e.g., Software Engineer at Google, Data Scientist at Netflix, UPSC Civil Services, AWS Solutions Architect..."
                  className="h-14 px-4 text-base border-neutral-300 dark:border-neutral-700 rounded-2xl bg-white dark:bg-neutral-900 
                  focus:ring-2 focus:ring-neutral-900 dark:focus:ring-neutral-100 focus:border-transparent
                  transition-all duration-200 ease-out placeholder:text-neutral-500 dark:placeholder:text-neutral-500
                  shadow-sm hover:shadow-md focus:shadow-md"
                />
              </div>
            </div>
          </div>

          {/* Submit Section */}
          <div className="bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 px-8 sm:px-12 py-8">
            <div className="space-y-4">
              <Button
                type="submit"
                disabled={loading || generating}
                className="w-full h-16 text-base font-semibold bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 
                hover:bg-neutral-800 dark:hover:bg-neutral-200 rounded-2xl shadow-sm hover:shadow-md 
                transform hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 ease-out 
                disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:shadow-sm
                focus:ring-2 focus:ring-neutral-900 dark:focus:ring-neutral-100 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-neutral-950"
              >
                {loading || generating ? (
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-5 h-5 border-2 border-white/30 dark:border-neutral-900/30 border-t-white dark:border-t-neutral-900 rounded-full animate-spin"></div>
                    <span>Creating Your Roadmap...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-3">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    <span>Generate My Learning Roadmap</span>
                  </div>
                )}
              </Button>

              <p className="text-center text-sm text-neutral-500 dark:text-neutral-500 leading-relaxed">
                By submitting, you&apos;ll receive a personalized learning roadmap based on your preferences and goals.
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
