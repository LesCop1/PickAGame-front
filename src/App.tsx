import Button from "./components/Button/Button";
import SteamLogo from "./assets/steam.png";
import PagLogo from "./assets/logo_small.png";

export default function App() {
  return (
    <div className="flex size-fit flex-col items-center justify-center gap-pag-spacing-300">
      <img src={PagLogo} alt="PickAGame Logo" className="size-[100px]" />
      <h1 className="text-pag-2xl font-bold">Welcome back!</h1>
      <span className="text-pag-sm text-pag-text-muted">Simplify your gaming sessions now!</span>
      <Button className="w-[280px]" asChild>
        <a>
          <img src={SteamLogo} alt="Steam Logo" className="h-pag-sizing-400"/>
          <span>Sign in with Steam</span>
        </a>
      </Button>
      <span className="text-center text-pag-md text-pag-text-muted">
        You can only access this PickAGame <br />
        instance if you have the admin as a <br />
        friend, or you were whitelisted.
      </span>
    </div>
  );
}
