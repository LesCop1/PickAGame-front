import { type ComponentProps } from "react";
import { DynamicIcon } from "lucide-react/dynamic";

interface Props {
  title: string;
  value: number;
  icon: ComponentProps<typeof DynamicIcon>["name"];
}

export default function Statistic({ title, value, icon }: Props) {
  return (
    <div
      className="
        flex items-center gap-pag-spacing-100 rounded-pag-rounded-sm bg-pag-bg-primary px-pag-spacing-75
        py-pag-spacing-50 opacity-90 w-fit
      "
    >
      <DynamicIcon name={icon} className="text-pag-icon-stat" size={16} strokeWidth={1.5} />
      <div className="flex flex-col">
        <span className="text-pag-sm text-pag-text-muted">{title}</span>
        <span className="text-pag-md font-bold text-pag-text-primary">{value}</span>
      </div>
    </div>
  );
}
