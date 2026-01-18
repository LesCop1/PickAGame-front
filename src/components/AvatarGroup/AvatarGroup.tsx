import Avatar, { type Props as AvatarProps } from "../Avatar/Avatar";

interface Props {
  items: Omit<AvatarProps, "type" | "size">[];
}

export default function AvatarGroup({ items }: Props) {
  const remainingCount = items.length - 4;

  return (
    <div className="flex -space-x-pag-spacing-150">
      {items.slice(0, 4).map((item, i) => (
        <Avatar key={i} {...item} type={"user"} />
      ))}
      {items.length > 4 && <Avatar key="remaining" value={`+${remainingCount}`} type={"positive-count"} />}
    </div>
  );
}
