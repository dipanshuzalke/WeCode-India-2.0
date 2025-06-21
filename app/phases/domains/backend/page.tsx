"use client";
import React, { useState } from "react";
import {
  Server,
  Database,
  Code,
  Layers,
  Zap,
  Shield,
  ChevronRight,
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

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Beginner":
        return "text-green-600 bg-green-100";
      case "Intermediate":
        return "text-yellow-600 bg-yellow-100";
      case "Advanced":
        return "text-orange-600 bg-orange-100";
      case "Expert":
        return "text-red-600 bg-red-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const getTypeIcon = (type) => {
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
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-center space-x-4 mb-6">
            <div className="bg-white/20 p-3 rounded-xl">
              <Database className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">Backend & DevOps</h1>
              <p className="text-amber-100 text-lg">
                Server architecture, databases, and cloud infrastructure
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center space-x-3">
                <Code className="w-6 h-6" />
                <div>
                  <p className="text-2xl font-bold">31</p>
                  <p className="text-amber-100">Projects</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center space-x-3">
                <BookOpen className="w-6 h-6" />
                <div>
                  <p className="text-2xl font-bold">59</p>
                  <p className="text-amber-100">Resources</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center space-x-3">
                <Users className="w-6 h-6" />
                <div>
                  <p className="text-2xl font-bold">8.9K</p>
                  <p className="text-amber-100">Students</p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Container className="w-6 h-6 mb-2" />
              <h3 className="font-semibold">Containerization</h3>
              <p className="text-amber-100 text-sm">Docker & Kubernetes</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <GitBranch className="w-6 h-6 mb-2" />
              <h3 className="font-semibold">CI/CD Pipelines</h3>
              <p className="text-amber-100 text-sm">Automated Deployment</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Monitor className="w-6 h-6 mb-2" />
              <h3 className="font-semibold">Monitoring</h3>
              <p className="text-amber-100 text-sm">Observability Stack</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Cloud className="w-6 h-6 mb-2" />
              <h3 className="font-semibold">Cloud Native</h3>
              <p className="text-amber-100 text-sm">AWS, Azure, GCP</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex space-x-1 bg-gray-100 p-1 rounded-xl mb-8">
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
                  ? "bg-white text-amber-600 shadow-sm"
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
              <h2 className="text-2xl font-bold text-gray-900">
                Featured Projects
              </h2>
              <div className="flex space-x-2">
                {["All", "Backend", "DevOps", "Database", "Infrastructure"].map(
                  (filter) => (
                    <button
                      key={filter}
                      className="px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
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
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">
                            {project.title}
                          </h3>
                          {getTypeIcon(project.type)}
                        </div>
                        <p className="text-gray-600 text-sm mb-3">
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
                      <div className="flex items-center space-x-1 text-gray-500">
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
                        <span className="text-gray-500 text-sm">
                          ({project.students})
                        </span>
                      </div>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {project.category}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-amber-50 text-amber-700 text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-2">
                      <button className="flex-1 bg-amber-600 text-white py-2 px-4 rounded-lg hover:bg-amber-700 transition-colors flex items-center justify-center space-x-2">
                        <Play className="w-4 h-4" />
                        <span>Start Project</span>
                      </button>
                      <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
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
              <h2 className="text-2xl font-bold text-gray-900">
                Learning Resources
              </h2>
              <div className="flex space-x-2">
                {["All", "Course", "Tutorial", "Workshop", "Documentation"].map(
                  (filter) => (
                    <button
                      key={filter}
                      className="px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
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
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">
                            {resource.title}
                          </h3>
                          <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">
                            {resource.type}
                          </span>
                        </div>
                        <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
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
                      <div className="flex items-center space-x-1 text-gray-500">
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
                        <span className="text-gray-500 text-sm">
                          ({resource.students})
                        </span>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <button className="flex-1 bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition-colors flex items-center justify-center space-x-2">
                        <BookOpen className="w-4 h-4" />
                        <span>Access Resource</span>
                      </button>
                      <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
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
            <h2 className="text-2xl font-bold text-gray-900">
              Technology Stack
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{tech.icon}</span>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {tech.name}
                      </h3>
                    </div>
                    <span className="text-sm font-medium text-gray-600">
                      {tech.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className={`h-3 rounded-full bg-gradient-to-r ${tech.color} transition-all duration-700`}
                      style={{ width: `${tech.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Architecture Diagram Section */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Modern Backend Architecture
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-blue-100 p-4 rounded-xl mb-4">
                    <Container className="w-8 h-8 text-blue-600 mx-auto" />
                  </div>
                  <h4 className="font-semibold mb-2">Containerization</h4>
                  <p className="text-gray-600 text-sm">
                    Docker containers with Kubernetes orchestration
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 p-4 rounded-xl mb-4">
                    <Database className="w-8 h-8 text-green-600 mx-auto" />
                  </div>
                  <h4 className="font-semibold mb-2">Data Layer</h4>
                  <p className="text-gray-600 text-sm">
                    Scalable databases with caching strategies
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-100 p-4 rounded-xl mb-4">
                    <Monitor className="w-8 h-8 text-orange-600 mx-auto" />
                  </div>
                  <h4 className="font-semibold mb-2">Observability</h4>
                  <p className="text-gray-600 text-sm">
                    Comprehensive monitoring and logging
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">
                Master Backend & DevOps
              </h3>
              <p className="text-amber-100 mb-6">
                Build scalable, reliable systems that power modern applications
              </p>
              <div className="flex space-x-4">
                <button className="bg-white text-amber-600 px-6 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors">
                  Start Learning
                </button>
                <button className="border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
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
