// pages/phases/profile-building/index.tsx
'use client';
import React, { useState } from 'react';
import { 
  FileText, 
  Github, 
  Linkedin, 
  User, 
  Star,
  CheckCircle,
  Clock,
  Users,
  ArrowRight,
  Download,
  Eye,
  Edit3,
  Award,
  Code2,
  ExternalLink,
  TrendingUp,
  MessageSquare,
  Globe
} from 'lucide-react';

const ProfileBuildingPage = () => {
  const [activeTab, setActiveTab] = useState('resume');

  const profileTools = [
    {
      id: 'resume',
      icon: FileText,
      title: "Resume Builder",
      description: "Create an ATS-friendly resume that gets noticed",
      features: [
        "ATS-optimized templates",
        "Industry-specific examples",
        "Keyword optimization",
        "Multiple format exports",
        "Real-time preview"
      ],
      checklist: [
        { item: "Choose appropriate template", completed: false },
        { item: "Add contact information", completed: false },
        { item: "Write compelling summary", completed: false },
        { item: "List technical skills", completed: false },
        { item: "Add project descriptions", completed: false },
        { item: "Include work experience", completed: false },
        { item: "Add education details", completed: false },
        { item: "Optimize for ATS", completed: false }
      ]
    },
    {
      id: 'github',
      icon: Github,
      title: "GitHub Portfolio",
      description: "Showcase your coding skills with an impressive GitHub profile",
      features: [
        "Profile README optimization",
        "Repository organization",
        "Project documentation",
        "Contribution tracking",
        "Portfolio website integration"
      ],
      checklist: [
        { item: "Create compelling profile README", completed: false },
        { item: "Pin important repositories", completed: false },
        { item: "Add detailed project descriptions", completed: false },
        { item: "Include live demo links", completed: false },
        { item: "Write comprehensive documentation", completed: false },
        { item: "Add technology badges", completed: false },
        { item: "Maintain consistent commit history", completed: false },
        { item: "Create portfolio website", completed: false }
      ]
    },
    {
      id: 'linkedin',
      icon: Linkedin,
      title: "LinkedIn Optimization",
      description: "Build your professional network and attract recruiters",
      features: [
        "Profile headline optimization",
        "Professional summary writing",
        "Skill endorsements strategy",
        "Network building tips",
        "Content sharing guidance"
      ],
      checklist: [
        { item: "Professional profile photo", completed: false },
        { item: "Compelling headline", completed: false },
        { item: "Detailed work experience", completed: false },
        { item: "Skills and endorsements", completed: false },
        { item: "Professional summary", completed: false },
        { item: "Connect with industry professionals", completed: false },
        { item: "Share relevant content", completed: false },
        { item: "Request recommendations", completed: false }
      ]
    }
  ];

  const resumeTemplates = [
    {
      name: "Technical",
      description: "Perfect for software developers and engineers",
      features: ["Clean design", "Skills-focused", "Project highlights"],
      preview: "/api/placeholder/300/400"
    },
    {
      name: "Modern",
      description: "Contemporary design for tech professionals",
      features: ["Modern layout", "Color accents", "Visual hierarchy"],
      preview: "/api/placeholder/300/400"
    },
    {
      name: "Minimal",
      description: "Simple and professional for any role",
      features: ["Minimalist design", "ATS-friendly", "Easy to read"],
      preview: "/api/placeholder/300/400"
    },
    {
      name: "Creative",
      description: "Stand out with creative design elements",
      features: ["Unique layout", "Creative elements", "Personal branding"],
      preview: "/api/placeholder/300/400"
    }
  ];

  const githubShowcaseProjects = [
    {
      name: "E-commerce Platform",
      description: "Full-stack web application with React and Node.js",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      features: ["User authentication", "Payment integration", "Admin dashboard"],
      stars: 45,
      forks: 12
    },
    {
      name: "Task Management App",
      description: "Mobile-first productivity application",
      technologies: ["React Native", "Firebase", "Redux"],
      features: ["Real-time sync", "Push notifications", "Offline support"],
      stars: 28,
      forks: 8
    },
    {
      name: "Data Visualization Dashboard",
      description: "Interactive charts and analytics platform",
      technologies: ["Python", "D3.js", "Flask", "PostgreSQL"],
      features: ["Real-time data", "Custom charts", "Export functionality"],
      stars: 67,
      forks: 23
    }
  ];

  const portfolioSections = [
    {
      title: "Hero Section",
      description: "Make a strong first impression",
      elements: ["Professional photo", "Compelling tagline", "Key technologies", "Call-to-action"]
    },
    {
      title: "About Me",
      description: "Tell your professional story",
      elements: ["Background summary", "Career goals", "Personal interests", "Contact information"]
    },
    {
      title: "Skills",
      description: "Showcase your technical abilities",
      elements: ["Programming languages", "Frameworks", "Tools", "Proficiency levels"]
    },
    {
      title: "Projects",
      description: "Highlight your best work",
      elements: ["Project descriptions", "Technologies used", "Live demos", "Source code links"]
    },
    {
      title: "Experience",
      description: "Professional background",
      elements: ["Work history", "Achievements", "Responsibilities", "Impact metrics"]
    },
    {
      title: "Contact",
      description: "Make it easy to reach you",
      elements: ["Contact form", "Social links", "Resume download", "Location"]
    }
  ];

  const linkedinTips = [
    {
      category: "Profile Optimization",
      tips: [
        "Use a professional headshot as your profile photo",
        "Write a compelling headline that goes beyond your job title",
        "Craft a summary that tells your professional story",
        "Include relevant keywords for your industry"
      ]
    },
    {
      category: "Experience Section",
      tips: [
        "Use action verbs to describe your achievements",
        "Quantify your accomplishments with numbers",
        "Include relevant projects and technologies",
        "Keep descriptions concise but impactful"
      ]
    },
    {
      category: "Networking",
      tips: [
        "Connect with colleagues, classmates, and industry professionals",
        "Send personalized connection requests",
        "Engage with others' content through likes and comments",
        "Share industry insights and personal achievements"
      ]
    },
    {
      category: "Content Strategy",
      tips: [
        "Share articles and insights relevant to your field",
        "Post about your learning journey and projects",
        "Celebrate professional milestones",
        "Engage in industry discussions"
      ]
    }
  ];

  const currentTool = profileTools.find(tool => tool.id === activeTab);
  if (!currentTool) {
    // Option 1: Render nothing or a fallback UI
    return <div className="text-center py-12 text-red-500">Invalid tool selected.</div>;
    // Option 2: You could set a default tool instead, e.g.:
    // currentTool = profileTools[0];
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-green-50/80 via-emerald-50/60 to-teal-50/80 dark:from-green-950/20 dark:via-emerald-950/10 dark:to-teal-950/20 border-b border-border/40">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100/80 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-full text-sm font-medium border border-green-200/50 dark:border-green-800/50">
              <User className="w-4 h-4" />
              Phase 4: Profile Building
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
              Build Your Professional
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400"> Brand</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Create an impressive professional presence that attracts recruiters and showcases your skills effectively across all platforms.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-green-600 dark:text-green-400" />
                <span>4-6 weeks</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-green-600 dark:text-green-400" />
                <span>All Levels</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-green-600 dark:text-green-400" />
                <span>Career Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 space-y-16">
        {/* Tools Overview */}
        <section className="max-w-7xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl font-bold text-foreground">
              Professional Profile Tools
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from our comprehensive toolkit to build a standout professional presence
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {profileTools.map((tool) => (
              <div 
                key={tool.id} 
                className={`group relative bg-card border border-border rounded-xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer ${
                  activeTab === tool.id ? 'ring-2 ring-green-500/20 border-green-500/30' : ''
                }`}
                onClick={() => setActiveTab(tool.id)}
              >
                <div className="p-6 space-y-4">
                  <div className={`inline-flex p-3 rounded-lg ${
                    activeTab === tool.id 
                      ? 'bg-green-100 dark:bg-green-900/30' 
                      : 'bg-muted/50 group-hover:bg-muted'
                  } transition-colors`}>
                    <tool.icon className={`w-6 h-6 ${
                      activeTab === tool.id 
                        ? 'text-green-600 dark:text-green-400' 
                        : 'text-muted-foreground group-hover:text-foreground'
                    }`} />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {tool.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {tool.description}
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    {tool.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className={`w-full py-2.5 px-4 rounded-lg text-sm font-medium transition-all ${
                    activeTab === tool.id
                      ? 'bg-green-600 hover:bg-green-700 text-white'
                      : 'bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground'
                  }`}>
                    {activeTab === tool.id ? 'Active' : 'Get Started'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Active Tool Details */}
        <section className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="inline-flex p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
              <currentTool.icon className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <div className="space-y-1">
              <h2 className="text-2xl font-bold text-foreground">
                {currentTool.title}
              </h2>
              <p className="text-muted-foreground">
                {currentTool.description}
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Checklist */}
            <div className="lg:col-span-2">
              <div className="bg-card border border-border rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-foreground mb-6">
                  Step-by-Step Guide
                </h3>
                <div className="space-y-3">
                  {currentTool.checklist.map((item, index) => (
                    <div key={index} className="group flex items-start gap-3 p-4 bg-muted/30 hover:bg-muted/50 rounded-lg transition-colors">
                      <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                        item.completed 
                          ? 'bg-green-500 text-white' 
                          : 'bg-muted border-2 border-border text-muted-foreground group-hover:border-muted-foreground/50'
                      } transition-colors`}>
                        {item.completed ? (
                          <CheckCircle className="w-3 h-3" />
                        ) : (
                          <span>{index + 1}</span>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm font-medium ${
                          item.completed 
                            ? 'text-green-600 dark:text-green-400 line-through' 
                            : 'text-foreground'
                        }`}>
                          {item.item}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  {activeTab === 'resume' && (
                    <>
                      <button className="w-full flex items-center justify-between p-3 bg-blue-50/50 dark:bg-blue-950/20 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-colors border border-blue-200/50 dark:border-blue-800/30">
                        <span className="text-sm font-medium">Choose Template</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <button className="w-full flex items-center justify-between p-3 bg-green-50/50 dark:bg-green-950/20 text-green-700 dark:text-green-300 rounded-lg hover:bg-green-50 dark:hover:bg-green-950/30 transition-colors border border-green-200/50 dark:border-green-800/30">
                        <span className="text-sm font-medium">Import LinkedIn</span>
                        <Download className="w-4 h-4" />
                      </button>
                      <button className="w-full flex items-center justify-between p-3 bg-purple-50/50 dark:bg-purple-950/20 text-purple-700 dark:text-purple-300 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-950/30 transition-colors border border-purple-200/50 dark:border-purple-800/30">
                        <span className="text-sm font-medium">ATS Check</span>
                        <Eye className="w-4 h-4" />
                      </button>
                    </>
                  )}
                  {activeTab === 'github' && (
                    <>
                      <button className="w-full flex items-center justify-between p-3 bg-gray-50/50 dark:bg-gray-800/20 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors border border-gray-200/50 dark:border-gray-700/30">
                        <span className="text-sm font-medium">README Generator</span>
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button className="w-full flex items-center justify-between p-3 bg-blue-50/50 dark:bg-blue-950/20 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-colors border border-blue-200/50 dark:border-blue-800/30">
                        <span className="text-sm font-medium">Portfolio Website</span>
                        <Globe className="w-4 h-4" />
                      </button>
                      <button className="w-full flex items-center justify-between p-3 bg-green-50/50 dark:bg-green-950/20 text-green-700 dark:text-green-300 rounded-lg hover:bg-green-50 dark:hover:bg-green-950/30 transition-colors border border-green-200/50 dark:border-green-800/30">
                        <span className="text-sm font-medium">Activity Tracker</span>
                        <TrendingUp className="w-4 h-4" />
                      </button>
                    </>
                  )}
                  {activeTab === 'linkedin' && (
                    <>
                      <button className="w-full flex items-center justify-between p-3 bg-blue-50/50 dark:bg-blue-950/20 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-colors border border-blue-200/50 dark:border-blue-800/30">
                        <span className="text-sm font-medium">Headline Generator</span>
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button className="w-full flex items-center justify-between p-3 bg-green-50/50 dark:bg-green-950/20 text-green-700 dark:text-green-300 rounded-lg hover:bg-green-50 dark:hover:bg-green-950/30 transition-colors border border-green-200/50 dark:border-green-800/30">
                        <span className="text-sm font-medium">Network Builder</span>
                        <Users className="w-4 h-4" />
                      </button>
                      <button className="w-full flex items-center justify-between p-3 bg-purple-50/50 dark:bg-purple-950/20 text-purple-700 dark:text-purple-300 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-950/30 transition-colors border border-purple-200/50 dark:border-purple-800/30">
                        <span className="text-sm font-medium">Content Calendar</span>
                        <MessageSquare className="w-4 h-4" />
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic Content Based on Active Tab */}
        {activeTab === 'resume' && (
          <section className="max-w-7xl mx-auto">
            <div className="text-center mb-8 space-y-2">
              <h2 className="text-2xl font-bold text-foreground">
                Professional Resume Templates
              </h2>
              <p className="text-muted-foreground">
                Choose from our carefully crafted templates designed to pass ATS screening
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resumeTemplates.map((template, index) => (
                <div key={index} className="group bg-card border border-border rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                  <div className="aspect-[3/4] bg-muted/30 flex items-center justify-center border-b border-border">
                    <FileText className="w-12 h-12 text-muted-foreground/50 group-hover:text-muted-foreground transition-colors" />
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="space-y-1">
                      <h3 className="font-semibold text-foreground">
                        {template.name}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {template.description}
                      </p>
                    </div>
                    <div className="space-y-1">
                      {template.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Star className="w-3 h-3 text-yellow-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                      Use Template
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'github' && (
          <section className="max-w-7xl mx-auto">
            <div className="text-center mb-8 space-y-2">
              <h2 className="text-2xl font-bold text-foreground">
                Showcase Project Examples
              </h2>
              <p className="text-muted-foreground">
                Learn from these example projects to create impressive GitHub repositories
              </p>
            </div>
            <div className="space-y-6">
              {githubShowcaseProjects.map((project, index) => (
                <div key={index} className="bg-card border border-border rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                    <div className="flex-1 space-y-2">
                      <h3 className="text-lg font-semibold text-foreground">
                        {project.name}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        <span>{project.stars}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Code2 className="w-4 h-4" />
                        <span>{project.forks}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-2.5 py-1 bg-blue-100/80 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium border border-blue-200/50 dark:border-blue-800/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-3 mb-6">
                    {project.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    <button className="flex items-center gap-2 bg-foreground text-background px-4 py-2 rounded-lg text-sm font-medium hover:bg-foreground/90 transition-colors">
                      <Github className="w-4 h-4" />
                      <span>View Code</span>
                    </button>
                    <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'linkedin' && (
          <section className="max-w-7xl mx-auto">
            <div className="text-center mb-8 space-y-2">
              <h2 className="text-2xl font-bold text-foreground">
                LinkedIn Optimization Strategy
              </h2>
              <p className="text-muted-foreground">
                Follow these proven strategies to build a compelling LinkedIn presence
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {linkedinTips.map((section, index) => (
                <div key={index} className="bg-card border border-border rounded-xl shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    {section.category}
                  </h3>
                  <div className="space-y-3">
                    {section.tips.map((tip, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          {tip}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Portfolio Website Builder */}
        <section className="max-w-7xl mx-auto">
          <div className="text-center mb-8 space-y-2">
            <h2 className="text-2xl font-bold text-foreground">
              Portfolio Website Structure
            </h2>
            <p className="text-muted-foreground">
              Essential sections every professional portfolio should include
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioSections.map((section, index) => (
              <div key={index} className="bg-card border border-border rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {section.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {section.description}
                </p>
                <div className="space-y-2">
                  {section.elements.map((element, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <ArrowRight className="w-3 h-3 text-green-500 flex-shrink-0" />
                      <span>{element}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section>
          <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to Build Your Professional Brand?
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Start building your professional presence today. Choose a tool above and follow our step-by-step 
                guide to create profiles that attract recruiters and showcase your skills effectively.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2">
                  <FileText className="h-5 w-5" />
                  <span>Start Resume Builder</span>
                </button>
                <button className="bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2">
                  <Github className="h-5 w-5" />
                  <span>Optimize GitHub</span>
                </button>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2">
                  <Linkedin className="h-5 w-5" />
                  <span>Enhance LinkedIn</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProfileBuildingPage;