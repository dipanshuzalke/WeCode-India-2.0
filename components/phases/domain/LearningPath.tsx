import { learningPath } from "@/data/learningPath";
import { Timeline } from "@/components/ui/timeline";
import { IconCloud } from "@/components/ui/interactive-icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

const LearningPath = () => {
  // Prepare timeline data from learningPath
  const timelineData = learningPath.map((step) => ({
    title: step.title,
    content: (
      <div>
        <p className="text-sm text-muted-foreground mb-2">{step.phase}</p>
        <p className="text-base text-foreground">{step.description}</p>
      </div>
    ),
  }));

  return (
    <div className="w-full py-20 px-10 lg:py-40">
      <div className="container mx-auto flex items-start gap-12">
        <div className="pr-8 flex items-center justify-center">
          <Timeline data={timelineData} />
        </div>
        {/* Sticky Icon cloud on the right */}
        <div className="flex items-center justify-center sticky top-32 h-fit">
          <IconCloud iconSlugs={slugs} />
        </div>
      </div>
    </div>
  );
}
export default LearningPath;