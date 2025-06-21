import { LucideIcon } from "lucide-react";

export interface PhaseItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Phase {
  id: number;
  title: string;
  description: string;
  progress: number;
  icon: LucideIcon;
  href: string;
  learningPoints: string[];
  cardTitle: string;
  cardDescription: string;
  cardItems: PhaseItem[];
  cardButtonText: string;
  cardButtonHref: string;
  isLocked?: boolean;
}
