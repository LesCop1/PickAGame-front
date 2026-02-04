import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../utils/cn";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  `
    flex w-fit items-center gap-pag-spacing-200 rounded-pag-sm p-pag-spacing-200
    hover:text-pag-text-muted
  `,
  {
    variants: {
      variant: {
        default: "bg-pag-bg-secondary text-pag-xl",
        ghost: "",
      },
    },
  },
);

export default function Button({
  asChild,
  variant = "default",
  className,
  ...props
}: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant }), className)} {...props} />;
}
