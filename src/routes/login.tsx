import { createFileRoute } from "@tanstack/react-router";

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
  return <div>login</div>;
}
