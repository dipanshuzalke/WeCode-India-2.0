import { PhaseItem } from "@/types/phases";

interface PhaseCardItemProps {
  item: PhaseItem;
  isLocked?: boolean;
}

export const PhaseCardItem = ({ item, isLocked = false }: PhaseCardItemProps) => {
  const IconComponent = item.icon;
  
  return (
    <div className="flex items-start space-x-4 rounded-md border p-4">
      <IconComponent className={`mt-0.5 h-5 w-5 ${isLocked ? 'text-muted-foreground' : 'text-primary'}`} />
      <div className="space-y-1">
        <p className="text-sm font-medium leading-none">
          {item.title}
        </p>
        <p className="text-sm text-muted-foreground">
          {item.description}
        </p>
      </div>
    </div>
  );
};