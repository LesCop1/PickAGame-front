import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      color: [
        "pag-text-primary",
        "pag-text-muted",
        "pag-text-success",
        "pag-text-error",
        "pag-text-tag-short",
        "pag-text-tag-playercount",
        "pag-text-tag-downvotecount",
        "pag-text-tag-long",
        "pag-text-tag-flex",
        "pag-text-tag-interested",
        "pag-text-tag-not-interested",
      ],
      text: ["pag-xs", "pag-sm", "pag-md", "pag-lg", "pag-xl", "pag-2xl"],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
