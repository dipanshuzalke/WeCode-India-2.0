import Image from "next/image";

interface TechIconProps {
  techStack: string[];
}

const iconMap: Record<string, string> = {
  react: "/react.svg",
  node: "/node.svg",
  // Add more mappings as needed
};

export default function DisplayTechIcons({ techStack }: TechIconProps) {
  return (
    <div className="flex flex-row gap-2">
      {techStack.map((tech) => (
        <Image
          key={tech}
          src={iconMap[tech.toLowerCase()] || "/tech.svg"}
          alt={tech}
          width={24}
          height={24}
        />
      ))}
    </div>
  );
}
