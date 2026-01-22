import Button from "./components/Button/Button";
import SteamLogo from "./assets/steam.png";
import PagLogo from "./assets/logo.png";

export default function App() {
  return (
    <div className="flex flex-col w-fit h-fit items-center justify-center gap-pag-spacing-300">
      <img src={PagLogo} alt="PickAGame Logo" className="h-pag-sizing-1300 w-auto" />
      <span className="text-pag-2xl text-pag-text-primary">Welcome back!</span>
      <span className="text-pag-sm text-pag-text-muted">Simplify your gaming sessions now!</span>
      <Button text="Sign in with Steam" logo={SteamLogo} color="bg-pag-bg-secondary" />
      <span className="text-pag-md text-pag-text-muted text-center">
        You can only access this PickAGame <br />
        instance if you have the admin as a <br />
        friend, or you were whitelisted.
      </span>
    </div>
  );
}
