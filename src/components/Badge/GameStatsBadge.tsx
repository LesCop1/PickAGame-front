import { DynamicIcon } from "lucide-react/dynamic";
import type { ComponentProps } from "react";
import Badge from "./Badge";

type Props = {
  value: string | number;
  type: "maxPlayers" | "sessionLength" | "rating" | "achievements";
};


const statsMapping: Record<Props["type"], { icon: ComponentProps<typeof DynamicIcon>["name"]; label: string }> = {
  maxPlayers: {
    icon: "users-round",
    label: "Max Players",
  },
  sessionLength: {
    icon: "clock",
    label: "Session Length",
  },
  rating: {
    icon: "chart-no-axes-combined",
    label: "Rating",
  },
  achievements: {
    icon: "award",
    label: "Achievements",
  }
};

export default function SessionLengthBadge({ value, type }: Props) {
  return (
    <Badge
      className="
        flex w-fit items-center gap-pag-sizing-100 rounded-pag-sm border-none bg-pag-bg-primary px-pag-sizing-75
        py-pag-sizing-50
      "
    >
      <DynamicIcon name={statsMapping[type].icon} size={16} className="text-pag-icon-stat" />
      <div className="flex flex-col text-pag-sm">
        <span className="text-pag-text-muted">{statsMapping[type].label}</span>
        <span className="font-bold">{value}</span>
      </div>
    </Badge>
  );
}
