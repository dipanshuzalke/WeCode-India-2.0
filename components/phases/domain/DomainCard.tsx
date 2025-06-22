import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type Domain = {
  color: string;
  icon: React.ElementType;
  title: string;
  description: string;
  projects: number;
  resources: number;
};

const DomainCard = ({ domain, index, isInView, onClick }: { domain: Domain; index: number; isInView: boolean; onClick: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.6, delay: index * 0.1, type: "spring" }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-full bg-gradient-to-br from-card to-card/80 backdrop-blur-sm border border-border/50 rounded-3xl p-6 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 group-hover:scale-105 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${domain.color} rounded-full blur-3xl transform translate-x-16 -translate-y-16`}
          />
          <div
            className={`absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr ${domain.color} rounded-full blur-2xl transform -translate-x-12 translate-y-12`}
          />
        </div>

        {/* Header */}
        <div className="relative z-10 flex items-center justify-between mb-6">
          <div
            className={`p-3 rounded-2xl bg-gradient-to-r ${domain.color} shadow-lg group-hover:shadow-xl transition-all duration-300`}
          >
            <div className="text-white">
              {React.createElement(domain.icon, { className: "h-7 w-7" })}
            </div>
          </div>
          <div className="flex space-x-1">
            <div className="w-2 h-2 rounded-full bg-muted-foreground/20"></div>
            <div className="w-2 h-2 rounded-full bg-muted-foreground/40"></div>
            <div
              className={`w-2 h-2 rounded-full bg-gradient-to-r ${domain.color}`}
            ></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 space-y-4">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              {domain.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {domain.description}
            </p>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Progress</span>
              <span>{Math.round((domain.projects / 50) * 100)}%</span>
            </div>
            <div className="w-full bg-muted/30 rounded-full h-2">
              <div
                className={`h-2 bg-gradient-to-r ${domain.color} rounded-full transition-all duration-500`}
                style={{ width: `${(domain.projects / 50) * 100}%` }}
              />
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="text-center p-3 rounded-xl bg-muted/20 backdrop-blur-sm">
              <div className="text-lg font-bold text-foreground">
                {domain.projects}
              </div>
              <div className="text-xs text-muted-foreground">Projects</div>
            </div>
            <div className="text-center p-3 rounded-xl bg-muted/20 backdrop-blur-sm">
              <div className="text-lg font-bold text-foreground">
                {domain.resources}
              </div>
              <div className="text-xs text-muted-foreground">Resources</div>
            </div>
          </div>

          {/* Action Area */}
          <div className="flex items-center justify-between pt-4 border-t border-border/30">
            <div className="flex items-center space-x-2">
              <div
                className={`w-3 h-3 rounded-full bg-gradient-to-r ${domain.color} animate-pulse`}
              ></div>
              <span className="text-sm font-medium text-muted-foreground">
                Available
              </span>
            </div>
            <div className="flex items-center text-primary font-medium group-hover:text-primary/80 transition-colors">
              <span className="text-sm">Explore</span>
              <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>

        {/* Hover Glow Effect */}
        <div
          className={`absolute inset-0 bg-gradient-to-r ${domain.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
        />
      </div>
    </motion.div>
  );
};

export default DomainCard;
