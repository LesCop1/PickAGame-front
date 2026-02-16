import { useFilterStore } from "../../stores/useFilterStore";
import type { SessionLength } from "../../types";
import SessionSelect from "../Inputs/SessionSelect";

export default function SessionLengthFilter({ variant = "light" }: { variant?: "light" | "dark" }) {
  const { sessionLength, setSessionLength } = useFilterStore();

  return (
    <div className="flex flex-col gap-pag-spacing-100">
      <span className="text-pag-lg">Session length</span>
      <SessionSelect
        value={sessionLength}
        onValueChange={(value) => setSessionLength(value as SessionLength)}
        variant={variant}
      />
    </div>
  );
}
