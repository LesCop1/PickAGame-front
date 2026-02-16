import { cn } from "../../utils/cn";
import { ToggleGroup, ToggleGroupHighlight, ToggleGroupItem, type ToggleGroupProps } from "../ToggleGroup/ToggleGroup";

type Props = {
  variant?: "light" | "dark";
  fullWidth?: boolean;
} & Omit<ToggleGroupProps, "type">;

export default function SessionSelect({ variant, fullWidth, ...rest }: Props) {
  return (
    <ToggleGroup
      type="single"
      {...rest}
      className={`
        self-center rounded-pag-sm p-pag-spacing-50
        ${variant === "light" ? "bg-pag-bg-secondary" : `bg-pag-bg-tertiary`}
        ${fullWidth ? "w-full" : ""}
      `}
    >
      <ToggleGroupHighlight className="rounded-pag-sm bg-pag-bg-accent p-pag-spacing-50">
        <ToggleGroupItem
          value="short"
          className={cn("rounded-pag-sm px-pag-spacing-200 py-pag-spacing-100", fullWidth ? `w-1/3` : "")}
        >
          Short
        </ToggleGroupItem>
        <ToggleGroupItem
          value="flex"
          className={cn("rounded-pag-sm px-pag-spacing-200 py-pag-spacing-100", fullWidth ? `w-1/3` : "")}
        >
          Flex
        </ToggleGroupItem>
        <ToggleGroupItem
          value="long"
          className={cn("rounded-pag-sm px-pag-spacing-200 py-pag-spacing-100", fullWidth ? `w-1/3` : "")}
        >
          Long
        </ToggleGroupItem>
      </ToggleGroupHighlight>
    </ToggleGroup>
  );
}
