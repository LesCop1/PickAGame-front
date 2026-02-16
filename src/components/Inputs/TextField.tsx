import { Search, X } from "lucide-react";
import { cn } from "../../utils/cn";

type Props = {
  condition: string;
  onClear: () => void;
  variant?: "light" | "dark";
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function TextField({ condition, onClear, variant = "light", ...rest }: Props) {
  return (
    <div
      className={cn(
        "flex items-center justify-between rounded-pag-sm p-pag-spacing-100 text-pag-md",
        variant === "light" ? `bg-pag-bg-secondary` : `bg-pag-bg-primary`,
      )}
    >
      <input
        className="
          placeholder-shown:text-pag-text-muted
          focus:outline-none
        "
        autoComplete="off"
        data-bwignore="1"
        {...rest}
      />
      {condition === "" ? (
        <Search size={20} strokeWidth={1} className="text-pag-icon-primary" />
      ) : (
        <X size={20} strokeWidth={1} className="cursor-pointer text-pag-icon-error" onClick={() => onClear()} />
      )}
    </div>
  );
}
