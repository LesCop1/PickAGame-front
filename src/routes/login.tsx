import { createFileRoute } from "@tanstack/react-router";
import Button from "../components/Button/Button";
import PagLogo from "../assets/logo_small.png";
import SteamIcon from "../icons/steam";

export const Route = createFileRoute("/login")({
  component: Login,
  beforeLoad: () => {
    const userLogged = true;
    if (userLogged) {
      throw Route.redirect({
        to: "/",
      });
    }
  },
});

export default function Login() {
  return (
    <div className="flex h-dvh w-full flex-col items-center justify-center gap-pag-spacing-300">
      <img src={PagLogo} alt="PickAGame Logo" className="size-[100px]" />
      <h1 className="text-pag-2xl font-bold">Welcome back!</h1>
      <span className="text-pag-sm text-pag-text-muted">Simplify your gaming sessions now!</span>
      <Button className="" asChild>
        <a href="#">
          <SteamIcon size={32} color="text-current" strokeWidth={0} />
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
