import { Check, X } from "lucide-react";
import Avatar from "../Avatar/Avatar";
import { cn } from "../../utils/cn";

type Props = {
  size: "sm" | "md";
  src: string;
  name: string;
  selected: boolean;
};

export default function SelectItem({ size, src, name, selected }: Props) {
  return (
    <div
      className="
        group flex w-full cursor-pointer items-center justify-between rounded-pag-sm bg-pag-bg-primary p-pag-spacing-25
        font-family-pag-default text-pag-md
        hover:bg-pag-bg-tertiary
      "
    >
      <div className="flex w-fit gap-pag-spacing-50">
        <Avatar size={size} src={src} />
        <span className="text-pag-text-primary">{name}</span>
      </div>
      <X strokeWidth={1 / 2} size={16} className={cn("hidden text-pag-icon-error", selected && "group-hover:block")} />
      <Check
        strokeWidth={1 / 2}
        size={16}
        className={cn(
          "hidden",
          selected
            ? `
              block text-pag-icon-success
              group-hover:hidden
            `
            : `
              text-pag-icon-success-hover
              group-hover:block
            `,
        )}
      />
    </div>
  );
}
