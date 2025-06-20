import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import {
  BookOpen,
  Code,
  Rocket,
  FileText,
  BookCheck,
  ChevronRight,
  Lock,
} from 'lucide-react';

export default function PhasesPage() {
  return (
    <div className="container py-12">
      <div className="flex flex-col space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight">Learning Phases</h1>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Follow our structured learning path to become a job-ready software developer. Each phase builds upon the previous one to ensure a comprehensive understanding.
        </p>
      </div>

      <div className="relative mt-16 mb-24">
        <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-border"></div>
        
        <div className="space-y-12 md:space-y-24">
          <div className="group relative">
            <div className="flex items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-background border-4 border-primary z-10">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="flex flex-col space-y-4">
                <h2 className="text-3xl font-bold">Phase 1: Fundamentals</h2>
                <p className="text-muted-foreground">
                  Start with the basics of programming, covering languages, tools, and core concepts. This phase establishes a solid foundation for your software development journey.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">Progress</div>
                    <div className="text-sm text-muted-foreground">100%</div>
                  </div>
                  <Progress value={100} />
                </div>
                <div className="flex flex-col space-y-2">
                  <h3 className="font-medium">What you'll learn:</h3>
                  <ul className="grid gap-1 text-sm">
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Programming basics (variables, loops, conditions)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Core CS concepts (memory, complexity)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Version control with Git</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Basic problem-solving techniques</span>
                    </li>
                  </ul>
                </div>
                <Button asChild>
                  <Link href="/phases/fundamentals">Explore Fundamentals</Link>
                </Button>
              </div>
              <div className="flex items-center justify-center">
                <Card className="w-full max-w-md">
                  <CardHeader>
                    <CardTitle>Getting Started</CardTitle>
                    <CardDescription>Essential resources for beginners</CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <div className="flex items-start space-x-4 rounded-md border p-4">
                      <BookOpen className="mt-0.5 h-5 w-5 text-primary" />
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">Programming Basics</p>
                        <p className="text-sm text-muted-foreground">
                          Learn the fundamentals of programming
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 rounded-md border p-4">
                      <Code className="mt-0.5 h-5 w-5 text-primary" />
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">Git & GitHub</p>
                        <p className="text-sm text-muted-foreground">
                          Master version control for developers
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 rounded-md border p-4">
                      <BookCheck className="mt-0.5 h-5 w-5 text-primary" />
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">Problem Solving</p>
                        <p className="text-sm text-muted-foreground">
                          Develop your analytical thinking
                        </p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/phases/fundamentals">View All Resources</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
          
          <div className="group relative">
            <div className="flex items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-background border-4 border-primary z-10">
                <Code className="h-6 w-6 text-primary" />
              </div>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="flex flex-col space-y-4">
                <h2 className="text-3xl font-bold">Phase 2: Data Structures & Algorithms</h2>
                <p className="text-muted-foreground">
                  Master DSA concepts essential for problem-solving and technical interviews. This phase will sharpen your analytical thinking and coding skills.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">Progress</div>
                    <div className="text-sm text-muted-foreground">42%</div>
                  </div>
                  <Progress value={42} />
                </div>
                <div className="flex flex-col space-y-2">
                  <h3 className="font-medium">What you'll learn:</h3>
                  <ul className="grid gap-1 text-sm">
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Arrays, strings, and linked lists</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Stacks, queues, and hash tables</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Trees, graphs, and their algorithms</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Dynamic programming and greedy algorithms</span>
                    </li>
                  </ul>
                </div>
                <Button asChild>
                  <Link href="/phases/dsa">Explore DSA</Link>
                </Button>
              </div>
              <div className="flex items-center justify-center">
                <Card className="w-full max-w-md">
                  <CardHeader>
                    <CardTitle>DSA Mastery</CardTitle>
                    <CardDescription>Key concepts and practice problems</CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <div className="flex items-start space-x-4 rounded-md border p-4">
                      <Code className="mt-0.5 h-5 w-5 text-primary" />
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">Arrays & Strings</p>
                        <p className="text-sm text-muted-foreground">
                          Fundamental data structures
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 rounded-md border p-4">
                      <Code className="mt-0.5 h-5 w-5 text-primary" />
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">Recursion & Backtracking</p>
                        <p className="text-sm text-muted-foreground">
                          Solve problems recursively
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 rounded-md border p-4">
                      <Code className="mt-0.5 h-5 w-5 text-primary" />
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">Graph Algorithms</p>
                        <p className="text-sm text-muted-foreground">
                          Network and path finding problems
                        </p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/phases/dsa">View All Topics</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
          
          <div className="group relative">
            <div className="flex items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-background border-4 border-muted z-10">
                <Rocket className="h-6 w-6 text-muted-foreground" />
              </div>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-2">
                  <h2 className="text-3xl font-bold text-muted-foreground">Phase 3: Development</h2>
                  {/* <Lock className="h-5 w-5 text-muted-foreground" /> */}
                </div>
                <p className="text-muted-foreground">
                  Build real-world projects in various domains like web, mobile, AI, and more. This phase focuses on practical application of your skills.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium text-muted-foreground">Progress</div>
                    <div className="text-sm text-muted-foreground">0%</div>
                  </div>
                  <Progress value={0} className="bg-muted" />
                </div>
                <div className="flex flex-col space-y-2">
                  <h3 className="font-medium text-muted-foreground">What you'll learn:</h3>
                  <ul className="grid gap-1 text-sm">
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Web development (front-end and back-end)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Mobile app development</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Database design and implementation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">API development and integration</span>
                    </li>
                  </ul>
                </div>
                <Button  asChild>
                  <Link href="/phases/domains">Explore Development</Link>
                </Button>
              </div>
              <div className="flex items-center justify-center">
                <Card className="w-full max-w-md bg-muted/50">
                  <CardHeader>
                    <CardTitle className="text-muted-foreground">Project-Based Learning</CardTitle>
                    <CardDescription>Build real-world applications</CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <div className="flex items-start space-x-4 rounded-md border p-4 opacity-50">
                      <Rocket className="mt-0.5 h-5 w-5 text-muted-foreground" />
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">Web Applications</p>
                        <p className="text-sm text-muted-foreground">
                          Full-stack web development
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 rounded-md border p-4 opacity-50">
                      <Rocket className="mt-0.5 h-5 w-5 text-muted-foreground" />
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">Mobile Apps</p>
                        <p className="text-sm text-muted-foreground">
                          Cross-platform mobile development
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 rounded-md border p-4 opacity-50">
                      <Rocket className="mt-0.5 h-5 w-5 text-muted-foreground" />
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">Backend Systems</p>
                        <p className="text-sm text-muted-foreground">
                          APIs, databases, and servers
                        </p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                     <Link href="/phases/domains">View All Domains</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
          
          {/* Continue with similar structure for Phase 4 and 5 */}
          <div className="group relative">
            <div className="flex items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-background border-4 border-muted z-10">
                <FileText className="h-6 w-6 text-muted-foreground" />
              </div>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-2">
                  <h2 className="text-3xl font-bold text-muted-foreground">Phase 4: Profile Building</h2>
                </div>
                <p className="text-muted-foreground">
                  Create an impressive resume, optimize your GitHub, and build your LinkedIn presence to showcase your skills to potential employers.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium text-muted-foreground">Progress</div>
                    <div className="text-sm text-muted-foreground">0%</div>
                  </div>
                  <Progress value={0} className="bg-muted" />
                </div>
                <Button asChild>
                   <Link href="/phases/profile-building">Explore Profile Building</Link>
                </Button>
              </div>
              <div className="flex items-center justify-center">
                <Card className="w-full max-w-md bg-muted/50">
                  <CardHeader>
                    <CardTitle className="text-muted-foreground">Professional Profile</CardTitle>
                    <CardDescription>Stand out to recruiters</CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-4 opacity-50">
                    <div className="flex items-start space-x-4 rounded-md border p-4">
                      <FileText className="mt-0.5 h-5 w-5 text-muted-foreground" />
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">Resume Builder</p>
                        <p className="text-sm text-muted-foreground">
                          Create an impressive resume
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 rounded-md border p-4">
                      <FileText className="mt-0.5 h-5 w-5 text-muted-foreground" />
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">GitHub Portfolio</p>
                        <p className="text-sm text-muted-foreground">
                          Optimize your code repositories
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 rounded-md border p-4">
                      <FileText className="mt-0.5 h-5 w-5 text-muted-foreground" />
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">LinkedIn Optimization</p>
                        <p className="text-sm text-muted-foreground">
                          Build your professional network
                        </p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      View all tools
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
          
          <div className="group relative">
            <div className="flex items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-background border-4 border-muted z-10">
                <BookCheck className="h-6 w-6 text-muted-foreground" />
              </div>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-2">
                  <h2 className="text-3xl font-bold text-muted-foreground">Phase 5: Interview Preparation</h2>
                </div>
                <p className="text-muted-foreground">
                  Prepare for technical and HR interviews with mock questions and expert guidance to land your dream job.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium text-muted-foreground">Progress</div>
                    <div className="text-sm text-muted-foreground">0%</div>
                  </div>
                  <Progress value={0} className="bg-muted" />
                </div>
                <Button  asChild>
                   <Link href="/phases/interview-prep">Explore Interview Preparation</Link>
                </Button>
              </div>
              <div className="flex items-center justify-center">
                <Card className="w-full max-w-md bg-muted/50">
                  <CardHeader>
                    <CardTitle className="text-muted-foreground">Interview Success</CardTitle>
                    <CardDescription>Ace your technical interviews</CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-4 opacity-50">
                    <div className="flex items-start space-x-4 rounded-md border p-4">
                      <BookCheck className="mt-0.5 h-5 w-5 text-muted-foreground" />
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">Technical Interviews</p>
                        <p className="text-sm text-muted-foreground">
                          Practice coding interviews
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 rounded-md border p-4">
                      <BookCheck className="mt-0.5 h-5 w-5 text-muted-foreground" />
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">HR Interviews</p>
                        <p className="text-sm text-muted-foreground">
                          Behavioral questions and answers
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 rounded-md border p-4">
                      <BookCheck className="mt-0.5 h-5 w-5 text-muted-foreground" />
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">Mock Interviews</p>
                        <p className="text-sm text-muted-foreground">
                          Practice with peers and mentors
                        </p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Start preparation
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}