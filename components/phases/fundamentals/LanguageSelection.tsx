import React from "react";
import { CheckCircle } from "lucide-react";
import type { LanguageOption } from "@/types";

interface LanguageSelectionProps {
  languages: LanguageOption[];
}

const LanguageSelection: React.FC<LanguageSelectionProps> = ({ languages }) => {
  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">
          Choose Your First Language
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Select a programming language to start your journey. Each language
          has its strengths and use cases.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {languages.map((lang, index) => (
          <div
            key={index}
            className="group bg-card border rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer hover:border-primary/50"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
              {lang.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{lang.name}</h3>
            <p className="text-muted-foreground text-sm mb-4">
              {lang.description}
            </p>
            <div className="mb-4">
              <div className="flex justify-between text-xs mb-1">
                <span>Popularity</span>
                <span>{lang.popularity}</span>
              </div>
              <div className="w-full bg-muted rounded-full h-1.5">
                <div
                  className="bg-gradient-to-r from-purple-500 to-fuchsia-300 h-1.5 rounded-full"
                  style={{ width: lang.popularity }}
                ></div>
              </div>
            </div>
            <ul className="space-y-1">
              {lang.pros.map((pro, i) => (
                <li
                  key={i}
                  className="text-xs text-fuchsia-600 dark:text-fuchsia-400 flex items-center"
                >
                  <CheckCircle className="w-3 h-3 mr-2" />
                  {pro}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LanguageSelection;