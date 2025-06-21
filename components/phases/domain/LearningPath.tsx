import React from "react";
import { ArrowRight } from "lucide-react";
import { learningPath } from "../../../data/learningPath";

const LearningPath = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Your Learning Journey
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Follow this structured path to master real-world development skills
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {learningPath.map((step, index) => (
          <div key={index} className="relative">
            <div className="bg-card border border-border rounded-xl p-6 h-full hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div
                  className={`p-3 rounded-lg ${
                    step.status === "active"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {React.createElement(step.icon, { className: "h-6 w-6" })}
                </div>
                <div className="ml-4">
                  <p className="text-sm text-muted-foreground">
                    {step.phase}
                  </p>
                  <h3 className="text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                {step.description}
              </p>
            </div>
            {index < learningPath.length - 1 && (
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                <ArrowRight className="h-6 w-6 text-muted-foreground" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningPath;