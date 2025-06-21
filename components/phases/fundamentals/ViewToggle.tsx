import React from "react";
import { Grid3X3, List } from "lucide-react";

interface ViewToggleProps {
  viewMode: "grid" | "list";
  onViewModeChange: (mode: "grid" | "list") => void;
}

const ViewToggle: React.FC<ViewToggleProps> = ({ viewMode, onViewModeChange }) => {
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-muted-foreground hidden sm:inline">
        View:
      </span>
      <div className="flex items-center bg-muted/50 rounded-lg p-1 border">
        <button
          onClick={() => onViewModeChange("grid")}
          className={`flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-md transition-all ${
            viewMode === "grid"
              ? "bg-background shadow-sm text-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Grid3X3 className="w-4 h-4" />
          <span className="hidden sm:inline">Grid</span>
        </button>
        <button
          onClick={() => onViewModeChange("list")}
          className={`flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-md transition-all ${
            viewMode === "list"
              ? "bg-background shadow-sm text-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <List className="w-4 h-4" />
          <span className="hidden sm:inline">List</span>
        </button>
      </div>
    </div>
  );
};

export default ViewToggle;