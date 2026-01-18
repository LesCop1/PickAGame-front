import Badge from './Badge';
import { UsersRound } from 'lucide-react';

type Props = {
    value: number;
}

export default function PlayerCountBadge({ value }: Props) {
  return (
    <Badge className="
      gap-pag-spacing-50 border-pag-border-tag-playercount bg-pag-bg-tag-playercount text-pag-text-tag-playercount
    ">
        <UsersRound strokeWidth={1} size={12} />
        <span>{value} players</span>
    </Badge>
  )
}