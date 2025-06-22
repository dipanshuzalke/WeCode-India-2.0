"use client";
import React, { useState } from "react";
import {
  Brain,
  Code,
  Layers,
  Star,
  Users,
  Clock,
  BookOpen,
  Play,
  Download,
  ExternalLink,
} from "lucide-react";

const AIMLPage = () => {
  const [activeTab, setActiveTab] = useState("projects");
  const [darkMode] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Computer Vision System",
      description:
        "Object detection and image classification using deep learning",
      difficulty: "Advanced",
      duration: "4-5 weeks",
      tech: ["TensorFlow", "OpenCV", "Python", "YOLO"],
      rating: 4.9,
      students: 672,
      category: "Computer Vision",
    },
    {
      id: 2,
      title: "Natural Language Processor",
      description:
        "Sentiment analysis and text classification with transformers",
      difficulty: "Advanced",
      duration: "3-4 weeks",
      tech: ["PyTorch", "Transformers", "BERT", "spaCy"],
      rating: 4.8,
      students: 834,
      category: "NLP",
    },
    {
      id: 3,
      title: "Recommendation Engine",
      description:
        "Collaborative filtering system for personalized recommendations",
      difficulty: "Intermediate",
      duration: "2-3 weeks",
      tech: ["Scikit-learn", "Pandas", "Matrix Factorization"],
      rating: 4.7,
      students: 945,
      category: "Recommendation Systems",
    },
    {
      id: 4,
      title: "Chatbot with NLU",
      description: "Intelligent conversational AI with intent recognition",
      difficulty: "Intermediate",
      duration: "3-4 weeks",
      tech: ["Rasa", "spaCy", "TensorFlow", "Flask"],
      rating: 4.6,
      students: 756,
      category: "Conversational AI",
    },
    {
      id: 5,
      title: "Time Series Forecasting",
      description: "Stock price prediction using LSTM neural networks",
      difficulty: "Advanced",
      duration: "2-3 weeks",
      tech: ["Keras", "LSTM", "NumPy", "Matplotlib"],
      rating: 4.5,
      students: 623,
      category: "Time Series",
    },
    {
      id: 6,
      title: "Generative AI Art",
      description: "Style transfer and image generation using GANs",
      difficulty: "Expert",
      duration: "5-6 weeks",
      tech: ["PyTorch", "GANs", "Neural Style Transfer"],
      rating: 4.8,
      students: 445,
      category: "Generative AI",
    },
  ];

  const resources = [
    {
      id: 1,
      title: "Machine Learning Fundamentals",
      type: "Course",
      duration: "20 hours",
      level: "Beginner",
      rating: 4.9,
      students: 3240,
      category: "ML Basics",
    },
    {
      id: 2,
      title: "Deep Learning with TensorFlow",
      type: "Course",
      duration: "25 hours",
      level: "Intermediate",
      rating: 4.8,
      students: 2890,
      category: "Deep Learning",
    },
    {
      id: 3,
      title: "Computer Vision Masterclass",
      type: "Workshop",
      duration: "12 hours",
      level: "Advanced",
      rating: 4.7,
      students: 1560,
      category: "Computer Vision",
    },
    {
      id: 4,
      title: "NLP with Python",
      type: "Tutorial",
      duration: "15 hours",
      level: "Intermediate",
      rating: 4.8,
      students: 2340,
      category: "NLP",
    },
    {
      id: 5,
      title: "MLOps Best Practices",
      type: "Documentation",
      duration: "8 hours",
      level: "Advanced",
      rating: 4.6,
      students: 890,
      category: "MLOps",
    },
  ];

  const technologies = [
    {
      name: "Python",
      level: 95,
      color: "from-blue-400 to-blue-600",
      icon: "🐍",
    },
    {
      name: "TensorFlow",
      level: 90,
      color: "from-orange-400 to-orange-600",
      icon: "🧠",
    },
    {
      name: "PyTorch",
      level: 88,
      color: "from-red-400 to-red-600",
      icon: "🔥",
    },
    {
      name: "Scikit-learn",
      level: 92,
      color: "from-green-400 to-green-600",
      icon: "🔬",
    },
    {
      name: "OpenCV",
      level: 85,
      color: "from-cyan-400 to-cyan-600",
      icon: "👁️",
    },
    {
      name: "Keras",
      level: 87,
      color: "from-purple-400 to-purple-600",
      icon: "⚡",
    },
    {
      name: "Pandas",
      level: 93,
      color: "from-indigo-400 to-indigo-600",
      icon: "🐼",
    },
    {
      name: "NumPy",
      level: 94,
      color: "from-yellow-400 to-yellow-600",
      icon: "🔢",
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

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-violet-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-colors">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-500 to-violet-500 dark:from-purple-600 dark:to-violet-600 text-white">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="bg-white/20 dark:bg-white/30 p-3 rounded-xl">
                  <Brain className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold">AI & Machine Learning</h1>
                  <p className="text-purple-100 dark:text-purple-200 text-lg">
                    Machine learning, deep learning, and AI application development
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white/10 dark:bg-white/20 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center space-x-3">
                  <Code className="w-6 h-6" />
                  <div>
                    <p className="text-2xl font-bold">28</p>
                    <p className="text-purple-100 dark:text-purple-200">Projects</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 dark:bg-white/20 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center space-x-3">
                  <BookOpen className="w-6 h-6" />
                  <div>
                    <p className="text-2xl font-bold">73</p>
                    <p className="text-purple-100 dark:text-purple-200">Resources</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 dark:bg-white/20 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6" />
                  <div>
                    <p className="text-2xl font-bold">15.2K</p>
                    <p className="text-purple-100 dark:text-purple-200">Students</p>
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
                    ? "bg-white dark:bg-gray-700 text-purple-600 dark:text-purple-400 shadow-sm"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
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
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  Featured AI Projects
                </h2>
                <div className="flex space-x-2">
                  {[
                    "All",
                    "Computer Vision",
                    "NLP",
                    "Deep Learning",
                    "MLOps",
                  ].map((filter) => (
                    <button
                      key={filter}
                      className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors"
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
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md dark:hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700"
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                            {project.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
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
                          <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
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
                            className="px-2 py-1 bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 text-xs rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex space-x-2">
                        <button className="flex-1 bg-purple-600 dark:bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors flex items-center justify-center space-x-2">
                          <Play className="w-4 h-4" />
                          <span>Start Project</span>
                        </button>
                        <button className="p-2 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 transition-colors">
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
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  Learning Resources
                </h2>
                <div className="flex space-x-2">
                  {[
                    "All",
                    "ML Basics",
                    "Deep Learning",
                    "Computer Vision",
                    "NLP",
                  ].map((filter) => (
                    <button
                      key={filter}
                      className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors"
                    >
                      {filter}
                    </button>
                  ))}
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
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
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
                          <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                            {resource.rating}
                          </span>
                          <span className="text-gray-500 dark:text-gray-400 text-sm">
                            ({resource.students})
                          </span>
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <button className="flex-1 bg-violet-600 dark:bg-violet-500 text-white py-2 px-4 rounded-lg hover:bg-violet-700 dark:hover:bg-violet-600 transition-colors flex items-center justify-center space-x-2">
                          <BookOpen className="w-4 h-4" />
                          <span>Access Resource</span>
                        </button>
                        <button className="p-2 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 transition-colors">
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
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                AI/ML Technology Stack
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
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                          {tech.name}
                        </h3>
                      </div>
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
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

              <div className="bg-gradient-to-r from-purple-500 to-violet-500 dark:from-purple-600 dark:to-violet-600 rounded-xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">
                  Ready to Master Artificial Intelligence?
                </h3>
                <p className="text-purple-100 dark:text-purple-200 mb-6">
                  Join the AI revolution with cutting-edge machine learning projects
                </p>
                <button className="bg-white text-purple-600 dark:bg-gray-100 dark:text-purple-700 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 dark:hover:bg-gray-200 transition-colors">
                  Begin AI Journey
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIMLPage;