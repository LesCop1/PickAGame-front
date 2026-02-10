import { cn } from "../../utils/cn";

interface Props {
  direction?: "horizontal" | "vertical";
  className?: React.HTMLAttributes<HTMLDivElement>["className"];
}

export default function Divider({ direction = "horizontal", className }: Props) {
  return (
    <div
      className={cn(
        "bg-pag-bg-tertiary",
        direction === "horizontal" ? "h-pag-sizing-50 w-full" : `w-pag-sizing-50 self-stretch`,
        className,
      )}
    />
  );
}
