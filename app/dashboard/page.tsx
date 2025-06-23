"use client";
import React, { useState, useEffect } from "react";
import {
  Clock,
  GitBranch,
  TrendingUp,
  Activity,
  Calendar,
  ChevronRight,
  Folder,
  CheckCircle,
  Circle,
  Code,
  Target,
  Flame,
  Award,
  BarChart3,
} from "lucide-react";

const FunctionalDashboardPage = () => {
  const [projectData, setProjectData] = useState({});
  const [recentActivity, setRecentActivity] = useState([]);
  const [dsaData, setDsaData] = useState([]);
  const [streakData, setStreakData] = useState({
    current: 1,
    longest: 1,
    today: false,
  });
  const [stats, setStats] = useState({
    totalProjects: 0,
    activeProjects: 0,
    completedSteps: 0,
    recentlyWorked: 0,
  });

  // Helper function to format project names
  const formatProjectName = (projectKey) => {
    if (!projectKey || projectKey === "") return "Untitled Project";
    return projectKey
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  // Helper function to format step names
  const formatStepName = (stepKey) => {
    return stepKey
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  // Helper function to calculate project progress percentage
  const calculateProgress = (completedSteps) => {
    const estimatedTotalSteps = Math.max(completedSteps.length + 2, 7);
    return Math.min((completedSteps.length / estimatedTotalSteps) * 100, 100);
  };

  // Helper function to get project status
  const getProjectStatus = (completedSteps, lastVisited) => {
    const daysSinceLastVisit = Math.floor(
      (new Date() - new Date(lastVisited)) / (1000 * 60 * 60 * 24)
    );

    if (completedSteps.length === 0)
      return {
        status: "Not Started",
        color: "text-gray-500 dark:text-gray-400",
      };
    if (daysSinceLastVisit <= 1)
      return { status: "Active", color: "text-green-500 dark:text-green-400" };
    if (daysSinceLastVisit <= 7)
      return { status: "Recent", color: "text-blue-500 dark:text-blue-400" };
    return {
      status: "Inactive",
      color: "text-yellow-500 dark:text-yellow-400",
    };
  };

  // Helper function to format relative time
  const formatRelativeTime = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMinutes = Math.floor((now - date) / (1000 * 60));

    if (diffInMinutes < 1) return "Just now";
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;

    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `${diffInHours}h ago`;

    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) return `${diffInDays}d ago`;

    return date.toLocaleDateString();
  };

  // Calculate DSA statistics
  const calculateDSAStats = (questionNumbers) => {
    if (!questionNumbers || questionNumbers.length === 0)
      return {
        totalSolved: 0,
        uniqueProblems: 0,
        recentlySolved: 0,
        highestProblem: 0,
      };

    const totalSolved = questionNumbers.length;
    const uniqueProblems = new Set(questionNumbers).size;
    const recentlySolved = questionNumbers.slice(-5).length; // Last 5 problems
    const highestProblem = Math.max(...questionNumbers);

    return { totalSolved, uniqueProblems, recentlySolved, highestProblem };
  };

  // Calculate streak data
  const calculateStreaks = () => {
    // Simulate streak calculation based on current date
    const today = new Date();
    const dayOfWeek = today.getDay();

    // Simple streak simulation - in real app, this would be based on actual activity data
    const currentStreak = Math.floor(Math.random() * 15) + 1;
    const longestStreak = Math.max(
      currentStreak,
      Math.floor(Math.random() * 30) + currentStreak
    );
    const workedToday = Math.random() > 0.3; // 70% chance worked today

    return {
      current: currentStreak,
      longest: longestStreak,
      today: workedToday,
    };
  };

  useEffect(() => {
    // Load all data from localStorage
    const loadAllData = () => {
      try {
        // Load project data
        const storedProjectData = localStorage.getItem("project-progress");
        if (storedProjectData) {
          const parsedData = JSON.parse(storedProjectData);
          setProjectData(parsedData);

          // Calculate project stats
          const projects = Object.entries(parsedData).filter(
            ([key]) => key !== ""
          );
          const totalProjects = projects.length;
          const activeProjects = projects.filter(([, data]) => {
            const daysSinceLastVisit = Math.floor(
              (new Date() - new Date(data.lastVisited)) / (1000 * 60 * 60 * 24)
            );
            return daysSinceLastVisit <= 7;
          }).length;
          const totalCompletedSteps = projects.reduce(
            (sum, [, data]) => sum + data.completedSteps.length,
            0
          );
          const recentlyWorked = projects.filter(([, data]) => {
            const daysSinceLastVisit = Math.floor(
              (new Date() - new Date(data.lastVisited)) / (1000 * 60 * 60 * 24)
            );
            return daysSinceLastVisit <= 1;
          }).length;

          setStats({
            totalProjects,
            activeProjects,
            completedSteps: totalCompletedSteps,
            recentlyWorked,
          });

          // Generate recent activity
          const activities = [];
          projects.forEach(([projectKey, data]) => {
            activities.push({
              id: `visit-${projectKey}`,
              type: "visit",
              project: projectKey,
              timestamp: data.lastVisited,
              description: `Worked on ${formatProjectName(projectKey)}`,
            });

            data.completedSteps.forEach((step, index) => {
              const stepTime = new Date(
                new Date(data.lastVisited).getTime() -
                  (data.completedSteps.length - index) * 30 * 60 * 1000
              );
              activities.push({
                id: `step-${projectKey}-${step}`,
                type: "step",
                project: projectKey,
                step: step,
                timestamp: stepTime.toISOString(),
                description: `Completed "${formatStepName(
                  step
                )}" in ${formatProjectName(projectKey)}`,
              });
            });
          });

          const sortedActivities = activities
            .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
            .slice(0, 10);

          setRecentActivity(sortedActivities);
        }

        // Load DSA data
        const storedDSAData = localStorage.getItem("dsa-solved");
        if (storedDSAData) {
          const parsedDSAData = JSON.parse(storedDSAData);
          setDsaData(Array.isArray(parsedDSAData) ? parsedDSAData : []);
        }

        // Load or calculate streak data
        // const storedStreakData = localStorage.getItem("coding-streaks");
        // if (storedStreakData) {
        //   setStreakData(JSON.parse(storedStreakData));
        // } else {
        //   const calculatedStreaks = calculateStreaks();
        //   setStreakData(calculatedStreaks);
        // }
      } catch (error) {
        console.error("Error loading data:", error);
      }
    };

    loadAllData();
    const interval = setInterval(loadAllData, 30000);
    return () => clearInterval(interval);
  }, []);

  const projects = Object.entries(projectData).filter(([key]) => key !== "");
  const dsaStats = calculateDSAStats(dsaData);

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-black transition-colors">
      {/* Header */}
      <div className="">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Dashboard
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                Track your coding progress, projects, and streaks
              </p>
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Last updated: {formatRelativeTime(new Date().toISOString())}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-sm p-6 border border-slate-200 dark:border-slate-700">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <Folder className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  Total Projects
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stats.totalProjects}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-sm p-6 border border-slate-200 dark:border-slate-700">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                <TrendingUp className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  Active Projects
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stats.activeProjects}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-sm p-6 border border-slate-200 dark:border-slate-700">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                <Code className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  DSA Problems
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {dsaStats.totalSolved}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-sm p-6 border border-slate-200 dark:border-slate-700">
            <div className="flex items-center">
              <div className="p-2 bg-orange-100 dark:bg-orange-900 rounded-lg">
                <Flame className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  Current Streak
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {streakData.current}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* DSA and Streaks Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* DSA Progress */}
          <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
            <div className="p-6 border-b border-slate-200 dark:border-slate-700">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  DSA Progress
                </h2>
                <Code className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </div>
            </div>

            <div className="p-6">
              {dsaData.length === 0 ? (
                <div className="text-center py-8">
                  <BarChart3 className="h-12 w-12 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-500 dark:text-gray-400">
                    No DSA data found
                  </p>
                  <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">
                    Start solving problems to see progress
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-neutral-50 dark:bg-neutral-700 rounded-lg">
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">
                        {dsaStats.totalSolved}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Total Solved
                      </p>
                    </div>
                    <div className="text-center p-4 bg-neutral-50 dark:bg-neutral-700 rounded-lg">
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">
                        {dsaStats.uniqueProblems}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Unique Problems
                      </p>
                    </div>
                  </div>

                  {/* Recent DSA Problems */}
                  <div className="mt-8">
                    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Recent Problems Solved
                    </h4>
                    <div className="flex gap-2 flex-wrap">
                      {dsaData.slice(-10).map((problemNum, index) => (
                        <div key={index} className="text-center">
                          <div className="px-3 py-1 bg-blue-100 dark:bg-blue-900 rounded-full text-xs flex items-center justify-center text-blue-600 dark:text-blue-400 font-medium min-w-[2rem]">
                            #{problemNum}
                          </div>
                        </div>
                      ))}
                    </div>
                    {dsaData.length > 10 && (
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
                        Showing last 10 problems. Total: {dsaData.length}{" "}
                        problems solved.
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Streaks */}
          <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
            <div className="p-6 border-b border-slate-200 dark:border-slate-700">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Coding Streaks
                </h2>
                <Flame className="h-5 w-5 text-orange-500 dark:text-orange-400" />
              </div>
            </div>

            <div className="p-6">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-4">
                    <Flame className="h-12 w-12 text-orange-500 dark:text-orange-400" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {streakData.current} Days
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Current Streak
                  </p>
                  {streakData.today && (
                    <div className="mt-2 inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Worked Today
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Projects Section */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
              <div className="p-6 border-b border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Your Projects
                  </h2>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {projects.length} project{projects.length !== 1 ? "s" : ""}
                  </span>
                </div>
              </div>

              <div className="p-6">
                {projects.length === 0 ? (
                  <div className="text-center py-12">
                    <Folder className="h-12 w-12 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                    <p className="text-gray-500 dark:text-gray-400">
                      No projects found
                    </p>
                    <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">
                      Start working on a project to see it here
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {projects.map(([projectKey, data]) => {
                      const progress = calculateProgress(data.completedSteps);
                      const projectStatus = getProjectStatus(
                        data.completedSteps,
                        data.lastVisited
                      );

                      return (
                        <div
                          key={projectKey}
                          className="border border-slate-200 dark:border-slate-700 rounded-lg p-4 hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                                  {formatProjectName(projectKey)}
                                </h3>
                                <span
                                  className={`text-xs px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-700 ${projectStatus.color}`}
                                >
                                  {projectStatus.status}
                                </span>
                              </div>

                              <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300 mb-3">
                                <div className="flex items-center gap-1">
                                  <CheckCircle className="h-4 w-4" />
                                  <span>
                                    {data.completedSteps.length} steps completed
                                  </span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Clock className="h-4 w-4" />
                                  <span>
                                    Last worked{" "}
                                    {formatRelativeTime(data.lastVisited)}
                                  </span>
                                </div>
                              </div>

                              <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2 mb-3">
                                <div
                                  className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full transition-all duration-300"
                                  style={{ width: `${progress}%` }}
                                ></div>
                              </div>

                              {data.completedSteps.length > 0 && (
                                <div className="mt-3">
                                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Recent Steps:
                                  </p>
                                  <div className="flex flex-wrap gap-2">
                                    {data.completedSteps
                                      .slice(-3)
                                      .map((step, index) => (
                                        <span
                                          key={index}
                                          className="text-xs bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-2 py-1 rounded"
                                        >
                                          {formatStepName(step)}
                                        </span>
                                      ))}
                                    {data.completedSteps.length > 3 && (
                                      <span className="text-xs bg-neutral-100 dark:bg-neutral-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded">
                                        +{data.completedSteps.length - 3} more
                                      </span>
                                    )}
                                  </div>
                                </div>
                              )}
                            </div>

                            <div className="ml-4">
                              <div className="text-right">
                                <div className="text-sm font-medium text-gray-900 dark:text-white">
                                  {progress.toFixed(0)}%
                                </div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">
                                  Complete
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Recent Activity Section */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
              <div className="p-6 border-b border-slate-200 dark:border-slate-700">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Recent Activity
                </h2>
              </div>

              <div className="p-6">
                {recentActivity.length === 0 ? (
                  <div className="text-center py-8">
                    <Activity className="h-8 w-8 text-gray-300 dark:text-gray-600 mx-auto mb-3" />
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      No recent activity
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {recentActivity.map((activity) => (
                      <div
                        key={activity.id}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-700"
                      >
                        <div className="flex-shrink-0 mt-1">
                          {activity.type === "step" ? (
                            <CheckCircle className="h-4 w-4 text-green-500 dark:text-green-400" />
                          ) : (
                            <GitBranch className="h-4 w-4 text-blue-500 dark:text-blue-400" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-gray-900 dark:text-white mb-1">
                            {activity.description}
                          </p>
                          <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                            <Calendar className="h-3 w-3" />
                            <span>
                              {formatRelativeTime(activity.timestamp)}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunctionalDashboardPage;
