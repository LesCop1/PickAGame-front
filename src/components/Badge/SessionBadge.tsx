import { cva, type VariantProps } from "class-variance-authority";
import Badge from "./Badge";

const badgeVariant = cva(
  "",
  {
    variants: {
      type: {
        sessionShort: "border-pag-border-tag-short bg-pag-bg-tag-short text-pag-text-tag-short",
        sessionLong: "border-pag-border-tag-long bg-pag-bg-tag-long text-pag-text-tag-long",
        sessionFlex: "border-pag-border-tag-flex bg-pag-bg-tag-flex text-pag-text-tag-flex",
      },
    },
  },
);

interface Props extends VariantProps<typeof badgeVariant> {
  type: "sessionShort" | "sessionLong" | "sessionFlex";
}

const sessionMapping: Record<Props["type"], string> = {
  sessionShort: "Short",
  sessionLong: "Long",
  sessionFlex: "Flex",
};

export function SessionBadge({ type }: Props) {
  return (
    <Badge className={badgeVariant({ type })}>
        {sessionMapping[type]} session
    </Badge>
  );
}
