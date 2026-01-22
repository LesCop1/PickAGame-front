import { cn } from "../../utils/cn";

type Props = {
  text: string;
  logo?: string;
  color?: string;
  href?: string;
};

export default function Button({ text, logo, color = "bg-pag-bg-primary", href = "#" }: Props) {
  return (
    <a
      className={cn(
        color,
        `
      flex w-full items-center justify-center gap-pag-spacing-100 space-x-pag-sizing-25 rounded-pag-sm p-pag-spacing-100 text-pag-xl
      text-pag-text-primary
    `,
      )}
      href={href}
    >
      {logo && <img src={logo} alt="Logo" className="h-pag-sizing-400 w-auto" />}
      {text}
    </a>
  );
}
