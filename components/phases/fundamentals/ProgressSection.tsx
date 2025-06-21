import React from "react";

interface ProgressSectionProps {
  progress: number;
}

const ProgressSection: React.FC<ProgressSectionProps> = ({ progress }) => {
  return (
    <div className="border-b">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-foreground">Overall Progress</h3>
          <span className="text-sm font-medium text-blue-600">{progress}%</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div
            className="bg-gradient-to-r from-fuchsia-500 to-fuchsia-200 h-2 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressSection;