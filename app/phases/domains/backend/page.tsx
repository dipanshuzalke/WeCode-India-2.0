"use client";
import React, { useState } from "react";
import {
  Server,
  Database,
  Code,
  Layers,
  Zap,
  Star,
  Users,
  Clock,
  BookOpen,
  Play,
  Download,
  ExternalLink,
  Container,
  GitBranch,
  Monitor,
  Settings,
  Activity,
  Cloud,
} from "lucide-react";

const BackendDevOpsPage = () => {
  const [activeTab, setActiveTab] = useState("projects");

  const projects = [
    {
      id: 1,
      title: "Microservices Architecture",
      description:
        "Scalable microservices system with Docker and Kubernetes orchestration",
      difficulty: "Expert",
      duration: "6-8 weeks",
      tech: ["Docker", "Kubernetes", "Node.js", "MongoDB", "Redis"],
      rating: 4.9,
      students: 567,
      category: "DevOps",
      type: "Infrastructure",
    },
    {
      id: 2,
      title: "CI/CD Pipeline",
      description:
        "Complete CI/CD pipeline with automated testing and deployment",
      difficulty: "Advanced",
      duration: "3-4 weeks",
      tech: ["Jenkins", "Docker", "AWS", "Terraform"],
      rating: 4.8,
      students: 890,
      category: "DevOps",
      type: "Automation",
    },
    {
      id: 3,
      title: "RESTful API Gateway",
      description:
        "High-performance API gateway with rate limiting and authentication",
      difficulty: "Advanced",
      duration: "4-5 weeks",
      tech: ["Express.js", "Redis", "JWT", "Nginx"],
      rating: 4.7,
      students: 1240,
      category: "Backend",
      type: "API",
    },
    {
      id: 4,
      title: "Database Optimization",
      description:
        "PostgreSQL performance tuning and database scaling strategies",
      difficulty: "Advanced",
      duration: "2-3 weeks",
      tech: ["PostgreSQL", "Redis", "Elasticsearch"],
      rating: 4.6,
      students: 756,
      category: "Database",
      type: "Performance",
    },
    {
      id: 5,
      title: "Monitoring & Logging",
      description:
        "Complete observability stack with metrics, logs, and alerts",
      difficulty: "Intermediate",
      duration: "3-4 weeks",
      tech: ["Prometheus", "Grafana", "ELK Stack", "Jaeger"],
      rating: 4.8,
      students: 623,
      category: "DevOps",
      type: "Monitoring",
    },
    {
      id: 6,
      title: "Infrastructure as Code",
      description:
        "Cloud infrastructure automation using Terraform and Ansible",
      difficulty: "Advanced",
      duration: "4-5 weeks",
      tech: ["Terraform", "Ansible", "AWS", "Vault"],
      rating: 4.7,
      students: 445,
      category: "DevOps",
      type: "Infrastructure",
    },
  ];

  const resources = [
    {
      id: 1,
      title: "Docker & Containerization Mastery",
      type: "Course",
      duration: "10 hours",
      level: "Intermediate",
      rating: 4.9,
      students: 3240,
      category: "Containerization",
    },
    {
      id: 2,
      title: "Kubernetes Administration",
      type: "Course",
      duration: "14 hours",
      level: "Advanced",
      rating: 4.8,
      students: 1890,
      category: "Orchestration",
    },
    {
      id: 3,
      title: "AWS Cloud Architecture",
      type: "Workshop",
      duration: "8 hours",
      level: "Intermediate",
      rating: 4.7,
      students: 2560,
      category: "Cloud",
    },
    {
      id: 4,
      title: "Database Design & Scaling",
      type: "Tutorial",
      duration: "6 hours",
      level: "Advanced",
      rating: 4.6,
      students: 1456,
      category: "Database",
    },
    {
      id: 5,
      title: "System Design Fundamentals",
      type: "Course",
      duration: "12 hours",
      level: "Advanced",
      rating: 4.8,
      students: 2120,
      category: "Architecture",
    },
    {
      id: 6,
      title: "Linux Server Administration",
      type: "Course",
      duration: "16 hours",
      level: "Intermediate",
      rating: 4.7,
      students: 1678,
      category: "System Admin",
    },
  ];

  const technologies = [
    {
      name: "Docker",
      level: 95,
      color: "from-blue-400 to-blue-600",
      icon: "🐳",
    },
    {
      name: "Kubernetes",
      level: 88,
      color: "from-blue-500 to-indigo-600",
      icon: "☸️",
    },
    {
      name: "AWS",
      level: 92,
      color: "from-orange-400 to-orange-600",
      icon: "☁️",
    },
    {
      name: "Jenkins",
      level: 85,
      color: "from-blue-600 to-blue-800",
      icon: "🔧",
    },
    {
      name: "Terraform",
      level: 83,
      color: "from-purple-400 to-purple-600",
      icon: "🏗️",
    },
    {
      name: "PostgreSQL",
      level: 90,
      color: "from-blue-500 to-blue-700",
      icon: "🐘",
    },
    { name: "Redis", level: 87, color: "from-red-400 to-red-600", icon: "⚡" },
    {
      name: "Nginx",
      level: 89,
      color: "from-green-400 to-green-600",
      icon: "🌐",
    },
    {
      name: "Prometheus",
      level: 82,
      color: "from-orange-500 to-red-500",
      icon: "📊",
    },
    {
      name: "Elasticsearch",
      level: 78,
      color: "from-yellow-400 to-yellow-600",
      icon: "🔍",
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "text-green-700 bg-green-100 dark:text-green-300 dark:bg-green-900/30";
      case "Intermediate":
        return "text-yellow-700 bg-yellow-100 dark:text-yellow-300 dark:bg-yellow-900/30";
      case "Advanced":
        return "text-orange-700 bg-orange-100 dark:text-orange-300 dark:bg-orange-900/30";
      case "Expert":
        return "text-red-700 bg-red-100 dark:text-red-300 dark:bg-red-900/30";
      default:
        return "text-gray-700 bg-gray-100 dark:text-gray-300 dark:bg-gray-800";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Infrastructure":
        return <Server className="w-4 h-4" />;
      case "Automation":
        return <Settings className="w-4 h-4" />;
      case "API":
        return <Code className="w-4 h-4" />;
      case "Performance":
        return <Zap className="w-4 h-4" />;
      case "Monitoring":
        return <Activity className="w-4 h-4" />;
      default:
        return <Database className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 dark:from-amber-600 dark:to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-center space-x-4 mb-6">
            <div className="bg-white/20 dark:bg-white/10 p-3 rounded-xl">
              <Database className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">Backend & DevOps</h1>
              <p className="text-amber-100 dark:text-amber-200 text-lg">
                Server architecture, databases, and cloud infrastructure
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center space-x-3">
                <Code className="w-6 h-6" />
                <div>
                  <p className="text-2xl font-bold">31</p>
                  <p className="text-amber-100 dark:text-amber-200">Projects</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center space-x-3">
                <BookOpen className="w-6 h-6" />
                <div>
                  <p className="text-2xl font-bold">59</p>
                  <p className="text-amber-100 dark:text-amber-200">Resources</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center space-x-3">
                <Users className="w-6 h-6" />
                <div>
                  <p className="text-2xl font-bold">8.9K</p>
                  <p className="text-amber-100 dark:text-amber-200">Students</p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            <div className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-lg p-4">
              <Container className="w-6 h-6 mb-2" />
              <h3 className="font-semibold">Containerization</h3>
              <p className="text-amber-100 dark:text-amber-200 text-sm">Docker & Kubernetes</p>
            </div>
            <div className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-lg p-4">
              <GitBranch className="w-6 h-6 mb-2" />
              <h3 className="font-semibold">CI/CD Pipelines</h3>
              <p className="text-amber-100 dark:text-amber-200 text-sm">Automated Deployment</p>
            </div>
            <div className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-lg p-4">
              <Monitor className="w-6 h-6 mb-2" />
              <h3 className="font-semibold">Monitoring</h3>
              <p className="text-amber-100 dark:text-amber-200 text-sm">Observability Stack</p>
            </div>
            <div className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-lg p-4">
              <Cloud className="w-6 h-6 mb-2" />
              <h3 className="font-semibold">Cloud Native</h3>
              <p className="text-amber-100 dark:text-amber-200 text-sm">AWS, Azure, GCP</p>
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
                  ? "bg-white dark:bg-gray-700 text-amber-600 dark:text-amber-400 shadow-sm"
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
                {["All", "Backend", "DevOps", "Database", "Infrastructure"].map(
                  (filter) => (
                    <button
                      key={filter}
                      className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-200"
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
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {project.title}
                          </h3>
                          <div className="text-gray-500 dark:text-gray-400">
                            {getTypeIcon(project.type)}
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
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
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
                          className="px-2 py-1 bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-2">
                      <button className="flex-1 bg-amber-600 dark:bg-amber-700 text-white py-2 px-4 rounded-lg hover:bg-amber-700 dark:hover:bg-amber-600 transition-colors flex items-center justify-center space-x-2">
                        <Play className="w-4 h-4" />
                        <span>Start Project</span>
                      </button>
                      <button className="p-2 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-gray-600 dark:text-gray-300">
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
                {["All", "Course", "Tutorial", "Workshop", "Documentation"].map(
                  (filter) => (
                    <button
                      key={filter}
                      className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-200"
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
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {resource.title}
                          </h3>
                          <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs rounded">
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
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                          {resource.rating}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400 text-sm">
                          ({resource.students})
                        </span>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <button className="flex-1 bg-orange-600 dark:bg-orange-700 text-white py-2 px-4 rounded-lg hover:bg-orange-700 dark:hover:bg-orange-600 transition-colors flex items-center justify-center space-x-2">
                        <BookOpen className="w-4 h-4" />
                        <span>Access Resource</span>
                      </button>
                      <button className="p-2 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-gray-600 dark:text-gray-300">
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
              Technology Stack
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

            {/* Architecture Diagram Section */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Modern Backend Architecture
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-xl mb-4">
                    <Container className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Containerization</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Docker containers with Kubernetes orchestration
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-xl mb-4">
                    <Database className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Data Layer</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Scalable databases with caching strategies
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-100 dark:bg-orange-900/30 p-4 rounded-xl mb-4">
                    <Monitor className="w-8 h-8 text-orange-600 dark:text-orange-400 mx-auto" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Observability</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Comprehensive monitoring and logging
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-500 to-orange-500 dark:from-amber-600 dark:to-orange-600 rounded-xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">
                Master Backend & DevOps
              </h3>
              <p className="text-amber-100 dark:text-amber-200 mb-6">
                Build scalable, reliable systems that power modern applications
              </p>
              <div className="flex space-x-4">
                <button className="bg-white text-amber-600 dark:text-amber-700 px-6 py-3 rounded-lg font-semibold hover:bg-amber-50 dark:hover:bg-gray-100 transition-colors">
                  Start Learning
                </button>
                <button className="border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 dark:hover:bg-white/5 transition-colors">
                  View Roadmap
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BackendDevOpsPage;