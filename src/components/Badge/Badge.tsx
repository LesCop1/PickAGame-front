import { cn } from "../../utils/cn";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className }: Props) {
  return (
    <div
      className={cn(
        `
          flex w-fit items-center rounded-pag-main border px-pag-spacing-75 py-pag-spacing-50 font-family-pag-default
          text-pag-sm
        `,
        className,
      )}
    >
      {children}
    </div>
  );
}
