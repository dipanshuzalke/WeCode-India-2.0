import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  BookOpen,
  Code,
  FileText,
  Rocket,
  CheckCircle,
  CircleEllipsis,
  Clock,
  Award,
  BookCheck,
  Calendar,
  ChevronRight,
  Bot,
} from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="flex flex-col space-y-8 p-8">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back, John! Continue your software development journey.
        </p>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Phase</CardTitle>
            <Rocket className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">DSA</div>
            <p className="text-xs text-muted-foreground">Phase 2 of 5</p>
            <Progress value={42} className="mt-3" />
            <div className="mt-2 text-xs text-muted-foreground">42% complete</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed Tasks</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12/28</div>
            <p className="text-xs text-muted-foreground">This week</p>
            <Progress value={43} className="mt-3" />
            <div className="mt-2 text-xs text-muted-foreground">43% weekly goal</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Projects</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3/8</div>
            <p className="text-xs text-muted-foreground">In progress</p>
            <Progress value={37} className="mt-3" />
            <div className="mt-2 text-xs text-muted-foreground">37% complete</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Streak</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7 Days</div>
            <p className="text-xs text-muted-foreground">Best: 15 days</p>
            <Progress value={46} className="mt-3" />
            <div className="mt-2 text-xs text-muted-foreground">Keep it up!</div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-4 md:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Current Progress</CardTitle>
            <CardDescription>
              Your learning journey across all phases
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <div className="font-medium">Fundamentals</div>
                  </div>
                  <div className="text-sm text-muted-foreground">100%</div>
                </div>
                <Progress value={100} />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Code className="h-5 w-5 text-primary" />
                    <div className="font-medium">Data Structures & Algorithms</div>
                  </div>
                  <div className="text-sm text-muted-foreground">42%</div>
                </div>
                <Progress value={42} />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Rocket className="h-5 w-5 text-primary" />
                    <div className="font-medium">Development</div>
                  </div>
                  <div className="text-sm text-muted-foreground">0%</div>
                </div>
                <Progress value={0} />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <FileText className="h-5 w-5 text-primary" />
                    <div className="font-medium">Profile Building</div>
                  </div>
                  <div className="text-sm text-muted-foreground">0%</div>
                </div>
                <Progress value={0} />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <BookCheck className="h-5 w-5 text-primary" />
                    <div className="font-medium">Interview Preparation</div>
                  </div>
                  <div className="text-sm text-muted-foreground">0%</div>
                </div>
                <Progress value={0} />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Upcoming Tasks</CardTitle>
            <CardDescription>Your scheduled tasks for today</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="mt-0.5">
                  <CircleEllipsis className="h-5 w-5 text-muted-foreground" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Complete Array Problems
                  </p>
                  <p className="text-sm text-muted-foreground">
                    DSA - Arrays & Strings
                  </p>
                  <div className="flex items-center pt-2">
                    <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">Today, 2:00 PM</span>
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="mt-0.5">
                  <CircleEllipsis className="h-5 w-5 text-muted-foreground" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Watch Recursion Tutorial
                  </p>
                  <p className="text-sm text-muted-foreground">
                    DSA - Recursion & Backtracking
                  </p>
                  <div className="flex items-center pt-2">
                    <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">Today, 4:30 PM</span>
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="mt-0.5">
                  <CircleEllipsis className="h-5 w-5 text-muted-foreground" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Community Discussion
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Weekly DSA Problem Solving
                  </p>
                  <div className="flex items-center pt-2">
                    <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">Today, 7:00 PM</span>
                  </div>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-2" asChild>
                <Link href="/dashboard/tracker">
                  View All Tasks
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="recommended">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">Quick Access</h2>
          <TabsList>
            <TabsTrigger value="recommended">Recommended</TabsTrigger>
            <TabsTrigger value="recent">Recent</TabsTrigger>
            <TabsTrigger value="popular">Popular</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="recommended" className="mt-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">DSA - Arrays & Strings</CardTitle>
                <CardDescription>Continue your learning path</CardDescription>
              </CardHeader>
              <CardContent className="pb-3">
                <Progress value={35} className="mb-2" />
                <p className="text-xs text-muted-foreground">35% complete</p>
              </CardContent>
              <div className="px-6 pb-6">
                <Button className="w-full" asChild>
                  <Link href="/dashboard/dsa/arrays">Continue Learning</Link>
                </Button>
              </div>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Todo List Project</CardTitle>
                <CardDescription>Web Development</CardDescription>
              </CardHeader>
              <CardContent className="pb-3">
                <Progress value={60} className="mb-2" />
                <p className="text-xs text-muted-foreground">60% complete</p>
              </CardContent>
              <div className="px-6 pb-6">
                <Button className="w-full" asChild>
                  <Link href="/dashboard/projects/todo-list">Continue Project</Link>
                </Button>
              </div>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Weekly Coding Challenge</CardTitle>
                <CardDescription>Community Challenge</CardDescription>
              </CardHeader>
              <CardContent className="pb-3">
                <Progress value={0} className="mb-2" />
                <p className="text-xs text-muted-foreground">New challenge</p>
              </CardContent>
              <div className="px-6 pb-6">
                <Button className="w-full" asChild>
                  <Link href="/dashboard/community/challenges">View Challenge</Link>
                </Button>
              </div>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="recent" className="mt-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Linked List Tutorial</CardTitle>
                <CardDescription>DSA Fundamentals</CardDescription>
              </CardHeader>
              <CardContent className="pb-3">
                <Progress value={100} className="mb-2" />
                <p className="text-xs text-muted-foreground">Completed yesterday</p>
              </CardContent>
              <div className="px-6 pb-6">
                <Button className="w-full" asChild>
                  <Link href="/dashboard/dsa/linked-lists">Review Again</Link>
                </Button>
              </div>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Binary Search Problems</CardTitle>
                <CardDescription>DSA Practice</CardDescription>
              </CardHeader>
              <CardContent className="pb-3">
                <Progress value={75} className="mb-2" />
                <p className="text-xs text-muted-foreground">Last accessed 2 days ago</p>
              </CardContent>
              <div className="px-6 pb-6">
                <Button className="w-full" asChild>
                  <Link href="/dashboard/dsa/binary-search">Continue Practice</Link>
                </Button>
              </div>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Community Chat</CardTitle>
                <CardDescription>DSA Study Group</CardDescription>
              </CardHeader>
              <CardContent className="pb-3">
                <p className="text-xs text-muted-foreground">Last active 1 day ago</p>
              </CardContent>
              <div className="px-6 pb-6">
                <Button className="w-full" asChild>
                  <Link href="/dashboard/community/chat">Join Chat</Link>
                </Button>
              </div>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="popular" className="mt-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Dynamic Programming</CardTitle>
                <CardDescription>Advanced DSA Topic</CardDescription>
              </CardHeader>
              <CardContent className="pb-3">
                <p className="text-xs text-muted-foreground">Highly rated by 95% of students</p>
              </CardContent>
              <div className="px-6 pb-6">
                <Button className="w-full" asChild>
                  <Link href="/dashboard/dsa/dynamic-programming">Start Learning</Link>
                </Button>
              </div>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Full-Stack Project</CardTitle>
                <CardDescription>MERN Stack Application</CardDescription>
              </CardHeader>
              <CardContent className="pb-3">
                <p className="text-xs text-muted-foreground">Popular among web developers</p>
              </CardContent>
              <div className="px-6 pb-6">
                <Button className="w-full" asChild>
                  <Link href="/dashboard/projects/mern-stack">View Project</Link>
                </Button>
              </div>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Resume Builder</CardTitle>
                <CardDescription>Profile Building</CardDescription>
              </CardHeader>
              <CardContent className="pb-3">
                <p className="text-xs text-muted-foreground">Used by 75% of students</p>
              </CardContent>
              <div className="px-6 pb-6">
                <Button className="w-full" asChild>
                  <Link href="/dashboard/profile/resume">Create Resume</Link>
                </Button>
              </div>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Daily Coding Streak</CardTitle>
            <CardDescription>Keep your streak going!</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between mb-4">
              <div className="text-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 mx-auto">
                  <span className="text-sm font-medium">M</span>
                </div>
                <span className="text-xs mt-1 block">✓</span>
              </div>
              <div className="text-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 mx-auto">
                  <span className="text-sm font-medium">T</span>
                </div>
                <span className="text-xs mt-1 block">✓</span>
              </div>
              <div className="text-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 mx-auto">
                  <span className="text-sm font-medium">W</span>
                </div>
                <span className="text-xs mt-1 block">✓</span>
              </div>
              <div className="text-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 mx-auto">
                  <span className="text-sm font-medium">T</span>
                </div>
                <span className="text-xs mt-1 block">✓</span>
              </div>
              <div className="text-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 mx-auto">
                  <span className="text-sm font-medium">F</span>
                </div>
                <span className="text-xs mt-1 block">✓</span>
              </div>
              <div className="text-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 mx-auto">
                  <span className="text-sm font-medium">S</span>
                </div>
                <span className="text-xs mt-1 block">✓</span>
              </div>
              <div className="text-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary mx-auto">
                  <span className="text-sm font-medium text-primary-foreground">S</span>
                </div>
                <span className="text-xs mt-1 block">Today</span>
              </div>
            </div>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/dashboard/tracker">
                View Full Calendar
                <Calendar className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>AI Assistant</CardTitle>
            <CardDescription>Get personalized recommendations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="rounded-lg bg-muted p-4">
                <p className="text-sm">
                  Based on your progress, I recommend focusing on:
                </p>
                <ul className="mt-2 space-y-1 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    Complete the Arrays & Strings section
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    Start the Binary Search challenges
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    Join the weekly DSA community discussion
                  </li>
                </ul>
              </div>
              <Button className="w-full" asChild>
                <Link href="/dashboard/assistant">
                  Ask AI Assistant
                  <Bot className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}