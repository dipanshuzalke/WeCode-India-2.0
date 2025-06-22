"use client";
import React, { useState, useEffect } from "react";
import {
  Cloud,
  Code,
  Layers,
  Star,
  Users,
  Clock,
  BookOpen,
  Play,
  Download,
  ExternalLink,
  Sun,
  Moon,
} from "lucide-react";

const CloudComputingPage = () => {
  const [activeTab, setActiveTab] = useState("projects");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  const projects = [
    {
      id: 1,
      title: "Serverless E-commerce API",
      description: "AWS Lambda-based REST API with DynamoDB and API Gateway",
      difficulty: "Advanced",
      duration: "3-4 weeks",
      tech: ["AWS Lambda", "DynamoDB", "API Gateway", "CloudFormation"],
      rating: 4.8,
      students: 1120,
      category: "Serverless",
      provider: "AWS",
    },
    {
      id: 2,
      title: "Multi-Cloud CI/CD Pipeline",
      description: "Automated deployment pipeline across AWS, Azure, and GCP",
      difficulty: "Expert",
      duration: "4-5 weeks",
      tech: ["Jenkins", "Docker", "Kubernetes", "Terraform"],
      rating: 4.9,
      students: 780,
      category: "DevOps",
      provider: "Multi-Cloud",
    },
    {
      id: 3,
      title: "Azure Data Analytics Platform",
      description: "Big data processing with Azure Data Factory and Databricks",
      difficulty: "Advanced",
      duration: "3-4 weeks",
      tech: ["Azure Data Factory", "Databricks", "Power BI", "Cosmos DB"],
      rating: 4.7,
      students: 890,
      category: "Analytics",
      provider: "Azure",
    },
    {
      id: 4,
      title: "GCP Machine Learning Pipeline",
      description: "End-to-end ML pipeline with Vertex AI and BigQuery",
      difficulty: "Advanced",
      duration: "4-5 weeks",
      tech: ["Vertex AI", "BigQuery", "Cloud Functions", "Pub/Sub"],
      rating: 4.6,
      students: 650,
      category: "Machine Learning",
      provider: "GCP",
    },
    {
      id: 5,
      title: "Microservices on Kubernetes",
      description: "Containerized microservices architecture with service mesh",
      difficulty: "Expert",
      duration: "5-6 weeks",
      tech: ["Kubernetes", "Istio", "Helm", "Prometheus"],
      rating: 4.8,
      students: 567,
      category: "Containers",
      provider: "Multi-Cloud",
    },
    {
      id: 6,
      title: "Disaster Recovery Solution",
      description: "Multi-region backup and disaster recovery architecture",
      difficulty: "Advanced",
      duration: "3-4 weeks",
      tech: ["AWS S3", "RDS", "Route 53", "CloudWatch"],
      rating: 4.5,
      students: 445,
      category: "Infrastructure",
      provider: "AWS",
    },
  ];

  const resources = [
    {
      id: 1,
      title: "AWS Cloud Practitioner Essentials",
      type: "Course",
      duration: "10 hours",
      level: "Beginner",
      rating: 4.8,
      students: 3240,
      category: "AWS Fundamentals",
    },
    {
      id: 2,
      title: "Azure Architecture Patterns",
      type: "Workshop",
      duration: "6 hours",
      level: "Intermediate",
      rating: 4.7,
      students: 1890,
      category: "Azure Architecture",
    },
    {
      id: 3,
      title: "Google Cloud Platform Deep Dive",
      type: "Course",
      duration: "12 hours",
      level: "Intermediate",
      rating: 4.6,
      students: 2130,
      category: "GCP",
    },
    {
      id: 4,
      title: "Kubernetes Administration",
      type: "Certification Prep",
      duration: "15 hours",
      level: "Advanced",
      rating: 4.9,
      students: 1560,
      category: "Kubernetes",
    },
    {
      id: 5,
      title: "Serverless Architecture Patterns",
      type: "Tutorial",
      duration: "8 hours",
      level: "Intermediate",
      rating: 4.7,
      students: 2340,
      category: "Serverless",
    },
  ];

  const technologies = [
    {
      name: "AWS",
      level: 92,
      color: "from-orange-400 to-orange-600",
      icon: "☁️",
    },
    {
      name: "Azure",
      level: 88,
      color: "from-blue-400 to-blue-600",
      icon: "🔷",
    },
    {
      name: "Google Cloud",
      level: 85,
      color: "from-red-400 to-yellow-400",
      icon: "🌤️",
    },
    {
      name: "Kubernetes",
      level: 90,
      color: "from-blue-500 to-purple-600",
      icon: "⚓",
    },
    {
      name: "Docker",
      level: 87,
      color: "from-blue-400 to-blue-800",
      icon: "🐳",
    },
    {
      name: "Terraform",
      level: 83,
      color: "from-purple-400 to-purple-600",
      icon: "🏗️",
    },
    {
      name: "Serverless",
      level: 86,
      color: "from-green-400 to-green-600",
      icon: "⚡",
    },
    {
      name: "DevOps",
      level: 84,
      color: "from-indigo-400 to-indigo-600",
      icon: "🔄",
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return `text-green-600 bg-green-100 ${
          darkMode ? "dark:text-green-400 dark:bg-green-900/30" : ""
        }`;
      case "Intermediate":
        return `text-yellow-600 bg-yellow-100 ${
          darkMode ? "dark:text-yellow-400 dark:bg-yellow-900/30" : ""
        }`;
      case "Advanced":
        return `text-orange-600 bg-orange-100 ${
          darkMode ? "dark:text-orange-400 dark:bg-orange-900/30" : ""
        }`;
      case "Expert":
        return `text-red-600 bg-red-100 ${
          darkMode ? "dark:text-red-400 dark:bg-red-900/30" : ""
        }`;
      default:
        return `text-gray-600 bg-gray-100 ${
          darkMode ? "dark:text-gray-400 dark:bg-gray-800" : ""
        }`;
    }
  };

  const getProviderColor = (provider: string) => {
    switch (provider) {
      case "AWS":
        return "text-orange-600 bg-orange-100 dark:text-orange-400 dark:bg-orange-900/30";
      case "Azure":
        return "text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-900/30";
      case "GCP":
        return "text-red-600 bg-red-100 dark:text-red-400 dark:bg-red-900/30";
      case "Multi-Cloud":
        return "text-purple-600 bg-purple-100 dark:text-purple-400 dark:bg-purple-900/30";
      default:
        return "text-gray-600 bg-gray-100 dark:text-gray-400 dark:bg-gray-800";
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-200 ${
        darkMode
          ? "dark bg-gray-900 text-white"
          : "bg-gradient-to-br from-sky-50 via-white to-indigo-50"
      }`}
    >
      {/* Header with Dark Mode Toggle */}
      <div
        className={`${
          darkMode
            ? "bg-gradient-to-r from-sky-800 to-indigo-800"
            : "bg-gradient-to-r from-sky-500 to-indigo-500"
        } text-white`}
      >
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="bg-white/20 p-3 rounded-xl">
                <Cloud className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-4xl font-bold">Cloud Computing</h1>
                <p
                  className={`${
                    darkMode ? "text-sky-200" : "text-sky-100"
                  } text-lg`}
                >
                  AWS, Azure, Google Cloud, and serverless architectures
                </p>
              </div>
            </div>
            <button
              onClick={toggleDarkMode}
              className="bg-white/20 hover:bg-white/30 p-3 rounded-xl transition-colors"
            >
              {darkMode ? (
                <Sun className="w-6 h-6" />
              ) : (
                <Moon className="w-6 h-6" />
              )}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center space-x-3">
                <Code className="w-6 h-6" />
                <div>
                  <p className="text-2xl font-bold">26</p>
                  <p className={darkMode ? "text-sky-200" : "text-sky-100"}>
                    Projects
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center space-x-3">
                <BookOpen className="w-6 h-6" />
                <div>
                  <p className="text-2xl font-bold">48</p>
                  <p className={darkMode ? "text-sky-200" : "text-sky-100"}>
                    Resources
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center space-x-3">
                <Users className="w-6 h-6" />
                <div>
                  <p className="text-2xl font-bold">8.9K</p>
                  <p className={darkMode ? "text-sky-200" : "text-sky-100"}>
                    Students
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div
          className={`flex space-x-1 p-1 rounded-xl mb-8 ${
            darkMode ? "bg-gray-800" : "bg-gray-100"
          }`}
        >
          {[
            { id: "projects", label: "Projects", icon: Code },
            { id: "resources", label: "Resources", icon: BookOpen },
            { id: "technologies", label: "Technologies", icon: Layers },
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-lg transition-all ${
                activeTab === id
                  ? darkMode
                    ? "bg-gray-700 text-sky-400 shadow-sm"
                    : "bg-white text-sky-600 shadow-sm"
                  : darkMode
                  ? "text-gray-400 hover:text-gray-200"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{label}</span>
            </button>
          ))}
        </div>

        {/* Projects Tab */}
        {activeTab === "projects" && (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2
                className={`text-2xl font-bold ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Featured Projects
              </h2>
              <div className="flex space-x-2">
                {["All", "AWS", "Azure", "GCP", "Multi-Cloud"].map((filter) => (
                  <button
                    key={filter}
                    className={`px-4 py-2 border rounded-lg transition-colors ${
                      darkMode
                        ? "bg-gray-800 border-gray-700 hover:bg-gray-700 text-gray-300"
                        : "bg-white border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className={`rounded-xl shadow-sm hover:shadow-md transition-all border ${
                    darkMode
                      ? "bg-gray-800 border-gray-700 hover:border-gray-600"
                      : "bg-white border-gray-100"
                  }`}
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3
                          className={`text-lg font-semibold mb-2 ${
                            darkMode ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {project.title}
                        </h3>
                        <p
                          className={`text-sm mb-3 ${
                            darkMode ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          {project.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 mb-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(
                          project.difficulty
                        )}`}
                      >
                        {project.difficulty}
                      </span>
                      <div
                        className={`flex items-center space-x-1 ${
                          darkMode ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{project.duration}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="text-sm font-medium">
                          {project.rating}
                        </span>
                        <span
                          className={`text-sm ${
                            darkMode ? "text-gray-400" : "text-gray-500"
                          }`}
                        >
                          ({project.students})
                        </span>
                      </div>
                      <span
                        className={`text-xs px-2 py-1 rounded ${getProviderColor(
                          project.provider
                        )}`}
                      >
                        {project.provider}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className={`px-2 py-1 text-xs rounded ${
                            darkMode
                              ? "bg-sky-900/30 text-sky-400"
                              : "bg-sky-50 text-sky-700"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-2">
                      <button
                        className={`flex-1 py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2 ${
                          darkMode
                            ? "bg-sky-600 hover:bg-sky-700 text-white"
                            : "bg-sky-600 hover:bg-sky-700 text-white"
                        }`}
                      >
                        <Play className="w-4 h-4" />
                        <span>Start Project</span>
                      </button>
                      <button
                        className={`p-2 border rounded-lg transition-colors ${
                          darkMode
                            ? "border-gray-700 hover:bg-gray-700"
                            : "border-gray-200 hover:bg-gray-50"
                        }`}
                      >
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Resources Tab */}
        {activeTab === "resources" && (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2
                className={`text-2xl font-bold ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Learning Resources
              </h2>
              <div className="flex space-x-2">
                {["All", "Course", "Tutorial", "Workshop", "Certification"].map(
                  (filter) => (
                    <button
                      key={filter}
                      className={`px-4 py-2 border rounded-lg transition-colors ${
                        darkMode
                          ? "bg-gray-800 border-gray-700 hover:bg-gray-700 text-gray-300"
                          : "bg-white border-gray-200 hover:bg-gray-50"
                      }`}
                    >
                      {filter}
                    </button>
                  )
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resources.map((resource) => (
                <div
                  key={resource.id}
                  className={`rounded-xl shadow-sm hover:shadow-md transition-all border ${
                    darkMode
                      ? "bg-gray-800 border-gray-700 hover:border-gray-600"
                      : "bg-white border-gray-100"
                  }`}
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3
                            className={`text-lg font-semibold ${
                              darkMode ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {resource.title}
                          </h3>
                          <span
                            className={`px-2 py-1 text-xs rounded ${
                              darkMode
                                ? "bg-purple-900/30 text-purple-400"
                                : "bg-purple-100 text-purple-700"
                            }`}
                          >
                            {resource.type}
                          </span>
                        </div>
                        <span
                          className={`text-sm px-2 py-1 rounded ${
                            darkMode
                              ? "text-gray-400 bg-gray-800"
                              : "text-gray-500 bg-gray-100"
                          }`}
                        >
                          {resource.category}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 mb-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(
                          resource.level
                        )}`}
                      >
                        {resource.level}
                      </span>
                      <div
                        className={`flex items-center space-x-1 ${
                          darkMode ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{resource.duration}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="text-sm font-medium">
                          {resource.rating}
                        </span>
                        <span
                          className={`text-sm ${
                            darkMode ? "text-gray-400" : "text-gray-500"
                          }`}
                        >
                          ({resource.students})
                        </span>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <button
                        className={`flex-1 py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2 ${
                          darkMode
                            ? "bg-green-600 hover:bg-green-700 text-white"
                            : "bg-green-600 hover:bg-green-700 text-white"
                        }`}
                      >
                        <BookOpen className="w-4 h-4" />
                        <span>Access Resource</span>
                      </button>
                      <button
                        className={`p-2 border rounded-lg transition-colors ${
                          darkMode
                            ? "border-gray-700 hover:bg-gray-700"
                            : "border-gray-200 hover:bg-gray-50"
                        }`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technologies Tab */}
        {activeTab === "technologies" && (
          <div className="space-y-8">
            <h2
              className={`text-2xl font-bold ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Cloud Technology Stack
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {technologies.map((tech) => (
                <div
                  key={tech.name}
                  className={`rounded-xl p-6 shadow-sm border ${
                    darkMode
                      ? "bg-gray-800 border-gray-700"
                      : "bg-white border-gray-100"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{tech.icon}</span>
                      <h3
                        className={`text-lg font-semibold ${
                          darkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {tech.name}
                      </h3>
                    </div>
                    <span
                      className={`text-sm font-medium ${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {tech.level}%
                    </span>
                  </div>
                  <div
                    className={`w-full rounded-full h-3 ${
                      darkMode ? "bg-gray-700" : "bg-gray-200"
                    }`}
                  >
                    <div
                      className={`h-3 rounded-full bg-gradient-to-r ${tech.color} transition-all duration-700`}
                      style={{ width: `${tech.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div
              className={`rounded-xl p-8 text-white ${
                darkMode
                  ? "bg-gradient-to-r from-sky-800 to-indigo-800"
                  : "bg-gradient-to-r from-sky-500 to-indigo-500"
              }`}
            >
              <h3 className="text-xl font-bold mb-4">
                Ready to Master Cloud Computing?
              </h3>
              <p
                className={`mb-6 ${darkMode ? "text-sky-200" : "text-sky-100"}`}
              >
                Join thousands of professionals building scalable cloud
                solutions
              </p>
              <button
                className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                  darkMode
                    ? "bg-white text-sky-800 hover:bg-gray-100"
                    : "bg-white text-sky-600 hover:bg-sky-50"
                }`}
              >
                Get Started Today
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CloudComputingPage;
