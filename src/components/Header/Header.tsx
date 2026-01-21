import { ChartNoAxesCombined, LogOut } from "lucide-react";
import pagLogo from "../../assets/logo_full.png";

export default function Header() {
  return (
    <header
      className="
        flex w-screen items-center justify-between bg-pag-bg-tertiary py-pag-spacing-100 pr-pag-spacing-300
        pl-pag-spacing-150 text-pag-lg text-pag-text-primary
      "
    >
      <a href="#">
        <img src={pagLogo} alt="PickAGame Logo" className="h-pag-sizing-800 w-auto" />
      </a>

      <nav className="flex gap-pag-spacing-400">
        <a className="flex items-center gap-pag-spacing-100" href="#">
          <ChartNoAxesCombined strokeWidth={1} size={20} className="text-pag-icon-primary" />
          <span>Classement des ARCS</span>
        </a>

        <a className="flex items-center gap-pag-spacing-100" href="#">
          <LogOut strokeWidth={1} size={20} className="text-pag-icon-primary" />
          <span>Logout</span>
        </a>
      </nav>
    </header>
  );
}
