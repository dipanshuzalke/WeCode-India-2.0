import React from "react";
import { ArrowRight } from "lucide-react";

const NextPhaseCTA: React.FC = () => {
  return (
    <section>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 border rounded-xl p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready for the Next Challenge?
        </h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Once you&apos;ve mastered the fundamentals, it&apos;s time to dive into Data
          Structures and Algorithms to strengthen your problem-solving
          skills and prepare for technical interviews.
        </p>
        <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
          <span>Continue to Phase 2: DSA</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default NextPhaseCTA;