import { Coffee, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-50 items-center w-fit text-pag-extra-small">
      <a href="https://github.com/LesCop1/PickAGame-front" target="_blank" rel="noopener noreferrer" className="flex gap-50 items-center">
        <Github strokeWidth={1} size={16} className="text-icon-primary-hover" />
        <span className="text-text-muted">Github</span>
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer" className="flex gap-50 items-center">
        <Coffee strokeWidth={1} size={16} className="text-icon-primary-hover" />
        <span className="text-text-muted">Buy us a coffee</span>
      </a>
    </footer>
  );
}
