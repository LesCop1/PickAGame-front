import { Eraser } from "lucide-react";
import { useFilterStore } from "../../stores/useFilterStore";
import PlayerCountFilter from "./PlayerCountFilter";
import PlayerSelectionFilter from "./PlayerSelectionFilter";
import SessionLengthFilter from "./SessionLengthFilter";

export default function FilterSidebar() {
  const { resetFilters } = useFilterStore();

  return (
    <aside className="flex flex-col gap-pag-spacing-300">
      <div className="flex items-center justify-between">
        <h2 className="text-pag-2xl font-bold">Filters</h2>
        <div className="rounded-pag-full bg-pag-bg-secondary p-pag-spacing-50">
          <Eraser size={20} strokeWidth={1} className="text-pag-icon-primary" onClick={() => resetFilters()} />
        </div>
      </div>
      <div className="flex flex-col gap-pag-spacing-300">
        <SessionLengthFilter />
        <PlayerCountFilter />
        <PlayerSelectionFilter />
      </div>
    </aside>
  );
}
