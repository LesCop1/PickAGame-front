import { type ComponentProps } from "react";
import { DynamicIcon } from "lucide-react/dynamic";

interface Props {
  icon: ComponentProps<typeof DynamicIcon>["name"];
  label: string;
  value: string | number;
}

export default function GameStats({ icon, label, value }: Props) {
  return (
    <div
      className="
        flex w-fit items-center gap-pag-sizing-100 rounded-pag-sm bg-pag-bg-primary px-pag-sizing-75 py-pag-sizing-50
      "
    >
      <DynamicIcon name={icon} size={16} className="text-pag-icon-stat" />
      <div className="flex flex-col text-pag-sm">
        <span className="text-pag-text-muted">{label}</span>
        <span className="font-bold">{value}</span>
      </div>
    </div>
  );
}
