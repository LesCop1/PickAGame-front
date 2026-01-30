import { useFilterStore } from "../../stores/useFilterStore";
import type { SessionLength } from "../../types";
import { ToggleGroup, ToggleGroupHighlight, ToggleGroupItem } from "../ToggleGroup/ToggleGroup";

export default function SessionLengthFilter() {
  const { sessionLength, setSessionLength } = useFilterStore();

  return (
    <div className="flex flex-col gap-pag-spacing-100">
      <span className="text-pag-lg">Session length</span>
      <ToggleGroup
        type="single"
        value={sessionLength}
        onValueChange={(value) => setSessionLength(value as SessionLength)}
        className="self-center rounded-pag-sm bg-pag-bg-tertiary p-pag-spacing-50"
      >
        <ToggleGroupHighlight className="rounded-pag-sm bg-pag-bg-accent p-pag-spacing-50">
          <ToggleGroupItem value="short" className="rounded-pag-sm px-pag-spacing-200 py-pag-spacing-100">
            Short
          </ToggleGroupItem>
          <ToggleGroupItem value="flex" className="rounded-pag-sm px-pag-spacing-200 py-pag-spacing-100">
            Flex
          </ToggleGroupItem>
          <ToggleGroupItem value="long" className="rounded-pag-sm px-pag-spacing-200 py-pag-spacing-100">
            Long
          </ToggleGroupItem>
        </ToggleGroupHighlight>
      </ToggleGroup>
    </div>
  );
}
