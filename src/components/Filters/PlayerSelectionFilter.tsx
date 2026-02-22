import Fuse from "fuse.js";
import { useMemo } from "react";
import { useFilterStore } from "../../stores/useFilterStore";
import SelectItem from "../SelectPlayer/SelectItem";
import TextField from "../Inputs/TextField";

const mockupPlayers = Array.from({ length: 10 }).map((_, i) => ({
  src: `https://i.pravatar.cc/150?img=${i + 1}`,
  name: `Player ${i + 1}`,
}));

export default function PlayerSelectionFilter() {
  const { selectedPlayers, togglePlayer, playerSearch, setPlayerSearch } = useFilterStore();

  const fuse = useMemo(
    () =>
      new Fuse(mockupPlayers, {
        keys: ["name"],
        threshold: 0.3,
        distance: 100,
        ignoreLocation: true,
      }),
    [],
  );

  const filteredPlayers = useMemo(() => {
    if (!playerSearch.trim()) return mockupPlayers;
    return fuse.search(playerSearch).map((result) => result.item);
  }, [playerSearch, fuse]);

  return (
    <div className="flex h-[300px] flex-col gap-pag-spacing-100">
      <span className="text-pag-lg">Players</span>
      <div
        className="
          flex flex-1 flex-col gap-pag-sizing-75 overflow-hidden rounded-pag-sm border border-pag-bg-secondary
          p-pag-spacing-75
        "
      >
        <TextField
          placeholder="Username..."
          value={playerSearch}
          onChange={(e) => setPlayerSearch(e.target.value)}
          onClear={() => setPlayerSearch("")}
          condition={playerSearch}
        />

        <div className="flex styled-scrollbar flex-col gap-pag-spacing-75 overflow-y-auto pr-pag-spacing-100">
          {filteredPlayers.map((player, index) => (
            <SelectItem
              key={index}
              src={player.src}
              name={player.name}
              selected={selectedPlayers.includes(player.name)}
              onClick={() => togglePlayer(player.name)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
