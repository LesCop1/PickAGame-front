import { useFilterStore } from "../../stores/useFilterStore";
import Slider from "../Slider/Slider";

export default function PlayerCountFilter() {
  const { playerCountRange, setPlayerCountRange } = useFilterStore();

  return (
    <div className="flex flex-col gap-pag-spacing-100">
      <span className="text-pag-lg">Player count</span>
      <div className="flex items-center gap-pag-spacing-125">
        <span className="min-w-pag-sizing-200 text-end text-pag-md">{playerCountRange[0]}</span>
        <Slider value={playerCountRange} onValueChange={setPlayerCountRange} min={2} max={16} step={1} />
        <span className="min-w-pag-sizing-300 text-pag-md">
          {playerCountRange[1] >= 16 ? "16+" : playerCountRange[1]}
        </span>
      </div>
    </div>
  );
}
