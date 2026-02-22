import Dialog, { DialogTitle } from "./Dialog";
import Button from "../Button/Button";
import { type Props as SessionBadgeProps } from "../Badge/SessionBadge";
import { BadgeEuro, SquarePen, ThumbsDown, ThumbsUp, Trophy, X } from "lucide-react";
import Divider from "../Divider/Divider";
import GameStatsBadge from "../Badge/GameStatsBadge";
import TagBadge from "../Badge/TagBadge";
import VerdictItem from "../VerdictItem/VerdictItem";
import SteamIcon from "../../icons/steam";

type Players = {
  src: string;
  name: string;
};

const sessionMapping: Record<Props["game"]["sessionType"], string> = {
  sessionShort: "Short",
  sessionLong: "Long",
  sessionFlex: "Flex",
};

interface Props {
  game: {
    name: string;
    description: string;
    sessionType: SessionBadgeProps["type"];
    maxPlayers: number;
    rating: string;
    achievements: number;
    imageUrl: string;
    likedBy: Players[];
    dislikedBy: Players[];
    tags: string[];
    priceRetail: string;
    priceKeyshops: string;
  };
}

export default function GameDetailDialog({ game }: Props) {
  return (
    <Dialog
      className="
        h-fit w-[755px] gap-pag-spacing-200 rounded-pag-main border-pag-border-primary bg-pag-bg-tertiary
        px-pag-spacing-300 pt-pag-spacing-200 pb-pag-spacing-300 drop-shadow-2xl
      "
    >
      {/* DIALOG HEAD */}
      <div className="flex items-center justify-between">
        <DialogTitle className="text-left text-pag-2xl text-pag-text-primary">{game.name}</DialogTitle>
        <div className="flex items-center gap-pag-spacing-100">
          <Button className="gap-pag-spacing-100 px-pag-spacing-100 py-pag-spacing-50">
            <SquarePen size={16} />
            <span className="text-pag-md">Edit</span>
          </Button>
          <X size={16} href="#" />
        </div>
      </div>
      {/* DIALOG CONTENT */}
      <div className="flex h-fit w-full gap-pag-spacing-200">
        {/* LEFT CONTENT */}
        <div className="flex h-full w-[430px] flex-col gap-pag-spacing-125">
          {/* CAROUSEL */}
          <div className="flex h-fit w-full flex-col gap-pag-spacing-50">
            {/* BIG PICTURE */}
            <img className="h-[242px] w-full" src={game.imageUrl}></img>
            {/* GALLERY */}
            <div className="flex h-fit w-full gap-pag-spacing-50 overflow-x-scroll">
              <div className="h-[45px] w-[80px] shrink-0 bg-pag-bg-accent" />
              <div className="h-[45px] w-[80px] shrink-0 bg-pag-bg-accent" />
              <div className="h-[45px] w-[80px] shrink-0 bg-pag-bg-accent" />
              <div className="h-[45px] w-[80px] shrink-0 bg-pag-bg-accent" />
              <div className="h-[45px] w-[80px] shrink-0 bg-pag-bg-accent" />
              <div className="h-[45px] w-[80px] shrink-0 bg-pag-bg-accent" />
              <div className="h-[45px] w-[80px] shrink-0 bg-pag-bg-accent" />
            </div>
            <Divider className="h-[3px] bg-pag-bg-primary" />
          </div>
          {/* VERDICT SECTION */}
          <div
            className="
              flex h-[330px] w-full flex-col gap-pag-spacing-200 rounded-pag-sm border-pag-border-primary bg-linear-to-r
              from-pag-bg-success/20 to-pag-bg-error/20 p-pag-spacing-100
            "
          >
            {/* TITLE */}
            <div className="flex h-fit w-full items-center justify-center gap-pag-spacing-50">
              <Trophy size={20} className="flex gap-pag-spacing-125 p-pag-spacing-25 text-pag-icon-award" />
              <span className="text-pag-md">Friends Verdict</span>
            </div>
            {/* INTERESTED BALANCE */}
            <div className="flex h-fit w-full flex-col gap-pag-spacing-50">
              <div className="flex h-fit w-full justify-between">
                {/* INTERESTED */}
                <div className="flex size-fit items-center gap-pag-spacing-50">
                  <ThumbsUp size={13} className="text-pag-icon-success" />
                  <span className="text-pag-sm">{game.likedBy.length} Interested</span>
                </div>
                {/* NOT INTERESTED */}
                <div className="flex size-fit items-center gap-pag-spacing-50">
                  <ThumbsDown size={13} className="text-pag-icon-error" />
                  <span className="text-pag-sm">{game.dislikedBy.length} Not interested</span>
                </div>
                {/* JAUGE */}
              </div>
              <Divider className="h-[2px] rounded-pag-full bg-linear-to-r from-pag-bg-success to-pag-bg-error" />
            </div>
            {/* VERDICT LISTS */}
            <div className="flex size-full flex-col gap-pag-spacing-75">
              {/* TITLES */}
              <div className="flex h-fit w-full">
                <div className="w-1/2">
                  <span className="text-pag-sm">Interested to play</span>
                </div>
                <div className="w-1/2">
                  <span className="text-pag-sm">Not interested to play</span>
                </div>
              </div>
              {/* PLAYERS LIST */}
              <div className="flex size-full gap-pag-spacing-75">
                {/* INTERESTED ONES */}
                <div className="flex w-1/2 flex-col gap-pag-spacing-100">
                  {game.likedBy.map((player) => (
                    <VerdictItem
                      interested={true}
                      value={player.name}
                      src={player.src}
                      achievementsProgress={80}
                      className="h-[28px]"
                    />
                  ))}
                </div>
                {/* NOT INTERESTED ONES */}
                <div className="flex w-1/2 flex-col gap-pag-spacing-100">
                  {game.dislikedBy.map((player) => (
                    <VerdictItem
                      interested={false}
                      value={player.name}
                      src={player.src}
                      achievementsProgress={60}
                      className="h-[28px]"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* RIGHT CONTENT */}
        <div className="flex flex-col items-center justify-between gap-pag-spacing-125">
          {/* TOP */}
          <div className="flex flex-col gap-pag-spacing-200">
            <span className="text-pag-sm">{game.description}</span>
            {/* TAGS */}
            <div className="flex flex-wrap gap-pag-spacing-50">
              {game.tags.map((tag) => (
                <TagBadge value={tag} />
              ))}
            </div>
            {/* STATS */}
            <div className="flex flex-wrap justify-center gap-pag-spacing-100">
              <GameStatsBadge value={game.maxPlayers} type="maxPlayers" />
              <GameStatsBadge value={sessionMapping[game.sessionType]} type="sessionLength" />
              <GameStatsBadge value={`${game.rating} %`} type="rating" />
              <GameStatsBadge value={game.achievements} type="achievements" />
            </div>
          </div>
          {/* VOTE */}
          <div className="flex size-fit flex-col items-center gap-pag-spacing-100">
            <span className="text-pag-sm">Wanna play this game ?</span>
            <div className="h-[56px] w-[178px] gap-pag-spacing-100 rounded-pag-sm bg-pag-bg-secondary p-pag-spacing-50"></div>
          </div>
          {/* BOTTOM */}
          <div className="flex h-fit w-full flex-col gap-pag-spacing-200">
            {/* PRICES */}
            <div className="flex gap-pag-spacing-200 rounded-pag-sm bg-pag-bg-primary p-pag-spacing-75">
              <div className="flex items-center gap-pag-spacing-50">
                <BadgeEuro size={16} className="text-pag-icon-stat" />
                <span className="text-pag-sm">Prices</span>
              </div>
              <Divider direction="vertical" className="w-[1px]" />
              <div className="flex flex-col gap-pag-spacing-50">
                <span className="text-pag-text-muted">Retail</span>
                <span className="text-pag-text-muted">Keyshops</span>
              </div>
              <div className="flex flex-col gap-pag-spacing-50">
                <span className="font-bold text-pag-text-success">{game.priceRetail}</span>
                <span className="font-bold text-pag-text-error">{game.priceKeyshops}</span>
              </div>
            </div>
            {/* EXTERNAL LINKS */}
            <div className="flex items-center justify-around gap-pag-spacing-125 text-pag-sm">
              <Button variant="ghost" className="size-fit gap-pag-spacing-50">
                <SteamIcon size={16} color="text-current" strokeWidth={0} />
                <span>Steam</span>
              </Button>
              <Button variant="ghost" className="size-fit gap-pag-spacing-50">
                <SteamIcon size={16} color="text-current" strokeWidth={0} />
                <span>Steam DB</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
