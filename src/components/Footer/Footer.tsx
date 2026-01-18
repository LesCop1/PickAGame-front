import { Coffee, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="flex w-fit flex-col items-center gap-pag-spacing-50 text-pag-xs text-pag-text-muted">
      <a
        href="https://github.com/LesCop1/PickAGame-front"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-pag-spacing-50"
      >
        <Github strokeWidth={1} size={16} className="text-pag-icon-primary-hover" />
        <span>Github</span>
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-pag-spacing-50">
        <Coffee strokeWidth={1} size={16} className="text-pag-icon-primary-hover" />
        <span>Buy us a coffee</span>
      </a>
    </footer>
  );
}
