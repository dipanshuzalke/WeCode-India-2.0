import React from "react";
import { ArrowRight, Clock, Target, ChevronDown, ChevronUp } from "lucide-react";
import type { Resource } from "@/types";

interface ResourceCardProps {
  resource: Resource;
  isExpanded?: boolean;
  onToggleExpand?: () => void;
  onExplore?: () => void;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ 
  resource, 
  isExpanded = false, 
  onToggleExpand, 
  onExplore 
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800';
      case 'in-progress':
        return 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800';
      default:
        return 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-700';
    }
  };

  return (
    <article className="group relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-zinc-900/5 dark:hover:shadow-zinc-950/20 transition-all duration-500 hover:-translate-y-1">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-50/50 via-transparent to-transparent dark:from-zinc-800/30 dark:via-transparent dark:to-transparent pointer-events-none" />
      
      <div className="relative p-8">
        {/* Header Section */}
        <header className="mb-8">
          <div className="flex items-start gap-5">
            {/* Icon Container */}
            <div className="shrink-0 w-14 h-14 bg-zinc-100 dark:bg-zinc-800 rounded-2xl flex items-center justify-center group-hover:bg-zinc-900 dark:group-hover:bg-zinc-700 transition-all duration-300 group-hover:scale-110">
              <resource.icon className="w-7 h-7 text-zinc-700 dark:text-zinc-300 group-hover:text-white dark:group-hover:text-white transition-colors duration-300" />
            </div>
            
            {/* Title and Description */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors duration-300">
                  {resource.title}
                </h3>
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(resource.status)}`}>
                  {resource.status.charAt(0).toUpperCase() + resource.status.slice(1)}
                </div>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-base">
                {resource.description}
              </p>
            </div>
          </div>
        </header>

        {/* Metadata Section */}
        <div className="flex items-center gap-6 mb-8">
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
            <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
              {resource.difficulty}
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
            <Clock className="w-4 h-4" />
            <span className="font-medium">{resource.duration}</span>
          </div>
        </div>

        {/* Key Topics Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 tracking-wide uppercase">
              Key Topics
            </h4>
            {resource.topics.length > 3 && (
              <button
                onClick={onToggleExpand}
                className="flex items-center gap-1 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors duration-200"
              >
                {isExpanded ? (
                  <>
                    <span>Show less</span>
                    <ChevronUp className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    <span>Show all</span>
                    <ChevronDown className="w-4 h-4" />
                  </>
                )}
              </button>
            )}
          </div>
          <div className="space-y-3">
            {(isExpanded ? resource.topics : resource.topics.slice(0, 3)).map((topic, index) => (
              <div
                key={index}
                className="flex items-start gap-3 text-zinc-700 dark:text-zinc-300"
              >
                <div className="w-2 h-2 bg-zinc-400 dark:bg-zinc-500 rounded-full shrink-0 mt-2 group-hover:bg-zinc-600 dark:group-hover:bg-zinc-400 transition-colors duration-300" />
                <span className="text-sm font-medium leading-relaxed">
                  {topic}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Area */}
        <div className="flex items-center justify-between pt-6 border-t border-zinc-200 dark:border-zinc-800">
          <div className="text-sm text-zinc-500 dark:text-zinc-400">
            Learn fundamentals
          </div>
          <button 
            onClick={onExplore}
            className="flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors duration-200 group/button"
          >
            <span>Explore</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/button:translate-x-1" />
          </button>
        </div>
      </div>
    </article>
  );
};

export default ResourceCard;