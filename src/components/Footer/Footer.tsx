import { Coffee, Github } from "lucide-react";
import { cn } from "../../utils/cn";

export default function Footer({ dir = "vertical", className }: { dir?: "horizontal" | "vertical"; className?: string }) {
  return (
    <footer
      className={cn(
        "flex w-fit items-center gap-pag-spacing-50 text-pag-xs",
        dir === "horizontal" ? "w-full flex-row justify-evenly" : "flex-col",
        className,
      )}
    >
      <a
        href="https://github.com/LesCop1/PickAGame-front"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-pag-spacing-50"
      >
        <Github strokeWidth={1} size={16} className="text-pag-icon-primary-hover" />
        <span className="text-pag-text-muted">Github</span>
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-pag-spacing-50">
        <Coffee strokeWidth={1} size={16} className="text-pag-icon-primary-hover" />
        <span className="text-pag-text-muted">Buy us a coffee</span>
      </a>
    </footer>
  );
}
