import { Check, X } from "lucide-react";
import { cn } from "../../utils/cn";
import Avatar from "../Avatar/Avatar";

type Props = {
  src: string;
  name: string;
  selected: boolean;
};

export default function SelectItem({ src, name, selected, ...rest }: Props & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className="
        group flex w-full cursor-pointer items-center justify-between rounded-pag-sm bg-pag-bg-primary p-pag-spacing-25
        font-family-pag-default text-pag-md transition-colors
        hover:bg-pag-bg-tertiary
      "
      {...rest}
    >
      <div className="flex w-fit gap-pag-spacing-50">
        <Avatar size={"sm"} src={src} />
        <span>{name}</span>
      </div>
      <X strokeWidth={1} size={16} className={cn("hidden text-pag-icon-error", selected && "group-hover:block")} />
      <Check
        strokeWidth={1}
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
