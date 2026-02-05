import { DynamicIcon } from "lucide-react/dynamic";
import Badge from "./Badge";
import { UsersRound } from "lucide-react";
import type { ComponentProps } from "react";

type Props = {
  value: string | number;
  type: "maxPlayers" | "sessionLength" | "rating" | "achievements";
};

const statsMapping: Record<Props["type"], [ComponentProps<typeof DynamicIcon>["name"], string]> = {
  maxPlayers: ["users-round", "Max Players"],
  sessionLength: ["clock", "Session Length"],
  rating: ["chart-no-axes-combined","Rating"],
  achievements: ["award","Achievements"],
};


export default function SessionLengthBadge({ value, type }: Props) {
  return (
    <Badge
      className="
      flex w-fit items-center gap-pag-sizing-100 rounded-pag-sm bg-pag-bg-primary px-pag-sizing-75 py-pag-sizing-50 border-none
    "
    >
      <DynamicIcon name={statsMapping[type][0]} size={16} className="text-pag-icon-stat" />
      <div className="flex flex-col text-pag-sm">
        <span className="text-pag-text-muted">{statsMapping[type][1]}</span>
        <span className="font-bold">{value}</span>
      </div>
    </Badge>
  );
}
