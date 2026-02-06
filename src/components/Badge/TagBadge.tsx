import Badge from "./Badge";

type Props = {
  value: string;
};

export default function TagBadge({ value }: Props) {
  return <Badge className="border-pag-border-tag bg-pag-bg-secondary">{value}</Badge>;
}
