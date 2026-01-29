import AvatarGroup from "../AvatarGroup/AvatarGroup";
import Avatar from "../Avatar/Avatar";
import { SessionBadge, type Props as SessionBadgeProps } from "../Badge/SessionBadge";
import PlayerCountBadge from "../Badge/PlayerCountBadge";
import { PackageCheck, ThumbsDown, ThumbsUp } from "lucide-react";

type Players = {
  src: string;
  name: string;
};

export interface Props {
  imageUrl: string;
  name: string;
  owned: boolean;
  sessionType: SessionBadgeProps["type"];
  maxPlayers: number;
  likedBy: Players[];
  dislikedBy: Players[];
}

export default function GameCard({ imageUrl, name, owned, sessionType, maxPlayers, likedBy, dislikedBy }: Props) {
  return (
    <div
      className="
        relative w-full overflow-hidden rounded-pag-main bg-pag-bg-secondary p-pag-spacing-25 transition-transform
        hover:z-50 hover:scale-[1.025]
        sm:w-[225px]
        sm:hover:scale-105
      "
    >
      <div
        className="
          relative w-full
          sm:h-[200px]
        "
      >
        <div
          className="
            group relative aspect-video rounded-t-pag-main bg-pag-bg-tertiary
            sm:size-full
          "
        >
          <img
            src={imageUrl}
            alt={name}
            className="
              size-full rounded-t-pag-main object-contain
              sm:object-cover
            "
          />
          <div
            className="
              absolute top-[0] bottom-[0] flex size-full opacity-0 transition-opacity duration-500
              group-hover:opacity-100
            "
          >
            <div
              className="
                flex h-full w-[calc((100%-2px)/2)] items-center justify-center rounded-tl-pag-main bg-pag-bg-success/20
                transition-all
                hover:w-[75%] hover:bg-pag-bg-success/50
              "
            >
              <ThumbsUp size={32} strokeWidth={1.33} className="fill-pag-icon-success text-pag-border-primary" />
            </div>
            <div className="h-full w-[2px] bg-pag-bg-secondary" />
            <div
              className="
                flex h-full w-[calc((100%-2px)/2)] items-center justify-center rounded-tr-pag-main bg-pag-bg-error/20
                transition-all
                hover:w-[75%] hover:bg-pag-bg-error/50
              "
            >
              <ThumbsDown size={32} strokeWidth={1.33} className="fill-pag-icon-error text-pag-border-primary" />
            </div>
          </div>
        </div>

        {owned && (
          <div
            className={`
              absolute bottom-[0] left-[0] flex items-end rounded-tr-pag-sm bg-pag-bg-secondary pt-pag-spacing-50
              pr-pag-spacing-50
              max-sm:pb-pag-spacing-25 max-sm:pl-pag-spacing-25
            `}
          >
            <PackageCheck size={16} strokeWidth={1} className="text-pag-icon-primary-hover" />
          </div>
        )}
      </div>
      <div
        className="
          flex flex-col gap-pag-spacing-50 p-pag-spacing-100
          sm:gap-pag-spacing-150
        "
      >
        <span className="truncate text-center text-pag-xl text-pag-text-primary">{name}</span>
        <div
          className="
            flex flex-col gap-pag-spacing-100
            sm:gap-pag-spacing-150
          "
        >
          <div className="flex items-center justify-between">
            <SessionBadge type={sessionType} />
            <PlayerCountBadge value={maxPlayers} />
          </div>
          <div className="flex items-center justify-between">
            <AvatarGroup items={likedBy} />
            {dislikedBy.length > 0 && <Avatar type={"negative-count"} value={-dislikedBy.length} />}
          </div>
        </div>
      </div>
    </div>
  );
}
