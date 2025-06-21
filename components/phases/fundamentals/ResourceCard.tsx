import React from "react";
import { ArrowRight } from "lucide-react";
import { Resource } from "@/data/fundamentals";

export const getStatusColor = (status: string): string => {
  switch (status) {
    case "completed":
      return "bg-green-50 text-green-700 border-green-200";
    case "in-progress":
      return "bg-blue-50 text-blue-700 border-blue-200";
    case "not-started":
      return "bg-gray-50 text-gray-600 border-gray-200";
    default:
      return "bg-gray-50 text-gray-600 border-gray-200";
  }
};

export const getStatusText = (status: string): string => {
  switch (status) {
    case "completed":
      return "Completed";
    case "in-progress":
      return "In Progress";
    case "not-started":
      return "Not Started";
    default:
      return "Unknown";
  }
};

interface ResourceCardProps {
  resource: Resource;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
  return (
    <div className="group bg-card border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="p-6">
        <div className="flex items-start gap-4 mb-6">
          <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
            <resource.icon className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-xl font-semibold">{resource.title}</h3>
              <span
                className={`px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(
                  resource.status
                )}`}
              >
                {getStatusText(resource.status)}
              </span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              {resource.description}
            </p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="bg-muted px-2 py-1 rounded">
                {resource.difficulty}
              </span>
              <span>{resource.duration}</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium mb-3 text-sm">Key Topics:</h4>
            <div className="space-y-2">
              {resource.topics.slice(0, 3).map((topic, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  {topic}
                </div>
              ))}
              {resource.topics.length > 3 && (
                <div className="text-xs text-muted-foreground">
                  +{resource.topics.length - 3} more topics
                </div>
              )}
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-3 text-sm">Resources:</h4>
            <div className="space-y-2">
              {resource.resources.map((res, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-2 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
                >
                  <div>
                    <div className="font-medium text-sm">{res.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {res.type}
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;
