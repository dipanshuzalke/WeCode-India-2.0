import React from "react";
import { Rocket, Play, BookOpen } from "lucide-react";

const PageHeader = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5 border-b">
      <div className="container mx-auto px-4 py-24">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary/10 border border-primary/20 rounded-2xl">
              <Rocket className="h-16 w-16 text-primary" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Phase 3: Development
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Build real-world projects in various domains like web, mobile, AI,
            and more. This phase focuses on practical application of your
            skills through hands-on project development.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              <Play className="w-4 h-4" />
              Start Building
            </button>
            <button className="inline-flex items-center gap-2 px-8 py-3 border border-border text-foreground hover:bg-muted/50 rounded-lg font-medium transition-colors">
              <BookOpen className="w-4 h-4" />
              View Roadmap
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;