import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../utils/cn";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  `flex w-fit items-center justify-center rounded-pag-sm transition-colors`,
  {
    variants: {
      variant: {
        default: `
          bg-pag-bg-secondary text-pag-xl
          hover:bg-pag-bg-secondary-hovered hover:text-pag-text-muted
        `,
        ghost: "hover:text-pag-text-muted",
        accent: `
          bg-pag-bg-accent
          hover:bg-pag-bg-accent-hovered
        `,
        destructive: `
          bg-pag-bg-error
          hover:bg-pag-bg-error-hovered
        `,
        success: `
          bg-pag-bg-success
          hover:bg-pag-bg-success-hovered
        `,
      },
      size: {
        sm: 'p-pag-spacing-100',
        md: 'gap-pag-spacing-200 p-pag-spacing-200'
      }
    },
  },
);

export default function Button({
  asChild,
  variant = "default",
  size = "md",
  className,
  ...props
}: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
