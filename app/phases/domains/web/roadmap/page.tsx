"use client";

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRight, ArrowDown, CheckCircle, BookOpen, ExternalLink, Code2, Database, Wrench, Lock, Cloud, ArrowLeft } from 'lucide-react';
import { SiHtml5, SiCss3, SiJavascript, SiNpm, SiGit, SiReact } from 'react-icons/si';
import { FaPuzzlePiece, FaProjectDiagram } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

// Type definitions
interface Resource {
  name: string;
  url: string;
}

interface TechType {
  id: string;
  step: number;
  name: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  borderColor: string;
  overview: string;
  learningPath: string[];
  tools: string[];
  resources: Resource[];
}

interface TechNodeProps {
  tech: TechType;
  isCompleted: boolean;
  onTechClick: (tech: TechType) => void;
  onToggleCompleted: (id: string) => void;
  showArrow?: boolean;
  arrowDirection?: 'right' | 'down';
}

interface PhaseSectionProps {
  title: string;
  subtitle: string;
  technologies: TechType[];
  icon: React.ElementType;
  completedCount: number;
  totalCount: number;
}

const WebDevRoadmap = () => {
  const [completedTechs, setCompletedTechs] = useState<Set<string>>(new Set());
  const [selectedTech, setSelectedTech] = useState<TechType | null>(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const toggleCompleted = (techId: string) => {
    setCompletedTechs(prev => {
      const newCompleted = new Set(prev);
      if (newCompleted.has(techId)) {
        newCompleted.delete(techId);
      } else {
        newCompleted.add(techId);
      }
      return newCompleted;
    });
  };

  const handleTechClick = (tech: TechType) => {
    setSelectedTech(tech);
    setIsSheetOpen(true);
  };

  // Frontend Phase Technologies
  const frontendPhase = [
    {
      id: 'html',
      step: 1,
      name: 'Learn HTML',
      icon: <SiHtml5 className="h-8 w-8 text-orange-500" />,
      color: '#E34F26',
      bgColor: 'bg-orange-50 dark:bg-orange-950',
      borderColor: 'border-orange-200 dark:border-orange-800',
      overview: 'Master the structure and semantics of web pages',
      learningPath: ['HTML5 Semantic Elements', 'Forms & Validation', 'Accessibility Standards', 'SEO Best Practices'],
      tools: ['VS Code', 'HTML5 Boilerplate', 'W3C Validator', 'Emmet'],
      resources: [
        { name: 'MDN HTML Guide', url: '#' },
        { name: 'HTML5 Specification', url: '#' },
        { name: 'Web.dev HTML Course', url: '#' }
      ]
    },
    {
      id: 'css',
      step: 2,
      name: 'Learn CSS',
      icon: <SiCss3 className="h-8 w-8 text-blue-500" />,
      color: '#1572B6',
      bgColor: 'bg-blue-50 dark:bg-blue-950',
      borderColor: 'border-blue-200 dark:border-blue-800',
      overview: 'Create beautiful, responsive designs and layouts',
      learningPath: ['CSS Fundamentals', 'Flexbox & Grid', 'Responsive Design', 'CSS Animations', 'Modern CSS Features'],
      tools: ['Sass/SCSS', 'PostCSS', 'Tailwind CSS', 'Figma'],
      resources: [
        { name: 'CSS-Tricks Complete Guide', url: '#' },
        { name: 'Flexbox Froggy Game', url: '#' },
        { name: 'Grid Garden Game', url: '#' }
      ]
    },
    {
      id: 'first-project',
      step: 3,
      name: 'Build your first Project',
      icon: <FaPuzzlePiece className="h-8 w-8 text-purple-500" />,
      color: '#8B5CF6',
      bgColor: 'bg-purple-50 dark:bg-purple-950',
      borderColor: 'border-purple-200 dark:border-purple-800',
      overview: 'Apply HTML & CSS knowledge in a real project',
      learningPath: ['Portfolio Website', 'Landing Page', 'Responsive Layout', 'Cross-browser Testing'],
      tools: ['GitHub Pages', 'Netlify', 'Vercel', 'Lighthouse'],
      resources: [
        { name: 'Frontend Mentor', url: '#' },
        { name: 'CodePen Challenges', url: '#' },
        { name: 'Portfolio Inspiration', url: '#' }
      ]
    },
    {
      id: 'javascript',
      step: 4,
      name: 'Learn and Implement JavaScript',
      icon: <SiJavascript className="h-8 w-8 text-yellow-500" />,
      color: '#F7DF1E',
      bgColor: 'bg-yellow-50 dark:bg-yellow-950',
      borderColor: 'border-yellow-200 dark:border-yellow-800',
      overview: 'Add interactivity and dynamic behavior to web pages',
      learningPath: ['JavaScript Fundamentals', 'DOM Manipulation', 'ES6+ Features', 'Async Programming', 'Error Handling'],
      tools: ['Chrome DevTools', 'Node.js', 'ESLint', 'Babel'],
      resources: [
        { name: 'JavaScript.info', url: '#' },
        { name: 'Eloquent JavaScript', url: '#' },
        { name: 'You Don\'t Know JS', url: '#' }
      ]
    },
    {
      id: 'dev-tools',
      step: 5,
      name: 'Dev Tools & Browser Extension',
      icon: <Wrench className="h-8 w-8 text-red-500" />,
      color: '#FF6B6B',
      bgColor: 'bg-red-50 dark:bg-red-950',
      borderColor: 'border-red-200 dark:border-red-800',
      overview: 'Master developer tools and browser debugging',
      learningPath: ['Chrome DevTools', 'Browser APIs', 'Performance Debugging', 'Extension Development'],
      tools: ['Chrome DevTools', 'Firefox Developer Tools', 'Lighthouse', 'React DevTools'],
      resources: [
        { name: 'Chrome DevTools Docs', url: '#' },
        { name: 'Web Extension API', url: '#' },
        { name: 'Performance Optimization', url: '#' }
      ]
    },
    {
      id: 'npm',
      step: 6,
      name: 'Learn Node Package Manager (NPM)',
      icon: <SiNpm className="h-8 w-8 text-red-500" />,
      color: '#CB3837',
      bgColor: 'bg-red-50 dark:bg-red-950',
      borderColor: 'border-red-200 dark:border-red-800',
      overview: 'Manage dependencies and build modern workflows',
      learningPath: ['NPM Basics', 'Package.json', 'Scripts & Automation', 'Publishing Packages'],
      tools: ['npm', 'yarn', 'pnpm', 'Webpack'],
      resources: [
        { name: 'NPM Documentation', url: '#' },
        { name: 'Package.json Guide', url: '#' },
        { name: 'NPM Best Practices', url: '#' }
      ]
    },
    {
      id: 'version-control',
      step: 7,
      name: 'Version Control and Collaboration',
      icon: <SiGit className="h-8 w-8 text-orange-500" />,
      color: '#F05032',
      bgColor: 'bg-orange-50 dark:bg-orange-950',
      borderColor: 'border-orange-200 dark:border-orange-800',
      overview: 'Master Git and collaborative development workflows',
      learningPath: ['Git Fundamentals', 'Branching Strategies', 'Pull Requests', 'Code Reviews'],
      tools: ['Git', 'GitHub', 'GitLab', 'Sourcetree'],
      resources: [
        { name: 'Pro Git Book', url: '#' },
        { name: 'GitHub Learning Lab', url: '#' },
        { name: 'Git Flow Guide', url: '#' }
      ]
    },
    {
      id: 'frameworks',
      step: 8,
      name: 'Front-End Frameworks',
      icon: <SiReact className="h-8 w-8 text-cyan-500" />,
      color: '#61DAFB',
      bgColor: 'bg-cyan-50 dark:bg-cyan-950',
      borderColor: 'border-cyan-200 dark:border-cyan-800',
      overview: 'Build complex applications with modern frameworks',
      learningPath: ['React Fundamentals', 'Component Architecture', 'State Management', 'Routing', 'Testing'],
      tools: ['React', 'Vue.js', 'Angular', 'Vite'],
      resources: [
        { name: 'React Documentation', url: '#' },
        { name: 'Vue.js Guide', url: '#' },
        { name: 'Angular Tutorial', url: '#' }
      ]
    }
  ];

  // Backend Phase Technologies
  const backendPhase = [
    {
      id: 'server-basics',
      step: 1,
      name: 'Server Fundamentals',
      icon: <FaProjectDiagram className="h-8 w-8 text-green-500" />,
      color: '#68A063',
      bgColor: 'bg-green-50 dark:bg-green-950',
      borderColor: 'border-green-200 dark:border-green-800',
      overview: 'Understand server-side concepts and HTTP',
      learningPath: ['HTTP Protocol', 'REST APIs', 'Server Architecture', 'Request/Response Cycle'],
      tools: ['Postman', 'Insomnia', 'cURL', 'HTTPie'],
      resources: [
        { name: 'HTTP Guide', url: '#' },
        { name: 'REST API Design', url: '#' },
        { name: 'Server Fundamentals', url: '#' }
      ]
    },
    {
      id: 'nodejs',
      step: 2,
      name: 'Learn Node.js',
      icon: <SiJavascript className="h-8 w-8 text-green-500" />,
      color: '#339933',
      bgColor: 'bg-green-50 dark:bg-green-950',
      borderColor: 'border-green-200 dark:border-green-800',
      overview: 'Build server-side applications with JavaScript',
      learningPath: ['Node.js Runtime', 'File System', 'HTTP Modules', 'Package Management'],
      tools: ['Node.js', 'npm', 'nodemon', 'pm2'],
      resources: [
        { name: 'Node.js Documentation', url: '#' },
        { name: 'Node.js Best Practices', url: '#' },
        { name: 'NodeSchool Tutorials', url: '#' }
      ]
    },
    {
      id: 'express',
      step: 3,
      name: 'Express.js Framework',
      icon: <SiJavascript className="h-8 w-8 text-gray-500" />,
      color: '#000000',
      bgColor: 'bg-gray-50 dark:bg-gray-950',
      borderColor: 'border-gray-200 dark:border-gray-800',
      overview: 'Build robust web applications and APIs',
      learningPath: ['Express Basics', 'Routing', 'Middleware', 'Error Handling'],
      tools: ['Express.js', 'Morgan', 'Helmet', 'CORS'],
      resources: [
        { name: 'Express.js Guide', url: '#' },
        { name: 'Express Middleware', url: '#' },
        { name: 'API Design Patterns', url: '#' }
      ]
    },
    {
      id: 'databases',
      step: 4,
      name: 'Database Management',
      icon: <Database className="h-8 w-8 text-blue-500" />,
      color: '#336791',
      bgColor: 'bg-blue-50 dark:bg-blue-950',
      borderColor: 'border-blue-200 dark:border-blue-800',
      overview: 'Store and manage application data effectively',
      learningPath: ['SQL Fundamentals', 'Database Design', 'ORMs', 'Data Modeling'],
      tools: ['PostgreSQL', 'MongoDB', 'Prisma', 'Mongoose'],
      resources: [
        { name: 'Database Design Guide', url: '#' },
        { name: 'SQL Tutorial', url: '#' },
        { name: 'MongoDB University', url: '#' }
      ]
    },
    {
      id: 'authentication',
      step: 5,
      name: 'Authentication & Security',
      icon: <Lock className="h-8 w-8 text-orange-500" />,
      color: '#FF6B35',
      bgColor: 'bg-orange-50 dark:bg-orange-950',
      borderColor: 'border-orange-200 dark:border-orange-800',
      overview: 'Implement secure user authentication systems',
      learningPath: ['JWT Tokens', 'OAuth', 'Password Hashing', 'Security Best Practices'],
      tools: ['Passport.js', 'Auth0', 'Firebase Auth', 'bcrypt'],
      resources: [
        { name: 'JWT.io', url: '#' },
        { name: 'OWASP Security Guide', url: '#' },
        { name: 'Auth Best Practices', url: '#' }
      ]
    },
    {
      id: 'deployment',
      step: 6,
      name: 'Deployment & DevOps',
      icon: <Cloud className="h-8 w-8 text-blue-500" />,
      color: '#4285F4',
      bgColor: 'bg-blue-50 dark:bg-blue-950',
      borderColor: 'border-blue-200 dark:border-blue-800',
      overview: 'Deploy applications to production environments',
      learningPath: ['Cloud Platforms', 'CI/CD Pipelines', 'Docker Containers', 'Monitoring'],
      tools: ['Vercel', 'Netlify', 'Docker', 'GitHub Actions'],
      resources: [
        { name: 'Deployment Guide', url: '#' },
        { name: 'Docker Tutorial', url: '#' },
        { name: 'CI/CD Best Practices', url: '#' }
      ]
    }
  ];

  const TechNode: React.FC<TechNodeProps> = ({ tech, isCompleted, onTechClick, onToggleCompleted, showArrow = true, arrowDirection = 'right' }) => (
    <div className="flex items-center">
      <Card 
        className={`relative w-80 h-24 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 ${tech.bgColor} ${tech.borderColor} border-2 ${
          isCompleted ? 'ring-2 ring-green-500 dark:ring-green-400 shadow-lg' : 'shadow-md'
        }`}
        onClick={() => onTechClick(tech)}
      >
        <CardContent className="p-4 h-full flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-sm font-bold shadow-sm">
                {tech.step}
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2 mb-1">
                <span className="text-2xl">{tech.icon}</span>
                {isCompleted && (
                  <CheckCircle className="h-4 w-4 text-green-500 dark:text-green-400" />
                )}
              </div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 leading-tight">
                {tech.name}
              </h3>
            </div>
          </div>
          <Button
            size="sm"
            variant="ghost"
            onClick={(e) => {
              e.stopPropagation();
              onToggleCompleted(tech.id);
            }}
            className="h-6 w-6 p-0 opacity-60 hover:opacity-100"
          >
            <CheckCircle className={`h-4 w-4 ${
              isCompleted ? 'text-green-500 dark:text-green-400' : 'text-gray-400'
            }`} />
          </Button>
        </CardContent>
      </Card>
      
      {showArrow && (
        <div className="mx-4 text-gray-400 dark:text-gray-600">
          {arrowDirection === 'right' ? (
            <ArrowRight className="h-6 w-6" />
          ) : (
            <ArrowDown className="h-6 w-6" />
          )}
        </div>
      )}
    </div>
  );

  const PhaseSection: React.FC<PhaseSectionProps> = ({ title, subtitle, technologies, icon: Icon, completedCount, totalCount }) => (
    <div className="space-y-8">
      {/* Phase Header */}
      <div className="text-center space-y-3">
        <div className="flex items-center justify-center space-x-3">
          <Icon className="h-10 w-10 -mt-12 text-blue-600 dark:text-blue-400" />
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              {title}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-1">
              {subtitle}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <div className="h-2 w-32 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-500"
              style={{ width: `${(completedCount / totalCount) * 100}%` }}
            />
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {completedCount}/{totalCount}
          </span>
        </div>
      </div>

      {/* Technology Flow */}
      <div className="flex flex-col items-center space-y-6">
        {/* Row 1: Steps 1-3 */}
        <div className="flex items-center justify-center">
          {technologies.slice(0, 3).map((tech: TechType, index: number) => (
            <TechNode
              key={tech.id}
              tech={tech}
              isCompleted={completedTechs.has(tech.id)}
              onTechClick={handleTechClick}
              onToggleCompleted={toggleCompleted}
              showArrow={index < 2}
            />
          ))}
        </div>

        {/* Vertical Arrow */}
        {technologies.length > 3 && (
          <div className="text-gray-400 dark:text-gray-600">
            <ArrowDown className="h-6 w-6" />
          </div>
        )}

        {/* Row 2: Steps 4-6 (if exists) */}
        {technologies.length > 3 && (
          <div className="flex items-center justify-center">
            {technologies.slice(3, 6).map((tech: TechType, index: number) => (
              <TechNode
                key={tech.id}
                tech={tech}
                isCompleted={completedTechs.has(tech.id)}
                onTechClick={handleTechClick}
                onToggleCompleted={toggleCompleted}
                showArrow={index < technologies.slice(3, 6).length - 1}
              />
            ))}
          </div>
        )}

        {/* Additional rows for more technologies */}
        {technologies.length > 6 && (
          <>
            <div className="text-gray-400 dark:text-gray-600">
              <ArrowDown className="h-6 w-6" />
            </div>
            <div className="flex items-center justify-center">
              {technologies.slice(6).map((tech: TechType, index: number) => (
                <TechNode
                  key={tech.id}
                  tech={tech}
                  isCompleted={completedTechs.has(tech.id)}
                  onTechClick={handleTechClick}
                  onToggleCompleted={toggleCompleted}
                  showArrow={index < technologies.slice(6).length - 1}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );

  return (
    <div>
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12 mb-20">
        <div className="space-y-20">
          {/* Frontend Phase */}
          <PhaseSection
            title="Phase 1: Mastering Front-End Web Development"
            subtitle="Build beautiful, interactive user interfaces"
            technologies={frontendPhase}
            icon={Code2}
            completedCount={frontendPhase.filter(tech => completedTechs.has(tech.id)).length}
            totalCount={frontendPhase.length}
          />

          {/* Phase Separator */}
          <div className="flex items-center justify-center py-12">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent w-full max-w-md" />
            <div className="mx-6 px-4 py-2 bg-white dark:bg-gray-900 rounded-full border border-gray-200 dark:border-gray-800">
              <ArrowDown className="h-5 w-5 text-gray-500" />
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent w-full max-w-md" />
          </div>

          {/* Backend Phase */}
          <PhaseSection
            title="Phase 2: Mastering Back-End Web Development"
            subtitle="Build robust server-side applications and APIs"
            technologies={backendPhase}
            icon={Database}
            completedCount={backendPhase.filter(tech => completedTechs.has(tech.id)).length}
            totalCount={backendPhase.length}
          />
        </div>
      </main>

      {/* Technology Detail Sheet */}
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent className="w-full sm:max-w-2xl overflow-y-auto">
          {selectedTech && (
            <>
              <SheetHeader className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl">{selectedTech.icon}</span>
                  <div>
                    <SheetTitle className="text-2xl font-bold">{selectedTech.name}</SheetTitle>
                    <SheetDescription className="text-base mt-1">
                      Step {selectedTech.step} in your learning journey
                    </SheetDescription>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {selectedTech.overview}
                </p>
              </SheetHeader>

              <div className="mt-8 space-y-6">
                <Tabs defaultValue="path" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="path">Learning Path</TabsTrigger>
                    <TabsTrigger value="tools">Tools</TabsTrigger>
                    <TabsTrigger value="resources">Resources</TabsTrigger>
                  </TabsList>

                  <TabsContent value="path" className="space-y-4 mt-6">
                    <h4 className="text-lg font-semibold mb-4">Recommended Learning Path</h4>
                    <div className="space-y-3">
                      {selectedTech.learningPath.map((step: string, index: number) => (
                        <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-medium mt-0.5">
                            {index + 1}
                          </div>
                          <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                            {step}
                          </span>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="tools" className="space-y-4 mt-6">
                    <h4 className="text-lg font-semibold mb-4">Essential Tools & Technologies</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {selectedTech.tools.map((tool: string, index: number) => (
                        <div key={index} className="flex items-center space-x-2 p-3 rounded-lg border border-gray-200 dark:border-gray-700">
                          <Wrench className="h-4 w-4 text-gray-500" />
                          <span className="text-sm font-medium">{tool}</span>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="resources" className="space-y-4 mt-6">
                    <h4 className="text-lg font-semibold mb-4">Learning Resources</h4>
                    <div className="space-y-3">
                      {selectedTech.resources.map((resource: Resource, index: number) => (
                        <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                          <div className="flex items-center space-x-3">
                            <BookOpen className="h-5 w-5 text-blue-600" />
                            <span className="font-medium">{resource.name}</span>
                          </div>
                          <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="flex space-x-3 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <Button
                    onClick={() => toggleCompleted(selectedTech.id)}
                    variant={completedTechs.has(selectedTech.id) ? "default" : "outline"}
                    className="flex-1 h-11"
                  >
                    <CheckCircle className="h-4 w-4 mr-2" />
                    {completedTechs.has(selectedTech.id) ? 'Completed' : 'Mark as Complete'}
                  </Button>
                </div>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default function WebDevRoadmapPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen">
      <div className="pt-8 pl-8">
        <Button
          variant="outline"
          className="flex items-center gap-2 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 shadow"
          onClick={() => router.push('/phases/domains/web')}
        >
          <ArrowLeft className="h-4 w-4" />
          Go Back
        </Button>
      </div>
      {/* Main Content */}
      <WebDevRoadmap />
    </div>
  );
}

