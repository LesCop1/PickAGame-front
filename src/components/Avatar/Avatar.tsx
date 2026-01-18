import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

// TODO
// We might want to add a tooltip later on

const avatarVariants = cva(
  "flex items-center justify-center rounded-pag-full border border-pag-border-primary text-pag-sm",
  {
    variants: {
      size: {
        sm: "size-pag-sizing-300",
        md: "size-pag-sizing-400",
      },
      type: {
        user: "",
        "positive-count": "bg-pag-bg-secondary text-pag-text-primary",
        "negative-count":
          "border-pag-border-tag-downvotecount bg-pag-bg-tag-downvotecount text-pag-text-tag-downvotecount",
      },
    },
    defaultVariants: {
      size: "md",
      type: "user",
    },
  },
);

export interface Props extends VariantProps<typeof avatarVariants> {
  src?: string;
  value?: number | string;
}

export default function Avatar({ src, value, type, size }: Props) {
  if (type === "user" && src) {
    return <img src={src} alt={String(value)} className={avatarVariants({ size, type })} />;
  }

  return <div className={cn(avatarVariants({ size, type }))}>{value}</div>;
}
