"use client";
import React, { useState } from "react";
import {
  Shield,
  Lock,
  Eye,
  AlertTriangle,
  Key,
  Star,
  Users,
  Clock,
  BookOpen,
  Play,
  Download,
  ExternalLink,
  Bug,
  Network,
  FileSearch,
  Activity,
  Skull,
} from "lucide-react";

const CybersecurityPage = () => {
  const [activeTab, setActiveTab] = useState("projects");

  const projects = [
    {
      id: 1,
      title: "Penetration Testing Lab",
      description:
        "Complete ethical hacking environment with vulnerable applications and networks",
      difficulty: "Expert",
      duration: "8-10 weeks",
      tech: ["Kali Linux", "Metasploit", "Burp Suite", "Nmap", "Wireshark"],
      rating: 4.9,
      students: 432,
      category: "Penetration Testing",
      type: "Offensive",
    },
    {
      id: 2,
      title: "Network Security Monitoring",
      description:
        "Build comprehensive network monitoring system with threat detection",
      difficulty: "Advanced",
      duration: "5-6 weeks",
      tech: ["Suricata", "ELK Stack", "SIEM", "Zeek"],
      rating: 4.8,
      students: 678,
      category: "Network Security",
      type: "Defensive",
    },
    {
      id: 3,
      title: "Web Application Security",
      description:
        "Secure coding practices and vulnerability assessment for web apps",
      difficulty: "Advanced",
      duration: "4-5 weeks",
      tech: ["OWASP ZAP", "SQLMap", "XSS", "CSRF Protection"],
      rating: 4.7,
      students: 891,
      category: "Web Security",
      type: "Assessment",
    },
    {
      id: 4,
      title: "Incident Response Platform",
      description:
        "Complete IR workflow with forensics and threat hunting capabilities",
      difficulty: "Advanced",
      duration: "6-7 weeks",
      tech: ["MISP", "TheHive", "Volatility", "Autopsy"],
      rating: 4.6,
      students: 543,
      category: "Incident Response",
      type: "Forensics",
    },
    {
      id: 5,
      title: "Malware Analysis Lab",
      description:
        "Safe environment for analyzing and reverse engineering malware",
      difficulty: "Expert",
      duration: "7-8 weeks",
      tech: ["IDA Pro", "Ghidra", "Cuckoo Sandbox", "YARA"],
      rating: 4.8,
      students: 321,
      category: "Malware Analysis",
      type: "Reverse Engineering",
    },
    {
      id: 6,
      title: "Cloud Security Architecture",
      description:
        "Secure cloud infrastructure with compliance and monitoring",
      difficulty: "Advanced",
      duration: "5-6 weeks",
      tech: ["AWS Security", "CloudTrail", "GuardDuty", "Terraform"],
      rating: 4.7,
      students: 456,
      category: "Cloud Security",
      type: "Architecture",
    },
  ];

  const resources = [
    {
      id: 1,
      title: "Ethical Hacking Fundamentals",
      type: "Course",
      duration: "12 hours",
      level: "Intermediate",
      rating: 4.9,
      students: 2890,
      category: "Penetration Testing",
    },
    {
      id: 2,
      title: "Network Security Protocols",
      type: "Course",
      duration: "16 hours",
      level: "Advanced",
      rating: 4.8,
      students: 1567,
      category: "Network Security",
    },
    {
      id: 3,
      title: "Digital Forensics Workshop",
      type: "Workshop",
      duration: "10 hours",
      level: "Advanced",
      rating: 4.7,
      students: 1234,
      category: "Forensics",
    },
    {
      id: 4,
      title: "Secure Coding Practices",
      type: "Tutorial",
      duration: "8 hours",
      level: "Intermediate",
      rating: 4.6,
      students: 2156,
      category: "Application Security",
    },
    {
      id: 5,
      title: "Threat Intelligence Analysis",
      type: "Course",
      duration: "14 hours",
      level: "Advanced",
      rating: 4.8,
      students: 987,
      category: "Threat Hunting",
    },
    {
      id: 6,
      title: "Cryptography & PKI",
      type: "Course",
      duration: "18 hours",
      level: "Expert",
      rating: 4.7,
      students: 1456,
      category: "Cryptography",
    },
  ];

  const technologies = [
    {
      name: "Kali Linux",
      level: 94,
      color: "from-gray-600 to-gray-800",
      icon: "🐉",
    },
    {
      name: "Metasploit",
      level: 87,
      color: "from-red-500 to-red-700",
      icon: "🎯",
    },
    {
      name: "Burp Suite",
      level: 91,
      color: "from-orange-500 to-red-500",
      icon: "🔍",
    },
    {
      name: "Wireshark",
      level: 89,
      color: "from-blue-500 to-blue-700",
      icon: "🦈",
    },
    {
      name: "Nmap",
      level: 92,
      color: "from-green-500 to-green-700",
      icon: "🗺️",
    },
    {
      name: "OWASP ZAP",
      level: 85,
      color: "from-purple-500 to-purple-700",
      icon: "⚡",
    },
    {
      name: "Splunk",
      level: 83,
      color: "from-orange-400 to-orange-600",
      icon: "📊",
    },
    {
      name: "IDA Pro",
      level: 78,
      color: "from-red-600 to-red-800",
      icon: "🔬",
    },
    {
      name: "Volatility",
      level: 81,
      color: "from-indigo-500 to-indigo-700",
      icon: "🧠",
    },
    {
      name: "John the Ripper",
      level: 86,
      color: "from-yellow-500 to-orange-500",
      icon: "🔓",
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

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Offensive":
        return <Bug className="w-4 h-4 text-red-500" />;
      case "Defensive":
        return <Shield className="w-4 h-4 text-green-500" />;
      case "Assessment":
        return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      case "Forensics":
        return <FileSearch className="w-4 h-4 text-blue-500" />;
      case "Reverse Engineering":
        return <Skull className="w-4 h-4 text-gray-700" />;
      case "Architecture":
        return <Network className="w-4 h-4 text-purple-500" />;
      default:
        return <Activity className="w-4 h-4 text-gray-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-rose-700 dark:from-red-700 dark:to-rose-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-center space-x-4 mb-6">
            <div className="bg-white/20 dark:bg-white/10 p-3 rounded-xl">
              <Shield className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">Cybersecurity</h1>
              <p className="text-red-100 dark:text-red-200 text-lg">
                Network security, penetration testing, and secure coding
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center space-x-3">
                <Lock className="w-6 h-6" />
                <div>
                  <p className="text-2xl font-bold">24</p>
                  <p className="text-red-100 dark:text-red-200">Projects</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center space-x-3">
                <BookOpen className="w-6 h-6" />
                <div>
                  <p className="text-2xl font-bold">52</p>
                  <p className="text-red-100 dark:text-red-200">Resources</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center space-x-3">
                <Users className="w-6 h-6" />
                <div>
                  <p className="text-2xl font-bold">6.4K</p>
                  <p className="text-red-100 dark:text-red-200">Students</p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            <div className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-lg p-4">
              <Skull className="w-6 h-6 mb-2" />
              <h3 className="font-semibold">Penetration Testing</h3>
              <p className="text-red-100 dark:text-red-200 text-sm">Ethical Hacking</p>
            </div>
            <div className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-lg p-4">
              <Eye className="w-6 h-6 mb-2" />
              <h3 className="font-semibold">Threat Hunting</h3>
              <p className="text-red-100 dark:text-red-200 text-sm">Proactive Detection</p>
            </div>
            <div className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-lg p-4">
              <FileSearch className="w-6 h-6 mb-2" />
              <h3 className="font-semibold">Digital Forensics</h3>
              <p className="text-red-100 dark:text-red-200 text-sm">Incident Analysis</p>
            </div>
            <div className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-lg p-4">
              <Key className="w-6 h-6 mb-2" />
              <h3 className="font-semibold">Cryptography</h3>
              <p className="text-red-100 dark:text-red-200 text-sm">Secure Communications</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex space-x-1 bg-gray-100 dark:bg-gray-800 p-1 rounded-xl mb-8">
          {[
            { id: "projects", label: "Projects", icon: Lock },
            { id: "resources", label: "Resources", icon: BookOpen },
            { id: "technologies", label: "Technologies", icon: Shield },
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-lg transition-all ${
                activeTab === id
                  ? "bg-white dark:bg-gray-700 text-red-600 dark:text-red-400 shadow-sm"
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
                {["All", "Penetration Testing", "Network Security", "Web Security", "Forensics"].map(
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
                          className="px-2 py-1 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-2">
                      <button className="flex-1 bg-red-600 dark:bg-red-700 text-white py-2 px-4 rounded-lg hover:bg-red-700 dark:hover:bg-red-600 transition-colors flex items-center justify-center space-x-2">
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
                {["All", "Course", "Tutorial", "Workshop", "Certification"].map(
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
                      <button className="flex-1 bg-rose-600 dark:bg-rose-700 text-white py-2 px-4 rounded-lg hover:bg-rose-700 dark:hover:bg-rose-600 transition-colors flex items-center justify-center space-x-2">
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
              Security Arsenal
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

            {/* Security Framework Section */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Cybersecurity Framework
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-xl mb-4">
                    <Shield className="w-8 h-8 text-red-600 dark:text-red-400 mx-auto" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Defense</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Proactive security measures and monitoring
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-100 dark:bg-orange-900/30 p-4 rounded-xl mb-4">
                    <AlertTriangle className="w-8 h-8 text-orange-600 dark:text-orange-400 mx-auto" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Detection</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Advanced threat hunting and analysis
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-xl mb-4">
                    <Activity className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Response</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Incident response and recovery procedures
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-500 to-rose-500 dark:from-red-600 dark:to-rose-600 rounded-xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">
                Master Cybersecurity
              </h3>
              <p className="text-red-100 dark:text-red-200 mb-6">
                Protect digital assets and defend against evolving cyber threats
              </p>
              <div className="flex space-x-4">
                <button className="bg-white text-red-600 dark:text-red-700 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 dark:hover:bg-gray-100 transition-colors">
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

export default CybersecurityPage;