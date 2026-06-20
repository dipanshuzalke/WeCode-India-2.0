import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Phase } from "@/types/phases";
import { PhaseCardItem } from "./PhaseCardItem";

interface PhaseCardProps {
  phase: Phase;
}

export const PhaseCard = ({ phase }: PhaseCardProps) => {
  const cardClasses = "w-full max-w-md";
  const contentClasses = "grid gap-4";
  
  return (
    <Card className={cardClasses}>
      <CardHeader>
        <CardTitle className={""}>
          {phase.cardTitle}
        </CardTitle>
        <CardDescription>
          {phase.cardDescription}
        </CardDescription>
      </CardHeader>
      <CardContent className={contentClasses}>
        {phase.cardItems.map((item, index) => (
          <PhaseCardItem key={index} item={item} />
        ))}
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full" asChild>
          <Link href={phase.cardButtonHref}>
            {phase.cardButtonText}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};