import { Dialog as PrimitiveDialog } from "radix-ui";
import { cn } from "../../utils/cn";

export default function Dialog({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <PrimitiveDialog.Portal>
      <PrimitiveDialog.Content
        className={cn(
          `
            fixed top-1/2 left-1/2 flex w-[450px] -translate-1/2 flex-col gap-pag-sizing-200 rounded-pag-main border
            border-pag-border-primary bg-pag-bg-tertiary p-pag-sizing-300 pt-pag-sizing-200 drop-shadow-2xl
          `,
          className,
        )}
      >
        {children}
      </PrimitiveDialog.Content>
    </PrimitiveDialog.Portal>
  );
}

export const DialogRoot = PrimitiveDialog.Root;
export const DialogTrigger = PrimitiveDialog.Trigger;
export const DialogTitle = PrimitiveDialog.Title;
export const DialogDescription = PrimitiveDialog.Description;
export const DialogClose = PrimitiveDialog.Close;
