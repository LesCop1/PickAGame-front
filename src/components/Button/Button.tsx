import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../utils/cn";

export default function Button({
  asChild,
  className,
  ...props
}: React.ComponentProps<"button"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(
        `
          flex w-full items-center justify-center gap-pag-spacing-100 space-x-pag-sizing-25 rounded-pag-sm
          bg-pag-bg-secondary p-pag-spacing-100 text-pag-xl
        `,
        className,
      )}
      {...props}
    />
  );
}
