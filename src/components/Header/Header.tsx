import { LogOut } from "lucide-react";
import pagLogoFull from "../../assets/logo_full.png";
import pagLogoSmall from "../../assets/logo_small.png";
import Button from "../Button/Button";

export default function Header() {
  return (
    <header
      className="
        flex w-screen items-center justify-between bg-pag-bg-tertiary py-pag-spacing-100 pr-pag-spacing-300
        pl-pag-spacing-150 text-pag-lg text-pag-text-primary
      "
    >
      <a href={"/"} className="flex items-center gap-pag-spacing-100">
        <img
          src={pagLogoFull}
          alt="PickAGame Logo"
          className="
            hidden h-pag-sizing-800 w-auto
            sm:block
          "
        />
        <img
          src={pagLogoSmall}
          alt="PickAGame Logo"
          className="
            h-pag-sizing-800 w-auto
            sm:hidden
          "
        />
      </a>

      <nav className="flex gap-pag-spacing-400">
        {/* <a className="flex items-center gap-pag-spacing-100" href="#">
          <ChartNoAxesCombined strokeWidth={1} size={20} className="text-pag-icon-primary" />
          <span>Classement des ARCS</span>
        </a> */}
        <Button variant="ghost">
          <LogOut strokeWidth={1} size={20} />
          <span>Logout</span>
        </Button>
      </nav>
    </header>
  );
}
