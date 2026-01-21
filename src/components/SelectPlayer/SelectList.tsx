import SelectItem from "./SelectItem";

type Players = {
    name: string;
    src: string;
    id: number;
}


type Props = {
  players: Players[];
  selectedPlayers: number[];
};

export default function SelectList({ players, selectedPlayers }: Props) {

  return (
    <div className="flex w-[188px] flex-col gap-pag-spacing-50 bg-pag-bg-primary p-pag-sizing-300">
      {players.map((item, index) => (
        <SelectItem
          key={index}
          name={item.name}
          src={item.src}
          size="sm"
          selected={selectedPlayers.includes(item.id)}
        />
      ))}
    </div>
  );
}
