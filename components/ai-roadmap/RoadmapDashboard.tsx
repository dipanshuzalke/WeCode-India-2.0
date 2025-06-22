"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { RoadmapInput } from "@/types/roadmapTypes";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

interface RoadmapData extends RoadmapInput {
  id: string;
  createdAt: string;
  updatedAt: string;
}

export default function RoadmapDashboard() {
  const router = useRouter();
  const { toast } = useToast();
  const [roadmaps, setRoadmaps] = useState<RoadmapData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRoadmaps = async () => {
      try {
        const response = await fetch('/api/get-user-roadmaps');
        if (!response.ok) throw new Error('Failed to fetch roadmaps');
        const data = await response.json();
        setRoadmaps(data);
      } catch (error) {
        console.error('Error fetching roadmaps:', error);
        toast({
          title: "Error",
          description: "Failed to load your roadmaps",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };
    fetchRoadmaps();
  }, [toast]);

  const handleViewRoadmap = (roadmapId: string) => {
    router.push(`/roadmap/view?id=${roadmapId}`);
  };

  const handleNewRoadmap = () => {
    router.push('/roadmap/create');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-neutral-950">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-8 h-8 border-2 border-neutral-200 dark:border-neutral-800 border-t-neutral-900 dark:border-t-neutral-100 rounded-full animate-spin"></div>
          <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Loading your roadmaps...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header Section */}
        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-neutral-900 dark:bg-neutral-100 rounded-xl flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white dark:text-neutral-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-4xl font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight">
                Learning Roadmaps
              </h1>
            </div>
          </div>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 font-normal max-w-2xl leading-relaxed">
            Your personalized learning paths designed to help you achieve your goals efficiently and systematically.
          </p>
        </div>

        {/* Dashboard Content */}
        {roadmaps.length > 0 ? (
          <div className="space-y-8">
            {/* Roadmap Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {roadmaps.map((roadmap) => (
                <div
                  key={roadmap.id}
                  className="group bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 hover:bg-neutral-100/50 dark:hover:bg-neutral-900/80 transition-all duration-200 ease-out hover:shadow-sm dark:hover:shadow-none"
                >
                  <div className="space-y-6">
                    {/* Roadmap Header */}
                    <div className="space-y-3">
                      <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight leading-tight">
                        {roadmap.goal}
                      </h2>
                      
                      {/* Metadata */}
                      <div className="flex items-center space-x-4 text-sm text-neutral-600 dark:text-neutral-400">
                        <div className="flex items-center space-x-1">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                          <span className="font-medium">{roadmap.skillLevel}</span>
                        </div>
                        <div className="w-px h-4 bg-neutral-300 dark:bg-neutral-700"></div>
                        <span>{roadmap.months} months</span>
                        <div className="w-px h-4 bg-neutral-300 dark:bg-neutral-700"></div>
                        <span>{roadmap.dailyHours}h daily</span>
                      </div>

                      {/* Target */}
                      {roadmap.targetCompaniesOrRoles && (
                        <div className="p-3 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/30 rounded-xl">
                          <p className="text-sm text-blue-800 dark:text-blue-200 font-medium">
                            Target: {roadmap.targetCompaniesOrRoles}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-neutral-200 dark:border-neutral-800">
                      <p className="text-xs font-medium text-neutral-500 dark:text-neutral-500 uppercase tracking-wide">
                        Created {new Date(roadmap.createdAt).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </p>
                      <div className="flex items-center space-x-2">
                        <Button
                          onClick={() => router.push(`/roadmap/analytics?id=${roadmap.id}`)}
                          variant="ghost"
                          size="sm"
                          className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-200 dark:hover:bg-neutral-800 font-medium"
                        >
                          Analytics
                        </Button>
                        <Button
                          onClick={() => handleViewRoadmap(roadmap.id)}
                          size="sm"
                          className="bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-200 font-medium px-4 shadow-sm"
                        >
                          View Roadmap
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Create New Button */}
            <div className="pt-8">
              <Button
                onClick={handleNewRoadmap}
                className="w-full h-16 text-base font-semibold bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 ease-out group"
              >
                <div className="flex items-center justify-center space-x-3">
                  <svg
                    className="w-5 h-5 group-hover:scale-110 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  <span>Create New Roadmap</span>
                </div>
              </Button>
            </div>
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-20">
            <div className="space-y-6">
              <div className="w-16 h-16 bg-neutral-100 dark:bg-neutral-900 border-2 border-dashed border-neutral-300 dark:border-neutral-700 rounded-2xl flex items-center justify-center mx-auto">
                <svg
                  className="w-7 h-7 text-neutral-400 dark:text-neutral-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight">
                  Create Your First Roadmap
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400 max-w-md mx-auto leading-relaxed">
                  Get started by creating a personalized learning roadmap tailored to your goals and schedule.
                </p>
              </div>

              <div className="pt-4">
                <Button
                  onClick={handleNewRoadmap}
                  className="bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-200 font-semibold px-8 py-3 rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
                >
                  Create New Roadmap
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
