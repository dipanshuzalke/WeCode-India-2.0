'use client';
import React, { useState } from "react";
import {
  Smartphone,
  Code,
  Layers,
  Star,
  Users,
  Clock,
  BookOpen,
  Play,
  Download,
  ExternalLink,
  Apple,
  Activity,
} from "lucide-react";

const MobileDevelopmentPage = () => {
  const [activeTab, setActiveTab] = useState("projects");

  const projects = [
    {
      id: 1,
      title: "Social Media App",
      description:
        "Cross-platform social networking app with real-time messaging",
      difficulty: "Advanced",
      duration: "4-5 weeks",
      tech: ["React Native", "Firebase", "Redux", "Socket.io"],
      rating: 4.8,
      students: 980,
      category: "Cross-platform",
      platform: "iOS & Android",
    },
    {
      id: 2,
      title: "Fitness Tracker",
      description: "Native iOS fitness app with HealthKit integration",
      difficulty: "Intermediate",
      duration: "3-4 weeks",
      tech: ["Swift", "HealthKit", "Core Data", "MapKit"],
      rating: 4.7,
      students: 756,
      category: "Native iOS",
      platform: "iOS",
    },
    {
      id: 3,
      title: "E-commerce Mobile App",
      description: "Flutter-based shopping app with payment gateway",
      difficulty: "Advanced",
      duration: "3-4 weeks",
      tech: ["Flutter", "Dart", "Firebase", "Stripe"],
      rating: 4.6,
      students: 823,
      category: "Cross-platform",
      platform: "iOS & Android",
    },
    {
      id: 4,
      title: "Task Manager",
      description: "Native Android productivity app with material design",
      difficulty: "Intermediate",
      duration: "2-3 weeks",
      tech: ["Kotlin", "Room", "MVVM", "Material Design"],
      rating: 4.5,
      students: 645,
      category: "Native Android",
      platform: "Android",
    },
    {
      id: 5,
      title: "Weather App",
      description: "Beautiful weather app with location services and widgets",
      difficulty: "Beginner",
      duration: "1-2 weeks",
      tech: ["React Native", "APIs", "Geolocation"],
      rating: 4.4,
      students: 1200,
      category: "Cross-platform",
      platform: "iOS & Android",
    },
    {
      id: 6,
      title: "Food Delivery App",
      description: "Full-featured food delivery app with real-time tracking",
      difficulty: "Expert",
      duration: "5-6 weeks",
      tech: ["Flutter", "Google Maps", "Firebase", "Payment Gateway"],
      rating: 4.9,
      students: 567,
      category: "Cross-platform",
      platform: "iOS & Android",
    },
  ];

  const resources = [
    {
      id: 1,
      title: "React Native Fundamentals",
      type: "Course",
      duration: "12 hours",
      level: "Beginner",
      rating: 4.8,
      students: 2890,
      category: "React Native",
    },
    {
      id: 2,
      title: "Swift UI Complete Guide",
      type: "Course",
      duration: "16 hours",
      level: "Intermediate",
      rating: 4.9,
      students: 1560,
      category: "iOS",
    },
    {
      id: 3,
      title: "Kotlin for Android Development",
      type: "Tutorial",
      duration: "8 hours",
      level: "Beginner",
      rating: 4.7,
      students: 1890,
      category: "Android",
    },
    {
      id: 4,
      title: "Flutter & Dart Masterclass",
      type: "Course",
      duration: "14 hours",
      level: "Intermediate",
      rating: 4.8,
      students: 2340,
      category: "Flutter",
    },
    {
      id: 5,
      title: "Mobile App Security Best Practices",
      type: "Workshop",
      duration: "4 hours",
      level: "Advanced",
      rating: 4.6,
      students: 890,
      category: "Security",
    },
  ];

  const technologies = [
    {
      name: "React Native",
      level: 92,
      color: "from-blue-400 to-blue-600",
      icon: "⚛️",
    },
    {
      name: "Flutter",
      level: 88,
      color: "from-cyan-400 to-cyan-600",
      icon: "🐦",
    },
    {
      name: "Swift",
      level: 85,
      color: "from-orange-400 to-orange-600",
      icon: "🍎",
    },
    {
      name: "Kotlin",
      level: 83,
      color: "from-purple-400 to-purple-600",
      icon: "🤖",
    },
    {
      name: "Xamarin",
      level: 78,
      color: "from-violet-400 to-violet-600",
      icon: "⚡",
    },
    {
      name: "Ionic",
      level: 75,
      color: "from-blue-500 to-indigo-600",
      icon: "⚡",
    },
    {
      name: "Firebase",
      level: 90,
      color: "from-yellow-400 to-red-500",
      icon: "🔥",
    },
    {
      name: "SQLite",
      level: 87,
      color: "from-gray-400 to-gray-600",
      icon: "🗃️",
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-900/30";
      case "Intermediate":
        return "text-yellow-600 bg-yellow-100 dark:text-yellow-400 dark:bg-yellow-900/30";
      case "Advanced":
        return "text-orange-600 bg-orange-100 dark:text-orange-400 dark:bg-orange-900/30";
      case "Expert":
        return "text-red-600 bg-red-100 dark:text-red-400 dark:bg-red-900/30";
      default:
        return "text-gray-600 bg-gray-100 dark:text-gray-400 dark:bg-gray-800";
    }
  };

  const getPlatformIcon = (platform: string) => {
    if (platform.includes("iOS") && platform.includes("Android")) {
      return (
        <div className="flex space-x-1">
          <Apple className="w-4 h-4" />
          <Activity className="w-4 h-4" />
        </div>
      );
    } else if (platform.includes("iOS")) {
      return <Apple className="w-4 h-4" />;
    } else {
      return <Activity className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-colors">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-500 dark:from-green-600 dark:to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-center space-x-4 mb-6">
            <div className="bg-white/20 dark:bg-white/10 p-3 rounded-xl">
              <Smartphone className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">Mobile Development</h1>
              <p className="text-green-100 dark:text-green-200 text-lg">
                Native and cross-platform app development for iOS and Android
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center space-x-3">
                <Code className="w-6 h-6" />
                <div>
                  <p className="text-2xl font-bold">36</p>
                  <p className="text-green-100 dark:text-green-200">Projects</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center space-x-3">
                <BookOpen className="w-6 h-6" />
                <div>
                  <p className="text-2xl font-bold">65</p>
                  <p className="text-green-100 dark:text-green-200">Resources</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center space-x-3">
                <Users className="w-6 h-6" />
                <div>
                  <p className="text-2xl font-bold">9.8K</p>
                  <p className="text-green-100 dark:text-green-200">Students</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex space-x-1 bg-gray-100 dark:bg-gray-800 p-1 rounded-xl mb-8">
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
                  ? "bg-white dark:bg-gray-700 text-green-600 dark:text-green-400 shadow-sm"
                  : "text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100"
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
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Featured Projects
              </h2>
              <div className="flex space-x-2">
                {["All", "Native iOS", "Native Android", "Cross-platform"].map(
                  (filter) => (
                    <button
                      key={filter}
                      className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-300"
                    >
                      {filter}
                    </button>
                  )
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md dark:hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {project.title}
                          </h3>
                          <div className="text-gray-600 dark:text-gray-400">
                            {getPlatformIcon(project.platform)}
                          </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
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
                      <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{project.duration}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {project.rating}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400 text-sm">
                          ({project.students})
                        </span>
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                        {project.category}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-2">
                      <button className="flex-1 bg-green-600 dark:bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-700 dark:hover:bg-green-600 transition-colors flex items-center justify-center space-x-2">
                        <Play className="w-4 h-4" />
                        <span>Start Project</span>
                      </button>
                      <button className="p-2 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-gray-600 dark:text-gray-400">
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
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Learning Resources
              </h2>
              <div className="flex space-x-2">
                {["All", "React Native", "iOS", "Android", "Flutter"].map(
                  (filter) => (
                    <button
                      key={filter}
                      className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-300"
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
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md dark:hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {resource.title}
                          </h3>
                          <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 text-xs rounded">
                            {resource.type}
                          </span>
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
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
                      <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{resource.duration}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {resource.rating}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400 text-sm">
                          ({resource.students})
                        </span>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <button className="flex-1 bg-emerald-600 dark:bg-emerald-500 text-white py-2 px-4 rounded-lg hover:bg-emerald-700 dark:hover:bg-emerald-600 transition-colors flex items-center justify-center space-x-2">
                        <BookOpen className="w-4 h-4" />
                        <span>Access Resource</span>
                      </button>
                      <button className="p-2 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-gray-600 dark:text-gray-400">
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
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Mobile Technology Stack
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{tech.icon}</span>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {tech.name}
                      </h3>
                    </div>
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                      {tech.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div
                      className={`h-3 rounded-full bg-gradient-to-r ${tech.color} transition-all duration-700`}
                      style={{ width: `${tech.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-green-500 to-emerald-500 dark:from-green-600 dark:to-emerald-600 rounded-xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">
                Ready to Build Amazing Mobile Apps?
              </h3>
              <p className="text-green-100 dark:text-green-200 mb-6">
                Master native and cross-platform mobile development
              </p>
              <button className="bg-white text-green-600 dark:bg-gray-100 dark:text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 dark:hover:bg-gray-200 transition-colors">
                Start Learning Now
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileDevelopmentPage;