
"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  const words = [
    {
      text: "Start",
    },
    {
      text: "Your",
    },
    {
      text: "Coding",
    },
    {
      text: "Journey",
    },
    {
      text: "Today",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex flex-col items-center justify-center min-h-[20rem]">
          <p className="dark:text-blue-100 text-blue-900 text-xs sm:text-base mb-4">
            The road to your tech career starts from here
          </p>
          <TypewriterEffectSmooth words={words} />
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-8">
            <Button 
              size="lg" 
              className="w-40 h-10 rounded-xl bg-white text-black hover:bg-gray-100 border-transparent font-semibold"
            >
              Start Learning 
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="w-40 h-10 rounded-xl bg-transparent text-white border-white hover:bg-white hover:text-blue-600"
            >
              Join Community
            </Button>
          </div>
          {/* <p className="text-blue-200 text-sm mt-6">
            No credit card required • 7-day free trial • Cancel anytime
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default CTA;