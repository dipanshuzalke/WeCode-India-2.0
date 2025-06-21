'use client';
import React, { useState } from 'react';
import { 
  Globe, 
  Code, 
  Layers, 
  Star,
  Users,
  Clock,
  BookOpen,
  Play,
  Download,
  ExternalLink
} from 'lucide-react';

const WebDevelopmentPage = () => {
  const [activeTab, setActiveTab] = useState('projects');

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Full-stack React/Node.js e-commerce solution with payment integration",
      difficulty: "Advanced",
      duration: "3-4 weeks",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      rating: 4.8,
      students: 1240,
      category: "Full-stack"
    },
    {
      id: 2,
      title: "Portfolio Website Builder",
      description: "Drag-and-drop portfolio builder with custom themes",
      difficulty: "Intermediate",
      duration: "2-3 weeks",
      tech: ["Vue.js", "Express", "PostgreSQL"],
      rating: 4.6,
      students: 890,
      category: "Frontend"
    },
    {
      id: 3,
      title: "Real-time Chat Application",
      description: "WebSocket-based chat app with rooms and file sharing",
      difficulty: "Intermediate",
      duration: "1-2 weeks",
      tech: ["Socket.io", "React", "Redis"],
      rating: 4.7,
      students: 756,
      category: "Full-stack"
    },
    {
      id: 4,
      title: "Progressive Web App",
      description: "Offline-first PWA with service workers and push notifications",
      difficulty: "Advanced",
      duration: "2-3 weeks",
      tech: ["Vanilla JS", "Service Workers", "IndexedDB"],
      rating: 4.5,
      students: 623,
      category: "Frontend"
    },
    {
      id: 5,
      title: "API Gateway & Microservices",
      description: "Microservices architecture with API gateway and load balancing",
      difficulty: "Expert",
      duration: "4-5 weeks",
      tech: ["Docker", "Kubernetes", "API Gateway"],
      rating: 4.9,
      students: 445,
      category: "Backend"
    },
    {
      id: 6,
      title: "Content Management System",
      description: "Headless CMS with admin panel and RESTful API",
      difficulty: "Advanced",
      duration: "3-4 weeks",
      tech: ["Next.js", "Prisma", "GraphQL"],
      rating: 4.6,
      students: 567,
      category: "Full-stack"
    }
  ];

  const resources = [
    {
      id: 1,
      title: "Modern JavaScript Fundamentals",
      type: "Course",
      duration: "8 hours",
      level: "Beginner",
      rating: 4.8,
      students: 2340,
      category: "JavaScript"
    },
    {
      id: 2,
      title: "React Hooks Deep Dive",
      type: "Tutorial",
      duration: "3 hours",
      level: "Intermediate",
      rating: 4.7,
      students: 1890,
      category: "React"
    },
    {
      id: 3,
      title: "Node.js Best Practices Guide",
      type: "Documentation",
      duration: "2 hours",
      level: "Intermediate",
      rating: 4.6,
      students: 1456,
      category: "Node.js"
    },
    {
      id: 4,
      title: "CSS Grid and Flexbox Mastery",
      type: "Workshop",
      duration: "4 hours",
      level: "Beginner",
      rating: 4.9,
      students: 2120,
      category: "CSS"
    },
    {
      id: 5,
      title: "TypeScript for React Developers",
      type: "Course",
      duration: "6 hours",
      level: "Intermediate",
      rating: 4.8,
      students: 1678,
      category: "TypeScript"
    }
  ];

  const technologies = [
    { name: "React", level: 95, color: "from-blue-400 to-blue-600" },
    { name: "Vue.js", level: 88, color: "from-green-400 to-green-600" },
    { name: "Angular", level: 82, color: "from-red-400 to-red-600" },
    { name: "Node.js", level: 90, color: "from-green-500 to-green-700" },
    { name: "Express", level: 87, color: "from-gray-400 to-gray-600" },
    { name: "MongoDB", level: 85, color: "from-green-600 to-green-800" },
    { name: "PostgreSQL", level: 83, color: "from-blue-500 to-blue-700" },
    { name: "Docker", level: 78, color: "from-blue-600 to-blue-800" }
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-600 bg-green-100';
      case 'Intermediate': return 'text-yellow-600 bg-yellow-100';
      case 'Advanced': return 'text-orange-600 bg-orange-100';
      case 'Expert': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-center space-x-4 mb-6">
            <div className="bg-white/20 p-3 rounded-xl">
              <Globe className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">Web Development</h1>
              <p className="text-blue-100 text-lg">Frontend and backend technologies, frameworks, and deployment</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center space-x-3">
                <Code className="w-6 h-6" />
                <div>
                  <p className="text-2xl font-bold">42</p>
                  <p className="text-blue-100">Projects</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center space-x-3">
                <BookOpen className="w-6 h-6" />
                <div>
                  <p className="text-2xl font-bold">87</p>
                  <p className="text-blue-100">Resources</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center space-x-3">
                <Users className="w-6 h-6" />
                <div>
                  <p className="text-2xl font-bold">12.4K</p>
                  <p className="text-blue-100">Students</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex space-x-1 bg-gray-100 p-1 rounded-xl mb-8">
          {[
            { id: 'projects', label: 'Projects', icon: Code },
            { id: 'resources', label: 'Resources', icon: BookOpen },
            { id: 'technologies', label: 'Technologies', icon: Layers }
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-lg transition-all ${
                activeTab === id
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{label}</span>
            </button>
          ))}
        </div>

        {/* Projects Tab */}
        {activeTab === 'projects' && (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Featured Projects</h2>
              <div className="flex space-x-2">
                {['All', 'Frontend', 'Backend', 'Full-stack'].map((filter) => (
                  <button
                    key={filter}
                    className="px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div key={project.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h3>
                        <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(project.difficulty)}`}>
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
                        <span className="text-sm font-medium">{project.rating}</span>
                        <span className="text-gray-500 text-sm">({project.students})</span>
                      </div>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {project.category}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-2">
                      <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
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
        {activeTab === 'resources' && (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Learning Resources</h2>
              <div className="flex space-x-2">
                {['All', 'Course', 'Tutorial', 'Documentation', 'Workshop'].map((filter) => (
                  <button
                    key={filter}
                    className="px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resources.map((resource) => (
                <div key={resource.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{resource.title}</h3>
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
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(resource.level)}`}>
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
                        <span className="text-sm font-medium">{resource.rating}</span>
                        <span className="text-gray-500 text-sm">({resource.students})</span>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2">
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
        {activeTab === 'technologies' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900">Technology Stack</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {technologies.map((tech) => (
                <div key={tech.name} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">{tech.name}</h3>
                    <span className="text-sm font-medium text-gray-600">{tech.level}%</span>
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

            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Ready to Start Your Web Development Journey?</h3>
              <p className="text-blue-100 mb-6">Join thousands of developers learning modern web technologies</p>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Get Started Today
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WebDevelopmentPage;