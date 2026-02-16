import SessionSelect from "../Inputs/SessionSelect";
import PlayerCountSelect from "../Inputs/PlayerCountSelect";
import Dialog, { DialogClose, DialogTitle } from "./Dialog";
import TextField from "../Inputs/TextField";
import { useState } from "react";
import Button from "../Button/Button";

interface Props {
  game?: {
    sessionType: string;
    maxPlayers: number;
  };
}

export default function UpsertGameDialog({ game }: Props) {
  const [sessionType, setSessionType] = useState<string>(game?.sessionType ?? "short");
  const [playerCount, setPlayerCount] = useState<number[]>([game?.maxPlayers ?? 2]);

  return (
    <Dialog className="text-pag-lg">
      <DialogTitle className="text-center text-pag-2xl font-bold">Add game</DialogTitle>
      <div className="flex flex-col gap-pag-sizing-200">
        <div className="flex flex-col gap-pag-sizing-100">
          <div>Search a game</div>
          <div className="px-pag-spacing-200">
            <TextField placeholder="Astroneer..." condition={""} onClear={() => {}} />
          </div>
        </div>
        <div className="px-pag-spacing-200">
          <div className="flex h-[120px] gap-pag-spacing-100 rounded-pag-sm bg-pag-bg-secondary p-pag-sizing-100">
            <div className="h-full w-3/5 rounded-pag-sm bg-pag-bg-primary" />
            <div className="flex flex-1 flex-col gap-pag-sizing-100">
              <div className="h-pag-sizing-200 rounded-pag-sm bg-pag-bg-primary" />
              <div className="flex-1 rounded-pag-sm bg-pag-bg-primary" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-pag-spacing-100">
          <div>Session length</div>
          <div className="px-pag-spacing-200">
            <SessionSelect
              onValueChange={(v) => setSessionType(v)}
              value={sessionType}
              variant="light"
              fullWidth
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-pag-sizing-100">
          <div>Max players: {playerCount}</div>
          <div className="px-pag-spacing-200">
            <PlayerCountSelect
              onValueChange={(v) => setPlayerCount(v)}
              value={playerCount}
              range={[2, 16]}
              variant="dark"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <DialogClose asChild>
          <Button variant="destructive" className="min-w-[100px]">
            Cancel
          </Button>
        </DialogClose>

        <DialogClose asChild>
          <Button variant="success" className="min-w-[100px]">
            {game ? "Update" : "Add"}
          </Button>
        </DialogClose>
      </div>
    </Dialog>
  );
}
